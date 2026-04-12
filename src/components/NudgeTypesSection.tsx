const nudgeTypes = [
  {
    emoji: "👥",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    title: "Social Proof",
    description:
      "Show live visitor counts, recent purchases, and sign-ups to build trust instantly.",
    badge: null,
  },
  {
    emoji: "🔥",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    title: "FOMO Triggers",
    description:
      "Low stock alerts, selling fast indicators, and scarcity nudges that create urgency.",
    badge: null,
  },
  {
    emoji: "⭐",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
    title: "Reviews & Ratings",
    description:
      "Display verified reviews from Trustpilot, Google, and more to build credibility.",
    badge: null,
  },
  {
    emoji: "⏱️",
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
    title: "Urgency Timers",
    description:
      "Countdown timers and time-limited offer notifications that push visitors to act now.",
    badge: null,
  },
  {
    emoji: "🚚",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    title: "Friction Reducers",
    description:
      "Free delivery thresholds, discount unlocks, and cart incentives that remove hesitation.",
    badge: null,
  },
  {
    emoji: "🟢",
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    title: "Live Active Users",
    description:
      "Real-time counter showing how many visitors are on your site right now — the ultimate social proof.",
    badge: "NEW",
    isLive: true,
  },
];

export default function NudgeTypesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            Notification Types
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Every Nudge You Need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 50%, #3B82F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Convert
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-[560px] mx-auto leading-relaxed">
            Six powerful notification types to build trust, create urgency, and turn visitors into
            buyers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nudgeTypes.map((nudge) => (
            <div
              key={nudge.title}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:border-blue-200 transition-all duration-200 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl"
                style={{ background: nudge.iconBg }}
              >
                {nudge.isLive ? (
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-dot" />
                    <div className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-pulse-ring" />
                  </div>
                ) : (
                  nudge.emoji
                )}
              </div>

              {/* Title + badge */}
              <div className="flex items-center gap-2 mt-5">
                <h3 className="text-[18px] font-bold text-[#0F172A]">{nudge.title}</h3>
                {nudge.badge && (
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[11px] font-bold rounded-full uppercase tracking-wide">
                    {nudge.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#64748B] leading-relaxed mt-2">{nudge.description}</p>

              {/* Footer link */}
              <div className="mt-5 text-sm font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
