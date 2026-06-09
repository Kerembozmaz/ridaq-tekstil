"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/contact";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "/Products" },
  { label: "Hizmetler", href: "/services" },
  { label: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#101827]/10 bg-[#f6f3ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col leading-none"
        >
          <span className="text-[28px] font-black tracking-[0.12em] text-[#101827] sm:text-[34px]">
            <span className="text-[#b45a3c]">#</span>RIDAQ
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-[13px] font-black uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[#b45a3c] ${
                  active ? "text-[#b45a3c]" : "text-[#101827]"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[#b45a3c]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-14 items-center justify-center rounded-full bg-[#101827] px-7 text-[13px] font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#b45a3c] xl:flex"
        >
          WhatsApp ile Teklif Al
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[#101827]/15 bg-white lg:hidden"
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
        className={`fixed inset-0 z-[70] min-h-screen bg-[#101827] px-6 pt-28 text-white transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-[calc(100vh-7rem)] flex-col justify-between pb-10">
          <div>
            {navLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span
                    className={`text-2xl font-semibold tracking-tight ${
                      active ? "text-[#b45a3c]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                      active ? "text-[#b45a3c]" : "text-white/50"
                    }`}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="space-y-5">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center rounded-full bg-[#b45a3c] text-sm font-black uppercase tracking-[0.14em] text-white"
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
