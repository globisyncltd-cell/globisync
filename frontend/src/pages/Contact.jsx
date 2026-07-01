import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { CheckCircle2, Loader2, MapPin, Mail, Phone, Calendar as CalIcon, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TIME_SLOTS = [
  "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];

const tomorrowStr = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
};
const maxStr = () => {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().slice(0, 10);
};

// Minimal message form — name, email, one qualifying question
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill your name, email and one line about your goal.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setDone(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Received. We'll reply within one working day.");
    } catch {
      toast.error("Something went wrong — try WhatsApp instead.");
    } finally { setLoading(false); }
  };

  if (done) {
    return (
      <div data-testid="contact-success" className="p-8 border border-ink bg-secondary/50 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-amber" />
        <h3 className="mt-3 font-serif text-2xl font-bold text-ink">Thank you.</h3>
        <p className="mt-2 text-muted2">A senior operator will reply within one working day.</p>
        <Button data-testid="contact-send-another-btn" onClick={() => setDone(false)} className="mt-4 rounded-none bg-ink text-white border border-ink">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="contact-form" className="space-y-4">
      <div>
        <Label htmlFor="c-name">Your name</Label>
        <Input id="c-name" data-testid="contact-name-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" data-testid="contact-email-input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="c-msg">What's your #1 growth challenge right now?</Label>
        <Textarea id="c-msg" data-testid="contact-message-input" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="mt-1 rounded-none" placeholder="One or two lines is plenty…" />
      </div>
      <Button
        type="submit"
        disabled={loading}
        data-testid="contact-submit-btn"
        className="w-full sm:w-auto h-12 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
      >
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : "Send →"}
      </Button>
    </form>
  );
}

function BookingForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    preferred_date: "", preferred_time: "",
    timezone_name: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.preferred_date || !form.preferred_time) {
      toast.error("Name, email, date and time are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/bookings`, form);
      setDone(true);
      toast.success("Booking received. We'll confirm the calendar invite shortly.");
    } catch { toast.error("Booking failed. Please WhatsApp us instead."); }
    finally { setLoading(false); }
  };

  if (done) {
    return (
      <div data-testid="booking-success" className="p-8 border border-ink bg-secondary/50 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-amber" />
        <h3 className="mt-3 font-serif text-2xl font-bold text-ink">Booked.</h3>
        <p className="mt-2 text-muted2">
          Confirmation and calendar invite for <strong className="text-ink">{form.preferred_date} at {form.preferred_time} ({form.timezone_name})</strong> coming from {SITE.email}.
        </p>
        <Button data-testid="booking-reset-btn" onClick={() => setDone(false)} className="mt-4 rounded-none bg-ink text-white border border-ink">
          Book another slot
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="booking-form" className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="b-name">Your name *</Label>
          <Input id="b-name" data-testid="booking-name-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1 rounded-none" />
        </div>
        <div>
          <Label htmlFor="b-email">Email *</Label>
          <Input id="b-email" data-testid="booking-email-input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-1 rounded-none" />
        </div>
        <div>
          <Label htmlFor="b-company">Brand / company</Label>
          <Input id="b-company" data-testid="booking-company-input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 rounded-none" />
        </div>
        <div>
          <Label htmlFor="b-phone">Phone / WhatsApp</Label>
          <Input id="b-phone" data-testid="booking-phone-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 rounded-none" />
        </div>
        <div>
          <Label htmlFor="b-date" className="flex items-center gap-1"><CalIcon className="h-3 w-3" /> Preferred date *</Label>
          <Input
            id="b-date"
            data-testid="booking-date-input"
            type="date"
            min={tomorrowStr()}
            max={maxStr()}
            value={form.preferred_date}
            onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
            required
            className="mt-1 rounded-none"
          />
        </div>
        <div>
          <Label className="flex items-center gap-1"><Clock className="h-3 w-3" /> Preferred time *</Label>
          <Select value={form.preferred_time} onValueChange={(v) => setForm({ ...form, preferred_time: v })}>
            <SelectTrigger data-testid="booking-time-select" className="mt-1 rounded-none">
              <SelectValue placeholder="Pick a slot" />
            </SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((t) => (
                <SelectItem key={t} value={t} data-testid={`booking-time-opt-${t}`}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="b-notes">What's your #1 growth challenge? (optional)</Label>
        <Textarea id="b-notes" data-testid="booking-notes-input" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="mt-1 rounded-none" placeholder="One line is enough — helps us prepare." />
      </div>
      <div className="text-xs text-muted2">
        We'll confirm your slot and send a calendar invite within one working day. Times are read in your local timezone: <span className="font-mono">{form.timezone_name}</span>.
      </div>
      <Button
        type="submit"
        disabled={loading}
        data-testid="booking-submit-btn"
        className="w-full sm:w-auto h-12 rounded-none bg-amber text-ink hover:bg-ink hover:text-white border border-ink font-semibold"
      >
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking…</> : `${SITE.cta} →`}
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Book a Discovery Call · GlobiSync UK Ecommerce Agency"
        description="Book a discovery call with GlobiSync — a Birmingham-based UK ecommerce agency. One conversation, one clear next step."
        path="/contact"
      />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Contact ]</div>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
              Let's talk<br />about your growth.
            </h1>
            <p className="mt-6 text-muted2 text-lg">
              Book a discovery call, or send us a note — we reply within one working day from our Birmingham desk.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-amber flex-none" />
                <div>
                  <div className="font-semibold text-ink">GlobiSync HQ</div>
                  <div className="text-muted2">{SITE.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-amber flex-none" />
                <a data-testid="contact-email-link" href={`mailto:${SITE.email}`} className="text-ink hover:text-amber">{SITE.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-amber flex-none" />
                <a data-testid="contact-phone-link" href={`tel:${SITE.phone.replace(/\s+/g,'')}`} className="text-ink hover:text-amber">{SITE.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <FaWhatsapp className="h-4 w-4 mt-1 text-amber flex-none" />
                <a data-testid="contact-whatsapp-link" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="text-ink hover:text-amber">Chat on WhatsApp</a>
              </div>
            </div>

            <div className="mt-10 p-6 border-l-2 border-amber bg-secondary/50">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Response promise</div>
              <p className="mt-2 text-ink font-medium">
                One working day. From a real operator. In writing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-ink bg-white p-6 md:p-8">
              <Tabs defaultValue="book">
                <TabsList data-testid="contact-tabs" className="grid grid-cols-2 rounded-none bg-secondary p-1">
                  <TabsTrigger value="book" data-testid="contact-tab-book" className="rounded-none data-[state=active]:bg-ink data-[state=active]:text-white">
                    {SITE.cta}
                  </TabsTrigger>
                  <TabsTrigger value="msg" data-testid="contact-tab-msg" className="rounded-none data-[state=active]:bg-ink data-[state=active]:text-white">
                    Send a message
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="book" className="mt-6">
                  <BookingForm />
                </TabsContent>
                <TabsContent value="msg" className="mt-6">
                  <ContactForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
