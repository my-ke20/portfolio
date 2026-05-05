"use client";

import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { contactItems } from "@/components/site-data";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      form.reset();
      setSubmitState("sent");
      setStatusMessage("Message sent. I will reply from my email.");
      return;
    }

    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setSubmitState("error");
    setStatusMessage(result?.error ?? "Message could not be sent. Try again shortly.");
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="terminal-panel p-5">
        <p className="font-heading text-sm uppercase text-signal">operator channel</p>
        <div className="mt-6 space-y-5">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex gap-4">
                <Icon className="mt-1 text-amber" size={18} aria-hidden="true" />
                <div>
                  <p className="font-heading text-xs uppercase text-muted">{item.label}</p>
                  <p className="mt-1 text-sm text-primary">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form className="hud-panel grid gap-4 p-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-xs uppercase text-muted">
          Name
          <input
            className="border border-amber/25 bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-amber"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-xs uppercase text-muted">
          Email
          <input
            className="border border-amber/25 bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-amber"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-xs uppercase text-muted">
          Message
          <textarea
            className="min-h-36 resize-y border border-amber/25 bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-amber"
            name="message"
            required
          />
        </label>
        <button type="submit" className="industrial-button w-full gap-2 sm:w-fit" disabled={submitState === "sending"}>
          <Send size={18} aria-hidden="true" />
          {submitState === "sending" ? "Sending..." : "Send Message"}
        </button>
        {statusMessage ? (
          <p
            className={`text-sm ${submitState === "error" ? "text-amber" : "text-signal"}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
