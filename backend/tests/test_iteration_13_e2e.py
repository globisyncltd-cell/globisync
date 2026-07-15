"""
Iteration 13 backend verification for GlobiSync booking-confirmation fix.

Covers:
 - Contact.jsx no longer references web3forms or access_key
 - POST /api/bookings sends TWO 'Email sent to=' log lines with valid Resend UUIDs
   (admin globisyncltd@gmail.com + submitter) and subject uses EM DASH.
 - POST /api/contact sends TWO 'Email sent to=' log lines
 - Booking / contact rows persisted in Mongo (via GET listing endpoints if present,
   else via presence assertion on POST response echo)
 - server.py _booking_confirmation_html contains required warmer copy phrases
   and does NOT contain deprecated phrases
 - server.py _thank_you_html contains required copy and does NOT contain deprecated
 - Backend GET /api/sitemap.xml returns 200 with 103 <url> entries
 - Public files: _redirects, vercel.json, sitemap.xml, robots.txt sanity
"""
import os
import re
import time
import uuid
from pathlib import Path

import pytest
import requests

BASE_URL = (os.environ.get("REACT_APP_BACKEND_URL") or "").rstrip("/")
assert BASE_URL, "REACT_APP_BACKEND_URL must be set"
API = f"{BASE_URL}/api"

REPO = Path("/app")
CONTACT_JSX = REPO / "frontend/src/pages/Contact.jsx"
SERVER_PY = REPO / "backend/server.py"
PUBLIC = REPO / "frontend/public"

BACKEND_LOGS = ["/var/log/supervisor/backend.out.log", "/var/log/supervisor/backend.err.log"]

