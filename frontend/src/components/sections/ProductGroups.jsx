const productGroups = [
  {
    title: "Basic Tişörtler",
    desc: "Günlük kullanım ve marka koleksiyonları için sade, kaliteli modeller.",
    image: "/images/ridaq-1.jpeg",
  },
  {
    title: "Oversize Tişörtler",
    desc: "Modern kesim, rahat kalıp ve genç koleksiyonlara uygun seçenekler.",
    image: "/images/ridaq-3.jpeg",
  },
  {
    title: "Polo Yaka Tişörtler",
    desc: "Kurumsal kullanım ve mağaza koleksiyonları için şık alternatifler.",
    image: "/images/ridaq-4.jpeg",
  },
  {
    title: "Uzun Kollu Tişörtler",
    desc: "Sezonluk koleksiyonlar için düzenli tedarik çözümleri.",
    image: "/images/ridaq-5.jpeg",
  },
];

export default function ProductGroups() {
  return (
    <section id="urunler" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-[#b35435]">
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
          {productGroups.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden border border-[#101827]/10 bg-[#f7f7f5] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="h-72 overflow-hidden bg-[#ececec]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-end justify-between gap-6 p-6">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-[-0.02em] text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                    {item.desc}
                  </p>
                </div>

                <span className="shrink-0 text-2xl text-[#b35435] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
