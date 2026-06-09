import { products } from "@/app/data/products";
import Link from "next/link";

export default function ProductGroups() {
  return (
    <section id="urunler" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-[#b45a3c]">
            Ürün Gruplarımız
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#101827] sm:text-5xl">
            Markanızın ihtiyacına uygun toptan tişört çözümleri.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6b7280]">
            Farklı kullanım alanlarına ve koleksiyon ihtiyaçlarına göre
            hazırlanmış ürün gruplarımızı inceleyin.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <Link
              key={item.slug}
              href={`/Products/${item.slug}`}
              className="group overflow-hidden border border-[#101827]/10 bg-[#f8f8f6] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="h-72 overflow-hidden bg-[#e8e8e5] sm:h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-[-0.02em] text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                    {item.shortDesc}
                  </p>

                  <span className="mt-6 inline-flex items-center text-[12px] font-black uppercase tracking-[0.1em] text-[#101827] transition-colors duration-300 group-hover:text-[#b45a3c]">
                    Detayları İncele
                  </span>
                </div>

                <span className="shrink-0 text-2xl text-[#b45a3c] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/Products"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#101827] px-8 text-[12px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#b45a3c] sm:text-[13px]"
          >
            Tüm Ürünleri Gör
            <span className="ml-3">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
