import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { whatsappUrl } from "@/lib/contact";
import { products } from "../data/products";


const categories = [
  "Tüm Ürünler",
  "Basic Tişörtler",
  "Oversize Tişörtler",
  "Polo Yaka",
  "Uzun Kollu",
  "Baskıya Uygun",
  "Kurumsal Tişörtler",
];

const advantages = [
  {
    title: "Geniş Stok Gücü",
    desc: "Farklı model, renk ve beden seçeneklerinde düzenli tedarik imkanı.",
  },
  {
    title: "Yüksek Kalite",
    desc: "Sağlam kumaş, düzgün dikim ve uzun ömürlü kullanım odaklı ürünler.",
  },
  {
    title: "Hızlı Tedarik",
    desc: "Türkiye geneli hızlı ve güvenilir sevkiyat çözümleri.",
  },
  {
    title: "Kurumsal Destek",
    desc: "Markalar, mağazalar ve işletmeler için profesyonel sipariş desteği.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ef] text-[#101827]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        <div className="mx-auto grid min-h-[520px] max-w-[1600px] grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#b45a3c]" />

                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#b45a3c] sm:tracking-[0.28em]">
                  Toptan Tişört Tedariğinde Güçlü Çözümler
                </span>
              </div>

              <h1 className="text-[52px] font-black leading-[0.95] tracking-[-0.055em] text-[#101827] sm:text-[72px] lg:text-[86px]">
                Ürün
                <br />
                <span className="text-[#b45a3c]">Gruplarımız</span>
              </h1>

              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#4b5563] sm:text-lg">
                Her ihtiyaca uygun tişört modellerimizle markalara, mağazalara
                ve kurumsal müşterilere hızlı, kaliteli ve güvenilir toptan
                tedarik sağlıyoruz.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#urunler"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase leading-none tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
                >
                  Ürünleri İncele
                  <span className="ml-3">→</span>
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#b45a3c] px-8 text-[12px] font-black uppercase leading-none tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#101827] sm:text-[13px]"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] overflow-hidden bg-[#e7e3dd] lg:block">
            <img
              src="/images/ridaq-10.jpeg"
              alt="#Ridaq Collezione ürün grupları"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/35 via-transparent to-[#101827]/10" />
          </div>
        </div>
      </section>

    

      {/* PRODUCTS */}
      <section
        id="urunler"
        className="bg-white px-5 pb-20 pt-6 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden border border-[#101827]/10 bg-[#f8f8f6] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-72 overflow-hidden bg-[#e8e8e5] sm:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-[#101827]">
                    {item.title}
                  </h2>

                  <p className="mt-4 min-h-[96px] text-sm leading-6 text-[#5f6673]">
                    {item.shortDesc}
                  </p>

                  <Link
                    href={`/Products/${item.slug}`}
                    className="mt-7 inline-flex items-center text-[12px] font-black uppercase tracking-[0.1em] text-[#101827] transition-colors duration-300 group-hover:text-[#b45a3c]"
                  >
                    Detayları İncele
                    <span className="ml-3 text-[#b45a3c] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-y border-[#101827]/10 bg-[#f6f3ef] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Ridaq Tekstil Avantajı
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Toptan siparişlerde güçlü tedarik altyapısı.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="border border-[#101827]/10 bg-white p-6"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white ${
                    index % 2 === 0 ? "bg-[#101827]" : "bg-[#b45a3c]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-sm font-black uppercase tracking-[0.06em] text-[#101827]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f3ef] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] overflow-hidden bg-[#101827] lg:grid-cols-[0.35fr_0.65fr]">
          <div className="hidden min-h-[260px] overflow-hidden lg:block">
            <img
              src="/images/cta-shirts.jpg"
              alt="Toptan tişört siparişleri"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 p-7 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                Toptan Siparişleriniz İçin
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Hemen bize ulaşın.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                İhtiyacınıza uygun ürün grupları, stok bilgisi ve fiyat teklifi
                için WhatsApp üzerinden hızlıca bilgi alın.
              </p>
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-[#b45a3c] px-8 text-[12px] font-black uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-[#101827]"
            >
              Hemen Yazın
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}