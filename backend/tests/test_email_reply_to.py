"""
Backend tests for GlobiSync email reply_to + template fixes (iteration 11).
Verifies:
 - POST /api/bookings sends TWO emails (admin + submitter) with reply_to
 - Booking submitter subject uses EM DASH ('—'), not middle dot ('·')
 - POST /api/careers/apply sends TWO emails (admin + applicant)
 - POST /api/contact sends TWO emails (admin + submitter) via non-fee-calc path
 - server.py source has no 'growth@globisync', no 'A senior operator',
   no 'Reply to this email', and reply_to is wired into _send_email_async
"""
import io
import os
import re
import time
import uuid
from pathlib import Path

import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/') or 'https://globisync-new-site.preview.emergentagent.com'
API = f"{BASE_URL}/api"

BACKEND_LOG = "/var/log/supervisor/backend.out.log"
BACKEND_ERR = "/var/log/supervisor/backend.err.log"
SERVER_PY = Path("/app/backend/server.py")


# ---------- Helpers ----------
def _read_recent_log(seconds_back: int = 60) -> str:
    """Read the tail of backend logs (both stdout+stderr)."""
    out = ""
    for path in (BACKEND_LOG, BACKEND_ERR):
        if os.path.exists(path):
            try:
                with open(path, "rb") as f:
                    f.seek(0, 2)
                    size = f.tell()
                    f.seek(max(0, size - 80_000))
                    out += f.read().decode(errors="ignore")
            except Exception:
                pass
    return out


def _wait_for_log(needle: str, timeout: float = 15.0) -> bool:
    """Poll backend log for a substring."""
    deadline = time.time() + timeout
    while time.time() < deadline:
        if needle in _read_recent_log():
            return True
        time.sleep(0.5)
    return False


# ---------- Static source checks ----------
class TestSourceCode:
    def test_source_has_no_growth_email(self):
        content = SERVER_PY.read_text()
        assert "growth@globisync.com" not in content, "server.py still references growth@globisync.com"

    def test_source_has_no_senior_operator(self):
        content = SERVER_PY.read_text()
        assert "A senior operator" not in content, "server.py still says 'A senior operator'"
        # 'senior expert' should appear at least once instead
        assert "senior expert" in content

    def test_source_has_no_reply_to_this_email_phrase(self):
        content = SERVER_PY.read_text()
        assert "Reply to this email" not in content

    def test_send_email_wires_reply_to(self):
        content = SERVER_PY.read_text()
        assert 'REPLY_TO_EMAIL' in content
        assert 'params["reply_to"] = REPLY_TO_EMAIL' in content or \
               "params['reply_to'] = REPLY_TO_EMAIL" in content or \
               '"reply_to": REPLY_TO_EMAIL' in content

    def test_booking_confirmation_html_uses_hello_email(self):
        content = SERVER_PY.read_text()
        # extract _booking_confirmation_html body
        m = re.search(r"def _booking_confirmation_html.*?(?=\ndef |\Z)", content, re.DOTALL)
        assert m, "Could not find _booking_confirmation_html"
        body = m.group(0)
        assert "Email us at" in body, "Booking confirmation should say 'Email us at'"
        assert "hello@globisync.com" in body
        assert "Reply to this email" not in body

    def test_booking_subject_uses_em_dash(self):
        content = SERVER_PY.read_text()
        # Subject line for booking confirmation
        assert 'subject="Your discovery-call request — GlobiSync"' in content, \
            "Booking submitter subject must use EM DASH (—)"
        assert 'subject="Your discovery-call request · GlobiSync"' not in content


# ---------- Health ----------
class TestHealth:
    def test_health_ok_and_email_configured(self):
        r = requests.get(f"{API}/health", timeout=10)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("email_configured") is True, "RESEND_API_KEY not configured on server"


