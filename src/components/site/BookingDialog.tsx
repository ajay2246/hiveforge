"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type BookingPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  topic: string;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // e.g. 10:30
  timezone: string;
  message?: string;
};

export default function BookingDialog({
  triggerText = "Book a Free 15-Min Call",
  triggerVariant = "default",
  className = "",
}: {
  triggerText?: string;
  triggerVariant?: "default" | "outline";
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const [form, setForm] = React.useState<BookingPayload>({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "Website",
    preferredDate: "",
    preferredTime: "10:00",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York",
    message: "",
  });

  function update<K extends keyof BookingPayload>(key: K, value: BookingPayload[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!form.name.trim()) return doneError("Please enter your name.");
    if (!form.email.trim()) return doneError("Please enter your email.");
    if (!form.preferredDate) return doneError("Please select a preferred date.");
    if (!form.preferredTime) return doneError("Please select a preferred time.");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        return doneError(data?.error || "Something went wrong. Please try again.");
      }

      setSuccess(
        `Request received! I’ll reach out to ${form.email} to confirm the appointment time.`
      );

      // Optional: close after a moment
      // setTimeout(() => setOpen(false), 1200);

    } catch {
      return doneError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function doneError(msg: string) {
    setLoading(false);
    setError(msg);
  }

  // Reset messages when opened
  React.useEffect(() => {
    if (open) {
      setSuccess(null);
      setError(null);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Book a 15-minute call</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="+1 (___) ___-____"
                value={form.phone || ""}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Company / Store name"
                value={form.company || ""}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2 sm:col-span-1">
              <Label>Topic *</Label>
              <Select value={form.topic} onValueChange={(v) => update("topic", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="Multi-Store Platform">Multi-Store Platform</SelectItem>
                  <SelectItem value="AI / Try-On">AI / Try-On</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label htmlFor="date">Preferred date *</Label>
              <Input
                id="date"
                type="date"
                value={form.preferredDate}
                onChange={(e) => update("preferredDate", e.target.value)}
              />
            </div>

            <div className="space-y-2 sm:col-span-1">
              <Label>Preferred time *</Label>
              <Select value={form.preferredTime} onValueChange={(v) => update("preferredTime", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"].map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tz">Timezone</Label>
            <Input
              id="tz"
              value={form.timezone}
              onChange={(e) => update("timezone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="What are you looking to build? Any links or requirements?"
              value={form.message || ""}
              onChange={(e) => update("message", e.target.value)}
            />
          </div>

          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : null}

          {success ? (
            <p className="text-sm text-green-700">{success}</p>
          ) : null}

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
              className="rounded-2xl"
            >
              Close
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95"
            >
              {loading ? "Submitting..." : "Request Appointment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
