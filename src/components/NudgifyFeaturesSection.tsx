"use client";

import { useState } from "react";

const tabs = [
  {
    id: "realtime",
    label: "Real-Time",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2.5c.5.6.9 1.3 1.1 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    heading: "Show What Others do on your Website",
    body: "As Jonah Berger explained, 'Making something more visible makes it easier to imitate'. With Nudgify Social Proof app, you can show your visitors things they don't usually see – like who else is online, and what they're buying.",
    preview: "realtime",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 1.5l1.545 3.59L13.5 5.59l-2.75 2.68.65 3.78L8 10.33l-3.4 1.72.65-3.78L2.5 5.59l3.955-.5L8 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Build Trust by Promoting your Best Reviews",
    body: "Review Nudges allow you to show real reviews from Trustpilot or Google Reviews anywhere on your website.",
    preview: "reviews",
  },
  {
    id: "customize",
    label: "Customize",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    heading: "Nudge the Way you Want Overlay or Inline",
    body: "Nudgify shows non-intrusive Social Proof notifications, improving the customer experience on your e-Commerce, Travel or SaaS website.",
    preview: "customize",
  },
];

function RealtimePreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Browser chrome */}
      <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#E2E8F0] bg-white">
        {/* Browser bar */}
        <div className="bg-[#F1F5F9] px-4 py-3 flex items-center gap-2 border-b border-[#E2E8F0]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FC605C]" />
            <div className="w-3 h-3 rounded-full bg-[#FDBC40]" />
            <div className="w-3 h-3 rounded-full bg-[#35CD4B]" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#94A3B8] border border-[#E2E8F0]">
            yourstore.com/products
          </div>
        </div>
        {/* Page content mock */}
        <div className="p-5 relative min-h-[280px] bg-white">
          {/* Page skeleton */}
          <div className="flex gap-4">
            <div className="w-[120px] h-[140px] bg-[#F1F5F9] rounded-xl flex-shrink-0 flex items-center justify-center text-4xl">
              👟
            </div>
            <div className="flex-1 space-y-2.5 pt-1">
              <div className="h-4 bg-[#F1F5F9] rounded-md w-3/4" />
              <div className="h-3 bg-[#F8FAFC] rounded-md w-full" />
              <div className="h-3 bg-[#F8FAFC] rounded-md w-5/6" />
              <div className="h-7 bg-[#2563EB] rounded-lg w-1/2 mt-4" />
            </div>
          </div>

          {/* Notification 1 — bottom left */}
          <div className="absolute bottom-14 left-4 w-[200px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#E2E8F0] p-3 animate-float">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-base flex-shrink-0">🛍️</div>
              <div>
                <div className="text-[11px] font-semibold text-gray-800 leading-tight">James from London</div>
                <div className="text-[10px] text-gray-400 mt-0.5">just purchased this item</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-[9px] text-gray-400">Verified by FomoWidget</span>
            </div>
          </div>

          {/* Notification 2 — bottom right */}
          <div className="absolute bottom-4 right-4 w-[190px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#E2E8F0] p-3 animate-float-delayed">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-base flex-shrink-0">👀</div>
              <div>
                <div className="text-[11px] font-semibold text-gray-800 leading-tight">24 people</div>
                <div className="text-[10px] text-gray-400 mt-0.5">viewing this right now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#E2E8F0] bg-white">
        {/* Browser bar */}
        <div className="bg-[#F1F5F9] px-4 py-3 flex items-center gap-2 border-b border-[#E2E8F0]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FC605C]" />
            <div className="w-3 h-3 rounded-full bg-[#FDBC40]" />
            <div className="w-3 h-3 rounded-full bg-[#35CD4B]" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#94A3B8] border border-[#E2E8F0]">
            yourstore.com/checkout
          </div>
        </div>
        {/* Page content */}
        <div className="p-5 relative min-h-[280px] bg-white">
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-[#F1F5F9] rounded-md w-2/3" />
            <div className="h-3 bg-[#F8FAFC] rounded-md w-full" />
          </div>

          {/* Trustpilot-style review nudge */}
          <div className="absolute top-12 right-4 w-[210px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#E2E8F0] p-3 animate-float">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-lg">⭐</div>
              <div>
                <div className="text-[11px] font-bold text-gray-900">New 5★ Review</div>
                <div className="flex gap-0.5 mt-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#00B67A">
                      <path d="M5 1l1.12 2.6 2.88.36-2 1.95.47 2.74L5 7.27 2.53 8.65 3 5.91 1 3.96l2.88-.36L5 1z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 italic leading-tight">&ldquo;Absolutely love this product, fast delivery!&rdquo;</p>
            <div className="flex items-center gap-1 mt-2">
              <div className="text-[9px] font-bold text-[#00B67A]">Trustpilot</div>
              <div className="text-[9px] text-gray-400">· Sarah M.</div>
            </div>
          </div>

          {/* Google review nudge */}
          <div className="absolute bottom-6 left-4 w-[200px] bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#E2E8F0] p-3 animate-float-delayed">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="text-lg">🌟</div>
              <div className="text-[11px] font-bold text-gray-900">Google Review</div>
            </div>
            <div className="flex gap-0.5 mb-1.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#FBBC04">
                  <path d="M5 1l1.12 2.6 2.88.36-2 1.95.47 2.74L5 7.27 2.53 8.65 3 5.91 1 3.96l2.88-.36L5 1z"/>
                </svg>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 italic">&ldquo;Best purchase I&apos;ve made!&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomizePreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#E2E8F0] bg-white">
        {/* Browser bar */}
        <div className="bg-[#F1F5F9] px-4 py-3 flex items-center gap-2 border-b border-[#E2E8F0]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FC605C]" />
            <div className="w-3 h-3 rounded-full bg-[#FDBC40]" />
            <div className="w-3 h-3 rounded-full bg-[#35CD4B]" />
          </div>
          <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-[11px] text-[#94A3B8] border border-[#E2E8F0]">
            yoursite.com/pricing
          </div>
        </div>
        {/* Page content */}
        <div className="p-5 relative min-h-[280px] bg-white">
          {/* Page skeleton */}
          <div className="space-y-2 mb-5">
            <div className="h-5 bg-[#F1F5F9] rounded-md w-1/2 mx-auto" />
            <div className="h-3 bg-[#F8FAFC] rounded-md w-3/4 mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1,2].map(i => (
              <div key={i} className="border border-[#E2E8F0] rounded-xl p-3">
                <div className="h-3 bg-[#F1F5F9] rounded w-2/3 mb-2" />
                <div className="h-6 bg-[#F1F5F9] rounded w-1/2 mb-2" />
                <div className="h-2 bg-[#F8FAFC] rounded w-full mb-1" />
                <div className="h-2 bg-[#F8FAFC] rounded w-5/6" />
              </div>
            ))}
          </div>

          {/* Overlay notification */}
          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#E2E8F0] p-3 w-[195px] animate-float">
              <div className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wide mb-1.5">Overlay Mode</div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-base flex items-center justify-center flex-shrink-0">🔥</div>
                <div className="text-[10px] text-gray-700 font-medium">Selling Fast — only 3 left!</div>
              </div>
            </div>
          </div>

          {/* Inline notification */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-[#F0F9FF] border border-blue-100 rounded-xl p-3 flex items-center gap-3">
              <div className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wide flex-shrink-0">Inline Mode</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                <div className="text-[10px] text-gray-600">47 people bought this today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = {
  realtime: <RealtimePreview />,
  reviews: <ReviewsPreview />,
  customize: <CustomizePreview />,
};

export default function NudgifyFeaturesSection() {
  const [activeTab, setActiveTab] = useState("realtime");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Engage, Build Trust, and Nudge with Precision
          </h2>
          <p className="text-lg text-[#64748B] max-w-[640px] mx-auto leading-relaxed">
            Display real-time user activities, showcase top reviews, and tailor nudges to fit
            your website&apos;s design—either as overlays or inline elements.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)]"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#374151]"
              }`}
            >
              <span
                className={
                  activeTab === tab.id ? "text-white" : "text-[#94A3B8]"
                }
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content: Text left + Preview right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="text-3xl md:text-[36px] font-extrabold text-[#0F172A] leading-tight mb-5">
              {active.heading}
            </h3>
            <p className="text-[17px] text-[#64748B] leading-relaxed mb-8">
              {active.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold rounded-xl text-sm transition-all hover:scale-[1.02]"
              >
                Add to My Site
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] font-semibold rounded-xl text-sm transition-all hover:shadow-sm"
              >
                Add to Shopify
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Animated preview */}
          <div className="relative h-[360px] lg:h-[380px]">
            <div
              key={activeTab}
              className="absolute inset-0"
              style={{ animation: "fadeInUp 0.35s ease-out forwards" }}
            >
              {previews[activeTab as keyof typeof previews]}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
