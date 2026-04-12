"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const liveMetrics = [
  { label: "Active Visitors", value: 1247, suffix: "", color: "#2563EB" },
  { label: "Sales Today", value: 84, suffix: "", color: "#059669" },
  { label: "New Sign-ups", value: 312, suffix: "", color: "#D97706" },
  { label: "Cart Additions", value: 567, suffix: "", color: "#DC2626" },
];

export default function LiveCounterSection() {
  const { count: activeCount, ref: sectionRef } = useCountUp(1247);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #0C1A3A 50%, #0F172A 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.1,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 mb-6">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <div className="absolute w-2 h-2 rounded-full bg-emerald-300 animate-pulse-ring" />
              </div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
                Live Feature
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Show Your Visitors
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #34D399 0%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                They&apos;re Not Alone
              </span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-[480px]">
              Our exclusive Live Active Users Counter shows real-time visitor counts on any page.
              When people see others browsing or buying, they buy too.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-10">
              {[
                "Real-time count updates every 10 seconds",
                "Show per-page or site-wide visitor counts",
                "Fully customizable position and style",
                "Works with any website platform",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#10B981"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] text-sm"
            >
              Try Live Counter Free →
            </a>
          </div>

          {/* Right: Live Counter Display */}
          <div className="flex flex-col items-center gap-6">
            {/* Main counter widget */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-3xl p-8 w-full max-w-[380px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse-ring" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">Live Activity</span>
                </div>
                <span className="text-white/40 text-xs">fomowidget.com</span>
              </div>

              {/* Big number */}
              <div className="text-center mb-6">
                <div
                  className="text-7xl font-black leading-none mb-2"
                  style={{
                    background: "linear-gradient(135deg, #60A5FA 0%, #38BDF8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {activeCount.toLocaleString()}
                </div>
                <div className="text-white/60 text-base">Active users right now</div>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-emerald-400 text-sm font-semibold">
                  <span>↑ 12%</span>
                  <span className="text-white/40 font-normal">vs last hour</span>
                </div>
              </div>

              {/* Mini metrics */}
              <div className="grid grid-cols-2 gap-3">
                {liveMetrics.map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-xl p-3">
                    <div
                      className="text-xl font-bold"
                      style={{ color: m.color }}
                    >
                      {m.value.toLocaleString()}
                    </div>
                    <div className="text-white/50 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget preview on-site example */}
            <div className="bg-white rounded-2xl p-4 w-full max-w-[380px] shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-dot" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-pulse-ring" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-900">
                    127 people are viewing this page
                  </span>
                  <div className="text-xs text-gray-400">Updated 3 seconds ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
