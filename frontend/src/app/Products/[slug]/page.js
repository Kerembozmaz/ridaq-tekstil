import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

import { whatsappUrl } from "@/lib/contact";
import { products } from "@/app/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f3ef] text-[#101827]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        <div className="mx-auto grid min-h-[620px] max-w-[1600px] grid-cols-1 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="flex items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
            

              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#b45a3c]" />

                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                  {product.category}
                </span>
              </div>

              <h1 className="max-w-2xl text-[48px] font-black leading-[0.95] tracking-[-0.055em] text-[#101827] sm:text-[72px] lg:text-[86px]">
                {product.title}
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#4b5563] sm:text-lg">
                {product.shortDesc}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
                >
                  Teklif Al
                  <span className="ml-3">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#b45a3c] bg-white px-8 text-[12px] font-black uppercase tracking-[0.08em] text-[#b45a3c] transition-all duration-300 hover:bg-[#b45a3c] hover:text-white sm:text-[13px]"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] overflow-hidden bg-[#e7e3dd] lg:block">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/20 via-transparent to-[#101827]/15" />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="border border-[#101827]/10 bg-[#f8f8f6] p-7 sm:p-10">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Ürün Özellikleri
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Toptan alım için güçlü ürün altyapısı.
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature, index) => (
                <div
                  key={feature}
                  className="border border-[#101827]/10 bg-white p-5"
                >
                  <span className="text-xs font-black text-[#b45a3c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-3 text-sm font-bold leading-6 text-[#101827]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-[#101827] p-7 text-white sm:p-10">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Kullanım Alanları
            </span>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
              Kimler için uygundur?
            </h3>

            <div className="mt-8 space-y-4">
              {product.usage.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span className="text-sm font-semibold text-white/75">
                    {item}
                  </span>

                  <span className="text-[#b45a3c]">→</span>
                </div>
              ))}
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#b45a3c] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-[#101827]"
            >
              WhatsApp ile Teklif Al
            </Link>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f3ef] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px] bg-[#101827] p-7 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                Toptan Sipariş
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                {product.title} için stok ve fiyat bilgisi alın.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Ürün seçenekleri, beden-renk durumu ve toptan fiyat teklifi için
                bizimle WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.
              </p>
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#b45a3c] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-[#101827]"
            >
              Hemen Teklif Al
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}