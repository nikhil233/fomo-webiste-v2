"use client";

import { useState, useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹599",
    impressions: "10,000 impressions/mo",
    features: ["Unlimited websites", "All notification types", "Basic analytics"],
  },
  {
    name: "Growth",
    price: "₹899",
    impressions: "90,000 impressions/mo",
    features: ["Live active users counter", "Advanced analytics", "Priority support"],
    popular: true,
  },
];

// Simulates a real-time incrementing interest counter
function useInterestCount(base: number) {
  const [count, setCount] = useState(base);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Randomly increment by 1 every 4–9 seconds to feel live
    const tick = () => {
      setCount((c) => c + 1);
      intervalRef.current = setTimeout(tick, 4000 + Math.random() * 5000);
    };
    intervalRef.current = setTimeout(tick, 4000 + Math.random() * 5000);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  return count;
}

// Recent interest notifications data
const recentInterests = [
  { name: "Rahul M.", location: "Mumbai", time: "2 min ago", plan: "Plus" },
  { name: "Sophie L.", location: "Paris", time: "5 min ago", plan: "Genius" },
  { name: "Jake T.", location: "New York", time: "8 min ago", plan: "Lite" },
  { name: "Anika S.", location: "Berlin", time: "11 min ago", plan: "Plus" },
  { name: "Carlos R.", location: "Madrid", time: "14 min ago", plan: "Agency" },
];

function FomoToast({ name, location, time, plan }: typeof recentInterests[0]) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E2E8F0]">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] text-[#0F172A] font-medium leading-tight">
          <span className="font-semibold">{name}</span> from {location} just showed interest in{" "}
          <span className="text-[#2563EB] font-semibold">{plan}</span>
        </p>
        <p className="text-[11px] text-[#94A3B8] mt-0.5">{time}</p>
      </div>
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot flex-shrink-0" />
    </div>
  );
}

export default function PricingSection() {
  const interestCount = useInterestCount(2847);
  const [visibleToast, setVisibleToast] = useState(0);

  // Cycle through recent-interest toasts
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleToast((i) => (i + 1) % recentInterests.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── COMING SOON HERO ── */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-dot" />
            Coming Soon
          </div>

          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Pricing is on its way.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Be the first to know.
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-[500px] mx-auto leading-relaxed">
            We&apos;re finalising our plans. Join the waitlist and get early access + an exclusive
            launch discount.
          </p>
        </div>

        {/* ── FOMO COUNTER BAR ── */}
        <div className="max-w-[640px] mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-sm">
            {/* Counter row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-dot z-10 relative" />
                <div className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-pulse-ring" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className="text-3xl font-black text-[#0F172A] tabular-nums"
                    key={interestCount}
                    style={{ animation: "counterPop 0.3s ease-out" }}
                  >
                    {interestCount.toLocaleString()}
                  </span>
                  <span className="text-base font-semibold text-[#374151]">
                    people have already shown interest
                  </span>
                </div>
                {/* Progress bar */}
                <div className="mt-2 h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] transition-all duration-1000"
                    style={{ width: `${Math.min((interestCount / 5000) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Goal: 5,000 signups for early access launch · {(5000 - interestCount).toLocaleString()} spots left
                </p>
              </div>
            </div>

            {/* Cycling FOMO toast */}
            <div
              key={visibleToast}
              style={{ animation: "fadeInUp 0.4s ease-out" }}
            >
              <FomoToast {...recentInterests[visibleToast]} />
            </div>
          </div>
        </div>

        {/* ── WAITLIST FORM ── */}
        <div className="max-w-[480px] mx-auto mb-16">
          <WaitlistForm />
        </div>

        {/* ── BLURRED PLAN PREVIEWS ── */}
        <div className="relative">
          {/* "Sneak peek" label */}
          <div className="text-center mb-6">
            <span className="text-sm font-semibold text-[#94A3B8] uppercase tracking-widest">
              Sneak peek — plans coming soon
            </span>
          </div>

          {/* Plans grid — blurred + locked overlay */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5 max-w-[520px] mx-auto select-none pointer-events-none" style={{ filter: "blur(3px)", opacity: 0.55 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col gap-3 ${
                    plan.popular
                      ? "bg-[#2563EB] text-white"
                      : "bg-white border border-[#E2E8F0]"
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-blue-200" : "text-[#94A3B8]"}`}>
                    {plan.name}
                  </div>
                  <div className={`text-4xl font-black ${plan.popular ? "text-white" : "text-[#0F172A]"}`}>
                    {plan.price}
                    <span className={`text-sm font-normal ml-1 ${plan.popular ? "text-blue-200" : "text-[#94A3B8]"}`}>/mo</span>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-lg self-start ${plan.popular ? "bg-white/20 text-white" : "bg-[#EFF6FF] text-[#2563EB]"}`}>
                    {plan.impressions}
                  </div>
                  <ul className="space-y-1.5 mt-1">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-xs flex items-center gap-1.5 ${plan.popular ? "text-blue-100" : "text-[#64748B]"}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={plan.popular ? "white" : "#2563EB"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl px-8 py-5 shadow-xl flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#94A3B8]">
                  <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 9V6a3.5 3.5 0 0 1 7 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-semibold text-[#374151]">Join the waitlist to unlock pricing</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes counterPop {
          0% { transform: scale(1.15); color: #2563EB; }
          100% { transform: scale(1); color: #0F172A; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
