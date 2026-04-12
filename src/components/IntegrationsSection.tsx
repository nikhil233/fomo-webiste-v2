const integrations = [
  { name: "Shopify", emoji: "🛍️", color: "#96BF48" },
  { name: "WordPress", emoji: "📝", color: "#21759B" },
  { name: "Google Tag Manager", emoji: "🏷️", color: "#4285F4" },
  { name: "Wix", emoji: "🌐", color: "#0C6EFC" },
  { name: "BigCommerce", emoji: "🛒", color: "#34313F" },
  { name: "Magento", emoji: "🔶", color: "#F26322" },
  { name: "ClickFunnels", emoji: "📊", color: "#F5A623" },
  { name: "PrestaShop", emoji: "🛒", color: "#DF0067" },
  { name: "Lightspeed", emoji: "⚡", color: "#F04B23" },
  { name: "Blogger", emoji: "✍️", color: "#FF6600" },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
            Integrations
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight mb-4">
            Works With Your Favourite Tools
          </h2>
          <p className="text-lg text-[#64748B] max-w-[500px] mx-auto">
            Integrates seamlessly with 100+ platforms. If your store runs on it, FomoWidget
            connects to it.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${integration.color}15` }}
              >
                {integration.emoji}
              </div>
              <span className="text-xs font-semibold text-[#374151] text-center leading-tight">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* "And 90+ more" */}
        <div className="text-center">
          <p className="text-[#64748B] text-sm">
            And{" "}
            <span className="font-semibold text-[#2563EB]">90+ more platforms</span> including
            Squarespace, Weebly, Drupal, OpenCart, and custom HTML sites.
          </p>
        </div>
      </div>
    </section>
  );
}
