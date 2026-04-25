export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #0C1A3A 40%, #1E3A8A 70%, #0C1A3A 100%)" }}>
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(37,99,235,0.22) 0%, transparent 70%)",
        }}
      />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.12,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 pt-36 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sky-300 text-sm font-medium mb-8">
          <span>🇮🇳</span>
          <span>Built for Indian D2C Stores</span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          Social Proof Built for
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #60A5FA 0%, #38BDF8 50%, #0EA5E9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Indian Stores
          </span>{" "}
          — In ₹, Not $
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-[560px] mx-auto leading-relaxed mb-10">
          Show live visitor counts, recent sales, and real-time activity to build instant trust
          and drive more conversions. Built for Indian D2C founders, priced in INR.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#waitlist"
            className="px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg shadow-blue-900/40"
          >
            Get a Free Demo →
          </a>
          <a
            href="#features"
            className="px-7 py-3.5 border border-white/20 hover:border-white/35 hover:bg-white/8 text-white font-semibold rounded-xl text-base transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Widget Preview Cards */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-5">
          {/* Card 1 - Recent Purchase */}
          <div className="animate-float md:mb-[-32px]" style={{ animationDelay: "0s" }}>
            <div className="bg-white rounded-2xl p-4 w-[258px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-left">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-xl flex-shrink-0">
                  🔥
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900 truncate">
                      Priya from Bengaluru just purchased
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">Premium Plan · 2 min ago</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1.5">✓ Verified purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Live Counter (center/featured) */}
          <div className="animate-float-delayed" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-2xl p-6 w-[280px] shadow-[0_24px_72px_rgba(0,0,0,0.4)] text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-ring" />
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  Live
                </span>
              </div>
              <div
                className="text-[52px] font-black leading-none mb-2"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                1,247
              </div>
              <div className="text-sm text-gray-500 font-medium">Active users right now</div>
              <div className="mt-3 flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold">
                <span>↑ 12%</span>
                <span className="text-gray-400 font-normal">vs last hour</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Review */}
          <div className="animate-float-slow md:mb-[-32px]" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white rounded-2xl p-4 w-[258px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-left">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-xl flex-shrink-0">
                  ⭐
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900">23 people viewing this</div>
                  <p className="text-xs text-gray-500 mt-0.5">Product page · right now</p>
                  <p className="text-xs text-orange-500 font-medium mt-1">🔴 High demand detected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
