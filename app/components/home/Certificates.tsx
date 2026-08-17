"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { testimonialsData } from "./homeData";

export default function Certificates() {
  // نحول الآراء إلى مجموعات من 3 عناصر
  const groups = useMemo(() => {
    const res: typeof testimonialsData[] = [] as any;
    for (let i = 0; i < testimonialsData.length; i += 3) {
      res.push(testimonialsData.slice(i, i + 3));
    }
    return res.length ? res : [testimonialsData];
  }, []);

  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    // كل فترة نطفئ الحالية ثم نُظهر المجموعة التالية
    // زدنا الفاصل الزمني قليلًا ليكون التلاشي أبطأ ومريح للقراءة
    intervalRef.current = window.setInterval(() => {
      setFadeOut(true);
      // بعد إتمام الخروج، غيّر المجموعة وادخل بتدرج
      timeoutRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % groups.length);
        setFadeOut(false);
      }, 600); // زمن تلاشي أطول
    }, 5800); // زمن العرض لكل مجموعة أطول

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [groups.length, paused]);

  const current = groups[index] ?? [];

  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-6 lg:px-8 py-12"
      role="region"
      aria-labelledby="certs-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <header className="mb-8 text-center">
        <h2 id="certs-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2042]">
          آراء العملاء
        </h2>
        <p className="mt-2 text-slate-600"> بعض من آراء عملائنا الموثوقين التي تدل على جودة الخدمة </p>
      </header>

      <div className="relative overflow-hidden rounded-3xl p-6 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
        style={{ background: 'linear-gradient(90deg,#ffc200 0%, #ffc200 35%, #ffc200 100%)' }}>
        {/* decorative soft radial accent */}
        <div aria-hidden className="absolute -left-20 -top-12 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0))' }} />

        <div
          className={[
            "grid gap-6",
            "sm:grid-cols-1 md:grid-cols-3",
            "transition-opacity duration-700 ease-out",
            fadeOut ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          {current.map((t, i) => (
            <article
              key={`${index}-${i}-${t.name}`}
              className="group h-full rounded-2xl border-2 border-[#5d27aa] bg-white p-6 shadow-[0_8px_30px_rgba(13,12,35,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_48px_rgba(13,12,35,0.12)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-[#5d27aa]/12 border-2 border-[#5d27aa]"
                  draggable={false}
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold text-[#2b2540] truncate">{t.name}</h3>
                  <p className="mt-1 text-sm text-[#6b4aff] font-medium">عميل موثوق</p>
                  {/* rating: 5 stars */}
                  <ul role="img" aria-label="التقييم: 5 من 5 نجوم" className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <li key={s} className="leading-none">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffc200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.517L18.998 24 12 20.013 5.002 24l1.33-8.883L.673 9.6l7.659-1.582L12 .587z"/>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-[#342b3f]">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>

        {/* مؤشرات بسيطة */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {groups.map((_, gi) => (
            <button
              key={gi}
              aria-label={`الانتقال إلى مجموعة ${gi + 1}`}
              onClick={() => {
                setFadeOut(true);
                window.setTimeout(() => {
                  setIndex(gi);
                  setFadeOut(false);
                }, 200);
              }}
              className={[
                "h-2.5 rounded-full transition-all",
                gi === index ? "w-8 bg-[#6b4aff]" : "w-2.5 bg-[#6b4aff]/30 hover:bg-[#6b4aff]/60",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
