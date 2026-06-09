import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { whatsappUrl } from "@/lib/contact";

const contactInfo = [
  {
    label: "Telefon",
    value: "+90 546 875 56 44",
    desc: "Toptan sipariş ve stok bilgisi için arayabilirsiniz.",
    href: "tel:+905468755644",
  },
  {
    label: "E-Posta",
    value: "info@ridaqtekstil.com",
    desc: "Kurumsal talepler ve iş birlikleri için mail gönderebilirsiniz.",
    href: "mailto:info@ridaqtekstil.com",
  },
  {
    label: "Adres",
    value: "Cebeci Mah. 2461 Sk. No:51/A Sultangazi / İstanbul",
    desc: "Ürün tedariği ve iş görüşmeleri için bizimle iletişime geçin.",
    href: "#harita",
  },
];

export default function ContactPage() {
   

const mapQuery = encodeURIComponent(
  "Cebeci Mahallesi 2461. Sokak No:51/A Sultangazi İstanbul"
);

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`;
  return (
    <main className="min-h-screen bg-[#f6f3ef] text-[#101827]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        <div className="mx-auto grid min-h-[560px] max-w-[1600px] grid-cols-1 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="flex items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#b45a3c]" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                  İletişim
                </span>
              </div>

              <h1 className="max-w-2xl text-[52px] font-black leading-[0.95] tracking-[-0.055em] text-[#101827] sm:text-[76px] lg:text-[92px]">
                Bizimle
                <br />
                <span className="text-[#b45a3c]">iletişime geçin.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#4b5563] sm:text-lg">
                Toptan tişört tedariği, stok bilgisi, fiyat teklifi ve kurumsal
                siparişleriniz için #RIDAQ Tekstil ekibiyle hızlıca iletişime
                geçebilirsiniz.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
                >
                  WhatsApp ile Yazın
                  <span className="ml-3">→</span>
                </Link>

                <Link
                  href="tel:+905468755644"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#b45a3c] bg-white px-8 text-[12px] font-black uppercase tracking-[0.08em] text-[#b45a3c] transition-all duration-300 hover:bg-[#b45a3c] hover:text-white sm:text-[13px]"
                >
                  Hemen Ara
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] overflow-hidden bg-[#101827] lg:block">
            <img
              src="/images/ridaq-9.jpeg"
              alt="#Ridaq Tekstil iletişim"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/20 via-[#101827]/20 to-[#101827]/65" />

            <div className="absolute bottom-10 right-10 max-w-sm bg-[#101827] p-8 text-white shadow-2xl">
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                #RIDAQ TEKSTİL
              </span>

              <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">
                Toptan siparişleriniz için hızlı teklif alın.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Ürün grubu, adet, beden ve renk bilgisini iletin; size en kısa
                sürede dönüş yapalım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group border border-[#101827]/10 bg-[#f8f8f6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b45a3c]/40 hover:shadow-2xl sm:p-8"
              >
                <div
                  className={`mb-7 flex h-14 w-14 items-center justify-center rounded-full text-sm font-black text-white ${
                    index === 1 ? "bg-[#b45a3c]" : "bg-[#101827]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#b45a3c]">
                  {item.label}
                </span>

                <h2 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#101827] sm:text-2xl">
                  {item.value}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {item.desc}
                </p>

                <span className="mt-7 inline-flex items-center text-[12px] font-black uppercase tracking-[0.1em] text-[#101827] transition-colors duration-300 group-hover:text-[#b45a3c]">
                  Detay
                  <span className="ml-3 text-[#b45a3c] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section className="bg-[#f6f3ef] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          {/* LEFT INFO */}
          <div className="bg-[#101827] p-7 text-white sm:p-10">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Hızlı İletişim
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Siparişiniz için bize ulaşın.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              Ürün modeli, renk, beden ve adet bilgilerini WhatsApp üzerinden
              ileterek hızlıca fiyat ve stok bilgisi alabilirsiniz.
            </p>

            <div className="mt-10 space-y-5">
              <div className="border-b border-white/10 pb-5">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b45a3c]">
                  Telefon
                </p>
                <p className="mt-2 text-lg font-bold text-white/85">
                  +90 546 875 56 44
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b45a3c]">
                  E-Posta
                </p>
                <p className="mt-2 text-lg font-bold text-white/85">
                  info@ridaqtekstil.com
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b45a3c]">
                  Çalışma Saatleri
                </p>
                <p className="mt-2 text-lg font-bold text-white/85">
                  Pazartesi - Cumartesi / 09:00 - 18:00
                </p>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b45a3c]">
                  Adres
                </p>
                <p className="mt-2 text-lg font-bold leading-7 text-white/85">
                 Cebeci Mah. 2461 Sk. No:51/A Sultangazi / İstanbul
                </p>
              </div>
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#b45a3c] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-[#101827]"
            >
              WhatsApp ile Teklif Al
              <span className="ml-3">→</span>
            </Link>
          </div>

          {/* RIGHT MAP */}
          <div
            id="harita"
            className=" scroll-mt-24 overflow-hidden border border-[#101827]/10 bg-white"
          >
            <div className="flex flex-col justify-between gap-6 border-b border-[#101827]/10 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                  Konum
                </span>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#101827] sm:text-4xl">
                  Harita üzerinden bizi bulun.
                </h3>
              </div>

              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-[#101827]/15 px-6 text-[11px] font-black uppercase tracking-[0.08em] text-[#101827] transition-all duration-300 hover:border-[#b45a3c] hover:text-[#b45a3c]"
              >
                Haritada Aç
              </Link>
            </div>

            <div className="h-[420px] w-full bg-[#e8e4de] sm:h-[520px]">
              <iframe
                title="#Ridaq Tekstil Harita"
                src={googleMapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 bg-[#f6f3ef] p-7 sm:p-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-center lg:p-14">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Toptan Sipariş & Teklif
            </span>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Ürün ihtiyacınızı iletin, size en uygun çözümü sunalım.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6b7280] sm:text-base">
              Basic, oversize, polo yaka ve baskıya uygun tişört modelleri için
              stok ve fiyat bilgisi alabilirsiniz.
            </p>
          </div>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c]"
          >
            Hemen WhatsApp'a Yaz
            <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}