'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Gift,
  ShoppingBag,
  Truck,
  Sparkles,
  CheckCircle2,
  Instagram,
  Phone,
} from "lucide-react";

// =====================================================
// RAHMA SESERAHAN – LANDING PAGE (AOS + Transparent Sections)
// - Global background diatur dari layout.js / globals.css
// - Bagian section dibuat transparan supaya bg global terlihat
// - Card tetap bg-white agar konten terbaca
// - Hero pakai PNG transparan + drop-shadow lembut
// =====================================================

const PRODUCTS = [
  { img: "/assets/products/product1.jpg", name: "Paket Olive Minimal", price: "Rp450k" },
  { img: "/assets/products/product2.jpg", name: "Paket Ivory Classic", price: "Rp520k" },
  { img: "/assets/products/product3.jpg", name: "Paket Sand Neutral", price: "Rp480k" },
  { img: "/assets/products/product4.jpg", name: "Paket Moss Elegant", price: "Rp560k" },
];

const GIFTCARDS = [1, 2, 3, 4, 5].map((n) => ({
  img: `/assets/giftcards/theme${n}.jpg`,
  name: `Gift Card – Tema ${n}`,
  price: "Nominal bebas",
}));

const SectionTitle = ({ kicker, title, subtitle }) => {
  return (
    <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
      {kicker && (
        <p className="uppercase tracking-widest text-xs text-neutral-600 mb-2">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900">{title}</h2>
      {subtitle && <p className="text-neutral-700 mt-3">{subtitle}</p>}
    </div>
  );
};

const Pill = ({ children }) => (
  <span
    data-aos="zoom-in"
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-white/70 backdrop-blur border border-neutral-200 text-neutral-800"
  >
    {children}
  </span>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div
    data-aos="fade-up"
    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
  >
    <div className="h-10 w-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-neutral-900">{title}</h3>
    <p className="text-sm text-neutral-600 mt-2">{desc}</p>
  </div>
);

const ProductCard = ({ img, name, price }) => (
  <div
    data-aos="fade-up"
    className="group rounded-2xl border border-neutral-200 overflow-hidden bg-white"
  >
    <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <h4 className="font-medium text-neutral-900">{name}</h4>
      <p className="text-neutral-500 text-sm">Mulai {price}</p>
      <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
        <ShoppingBag className="h-4 w-4" /> Sewa sekarang
      </button>
    </div>
  </div>
);

export default function LandingSeserahan() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 60,
      once: false, // animasi bisa berulang
      mirror: true, // animasi juga saat scroll ke atas
    });
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-neutral-900">
      {/* NAVBAR */}
      <header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200"
        data-aos="fade-down"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Rahma Seserahan Logo"
              className="h-7 w-7 object-contain rounded-full overflow-hidden"
            />
            <span className="font-semibold tracking-tight">RAHMA SESERAHAN</span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <li>
              <a href="#about" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#offers" className="hover:text-black">
                Paket
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-black">
                Galeri
              </a>
            </li>
            <li>
              <a href="#giftcards" className="hover:text-black">
                Gift Card
              </a>
            </li>
            <li>
              <a href="#testi" className="hover:text-black">
                Testimonial
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="inline-flex rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm"
            >
              Pesan Sekarang
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 py-12 md:py-20 items-center">
        <div data-aos="fade-right">
          <Pill>
            <Sparkles className="h-3.5 w-3.5" /> Premium Crafted
          </Pill>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Seserahan Elegan Untuk Momen Yang{" "}
            <span className="underline decoration-2 decoration-[#CBB79E]">
              Tak Terlupakan
            </span>
            .
          </h1>
          <p className="mt-4 text-neutral-700">
            Set kotak seserahan curated—dari dekorasi hingga kemasan—siap pakai
            atau custom sesuai tema lamaran & akad.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm"
            >
              Lihat Produk
            </a>
            <a
              href="https://wa.me/6282228132455"
              className="inline-flex rounded-xl border border-neutral-200 bg-white/70 backdrop-blur px-5 py-3 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi Gratis
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs text-neutral-600">Trusted by</span>
            <div
              className="h-9 w-24 rounded-md bg-white/70 backdrop-blur border border-neutral-200 flex items-center justify-center text-xs text-neutral-600"
              data-aos="fade-up"
            >
              Shopee
            </div>
            <div
              className="h-9 w-28 rounded-md bg-white/70 backdrop-blur border border-neutral-200 flex items-center justify-center text-xs text-neutral-600"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              Tokopedia
            </div>
            <div
              className="h-9 w-28 rounded-md bg-white/70 backdrop-blur border border-neutral-200 flex items-center justify-center text-xs text-neutral-600"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              Instagram
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div data-aos="fade-left" className="relative flex items-center justify-center">
          {/* Centered coksu circle background */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] md:w-[32rem] lg:w-[40rem] aspect-square rounded-full bg-[#EADBC8]/60 z-0" />

          {/* PNG utama + soft, realistic shadow */}
          <img
            src="/assets/hero.png" // PNG transparan
            alt="Hero seserahan"
            className="relative z-20 block w-[18rem] md:w-[26rem] lg:w-[30rem] h-auto object-contain"
            style={{
              filter:
                "drop-shadow(0 8px 18px rgba(60,50,40,0.18)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            }}
          />
        </div>
      </section>

      {/* WHAT WE OFFER (transparent section) */}
      <section id="offers" className="py-12 md:py-16 border-t border-neutral-200 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="WHAT WE OFFER?"
            subtitle="Paket seserahan siap pakai & custom, dikerjakan oleh tim dekor berpengalaman—rapi, bersih, dan estetik."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Gift className="h-5 w-5" />}
              title="Paket Siap Pakai"
              desc="Tema netral, earth-tone, atau glam. Tinggal pilih—langsung beres."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Custom Dekor"
              desc="Konsultasi warna, bunga, dan properti sesuai gaya kamu & pasangan."
            />
            <FeatureCard
              icon={<Truck className="h-5 w-5" />}
              title="Antar & Ambil"
              desc="Demak–Kudus–Semarang–Pati. Jadwal fleksibel."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="Bersih & Aman"
              desc="Properti higienis, kemasan sturdy, item berharga aman."
            />
          </div>
        </div>
      </section>

      {/* ABOUT (transparent section) */}
      <section id="about" className="py-12 md:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <SectionTitle
              kicker="About Us"
              title="Detail yang memuliakan makna"
              subtitle="Kami merancang komposisi yang seimbang antara estetika dan doa—elegan di foto juga nyata."
            />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div
                className="rounded-2xl border border-neutral-200 bg-white p-4 text-center"
                data-aos="zoom-in"
              >
                <p className="text-2xl font-semibold">Fast</p>
                <p className="text-xs text-neutral-500">Pelayanan Cepat</p>
              </div>
              <div
                className="rounded-2xl border border-neutral-200 bg-white p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="60"
              >
                <p className="text-2xl font-semibold">95%</p>
                <p className="text-xs text-neutral-500">Positive Feedback</p>
              </div>
              <div
                className="rounded-2xl border border-neutral-200 bg-white p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="120"
              >
                <p className="text-2xl font-semibold">50+</p>
                <p className="text-xs text-neutral-500">Tema Tersedia</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3" data-aos="fade-left">
            <img
              className="rounded-2xl border border-neutral-200 bg-white"
              src="/assets/products/product1.jpg"
              alt="Galeri seserahan"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT GRID (transparent section, cards stay white) */}
      <section id="products" className="py-12 md:py-16 border-t border-neutral-200 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              title="BEST DEALS FOR YOU"
              subtitle="Produk populer—siap dipinang akhir pekan ini."
            />
            <a
              href="#"
              className="hidden md:inline-flex rounded-xl border border-neutral-200 bg-white/70 backdrop-blur px-4 py-2 text-sm"
              data-aos="fade-left"
            >
              View All
            </a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* GIFT CARDS (transparent section, cards stay white) */}
      <section id="giftcards" className="py-12 md:py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Gift Card – Kado Praktis"
            subtitle="Pilih tema 1–5. Nominal fleksibel, cocok untuk kejutan lamaran & akad."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GIFTCARDS.map((g) => (
              <div
                key={g.name}
                className="rounded-2xl border border-neutral-200 overflow-hidden bg-white"
                data-aos="fade-up"
              >
                <div className="aspect-[4/3] bg-neutral-100">
                  <img src={g.img} alt={g.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-neutral-900">{g.name}</h4>
                  <p className="text-neutral-500 text-sm">{g.price}</p>
                  <button className="mt-3 inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
                    <Gift className="h-4 w-4" /> Pilih Tema
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (transparent section, cards stay white) */}
      <section id="testi" className="py-12 md:py-16 border-t border-neutral-200 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="TESTIMONIALS"
            subtitle="Apa kata pasangan yang sudah mempercayakan momen mereka."
          />
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-sm text-neutral-700">
                  “Bunganya padat tapi tetap elegan. Foto jadi cantik banget!”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={`https://i.pravatar.cc/100?img=${10 + i}`}
                    alt="avatar"
                  />
                  <div>
                    <p className="text-sm font-medium">Risa Putri</p>
                    <p className="text-xs text-neutral-500">Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (transparent section) */}
      <section id="cta" className="py-16 md:py-20 bg-transparent" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold">Siap wujudkan seserahan impian?</h3>
          <p className="mt-3 text-neutral-700">
            Klik tombol di bawah untuk konsultasi tema & ketersediaan tanggal. Fast response.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/6282228132455"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm"
            >
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="https://instagram.com/rahmaseserahan.demak"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 backdrop-blur px-5 py-3 text-sm"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (transparent) */}
      <footer className="border-t border-neutral-200 bg-transparent">
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="logo" className="h-5 w-5 rounded-full" />
            <span>© {new Date().getFullYear()} Rahma Seserahan. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-neutral-900">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
