// TODO: Uncomment and replace with real client logos once onboarded
// const brands = [
//   "Tropical Fruit Box",
//   "All-Star Elite",
//   "Lundberg Family Farms",
//   "Sennheiser",
//   "SKYN",
//   "Shopify Brands",
// ];

const highlights = [
  { emoji: "⚡", value: "5-Minute", label: "Setup. No dev needed." },
  { emoji: "🎯", value: "2x–3x", label: "Avg. conversion lift" },
  { emoji: "🌍", value: "Any Store", label: "Any platform, any size" },
  { emoji: "🔒", value: "Zero Risk", label: "Free trial, cancel anytime" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-1">
            Loved by <span className="text-[#6366F1]">130+ Businesses</span>
          </h3>
          <p className="text-sm text-[#64748B]">from solo founders to scaling brands</p>
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
