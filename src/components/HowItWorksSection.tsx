const steps = [
  {
    step: "01",
    title: "Install in 60 Seconds",
    description:
      "Add a single JavaScript snippet to your website or install our plugin for Shopify, WordPress, Wix, and 100+ other platforms.",
    icon: "⚡",
    iconBg: "#EFF6FF",
  },
  {
    step: "02",
    title: "Choose Your Nudges",
    description:
      "Pick from 9 notification types — social proof, FOMO triggers, reviews, live counter, and more. Customize to match your brand.",
    icon: "🎨",
    iconBg: "#FFF7ED",
  },
  {
    step: "03",
    title: "Watch Conversions Grow",
    description:
      "Real visitors see real-time social proof and live activity. Trust builds, urgency kicks in, and sales follow automatically.",
    icon: "📈",
    iconBg: "#F0FDF4",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-[#64748B] max-w-[500px] mx-auto">
            No developer needed. Set it up yourself in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB]/40 to-[#2563EB]/20" />

          {steps.map((step, i) => (
            <div
              key={step.step}
              className="relative bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 relative border-2 border-white shadow-md"
                  style={{ background: step.iconBg }}
                >
                  {step.icon}
                </div>
                <span className="text-3xl font-black text-[#E2E8F0]">{step.step}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-[#E2E8F0]" />
              )}
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <a
            href="tel:+919886970262"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl text-sm transition-all hover:scale-[1.02]"
          >
            Contact Sales →
          </a>
          <p className="text-xs text-[#94A3B8] mt-3">Reach us directly · We&apos;ll set you up fast</p>
        </div>
      </div>
    </section>
  );
}
