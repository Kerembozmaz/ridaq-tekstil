import Link from "next/link";

export default function Hero() {
  const phoneNumber = "905313379271";

  const whatsappMessage =
    "Merhaba, #Ridaq Tekstil toptan tişört ürünleri hakkında bilgi ve teklif almak istiyorum.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;
  return (
    <section className="relative overflow-hidden pt-10 bg-[#f6f3ef]">
      <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-[0.47fr_0.53fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex items-center px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <div className="mb-5 inline-flex items-center gap-3 sm:mb-6">
              <span className="h-[2px] w-9 bg-[#b45a3c] sm:w-10" />

              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#b45a3c] sm:text-xs sm:tracking-[0.28em]">
                Toptan Tişört Tedariğinde
              </span>
            </div>

            <h1 className="max-w-2xl text-[43px] font-black leading-[0.98] tracking-[-0.055em] text-[#101827] min-[390px]:text-[48px] sm:text-[64px] md:text-[76px] lg:text-[82px] xl:text-[94px]">
              Güçlü Stok.
              <br />
              Kaliteli Ürün.
              <br />
              <span className="text-[#b45a3c]">Güvenilir Tedarik.</span>
            </h1>

            <div className="mt-7 h-[3px] w-20 bg-[#101827] sm:mt-8" />

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#4b5563] sm:mt-8 sm:text-lg sm:leading-8">
              Basic, oversize, polo yaka ve baskıya uygun tişört modellerinde;
              markalar, mağazalar ve kurumsal müşteriler için hızlı, düzenli ve
              kaliteli tedarik çözümleri sunuyoruz.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="#urunler"
                className="group flex h-14 items-center justify-center bg-[#101827] px-7 text-[13px] font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-sm"
              >
                Ürün Gruplarını İncele
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href={whatsappUrl}
                target="_blank"
                className="flex h-14 items-center justify-center border border-[#b45a3c] bg-white px-7 text-[13px] font-black uppercase tracking-[0.12em] text-[#b45a3c] transition-all duration-300 hover:bg-[#b45a3c] hover:text-white sm:text-sm"
              >
                Whatsapp İle Teklif Al
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - DESKTOP ONLY */}
        <div className="relative hidden min-h-[calc(100vh-80px)] overflow-hidden bg-[#d8d8d4] lg:block">
          <img
            src="/images/ridaq-3.jpeg"
            alt="#Ridaq Tekstil toptan tişört modelleri"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/10 via-transparent to-[#101827]/25" />

          <div className="absolute bottom-8 right-10 bg-[#101827] px-8 py-6 text-white shadow-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#b45a3c]">
              #RIDAQ
            </span>

            <p className="mt-2 max-w-[230px] text-sm leading-6 text-white/75">
              Toptan tişört tedariğinde güçlü stok ve düzenli sevkiyat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
