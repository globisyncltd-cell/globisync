"""GlobiSync backend regression tests — iteration 2.

Covers: health, sitemap (dynamic /api/sitemap.xml + static /sitemap.xml),
robots (dynamic + static), contact submission + persistence,
booking submission + persistence, validation errors.
"""
import os
import re
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://globisync-new-site.preview.emergentagent.com").rstrip("/")

# ---------- Static route list expected in sitemap ----------
STATIC_ROUTES = [
    "/", "/services", "/international-expansion", "/fee-calculator",
    "/about", "/team", "/blog", "/contact",
]

# ---------- Fixtures ----------
@pytest.fixture(scope="session")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health(self, api):
        r = api.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"
        assert "email_configured" in data


# ---------- SEO: sitemap + robots ----------
class TestSEO:
    def test_dynamic_sitemap(self, api):
        r = api.get(f"{BASE_URL}/api/sitemap.xml", timeout=15)
        assert r.status_code == 200
        assert "xml" in r.headers.get("content-type", "").lower()
        body = r.text
        assert "<urlset" in body
        for route in STATIC_ROUTES:
            # match <loc>...{route}</loc> — root '/' will match ".com/</loc>"
            pattern = re.escape(route) + "</loc>"
            assert re.search(pattern, body), f"missing route {route} in sitemap"
        # ensure at least 35 blog urls present
        blog_urls = re.findall(r"/blog/[a-z0-9-]+</loc>", body)
        assert len(blog_urls) >= 35, f"expected >=35 blog urls, got {len(blog_urls)}"

    def test_dynamic_robots(self, api):
        r = api.get(f"{BASE_URL}/api/robots.txt", timeout=15)
        assert r.status_code == 200
        assert "text/plain" in r.headers.get("content-type", "").lower()
        body = r.text
        assert "Allow:" in body
        assert "Sitemap:" in body

    def test_static_sitemap(self, api):
        r = api.get(f"{BASE_URL}/sitemap.xml", timeout=15)
        assert r.status_code == 200
        assert "<urlset" in r.text or "<sitemap" in r.text

    def test_static_robots(self, api):
        r = api.get(f"{BASE_URL}/robots.txt", timeout=15)
        assert r.status_code == 200
        assert "User-agent" in r.text or "user-agent" in r.text.lower()


# ---------- Contact ----------
class TestContact:
    def test_contact_minimal_persistence(self, api):
        payload = {
            "name": "TEST_Contact_User",
            "email": "test_contact@example.com",
            "message": "Growth challenge: need help scaling Amazon UK.",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)

        # verify persistence via list
        r2 = api.get(f"{BASE_URL}/api/contact", timeout=15)
        assert r2.status_code == 200
        ids = [d["id"] for d in r2.json()]
        assert data["id"] in ids

    def test_contact_validation(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={"name": "x"}, timeout=15)
        assert r.status_code == 422


# ---------- Bookings ----------
class TestBookings:
    def test_booking_persistence(self, api):
        payload = {
            "name": "TEST_Booking_User",
            "email": "test_booking@example.com",
            "preferred_date": "2026-02-14",
            "preferred_time": "10:00",
        }
        r = api.post(f"{BASE_URL}/api/bookings", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["preferred_date"] == payload["preferred_date"]
        assert data["preferred_time"] == payload["preferred_time"]
        assert "id" in data

        r2 = api.get(f"{BASE_URL}/api/bookings", timeout=15)
        assert r2.status_code == 200
        ids = [d["id"] for d in r2.json()]
        assert data["id"] in ids

    def test_booking_validation(self, api):
        r = api.post(f"{BASE_URL}/api/bookings", json={"name": "x", "email": "a@b.co"}, timeout=15)
        assert r.status_code == 422
