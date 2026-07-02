"""GlobiSync careers/apply endpoint tests — iteration 7.

Covers: multipart POST /api/careers/apply happy path + all validation
branches (missing cv, wrong content-type, empty file, oversized file),
plus sitemap contains /careers.
"""
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

APPLY_URL = f"{BASE_URL}/api/careers/apply"

# Minimal valid PDF byte string (real PDF header + trailer, ~350 bytes)
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
    s = requests.Session()
    yield s
    s.close()


@pytest.fixture(autouse=True)
def rate_limit_guard():
    # Space POSTs to avoid Resend 10/s rate limit
    yield
    time.sleep(2.2)


# ---------- Health regression ----------
def test_health(api):
    r = api.get(f"{BASE_URL}/api/health", timeout=15)
    assert r.status_code == 200
    j = r.json()
    assert j["status"] == "ok"
    assert j["email_configured"] is True


# ---------- Sitemap contains /careers ----------
def test_sitemap_contains_careers(api):
    r = api.get(f"{BASE_URL}/api/sitemap.xml", timeout=15)
    assert r.status_code == 200
    matches = re.findall(r"/careers</loc>", r.text)
    assert len(matches) == 1, f"expected exactly 1 /careers URL in sitemap, got {len(matches)}"


# ---------- Careers apply — happy path ----------
def test_apply_happy_path(api):
    files = {"cv": ("test_cv.pdf", MINIMAL_PDF, "application/pdf")}
    data = {
        "name": "TEST_Applicant_iter7",
        "email": "test-apply-iter7@example.com",
        "phone": "+44 7000 000000",
        "position": "Senior Amazon Account Manager",
        "linkedin": "https://linkedin.com/in/test",
        "cover_letter": "I would love to join.",
    }
    r = api.post(APPLY_URL, files=files, data=data, timeout=30)
    assert r.status_code == 200, r.text
    j = r.json()
    assert "id" in j and isinstance(j["id"], str)
    assert j["name"] == data["name"]
    assert j["position"] == data["position"]
    assert j["cv_filename"] == "test_cv.pdf"


# ---------- Missing CV -> 422 ----------
def test_apply_missing_cv(api):
    data = {
        "name": "TEST_NoCV",
        "email": "nocv@example.com",
        "position": "Senior Amazon Account Manager",
    }
    r = api.post(APPLY_URL, data=data, timeout=15)
    assert r.status_code == 422, r.text


# ---------- Invalid content-type -> 400 ----------
def test_apply_invalid_content_type(api):
    files = {"cv": ("cv.txt", b"just plain text resume", "text/plain")}
    data = {
        "name": "TEST_BadType",
        "email": "badtype@example.com",
        "position": "Senior Amazon Account Manager",
    }
    r = api.post(APPLY_URL, files=files, data=data, timeout=15)
    assert r.status_code == 400, r.text
    detail = r.json().get("detail", "").lower()
    assert "pdf" in detail or "word" in detail


# ---------- Empty CV file -> 400 ----------
def test_apply_empty_cv(api):
    files = {"cv": ("empty.pdf", b"", "application/pdf")}
    data = {
        "name": "TEST_Empty",
        "email": "empty@example.com",
        "position": "Senior Amazon Account Manager",
    }
    r = api.post(APPLY_URL, files=files, data=data, timeout=15)
    assert r.status_code == 400, r.text
    assert "empty" in r.json().get("detail", "").lower()


# ---------- Oversized CV -> 400 ----------
def test_apply_oversized_cv(api):
    # 9 MB fake pdf body (header + padding)
    big = b"%PDF-1.4\n" + b"0" * (9 * 1024 * 1024)
    files = {"cv": ("big.pdf", big, "application/pdf")}
    data = {
        "name": "TEST_Big",
        "email": "big@example.com",
        "position": "Senior Amazon Account Manager",
    }
    r = api.post(APPLY_URL, files=files, data=data, timeout=30)
    assert r.status_code == 400, r.text
    detail = r.json().get("detail", "").lower()
    assert "8" in detail or "mb" in detail or "limit" in detail