UUID_RE = re.compile(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", re.I)


def _tail(seconds_back: int = 20, bytes_back: int = 120_000) -> str:
    buf = []
    for p in BACKEND_LOGS:
        if os.path.exists(p):
            with open(p, "rb") as f:
                f.seek(0, 2)
                size = f.tell()
                f.seek(max(0, size - bytes_back))
                buf.append(f.read().decode(errors="ignore"))
    return "\n".join(buf)


def _wait_for_emails(needle_admin: str, needle_submitter: str, timeout: float = 8.0):
    """Poll backend logs for 'Email sent to=' lines to both recipients."""
    deadline = time.time() + timeout
    while time.time() < deadline:
        log = _tail()
        if f"Email sent to={needle_admin}" in log and f"Email sent to={needle_submitter}" in log:
            return log
        time.sleep(0.5)
    return _tail()


# ---------- 1. Contact.jsx source hygiene ----------
class TestContactJsxSource:
    def test_no_web3forms_reference(self):
        src = CONTACT_JSX.read_text()
        assert "web3forms" not in src.lower()
        assert "access_key" not in src

    def test_uses_backend_url_for_both_forms(self):
        src = CONTACT_JSX.read_text()
        assert "REACT_APP_BACKEND_URL" in src
        # both endpoints wired
        assert "/api/contact" in src or "${API}/contact" in src or "`${API}/contact`" in src
        assert "/api/bookings" in src or "${API}/bookings" in src or "`${API}/bookings`" in src

    def test_response_promise_new_copy(self):
        src = CONTACT_JSX.read_text()
        assert "A real human" in src
        assert "not a bot" in src
        assert "reply within one working day" in src
        # deprecated short copy must be gone
        assert "One working day. From a real operator." not in src


# ---------- 2. server.py template hygiene ----------
class TestServerPyTemplates:
    def test_booking_confirmation_has_new_copy(self):
        src = SERVER_PY.read_text()
        # Locate _booking_confirmation_html function body
        m = re.search(r"def _booking_confirmation_html\(.*?\n(.*?)\ndef ", src, re.S)
        assert m, "_booking_confirmation_html function not found"
        body = m.group(1)
        assert "Simply reply to this email" in body
        assert "Lovely to hear from you" in body
        assert "One of our senior team will personally reach out" in body
        assert "A senior expert will send you a calendar invite" not in body
        assert "Email us at hello@globisync.com" not in body

    def test_thank_you_has_new_copy(self):
        src = SERVER_PY.read_text()
        m = re.search(r"def _thank_you_html\(.*?\n(.*?)\ndef ", src, re.S)
        assert m, "_thank_you_html function not found"
        body = m.group(1)
        assert "Lovely to hear from you" in body
        assert "One of our senior team will personally reply" in body
        assert "Feel free to reply to this email directly" in body
        assert "A senior expert from our Birmingham desk" not in body


# ---------- 3. Live booking submission ----------
class TestBookingsE2E:
    def test_post_booking_triggers_two_emails(self):
        uid = uuid.uuid4().hex[:8]
        submitter = f"e2e-booking-{uid}@example.com"
        # future date 7 days out
        from datetime import date, timedelta
        pref_date = (date.today() + timedelta(days=7)).isoformat()

        payload = {
            "name": "E2E Test",
            "email": submitter,
            "preferred_date": pref_date,
            "preferred_time": "11:00",
            "notes": "iteration 13 e2e",
        }
        t0 = time.time()
        r = requests.post(f"{API}/bookings", json=payload, timeout=15)
        assert r.status_code in (200, 201), f"status={r.status_code} body={r.text[:400]}"
        data = r.json()
        # Response echoes submission
        assert data.get("email") == submitter
        assert data.get("preferred_time") == "11:00"
        assert data.get("preferred_date") == pref_date

        log = _wait_for_emails("globisyncltd@gmail.com", submitter, timeout=8.0)
        assert f"Email sent to=globisyncltd@gmail.com" in log, "admin email log line missing"
        assert f"Email sent to={submitter}" in log, "submitter email log line missing"

        # Extract subject line for submitter — must use em dash
        # Look near the submitter Email-sent log line for the subject
        # Backend logs the subject before/around send; we grep for the exact copy
        assert "Your discovery-call request — GlobiSync" in log, "em-dash subject line missing"

        # Resend UUIDs present near both sends
        assert len(UUID_RE.findall(log)) >= 2, "expected at least two Resend UUIDs in recent log"

        # Elapsed sanity
        assert time.time() - t0 < 15


# ---------- 4. Live contact submission ----------
class TestContactE2E:
    def test_post_contact_triggers_two_emails(self):
        uid = uuid.uuid4().hex[:8]
        submitter = f"e2e-contact-{uid}@example.com"
        payload = {
            "name": "E2E Contact",
            "email": submitter,
            "message": "E2E test message iteration 13",
        }
        r = requests.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code in (200, 201), f"status={r.status_code} body={r.text[:400]}"
        data = r.json()
        assert data.get("email") == submitter

        log = _wait_for_emails("globisyncltd@gmail.com", submitter, timeout=8.0)
        assert f"Email sent to=globisyncltd@gmail.com" in log
        assert f"Email sent to={submitter}" in log


# ---------- 5. Sitemap ----------
class TestSitemap:
    def test_backend_sitemap_ok(self):
        r = requests.get(f"{API}/sitemap.xml", timeout=10)
        assert r.status_code == 200
        assert r.text.count("<url>") == 103

    def test_static_sitemap_ok(self):
        static = PUBLIC / "sitemap.xml"
        assert static.exists()
        assert static.read_text().count("<url>") == 103


# ---------- 6. Public config files ----------
class TestPublicConfig:
    def test_redirects_spa_fallback_last(self):
        p = PUBLIC / "_redirects"
        assert p.exists()
        lines = [ln for ln in p.read_text().splitlines() if ln.strip() and not ln.strip().startswith("#")]
        assert lines, "empty _redirects"
        last = lines[-1]
        # tolerant of whitespace
        parts = last.split()
        assert parts[0] == "/*" and parts[1] == "/index.html" and parts[2] == "200", f"last rule wrong: {last}"

    def test_redirects_has_legacy_301s(self):
        content = (PUBLIC / "_redirects").read_text()
        for legacy in ("/services", "/fee-calculator", "/international-expansion", "/markets", "/home"):
            assert legacy in content, f"missing legacy path {legacy} in _redirects"

    def test_vercel_json_exists(self):
        assert (PUBLIC / "vercel.json").exists()

    def test_robots_disallows(self):
        content = (PUBLIC / "robots.txt").read_text()
        assert "Disallow: /api/" in content
        assert "Disallow: /static/" in content
