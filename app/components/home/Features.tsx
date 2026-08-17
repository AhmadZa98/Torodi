import Image from "next/image";
import { featuresData } from "./homeData";

export default function Features() {
  const items = featuresData;
  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-6 lg:px-8 py-14" role="region" aria-labelledby="features-heading">
      <header className="text-center mb-10">
        <h2 id="features-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2042]">مزايا تجعلنا الخيار الأفضل</h2>
        <p className="mt-2 text-slate-600">اخترنا لك أهم ما يميز تجربة التسوق عبر طرودي</p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <article
            key={i}
            className="group rounded-2xl border border-[#ffc200]/40 bg-white/80 backdrop-blur-md p-6 shadow-[0_6px_22px_rgba(255,194,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(255,194,0,0.22)] focus-within:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              {f.img ? (
                <Image src={f.img} alt={f.title} width={28} height={28} className="rounded object-contain" />
              ) : (
                <div className="text-2xl transition-transform duration-300 group-hover:scale-110" aria-hidden>{f.icon}</div>
              )}
              <h3 className="text-lg font-extrabold text-[#1a2042]">{f.title}</h3>
            </div>
            <p className="mt-3 text-slate-700 leading-relaxed">{f.desc}</p>
            <a
              href="#"
              className="mt-4 inline-flex items-center self-start text-[#1a2042]/80 hover:text-[#1a2042] text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffc200] rounded-md"
            >
              تعرّف أكثر
              <span className="mr-1" aria-hidden>›</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
