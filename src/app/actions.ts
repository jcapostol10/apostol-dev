"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const TO_EMAIL = "josecarlo.apostol@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Apostol.dev <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot) {
    return { status: "success", message: "Thanks! I'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const business = String(formData.get("business") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and a short message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email doesn't look quite right." };
  }
  if (message.length > 4000) {
    return { status: "error", message: "Message is too long — please keep it under 4000 characters." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; logging submission instead.");
    console.log({ name, email, business, message });
    return {
      status: "success",
      message: "Got it! I'll reach out within one business day.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` (${business})` : ""}`,
      html: `
        <h2>New Apostol.dev inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${business ? `<p><strong>Business:</strong> ${escapeHtml(business)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please email me directly at josecarlo.apostol@gmail.com.",
      };
    }

    return {
      status: "success",
      message: "Got it! I'll reach out within one business day.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please email me directly at josecarlo.apostol@gmail.com.",
    };
  }
}
