export default function CitiesGrid() {
    const cities: { name: string; image: string; alt: string }[] = [
        { name: "القدس وضواحيها", image: "/cities/Jerusalem.jpeg", alt: "القدس وضواحيها" },
        { name: "رام الله", image: "/cities/Ramallah.jpg", alt: "مدينة رام الله" },

        { name: "نابلس", image: "/cities/nablus2.jpg", alt: "مدينة نابلس" },
        { name: "طولكرم", image: "/cities/TulKarem.webp", alt: "مدينة طولكرم" },
        { name: "قلقيلية", image: "/cities/kel.jpg", alt: "مدينة قلقيلية" },
        { name: "الخليل", image: "/cities/Hebron.webp", alt: "مدينة الخليل" },
        { name: "أريحا", image: "/cities/Jericho.jpeg", alt: "مدينة أريحا" },
        { name: "بيت لحم", image: "/cities/betLahem.webp", alt: "مدينة بيت لحم" },
        { name: "جنين", image: "/cities/Jenen.webp", alt: "مدينة جنين" },
    ];

    return (
        <section dir="rtl" className="w-full bg-white py-14" aria-labelledby="cities-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <header className="text-center mb-10">
                    <h2 id="cities-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2042]">
                        أين تعمل طرودي في فلسطين
                    </h2>
                    <div className="mx-auto mt-3 h-1.5 w-80 rounded-full bg-gradient-to-r from-[#ffc200] via-[#ffd54d] to-[#ffc200] shadow-[0_0_12px_rgba(255,194,0,0.5)]"></div>
                    <br />
                    <p>من نابلس وطولكرم إلى الخليل وأريحا، تعمل طرودي على تقديم خدمات الشحن والتوصيل باحترافية عالية لتغطية جميع مدن فلسطين، لضمان وصول طرودك بسرعة وأمان في أي وقت.</p>

                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map((city) => (
                        <article
                            key={city.name}
                            className="group rounded-2xl border border-[#5d27aa]/15 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)]"
                            aria-label={`المدينه ${city.name}`}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={city.image}
                                    alt={city.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-extrabold tracking-tight text-[#1a2042]">
                                    {city.name}
                                </h3>
                                <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-[#ffc200] group-hover:w-16 transition-[width] duration-300"></div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