# ---------- Live endpoint tests ----------
class TestBookingsEmail:
    def test_booking_sends_two_emails_with_correct_subject(self):
        unique_email = f"verify-test-{uuid.uuid4().hex[:8]}@example.com"
        unique_name = f"TEST Booking {uuid.uuid4().hex[:6]}"
        payload = {
            "name": unique_name,
            "email": unique_email,
            "company": "TEST Co",
            "phone": "+441234567890",
            "preferred_date": "2026-02-15",
            "preferred_time": "14:00",
            "timezone_name": "UTC",
            "marketplace": "amazon",
            "notes": "TEST booking email verification",
        }
        r = requests.post(f"{API}/bookings", json=payload, timeout=15)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        body = r.json()
        assert body["email"] == unique_email
        assert body["name"] == unique_name
        assert "id" in body

        # Wait for both email log lines
        admin_needle = f"Email sent to=globisyncltd@gmail.com subject='New discovery-call booking from {unique_name}"
        submitter_needle = f"Email sent to={unique_email} subject='Your discovery-call request — GlobiSync'"

        assert _wait_for_log(admin_needle, timeout=15), \
            f"Admin email log line not found. Expected substring: {admin_needle}"
        assert _wait_for_log(submitter_needle, timeout=15), \
            f"Submitter email log line not found. Expected substring: {submitter_needle}"

        # Validate resend_id (uuid) present for BOTH lines
        log = _read_recent_log()
        admin_line = [ln for ln in log.splitlines() if admin_needle in ln]
        submitter_line = [ln for ln in log.splitlines() if submitter_needle in ln]
        assert admin_line, "no admin line"
        assert submitter_line, "no submitter line"
        # last occurrence
        for ln in (admin_line[-1], submitter_line[-1]):
            m = re.search(r"resend_id=([A-Za-z0-9\-]+)", ln)
            assert m, f"resend_id missing in log line: {ln}"
            rid = m.group(1)
            # Must not be 'None'/'null'
            assert rid not in ("None", "null", ""), f"resend_id is empty in: {ln}"
            # Prefer UUID-ish shape
            assert len(rid) >= 8


class TestCareersEmail:
    def test_career_apply_sends_two_emails(self):
        unique_email = f"careers-test-{uuid.uuid4().hex[:8]}@example.com"
        unique_name = f"TEST Applicant {uuid.uuid4().hex[:6]}"
        # tiny dummy PDF
        pdf_bytes = b"%PDF-1.4\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF"
        files = {"cv": ("test-cv.pdf", io.BytesIO(pdf_bytes), "application/pdf")}
        data = {
            "name": unique_name,
            "email": unique_email,
            "phone": "+441234567890",
            "position": "TEST Position",
            "linkedin": "https://linkedin.com/in/test",
            "cover_letter": "TEST cover letter for email verification",
        }
        r = requests.post(f"{API}/careers/apply", data=data, files=files, timeout=20)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        body = r.json()
        assert body["email"] == unique_email

        admin_needle = f"Email sent to=globisyncltd@gmail.com subject='New job application: TEST Position — {unique_name}"
        applicant_needle = f"Email sent to={unique_email} subject='Application received — GlobiSync'"

        assert _wait_for_log(admin_needle, timeout=15), \
            f"Careers admin log line not found: {admin_needle}"
        assert _wait_for_log(applicant_needle, timeout=15), \
            f"Careers applicant log line not found: {applicant_needle}"

        log = _read_recent_log()
        for needle in (admin_needle, applicant_needle):
            lines = [ln for ln in log.splitlines() if needle in ln]
            assert lines, f"no line for: {needle}"
            m = re.search(r"resend_id=([A-Za-z0-9\-]+)", lines[-1])
            assert m and m.group(1) not in ("None", "null", ""), f"resend_id missing: {lines[-1]}"


class TestContactEmail:
    def test_contact_standard_sends_two_emails(self):
        unique_email = f"contact-test-{uuid.uuid4().hex[:8]}@example.com"
        unique_name = f"TEST Contact {uuid.uuid4().hex[:6]}"
        payload = {
            "name": unique_name,
            "email": unique_email,
            "company": "TEST Corp",
            "phone": "+441234567890",
            "marketplace": "amazon",
            "message": "Standard TEST contact enquiry — please ignore.",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        assert r.json()["email"] == unique_email

        admin_needle = f"Email sent to=globisyncltd@gmail.com subject='New enquiry from {unique_name} — GlobiSync'"
        submitter_needle = f"Email sent to={unique_email} subject='Thanks — we've received your message · GlobiSync'"

        assert _wait_for_log(admin_needle, timeout=15), \
            f"Contact admin log line not found: {admin_needle}"
        assert _wait_for_log(submitter_needle, timeout=15), \
            f"Contact submitter log line not found: {submitter_needle}"

        log = _read_recent_log()
        for needle in (admin_needle, submitter_needle):
            lines = [ln for ln in log.splitlines() if needle in ln]
            assert lines, f"no line for: {needle}"
            m = re.search(r"resend_id=([A-Za-z0-9\-]+)", lines[-1])
            assert m and m.group(1) not in ("None", "null", ""), f"resend_id missing: {lines[-1]}"
