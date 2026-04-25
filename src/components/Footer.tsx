export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/70">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          {/* Brand column */}
          <div className="max-w-[260px]">
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#2563EB" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-[18px] text-white tracking-tight">FomoWidget</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50">
              Real-time social proof for Indian D2C stores. Built in India, priced in ₹.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-sm text-white/55 hover:text-white/90 transition-colors">Features</a></li>
                <li><a href="#integrations" className="text-sm text-white/55 hover:text-white/90 transition-colors">Integrations</a></li>
                <li><a href="#waitlist" className="text-sm text-white/55 hover:text-white/90 transition-colors">Get a Demo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:fomowidget@gmail.com"
                    className="text-sm text-white/55 hover:text-white/90 transition-colors"
                  >
                    Email us
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/919886970262`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/55 hover:text-white/90 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} FomoWidget. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
