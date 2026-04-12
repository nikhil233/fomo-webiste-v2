export default function FinalCTASection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 60%, #2563EB 100%)" }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.5) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[860px] mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-5">
          Start Your Free 7-Day Trial
        </h2>
        <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4 max-w-[580px] mx-auto">
          Join 3,100+ brands using FomoWidget to build trust, create urgency, and convert more
          visitors into buyers.
        </p>
        <p className="text-white/55 text-sm mb-10">
          No credit card required · Cancel anytime · Up to 1,000 impressions free
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#pricing"
            className="px-8 py-4 bg-white text-[#2563EB] font-bold rounded-xl text-base hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-xl shadow-black/20"
          >
            Add to My Website →
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 bg-black/25 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl text-base hover:bg-black/35 transition-all"
          >
            Add to Shopify →
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Setup in 60 seconds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3 3 7-7" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
