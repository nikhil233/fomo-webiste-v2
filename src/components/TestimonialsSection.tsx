const testimonials = [
  {
    quote:
      "FomoWidget has greatly improved the trust and confidence of our current and prospect customers from day one. The live user counter is incredibly powerful.",
    name: "Jenna A.",
    role: "Founder, thisisblythe.com",
    avatar: "JA",
    avatarBg: "#EFF6FF",
    avatarColor: "#2563EB",
    rating: 5,
  },
  {
    quote:
      "With FomoWidget's help, I increased online business sales. Easy-to-connect integrations and the social proof widgets work exactly as described.",
    name: "Bill M.",
    role: "Owner, dope.link",
    avatar: "BM",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
    rating: 5,
  },
  {
    quote:
      "The live active users counter alone pays for itself. When customers see 200+ people shopping at the same time, they don't hesitate to buy.",
    name: "Rachel K.",
    role: "eCommerce Manager, stylehaus.co",
    avatar: "RK",
    avatarBg: "#F0FDF4",
    avatarColor: "#16A34A",
    rating: 5,
  },
  {
    quote:
      "Setup took literally 3 minutes. We saw a 24% increase in checkout completion rate within the first week. Absolutely worth every penny.",
    name: "David T.",
    role: "CTO, sportsupply.io",
    avatar: "DT",
    avatarBg: "#FEF2F2",
    avatarColor: "#DC2626",
    rating: 5,
  },
  {
    quote:
      "Best social proof tool we've tried. The analytics dashboard shows exactly which nudges drive the most conversions. Data-driven decisions made easy.",
    name: "Aisha P.",
    role: "Marketing Director, beautyblend.com",
    avatar: "AP",
    avatarBg: "#F5F3FF",
    avatarColor: "#1E40AF",
    rating: 5,
  },
  {
    quote:
      "We run 12 Shopify stores and FomoWidget works seamlessly across all of them. The agency plan is a steal for the volume we get.",
    name: "Tom W.",
    role: "Agency Owner, digitalshops.agency",
    avatar: "TW",
    avatarBg: "#ECFDF5",
    avatarColor: "#059669",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.545 3.59L12.5 5.09l-2.75 2.68.65 3.78L7 9.83l-3.4 1.72.65-3.78L1.5 5.09l3.955-.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

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
            Loved by 3,100+ Businesses
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="text-[#0F172A] font-bold text-lg">4.9/5</span>
            <span className="text-[#64748B] text-sm">from 350+ reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <StarRating count={t.rating} />
              <p className="text-[#374151] text-sm leading-relaxed mt-4 mb-6 italic">
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
