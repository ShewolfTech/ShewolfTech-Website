"use client";

import { useState } from "react";
import { CONTACT_EMAIL, LOCATION } from "../lib/constants";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        type: "err",
        message:
          "Form isn't connected yet — add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (see README).",
      });
      return;
    }

    const form = e.target;

    // Honeypot check
    if (form.botcheck.checked) return;

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "New project inquiry from shewolftech.com");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (res.status === 200 && result.success) {
        setStatus({
          type: "ok",
          message: "Thanks — your message is in. We'll reply within 1–2 business days.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus({
        type: "err",
        message: `Couldn't send that — please try again or email ${CONTACT_EMAIL} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Start a project</p>
          <h2 className="section-title light">Tell us what you&apos;re building</h2>
          <p className="contact-lead">
            Share a few details and we&apos;ll reply within 1–2 business days with next
            steps — no obligation.
          </p>
          <div className="contact-details">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>{LOCATION}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="hp-field" tabIndex={-1} autoComplete="off" />

          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required autoComplete="name" />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" autoComplete="email" />
          </div>

          <div className="form-row">
            <label htmlFor="service">What do you need help with?</label>
            <select id="service" name="service" defaultValue="Website / Web app">
              <option value="Website / Web app">Website / Web app</option>
              <option value="Mobile app">Mobile app</option>
              <option value="Branding / Design">Branding / Design</option>
              <option value="Digital marketing / SEO">Digital marketing / SEO</option>
              <option value="Cybersecurity training">Cybersecurity training</option>
              <option value="Something else">Something else</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" rows={4} required />
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            <span className="btn-label">{submitting ? "Sending…" : "Send message"}</span>
          </button>

          <p className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
