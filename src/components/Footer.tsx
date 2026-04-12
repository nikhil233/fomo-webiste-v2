const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Video Tutorials", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status Page", href: "#" },
  ],
  Integrations: [
    { label: "Shopify", href: "#" },
    { label: "WordPress", href: "#" },
    { label: "Wix", href: "#" },
    { label: "BigCommerce", href: "#" },
    { label: "View All →", href: "#integrations" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/70">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Top: Logo + Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#2563EB" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-[18px] text-white tracking-tight">FomoWidget</span>
            </a>
            <p className="text-sm leading-relaxed mb-5 max-w-[220px]">
              Real-time social proof and live activity notifications for any website.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["Twitter", "Facebook", "YouTube", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white/90 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} FomoWidget. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
