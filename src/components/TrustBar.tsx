const brands = [
  "Tropical Fruit Box",
  "All-Star Elite",
  "Lundberg Family Farms",
  "Sennheiser",
  "SKYN",
  "Shopify Brands",
];

const stats = [
  { value: "3,100+", label: "Brands using FomoWidget" },
  { value: "138", label: "Countries reached" },
  { value: "32", label: "Languages supported" },
  { value: "4.9/5 ★", label: "Customer rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Brand names */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-sm text-[#94A3B8] mr-2">Trusted by brands like:</span>
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-sm text-[#64748B] font-medium shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {stats.map((stat, i) => (
            <div key={stat.value} className="flex items-center">
              <div className="text-center px-8 md:px-12">
                <div className="text-[28px] font-bold text-[#0F172A] leading-none">{stat.value}</div>
                <div className="text-[13px] text-[#64748B] mt-1">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="h-10 w-px bg-[#E2E8F0] flex-shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
