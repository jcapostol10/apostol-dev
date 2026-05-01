"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-ink font-bold hover:scale-105 transition glow disabled:opacity-60 disabled:hover:scale-100"
    >
      {pending ? "Sending…" : "Send message →"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="card-border rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <p className="text-lg font-semibold mb-2">Message sent</p>
        <p className="text-white/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="card-border rounded-2xl p-6 md:p-8 text-left space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-mono text-white/60 uppercase tracking-wider">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition"
          />
        </label>
        <label className="block">
          <span className="text-xs font-mono text-white/60 uppercase tracking-wider">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-mono text-white/60 uppercase tracking-wider">Business / Industry (optional)</span>
        <input
          name="business"
          type="text"
          className="mt-1 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition"
        />
      </label>
      <label className="block">
        <span className="text-xs font-mono text-white/60 uppercase tracking-wider">What do you need?</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={4000}
          placeholder="A new website? Mobile app? Tell me about your business and goals."
          className="mt-1 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition resize-none"
        />
      </label>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px"
      />

      {state.status === "error" && (
        <p className="text-sm text-red-400" aria-live="polite">
          {state.message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-white/50">
          Or email{" "}
          <a className="underline hover:text-white" href="mailto:josecarlo.apostol@gmail.com">
            josecarlo.apostol@gmail.com
          </a>
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
