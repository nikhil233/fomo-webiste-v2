const highlights = [
  { emoji: "🇮🇳", value: "India-First", label: "Priced in ₹, built for Indian stores" },
  { emoji: "⚡", value: "5-Minute", label: "Setup. No dev needed." },
  { emoji: "💰", value: "Free Trial", label: "No credit card needed" },
  { emoji: "🔒", value: "Zero Risk", label: "Free trial, no credit card" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-1">
            Built for <span className="text-[#6366F1]">Indian D2C Founders</span>
          </h3>
          <p className="text-sm text-[#64748B]">5-minute setup · COD-aware · No code needed</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-0">
          {highlights.map((h, i) => (
            <div key={h.value} className="flex items-center">
              <div className="text-center px-8 md:px-12">
                <div className="text-2xl mb-1">{h.emoji}</div>
                <div className="text-[28px] font-bold text-[#0F172A] leading-none">{h.value}</div>
                <div className="text-[13px] text-[#64748B] mt-1">{h.label}</div>
              </div>
              {i < highlights.length - 1 && (
                <div className="h-12 w-px bg-[#E2E8F0] flex-shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
