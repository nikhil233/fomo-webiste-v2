"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹599",
    impressions: "10,000 impressions/mo",
    features: ["Unlimited websites", "All notification types", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹899",
    impressions: "90,000 impressions/mo",
    features: ["Live active users counter", "Advanced analytics", "Priority support", "Custom branding"],
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Honest pricing,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in Indian Rupees
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-[480px] mx-auto leading-relaxed">
            No dollar conversion surprises. Start free, upgrade when you see results.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[600px] mx-auto mb-14">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-4 ${
                plan.popular
                  ? "bg-[#2563EB] text-white shadow-[0_16px_48px_rgba(37,99,235,0.35)]"
                  : "bg-white border border-[#E2E8F0]"
              }`}
            >
              {plan.popular && (
                <div className="self-start text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-2.5 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-blue-200" : "text-[#94A3B8]"}`}>
                {plan.name}
              </div>
              <div className={`text-4xl font-black ${plan.popular ? "text-white" : "text-[#0F172A]"}`}>
                {plan.price}
                <span className={`text-sm font-normal ml-1 ${plan.popular ? "text-blue-200" : "text-[#94A3B8]"}`}>/mo</span>
              </div>
              <div className={`text-xs px-2.5 py-1.5 rounded-lg self-start ${plan.popular ? "bg-white/20 text-white" : "bg-[#EFF6FF] text-[#2563EB]"}`}>
                {plan.impressions}
              </div>
              <ul className="space-y-2 mt-1">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.popular ? "text-blue-100" : "text-[#64748B]"}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l4 4 6-7" stroke={plan.popular ? "white" : "#2563EB"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={`mt-2 text-center px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-white text-[#2563EB] hover:bg-blue-50"
                    : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Waitlist →
              </a>
            </div>
          ))}
        </div>

        {/* Waitlist form */}
        <div className="max-w-[480px] mx-auto" id="waitlist-form">
          <div className="text-center mb-6">
            <p className="text-[#64748B] text-sm">
              Pricing launches soon. Join the waitlist for early access + launch discount.
            </p>
          </div>
          <WaitlistForm />
          <p className="text-center text-xs text-[#94A3B8] mt-3">No spam. Unsubscribe anytime.</p>
        </div>

      </div>
    </section>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const form = e.currentTarget;
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "waitlist", email }).toString(),
    });
    setLoading(false);
    form.reset();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6 px-8 bg-white rounded-2xl border border-emerald-200 shadow-sm">
        <div className="text-3xl mb-3">🎉</div>
        <h3 className="text-lg font-bold text-[#0F172A] mb-1">You&apos;re on the list!</h3>
        <p className="text-sm text-[#64748B]">
          We&apos;ll notify you at <span className="font-semibold text-[#0F172A]">{email}</span> the moment pricing goes live.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Early access + launch discount reserved
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="waitlist"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="bg-white rounded-2xl border border-[#E2E8F0] p-2 shadow-sm flex gap-2"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <input type="hidden" name="bot-field" />
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] bg-transparent outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] whitespace-nowrap"
      >
        {loading ? "Saving..." : "Join Waitlist →"}
      </button>
    </form>
  );
}
