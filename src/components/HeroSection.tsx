"use client";

import { useState, useEffect } from "react";

const notifications = [
  { emoji: "🛍️", name: "Priya from Mumbai", action: "just purchased this", time: "2m ago" },
  { emoji: "🔥", name: "Rahul from Delhi", action: "just added to cart", time: "4m ago" },
  { emoji: "⚡", name: "Meera from Bengaluru", action: "just purchased this", time: "1m ago" },
];

export default function HeroSection() {
  const [notifIndex, setNotifIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setNotifIndex((i) => (i + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const notif = notifications[notifIndex];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EEF2FF 0%, #F8FAFF 40%, #EFF6FF 70%, #F5F3FF 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-14 lg:gap-20 relative z-10">

        {/* ── Left: Copy ── */}
        <div className="flex-1 lg:max-w-[520px] text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
            <span>FOMO Widgets · Built for Indian D2C · Priced in ₹</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-[56px] lg:text-[62px] font-black text-[#0F172A] leading-[1.08] tracking-tight mb-6">
            Make hesitant<br />
            shoppers buy.{" "}
            <span className="text-[#2563EB]">Right now.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[440px]">
            Drop real-time FOMO widgets on your store in 5 minutes — live purchases, viewer counts, low-stock alerts. No code needed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#waitlist"
              className="px-7 py-3.5 rounded-xl text-white font-bold text-base transition-all hover:scale-[1.02] hover:bg-[#1D4ED8] text-center bg-[#2563EB]"
              style={{ boxShadow: "0 6px 24px rgba(37,99,235,0.28)" }}
            >
              Start free trial →
            </a>
            <a
              href="#features"
              className="px-7 py-3.5 rounded-xl font-semibold text-base border border-gray-200 hover:border-gray-300 text-gray-600 transition-all text-center"
            >
              See how it works
            </a>
          </div>

        </div>

        {/* ── Right: Browser mockup ── */}
        <div className="flex-1 w-full max-w-[540px] lg:max-w-none">
          <div
            className="rounded-2xl overflow-hidden border border-gray-100"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)" }}
          >
            {/* Browser chrome */}
            <div className="bg-[#F2F2F2] px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                yourstore.in/products/silk-kurta-set
              </div>
            </div>

            {/* Page */}
            <div className="bg-white relative min-h-[340px]">
              {/* Store nav */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <div className="font-bold text-sm text-gray-900">ThreadsIndia</div>
                <div className="flex gap-3 text-xs text-gray-400">
                  <span>New Arrivals</span>
                  <span>Sale</span>
                  <span className="text-gray-900 font-medium">🛒 2</span>
                </div>
              </div>

              {/* Product */}
              <div className="flex gap-4 p-5">
                <div className="w-[100px] h-[120px] rounded-xl bg-blue-50 flex items-center justify-center text-4xl flex-shrink-0">
                  🧣
                </div>
                <div className="flex-1">
                  <div className="text-xs text-blue-500 font-semibold uppercase tracking-wide mb-1">Trending Now</div>
                  <div className="text-sm font-bold text-gray-900 mb-1 leading-tight">Premium Silk Kurta Set</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-lg font-black text-gray-900">₹2,499</span>
                    <span className="text-xs text-gray-400 line-through">₹3,999</span>
                    <span className="text-xs font-bold text-green-600">38% off</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">⭐⭐⭐⭐⭐ (142)</div>
                  <div className="text-xs text-red-500 font-semibold mb-3">Only 4 left in stock!</div>
                  <div className="text-center py-2 rounded-lg text-white text-xs font-bold bg-[#2563EB]">
                    Add to Cart
                  </div>
                </div>
              </div>

              {/* Live viewers bar */}
              <div className="mx-5 mb-4 px-4 py-2.5 rounded-xl bg-blue-50 flex items-center gap-2">
                <div className="relative flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                </div>
                <span className="text-xs text-blue-700 font-semibold">23 people viewing this right now</span>
              </div>

              {/* FOMO popup */}
              <div
                className="absolute bottom-5 left-4 bg-white rounded-xl border border-gray-100 p-3 flex items-center gap-3 max-w-[230px]"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm flex-shrink-0">
                  {notif.emoji}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-gray-900 truncate">{notif.name}</div>
                  <div className="text-[11px] text-gray-500">{notif.action} · {notif.time}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div
        className="relative h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </section>
  );
}
