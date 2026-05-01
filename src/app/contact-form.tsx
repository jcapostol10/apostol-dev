"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
      {pending ? "Sending…" : (<>Send message <span aria-hidden>→</span></>)}
    </button>
  );
}

const fieldClass =
  "mt-1.5 w-full px-4 py-3 rounded-xl bg-ink-2 border border-rule text-paper placeholder:text-paper-mute focus:border-accent focus:outline-none transition-colors";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="card card-feature p-10 text-center">
        <div className="text-5xl mb-4">✓</div>
        <p className="display text-3xl mb-3">Message received.</p>
        <p className="text-paper-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="card p-6 md:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="eyebrow !text-paper-soft">Name</span>
          <input name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="eyebrow !text-paper-soft">Email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow !text-paper-soft">Business / Industry (optional)</span>
        <input name="business" type="text" className={fieldClass} />
      </label>
      <label className="block">
        <span className="eyebrow !text-paper-soft">What do you need?</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={4000}
          placeholder="A new website? Mobile app? Tell me about your business and goals."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px" />

      {state.status === "error" && (
        <p className="text-sm text-accent-bright" aria-live="polite">{state.message}</p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-paper-mute">
          Or write to{" "}
          <a className="link-grow text-paper" href="mailto:josecarlo.apostol@gmail.com">
            josecarlo.apostol@gmail.com
          </a>
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
