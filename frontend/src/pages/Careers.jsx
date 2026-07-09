import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Briefcase, Upload, CheckCircle2, Loader2, ArrowUpRight, ChevronDown } from "lucide-react";
import SEO from "@/components/SEO";
import { JOBS } from "@/lib/jobs";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function ApplyDialog({ open, onOpenChange, job }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", cover_letter: "" });
  const [cv, setCv] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const reset = () => {
    setForm({ name: "", email: "", phone: "", linkedin: "", cover_letter: "" });
    setCv(null);
    setDone(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !cv) {
      toast.error("Name, email, and CV are required.");
      return;
    }
    if (cv.size > 8 * 1024 * 1024) {
      toast.error("CV must be under 8 MB.");
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("position", job.title);
      fd.append("linkedin", form.linkedin);
      fd.append("cover_letter", form.cover_letter);
      fd.append("cv", cv);
      await axios.post(`${API}/careers/apply`, fd, { headers: { "Content-Type": "multipart/form-data" } });
      setDone(true);
      toast.success("Application received — check your inbox.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) reset();
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-2xl rounded-none border-ink" data-testid="career-apply-dialog">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">
            {done ? "Application received" : `Apply · ${job?.title}`}
          </DialogTitle>
          <DialogDescription>
            {done ? "" : `${job?.team} · ${job?.type}`}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div data-testid="career-apply-success" className="text-center py-6">
            <CheckCircle2 className="mx-auto h-12 w-12 text-amber" />
            <div className="mt-4 text-2xl font-light text-ink">Thanks {form.name || "—"}.</div>
            <p className="mt-2 text-muted2 font-light">
              We've sent your CV to our hiring team and a confirmation to your inbox. Expect a response
              within 5 working days if there's a fit.
            </p>
            <DialogFooter className="mt-6 sm:justify-center">
              <Button
                data-testid="career-apply-close"
                onClick={() => { reset(); onOpenChange(false); }}
                className="rounded-none bg-ink text-white border border-ink hover:bg-amber hover:text-ink"
              >
                Close
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={submit} data-testid="career-apply-form" className="space-y-4 mt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="ca-name">Name *</Label>
                <Input id="ca-name" data-testid="career-apply-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 rounded-none" />
              </div>
              <div>
                <Label htmlFor="ca-email">Email *</Label>
                <Input id="ca-email" data-testid="career-apply-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 rounded-none" />
              </div>
              <div>
                <Label htmlFor="ca-phone">Phone</Label>
                <Input id="ca-phone" data-testid="career-apply-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 rounded-none" />
              </div>
              <div>
                <Label htmlFor="ca-linkedin">LinkedIn</Label>
                <Input id="ca-linkedin" data-testid="career-apply-linkedin" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className="mt-1 rounded-none" placeholder="linkedin.com/in/…" />
              </div>
            </div>
            <div>
              <Label htmlFor="ca-cv">CV (PDF or Word, max 8 MB) *</Label>
              <div className="mt-1 flex items-center gap-3">
                <label
                  htmlFor="ca-cv"
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-ink bg-white hover:bg-secondary/50 text-sm font-medium"
                >
                  <Upload className="h-4 w-4" /> Choose file
                </label>
                <span className="text-xs text-muted2 truncate max-w-[240px]">
                  {cv ? `${cv.name} · ${(cv.size / 1024).toFixed(0)} KB` : "No file selected"}
                </span>
                <input
                  id="ca-cv"
                  data-testid="career-apply-cv"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  onChange={(e) => setCv(e.target.files?.[0] || null)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="ca-cover">Short cover note</Label>
              <Textarea
                id="ca-cover"
                data-testid="career-apply-cover"
                rows={4}
                value={form.cover_letter}
                onChange={(e) => setForm({ ...form, cover_letter: e.target.value })}
                className="mt-1 rounded-none"
                placeholder="A few lines on why you're a fit…"
              />
            </div>
            <DialogFooter className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                data-testid="career-apply-submit"
                className="rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium"
              >
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : "Submit application →"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function JobRow({ job, onApply }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      data-testid={`career-card-${job.id}`}
      className="border-r border-b border-ink hover:bg-secondary/40 transition-colors"
    >
      <div className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.12em] sm:tracking-[0.15em] text-muted2">{job.team}</span>
            <span className="text-muted2">·</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.12em] sm:tracking-[0.15em] text-muted2">{job.type}</span>
          </div>
          <div className="mt-2 text-lg sm:text-xl md:text-2xl font-light text-ink leading-snug break-words">{job.title}</div>
          <p className="mt-2 text-sm text-muted2 leading-relaxed max-w-2xl font-light">{job.summary}</p>
        </div>
        <div className="flex flex-row md:flex-row gap-2 flex-none w-full md:w-auto">
          <button
            data-testid={`career-details-btn-${job.id}`}
            onClick={() => setExpanded((v) => !v)}
            className="flex-1 md:flex-none rounded-none bg-white text-ink border border-ink px-4 h-10 text-sm font-medium hover:bg-ink hover:text-white transition-colors inline-flex items-center justify-center gap-1"
          >
            {expanded ? "Hide details" : "Full description"}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
          <Button
            data-testid={`career-apply-btn-${job.id}`}
            onClick={() => onApply(job)}
            className="flex-1 md:flex-none rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium"
          >
            Apply <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      {expanded && (
        <div
          data-testid={`career-details-${job.id}`}
          className="border-t border-ink bg-white p-6 md:p-8 grid md:grid-cols-2 gap-8"
        >
          {job.about && (
            <div className="md:col-span-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ The role ]</div>
              <p className="mt-3 text-muted2 font-light leading-relaxed">{job.about}</p>
            </div>
          )}
          {job.responsibilities && (
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ What you'll own ]</div>
              <ul className="mt-3 space-y-2 text-sm text-ink font-light">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber flex-none">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {job.requirements && (
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ What we need ]</div>
              <ul className="mt-3 space-y-2 text-sm text-ink font-light">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber flex-none">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {job.niceToHave && job.niceToHave.length > 0 && (
            <div className="md:col-span-2">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Nice to have ]</div>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-muted2 font-light">
                {job.niceToHave.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber flex-none">◇</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {job.location && (
            <div className="md:col-span-2 pt-4 border-t border-border">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Location · {job.location}</div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function Careers() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const onApply = (job) => { setSelected(job); setOpen(true); };
  return (
    <>
      <SEO
        title="Careers · Join GlobiSync"
        description="Open roles at GlobiSync — a UK ecommerce growth partner. Join our team across marketplaces, performance marketing, and social media."
        path="/careers"
      />

      <section className="bg-white pt-16 sm:pt-20 pb-12 sm:pb-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-amber" />
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Careers ]</div>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light text-ink leading-[1.05] break-words">
            Build the ecommerce agency<br className="hidden sm:inline" /> you wish existed.
          </h1>
          <p className="mt-6 text-muted2 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            We hire experts — not observers. People who love the daily rhythm of running marketplace,
            paid-media, and social accounts. If that sounds like you, we'd like to meet.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-baseline gap-4 mb-6">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Open roles ]</div>
            <div className="text-sm text-muted2 font-mono">({JOBS.length} open)</div>
          </div>
          <div className="grid gap-0 border-t border-l border-ink">
            {JOBS.map((j) => (
              <JobRow key={j.id} job={j} onApply={onApply} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Don't see your role? Send us your CV anyway.
          </h2>
          <p className="mt-4 text-white/70 font-light">
            We're always keen to meet strong ecommerce experts. Drop us a note at{" "}
            <a href="mailto:hello@globisync.com" className="text-amber underline">
              hello@globisync.com
            </a>{" "}
            with your CV.
          </p>
        </div>
      </section>

      {selected && (
        <ApplyDialog
          open={open}
          onOpenChange={setOpen}
          job={selected}
        />
      )}
    </>
  );
}
