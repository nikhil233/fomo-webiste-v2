const testimonials = [
  {
    quote:
      "FomoWidget has greatly improved the trust and confidence of our current and prospect customers from day one. The live user counter is incredibly powerful.",
    name: "Priya S.",
    role: "Founder, Online Boutique",
    avatar: "PS",
    avatarBg: "#EFF6FF",
    avatarColor: "#2563EB",
  },
  {
    quote:
      "With FomoWidget's help, I increased online business sales. Easy-to-connect integrations and the social proof widgets work exactly as described.",
    name: "Rahul M.",
    role: "Store Owner, Lifestyle Brand",
    avatar: "RM",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
  },
  {
    quote:
      "The live active users counter alone pays for itself. When customers see 200+ people shopping at the same time, they don't hesitate to buy.",
    name: "Neha K.",
    role: "eCommerce Manager, Fashion Brand",
    avatar: "NK",
    avatarBg: "#F0FDF4",
    avatarColor: "#16A34A",
  },
  {
    quote:
      "Setup took literally 3 minutes. We saw a 24% increase in checkout completion rate within the first week. Absolutely worth every penny.",
    name: "Arjun T.",
    role: "CTO, Sports & Fitness Store",
    avatar: "AT",
    avatarBg: "#FEF2F2",
    avatarColor: "#DC2626",
  },
  {
    quote:
      "Best social proof tool we've tried. The analytics dashboard shows exactly which nudges drive the most conversions. Data-driven decisions made easy.",
    name: "Sneha P.",
    role: "Marketing Director, Beauty & Wellness",
    avatar: "SP",
    avatarBg: "#F5F3FF",
    avatarColor: "#1E40AF",
  },
  {
    quote:
      "We run 12 Shopify stores and FomoWidget works seamlessly across all of them. The agency plan is a steal for the volume we get.",
    name: "Vikram W.",
    role: "Agency Owner, Multi-Store Management",
    avatar: "VW",
    avatarBg: "#ECFDF5",
    avatarColor: "#059669",
  },
];


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            Customer Stories
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Loved by 130+ Businesses
          </h2>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700">
              🔥 14 new stores joined this week
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
              ✅ Early adopter spots filling fast
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="text-[#374151] text-sm leading-relaxed mt-2 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t.avatarBg, color: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F172A]">{t.name}</div>
                  <div className="text-xs text-[#94A3B8]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
