"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#" },
  { label: "Ürünler", href: "#urunler" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#101827]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-10">
        {/* LOGO */}
        <Link
          href="#"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none"
        >
          <span className="text-[28px] font-black tracking-[0.12em] text-[#101827] sm:text-[34px]">
            <span className="text-[#b35435]">#</span>RIDAQ
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-[13px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[#b35435] ${
                index === 0 ? "text-[#b35435]" : "text-[#111827]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[#b35435]" />
              )}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="https://wa.me/905000000000"
          target="_blank"
          className="hidden h-14 items-center justify-center gap-3 bg-[#101827] px-7 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#b35435] xl:flex"
        >
          <span className="text-lg">☏</span>
          WhatsApp ile Teklif Al
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-[#101827]/15 bg-white lg:hidden"
          aria-label="Menüyü aç/kapat"
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-[#101827] transition-all duration-300 ${
                open ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-full bg-[#101827] transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-[2px] w-full bg-[#101827] transition-all duration-300 ${
                open ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] min-h-screen bg-[#101827] px-6 pt-28 text-white transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-[calc(100vh-7rem)] flex-col justify-between pb-10">
          <div className="space-y-2">
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="text-2xl font-semibold tracking-tight">
                  {item.label}
                </span>

                <span
                  className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                    index === 0 ? "text-[#b35435]" : "text-white/50"
                  }`}
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="space-y-5">
            <Link
              href="https://wa.me/905000000000"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center bg-[#b35435] text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              WhatsApp ile Teklif Al
            </Link>

            <p className="max-w-xs text-sm leading-6 text-white/55">
              Basic, oversize, polo yaka ve baskıya uygun tişört modellerinde
              toptan tedarik çözümleri.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
