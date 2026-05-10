"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const products = [
  {
    id: 1,
    name: "Oxidised Silver Jhumkas",
    price: 599,
    original: 999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=480&h=360&fit=crop&q=80",
    viewers: 34,
    stock: 6,
    tag: "Jewellery",
    emoji: "💍",
    rating: 4.8,
    reviews: 1243,
  },
  {
    id: 2,
    name: "Oversized Vintage Hoodie",
    price: 1299,
    original: 1999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=480&h=360&fit=crop&q=80",
    viewers: 52,
    stock: 4,
    tag: "Apparel",
    emoji: "👕",
    rating: 4.7,
    reviews: 887,
  },
  {
    id: 3,
    name: "Handcrafted Kolhapuri Flats",
    price: 1499,
    original: 2499,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=480&h=360&fit=crop&q=80",
    viewers: 21,
    stock: 5,
    tag: "Footwear",
    emoji: "👡",
    rating: 4.6,
    reviews: 432,
  },
  {
    id: 4,
    name: "Soy Wax Candle Trio",
    price: 799,
    original: 1199,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=480&h=360&fit=crop&q=80",
    viewers: 18,
    stock: 11,
    tag: "Home Décor",
    emoji: "🕯️",
    rating: 4.9,
    reviews: 674,
  },
  {
    id: 5,
    name: "True Wireless Earbuds Pro",
    price: 1999,
    original: 3499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=480&h=360&fit=crop&q=80",
    viewers: 67,
    stock: 3,
    tag: "Electronics",
    emoji: "🎧",
    rating: 4.5,
    reviews: 2108,
  },
  {
    id: 6,
    name: "Street Style Sneakers",
    price: 2499,
    original: 3999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=480&h=360&fit=crop&q=80",
    viewers: 44,
    stock: 5,
    tag: "Footwear",
    emoji: "👟",
    rating: 4.6,
    reviews: 893,
  },
];

const customers = [
  { name: "Priya Sharma",   city: "Mumbai",    state: "Maharashtra", avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "Rahul Gupta",    city: "Delhi",     state: "Delhi",       avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Ananya Krishna", city: "Bengaluru", state: "Karnataka",   avatar: "https://i.pravatar.cc/150?img=45" },
  { name: "Vikram Patel",   city: "Ahmedabad", state: "Gujarat",     avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Sneha Reddy",    city: "Hyderabad", state: "Telangana",   avatar: "https://i.pravatar.cc/150?img=44" },
  { name: "Arjun Nair",     city: "Chennai",   state: "Tamil Nadu",  avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "Divya Singh",    city: "Pune",      state: "Maharashtra", avatar: "https://i.pravatar.cc/150?img=42" },
  { name: "Karan Malhotra", city: "Jaipur",    state: "Rajasthan",   avatar: "https://i.pravatar.cc/150?img=18" },
  { name: "Isha Mehta",     city: "Surat",     state: "Gujarat",     avatar: "https://i.pravatar.cc/150?img=41" },
  { name: "Rohan Verma",    city: "Kolkata",   state: "West Bengal", avatar: "https://i.pravatar.cc/150?img=20" },
];

const methods = ["upi", "card", "netbanking", "wallet"];

const discount = (price: number, original: number) =>
  Math.round(((original - price) / original) * 100);

async function triggerPurchaseNotification(product: (typeof products)[0]) {
  const customer = customers[Math.floor(Math.random() * customers.length)];
  const method = methods[Math.floor(Math.random() * methods.length)];

  try {
    await fetch(
      "https://dsbph9kh4s89x.cloudfront.net/webhook/dc542ab9-0886-4d79-9902-3aca620d8878/razorpay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Merchant-ID": "f352fe14-9f62-445c-b697-2fc7f07c4932",
        },
        body: JSON.stringify({
          event: {
            entity: "payment",
            payload: {
              payment: {
                entity: {
                  amount: product.price * 100,
                  currency: "INR",
                  method,
                  notes: {
                    customer_name: customer.name,
                    city: customer.city,
                    state: customer.state,
                    image_url: product.image,
                  },
                },
              },
            },
          },
        }),
      }
    );
  } catch {
    // Silently ignore — widget still loads independently
  }
}

