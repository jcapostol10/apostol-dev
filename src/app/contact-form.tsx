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
      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-paper font-medium hover:bg-accent-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : (<>Send message <span aria-hidden>→</span></>)}
    </button>
  );
}

const fieldClass =
  "mt-2 w-full px-0 py-3 bg-transparent border-0 border-b border-rule focus:border-accent focus:outline-none text-ink placeholder:text-ink-muted transition-colors";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="border-t border-b border-accent py-16 text-center">
        <div className="numeral text-6xl mb-4">✓</div>
        <p className="display text-3xl mb-3">Message received.</p>
        <p className="text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="border-t border-ink/30 pt-10">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block mb-2">
        <span className="eyebrow">Business / Industry (optional)</span>
        <input name="business" type="text" className={fieldClass} />
      </label>
      <label className="block mb-8">
        <span className="eyebrow">What do you need?</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={4000}
          placeholder="A new website? Mobile app? Tell me about your business and goals."
          className={`${fieldClass} resize-none`}
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
        <p className="text-sm text-accent-deep mb-4 italic" aria-live="polite">
          {state.message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-ink-muted">
          Or write directly to{" "}
          <a className="link-underline text-ink" href="mailto:josecarlo.apostol@gmail.com">
            josecarlo.apostol@gmail.com
          </a>
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
