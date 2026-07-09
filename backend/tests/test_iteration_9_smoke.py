"""Iteration 9 smoke tests — sitemap contains new category overview URLs
and 16 new 2026 blog posts. Also re-verifies POST /api/contact + POST
/api/careers/apply happy paths (kept minimal — the deeper suite lives
in backend_test.py + test_careers.py)."""
import io
import os
import re
import time
import pytest
import requests

BASE_URL = os.environ.get(
    "REACT_APP_BACKEND_URL",
    "https://globisync-new-site.preview.emergentagent.com",
).rstrip("/")

CATEGORY_OVERVIEW_SLUGS = ["ecommerce", "social-digital", "cross-border", "retail"]

NEW_BLOG_POSTS_2026 = [
    "ai-agents-ecommerce-2026",
    "amazon-rufus-changing-discovery",
    "voice-commerce-uk-2026",
]

MINIMAL_PDF = (
    b"%PDF-1.4\n"
    b"1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n"
    b"2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n"
    b"3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 300 144]/Contents 4 0 R>>endobj\n"
    b"4 0 obj<</Length 44>>stream\nBT /F1 12 Tf 20 100 Td (Test CV) Tj ET\nendstream endobj\n"
    b"xref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000053 00000 n\n"
    b"0000000101 00000 n\n0000000173 00000 n\n"
    b"trailer<</Size 5/Root 1 0 R>>\nstartxref\n265\n%%EOF\n"
)


@pytest.fixture(scope="module")
def api():
    return requests.Session()


@pytest.fixture(scope="module")
def sitemap_body(api):
    r = api.get(f"{BASE_URL}/api/sitemap.xml", timeout=15)
    assert r.status_code == 200
    return r.text


def test_sitemap_has_100_plus_urls(sitemap_body):
    locs = re.findall(r"<loc>[^<]+</loc>", sitemap_body)
    assert len(locs) >= 100, f"expected 100+ URLs, got {len(locs)}"


@pytest.mark.parametrize("slug", CATEGORY_OVERVIEW_SLUGS)
def test_sitemap_has_category_overview(sitemap_body, slug):
    assert re.search(rf"/{re.escape(slug)}</loc>", sitemap_body), (
        f"missing category overview /{slug} in sitemap"
    )


@pytest.mark.parametrize("slug", NEW_BLOG_POSTS_2026)
def test_sitemap_has_new_2026_blog(sitemap_body, slug):
    assert re.search(rf"/blog/{re.escape(slug)}</loc>", sitemap_body), (
        f"missing new 2026 blog post /blog/{slug} in sitemap"
    )


def test_contact_post_smoke(api):
    payload = {
        "name": "TEST_iter9_contact",
        "email": "test_iter9_contact@example.com",
        "message": "Iteration 9 smoke test — verifying contact endpoint.",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    assert r.json().get("email") == payload["email"]
    time.sleep(2.2)  # avoid resend rate limit


def test_careers_apply_smoke(api):
    files = {"cv": ("iter9_cv.pdf", MINIMAL_PDF, "application/pdf")}
    data = {
        "name": "TEST_iter9_applicant",
        "email": "test_iter9_apply@example.com",
        "position": "Senior Amazon Account Manager",
    }
    r = api.post(f"{BASE_URL}/api/careers/apply", files=files, data=data, timeout=30)
    assert r.status_code == 200, r.text
    assert r.json().get("cv_filename") == "iter9_cv.pdf"
    time.sleep(2.2)
