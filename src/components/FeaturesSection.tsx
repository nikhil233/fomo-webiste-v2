const features = [
  {
    icon: "⚡",
    title: "Real-Time Activity",
    desc: "Display live conversions, sign-ups, and views as they happen.",
  },
  {
    icon: "📊",
    title: "Stock Data Feed",
    desc: "Show live inventory with automatic feeds and selling forecasts.",
  },
  {
    icon: "📋",
    title: "Form Autocapture",
    desc: "Automatically capture new email submissions via pixel — no code needed.",
  },
  {
    icon: "🎯",
    title: "Nudge Templates",
    desc: "Pre-configured options for eCommerce, Travel, and SaaS industries.",
  },
  {
    icon: "🛠️",
    title: "Nudge Builder",
    desc: "Create custom messages with images, timing, and interactive elements.",
  },
  {
    icon: "📍",
    title: "Display Rules",
    desc: "Unlimited page-based targeting with URL rules and exclusions.",
  },
  {
    icon: "🎨",
    title: "Custom Styles",
    desc: "Match your brand colors, icons, and notification behavior perfectly.",
  },
  {
    icon: "🌍",
    title: "32 Languages",
    desc: "Automatic translation including Arabic, Chinese, Japanese, and more.",
  },
  {
    icon: "🔗",
    title: "Custom Links",
    desc: "Enable upsells, cross-sells, and survey routing from any nudge.",
  },
  {
    icon: "⏰",
    title: "Behaviour Settings",
    desc: "Trigger timing, order, duration controls with loop options.",
  },
  {
    icon: "🎯",
    title: "Conversion Goals",
    desc: "Track assisted conversions and measure ROI via target URLs.",
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    desc: "Monitor performance, impressions, and goal impact in one view.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            All Features
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            All The Features You Need to
            <br />
            Create Moments That Matter
          </h2>
          <p className="text-lg text-[#64748B] max-w-[520px] mx-auto">
            Everything you need to build trust, create urgency, and convert more visitors — out
            of the box.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-[#E2E8F0] bg-white hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
