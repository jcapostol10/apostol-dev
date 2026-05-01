"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
      {pending ? "Sending…" : (<>Send message <span aria-hidden>→</span></>)}
    </button>
  );
}

const fieldClass =
  "mt-2 w-full px-3.5 py-2.5 rounded-lg bg-bg border border-rule text-text-1 placeholder:text-text-3 focus:border-accent focus:outline-none transition-colors text-sm";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="terminal p-10 text-center">
        <div className="text-accent text-3xl mb-3 font-mono">[ ok ]</div>
        <p className="display text-2xl mb-2">Message received.</p>
        <p className="text-text-2 text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="terminal overflow-hidden">
      <div className="terminal-bar">
        <span className="terminal-dots"><span /><span /><span /></span>
        <span>POST /contact · apostol.dev</span>
      </div>
      <div className="p-6 md:p-7 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="eyebrow !text-text-2">Name</span>
            <input name="name" type="text" required autoComplete="name" className={fieldClass} />
          </label>
          <label className="block">
            <span className="eyebrow !text-text-2">Email</span>
            <input name="email" type="email" required autoComplete="email" className={fieldClass} />
          </label>
        </div>
        <label className="block">
          <span className="eyebrow !text-text-2">Business / Industry (optional)</span>
          <input name="business" type="text" className={fieldClass} />
        </label>
        <label className="block">
          <span className="eyebrow !text-text-2">What do you need?</span>
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
          <p className="text-sm text-accent" aria-live="polite">{state.message}</p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-rule">
          <p className="text-xs text-text-3 font-mono">
            Or write to{" "}
            <a className="link-grow text-text-1" href="mailto:josecarlo.apostol@gmail.com">
              josecarlo.apostol@gmail.com
            </a>
          </p>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
