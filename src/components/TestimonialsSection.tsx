"use client";

import { useState } from "react";

function ContactForm() {
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setLoading(true);
    await fetch("https://eomw52w09otvdrf.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: contact.trim() }),
    });
    setLoading(false);
    setContact("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6 px-8 bg-white rounded-2xl border border-emerald-200 shadow-sm max-w-[500px] mx-auto">
        <div className="text-3xl mb-3">🎉</div>
        <h3 className="text-lg font-bold text-[#0F172A] mb-1">Got it — we&apos;ll reach out soon!</h3>
        <p className="text-sm text-[#64748B]">
          Expect to hear from us within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <input
        type="text"
        name="contact"
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Your email or phone number"
        className="flex-1 px-5 py-3.5 text-sm text-[#0F172A] placeholder-[#94A3B8] bg-white border border-[#E2E8F0] rounded-xl outline-none focus:border-[#2563EB] transition-colors shadow-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] whitespace-nowrap shadow-lg shadow-blue-900/20"
      >
        {loading ? "Sending..." : "We'll Contact You →"}
      </button>
    </form>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="waitlist" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            Get Started
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Ready to boost your store&apos;s conversions?
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed mb-8">
            Drop your email or phone number — we&apos;ll reach out, walk you through setup, and
            get you live within the day.
          </p>

          <ContactForm />

          <p className="text-xs text-[#94A3B8] mt-4">
            We&apos;ll reach out within a few hours. No spam, no auto-calls.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748B]">
            {[
              "30-day free trial",
              "5-minute setup",
              "Priced in ₹",
              "Cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l4 4 8-8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
