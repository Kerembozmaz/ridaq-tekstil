import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { whatsappUrl } from "@/lib/contact";

const services = [
  {
    title: "Toptan Tişört Tedariği",
    desc: "Basic, oversize, polo yaka ve farklı model seçeneklerinde markalar, mağazalar ve işletmeler için düzenli toptan tişört tedariki sağlıyoruz.",
    image: "/images/ridaq-10.jpeg",
    items: [
      "Basic ve oversize modeller",
      "Polo yaka seçenekleri",
      "Farklı renk ve beden alternatifi",
      "Düzenli stok takibi",
    ],
  },
//   {
//     title: "Kurumsal Sipariş Desteği",
//     desc: "Şirketler, ekipler, mağazalar, organizasyonlar ve toplu kullanım ihtiyaçları için adet bazlı kurumsal tişört tedarik çözümleri sunuyoruz.",
//     image: "/images/service-corporate.jpg",
//     items: [
//       "Toplu sipariş planlama",
//       "Kurumsal kullanım desteği",
//       "Personel ve ekip tişörtleri",
//       "Hızlı fiyatlandırma süreci",
//     ],
//   },


];

const process = [
  {
    step: "01",
    title: "İhtiyacınızı Belirleyin",
    desc: "Model, renk, beden ve adet bilgilerini bizimle paylaşın.",
  },
  {
    step: "02",
    title: "Stok & Fiyat Bilgisi Alın",
    desc: "Talebinize uygun ürün grupları için hızlıca dönüş sağlayalım.",
  },
  {
    step: "03",
    title: "Siparişinizi Netleştirin",
    desc: "Ürün seçenekleri, adet ve sevkiyat detaylarını birlikte planlayalım.",
  },
  {
    step: "04",
    title: "Teslimat Süreci Başlasın",
    desc: "Onay sonrası ürünleriniz için tedarik ve sevkiyat süreci ilerlesin.",
  },
];

export default function ServicesPage() {
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
                  Hizmetlerimiz
                </span>
              </div>

              <h1 className="max-w-2xl text-[52px] font-black leading-[0.95] tracking-[-0.055em] text-[#101827] sm:text-[76px] lg:text-[92px]">
                Toptan
                <br />
                <span className="text-[#b45a3c]">tedarik çözümleri.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#4b5563] sm:text-lg">
                #RIDAQ Tekstil olarak markalar, mağazalar ve kurumsal
                müşteriler için kaliteli, hızlı ve güvenilir toptan tişört
                tedarik hizmetleri sunuyoruz.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/Products"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
                >
                  Ürünleri İncele
                  <span className="ml-3">→</span>
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#b45a3c] bg-white px-8 text-[12px] font-black uppercase tracking-[0.08em] text-[#b45a3c] transition-all duration-300 hover:bg-[#b45a3c] hover:text-white sm:text-[13px]"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] overflow-hidden bg-[#101827] lg:block">
            <img
              src="/images/ridaq-4.jpeg"
              alt="#Ridaq Collezione hizmetler"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/20 via-transparent to-[#101827]/55" />

            <div className="absolute bottom-10 right-10 max-w-sm bg-[#101827] p-8 text-white shadow-2xl">
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                #RIDAQ TEKSTİL
              </span>

              <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">
                Güçlü stok, doğru ürün ve hızlı tedarik.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Toptan tişört ihtiyaçlarınız için profesyonel çözüm ortağınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Ne Sunuyoruz?
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Toptan siparişleriniz için uçtan uca destek.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6b7280] sm:text-base">
              Ürün seçimi, stok bilgilendirmesi, toptan sipariş planlama ve
              sevkiyat sürecinde müşterilerimize hızlı ve net çözümler sunarız.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group grid overflow-hidden border border-[#101827]/10 bg-[#f8f8f6] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.44fr_0.56fr]"
              >
                <div className="relative min-h-[260px] overflow-hidden bg-[#e8e4de]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#101827] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-8">
                  <div>
                    <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#101827]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                      {service.desc}
                    </p>

                    <div className="mt-7 space-y-3">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm font-semibold text-[#101827]/80"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#b45a3c]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center text-[12px] font-black uppercase tracking-[0.1em] text-[#101827] transition-colors duration-300 group-hover:text-[#b45a3c]"
                  >
                    Teklif Al
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

      {/* PROCESS */}
      <section className="bg-[#f6f3ef] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              Süreç Nasıl İşler?
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Net, hızlı ve güvenilir sipariş süreci.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6b7280] sm:text-base">
              Toptan siparişlerde belirsizliği azaltmak için süreci sade,
              anlaşılır ve hızlı şekilde yönetiyoruz.
            </p>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
            >
              WhatsApp ile Başlayın
              <span className="ml-3">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((item) => (
              <div
                key={item.step}
                className="border border-[#101827]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <span className="text-5xl font-black tracking-[-0.08em] text-[#b45a3c]">
                  {item.step}
                </span>

                <h3 className="mt-6 text-xl font-black tracking-[-0.04em] text-[#101827]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] overflow-hidden bg-[#101827] lg:grid-cols-[0.35fr_0.65fr]">
          <div className="hidden min-h-[300px] overflow-hidden lg:block">
            <img
              src="/images/services-cta.jpg"
              alt="Toptan tişört hizmetleri"
              className="h-full w-full object-cover object-center opacity-85"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 p-7 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
                Hızlı Teklif
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Ürün ihtiyacınızı iletin, size en uygun tedarik çözümünü sunalım.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Model, renk, beden ve adet bilgilerinizi paylaşarak stok durumu
                ve fiyat teklifi alabilirsiniz.
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