export default function DemoPage() {
  const [modalProduct, setModalProduct] = useState<(typeof products)[0] | null>(null);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [viewers, setViewers] = useState<Record<number, number>>(
    () => Object.fromEntries(products.map((p) => [p.id, p.viewers]))
  );

  useEffect(() => {
    const i = setInterval(() => {
      setViewers((prev) => {
        const next = { ...prev };
        const id = products[Math.floor(Math.random() * products.length)].id;
        next[id] = Math.max(1, next[id] + (Math.random() > 0.45 ? 1 : -1));
        return next;
      });
    }, 3800);
    return () => clearInterval(i);
  }, []);

  const handleBuyNow = async (product: (typeof products)[0]) => {
    triggerPurchaseNotification(product); // fire-and-forget
    setModalProduct(product);
  };

  const BANNER_H = 48;

  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Real FOMO widget */}
      <Script
        src="https://dsbph9kh4s89x.cloudfront.net/widget.js"
        data-merchant-id="f352fe14-9f62-445c-b697-2fc7f07c4932"
        data-site-uuid="dc542ab9-0886-4d79-9902-3aca620d8878"
        data-api-url="https://dsbph9kh4s89x.cloudfront.net"
        strategy="afterInteractive"
      />

      {/* ── Hint banner (sticky, pushes header down) ── */}
      {!bannerDismissed && (
        <div
          className="sticky top-0 z-50 bg-[#2563EB] text-white px-4 flex items-center justify-center gap-3 text-sm font-medium"
          style={{ height: BANNER_H }}
        >
          <span>👆</span>
          <span>
            This is a <strong>demo store</strong> — click{" "}
            <strong className="underline underline-offset-2">Buy Now</strong> to experience live FOMO notifications
          </span>
          <button
            onClick={() => setBannerDismissed(true)}
            className="ml-4 text-xs border border-white/40 rounded px-2.5 py-1 hover:bg-white/10 transition-colors flex-shrink-0"
          >
            Got it ✕
          </button>
        </div>
      )}

      {/* ── Store header (sticks just below banner) ── */}
      <header
        className="sticky z-40 bg-white border-b border-gray-200"
        style={{ top: bannerDismissed ? 0 : BANNER_H }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏪</span>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-tight">ThreadsIndia</div>
              <div className="text-xs text-gray-400 leading-tight">Authentic Indian D2C</div>
            </div>
            <span className="ml-1 text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-widest">
              Sample Store
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
            <span className="cursor-default hover:text-gray-800 transition-colors">New Arrivals</span>
            <span className="cursor-default hover:text-gray-800 transition-colors">Sale</span>
            <span className="cursor-default hover:text-gray-800 transition-colors">About</span>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:inline text-xs text-[#2563EB] font-semibold hover:underline"
            >
              ← Back to FomoWidget
            </a>
            <button className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <span className="text-xl">🛒</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Page body ── */}
      <main className="max-w-[1280px] mx-auto px-6 py-8">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">All Products</h1>
            <p className="text-sm text-gray-400 mt-0.5">{products.length} items</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-700 font-medium">
            <span className="animate-bounce">👇</span>
            <span>Click <strong>Buy Now</strong> to see a live FOMO notification pop up</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/p${product.id}/480/360`;
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full border border-gray-100 shadow-sm">
                  {product.tag}
                </span>
                <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {discount(product.price, product.original)}% off
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold text-gray-900 text-base leading-snug mb-1.5">{product.name}</h2>

                <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-500">
                  <span className="text-amber-400">{"★".repeat(Math.floor(product.rating))}</span>
                  <span className="font-semibold text-gray-700">{product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-black text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.original.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4 text-xs flex-wrap">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>{viewers[product.id]} viewing now</span>
                  </div>
                  {product.stock <= 5 && (
                    <span className="text-red-500 font-semibold">Only {product.stock} left!</span>
                  )}
                </div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="mt-auto w-full py-3 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-[#2563EB] hover:bg-[#1D4ED8]"
                  style={{ boxShadow: "0 4px 16px rgba(37,99,235,0.25)" }}
                >
                  Buy Now →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ── Experience modal ── */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
          onClick={() => setModalProduct(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-[440px] w-full shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">
              You just experienced FOMO!
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              That notification that just appeared? That&apos;s exactly what{" "}
              <strong className="text-gray-700">your customers</strong> will see every time
              someone buys from your store — instant urgency, real conversions.
            </p>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left border border-gray-100">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                What triggered right now:
              </div>
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-base border border-blue-100 flex-shrink-0">
                  {modalProduct.emoji}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-900">Someone just purchased!</div>
                  <div className="text-[11px] text-gray-500 truncate">{modalProduct.name} · just now</div>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            <a
              href="/#waitlist"
              className="block w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm transition-colors mb-3"
              onClick={() => setModalProduct(null)}
            >
              Add FomoWidget to my store →
            </a>
            <button
              onClick={() => setModalProduct(null)}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Continue browsing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
