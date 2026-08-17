"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, useMotionValueEvent, animate } from "framer-motion";
import { PackageCheck, Truck, BarChart3, MapPin } from "lucide-react";

const gold = "#ffc200"; // accent (orange/gold)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

function CountUp({ target, duration = 3, suffix = "", className }: { target: number; duration?: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(latest as number);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return () => controls?.stop();
    }
  }, [inView, target, duration, count]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export default function ShipmentControl() {
  type Card = { icon: React.ReactElement; title: string; desc: string; badge?: string };
  const stats = [
    { type: "text" as const, display: "24/7", label: "دعم عملاء متوفر دائمًا" },
    { type: "count" as const, target: 70, suffix: "%", label: "تقليل وقت استلام الطرود" },
    { type: "count" as const, target: 1000, suffix: "+", label: "طرد تم تسليمه بنجاح" },
    { type: "count" as const, target: 100, suffix: "+", label: "عميل يستخدم طرودي يوميًا" },
  ];

  const cards: Card[] = [
    {
      icon: <PackageCheck size={28} color={gold} aria-hidden />,
      title: "إدارة الطرود بذكاء",
      desc: "منصة متكاملة تتيح لك متابعة جميع شحناتك وتتبعها بسهولة من مكان واحد.",
    },
    {
      icon: <Truck size={28} color={gold} aria-hidden />,
      title: "خدمة تسليم احترافية",
      desc: "فِرق متخصصة لضمان استلام الطرود بسرعة وأمان داخل وخارج المدينة.",
    },
    {
      icon: <MapPin size={28} color={gold} aria-hidden />,
      title: "نقطة استلام 24 ساعة",
      desc: "يمكنك استلام طردك من مخازن طرودي الواقعة في موقع مركزي وحيوي في قلب الضفة الغربية، مع إمكانية الاستلام في أي وقت يناسبك",
    
    },
  ];

  return (
    <section dir="rtl" aria-labelledby="shipment-control-heading" className="relative">
      {/* Full-bleed background */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background:
            // base dark-blue gradient + subtle vertical stripes
            `linear-gradient(135deg, #1a2042 0%, #2a2f5a 55%, #1a2042 100%), 
             repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 160px)`
        }}
      >
        {/* soft radial accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(255,194,0,0.32), rgba(255,194,0,0))",
          }}
        />

        {/* Vertical animated lines: many thin long lines rising up behind content */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {Array.from({ length: 14 }).map((_, i) => {
            const left = 4 + i * 6; // positions in percent
            const delay = i * 0.5;
            return (
              <motion.span
                key={`vline-${i}`}
                className="absolute"
                style={{
                  left: `${left}%`,
                  bottom: "-20%",
                  width: 1,
                  height: "160%",
                  background: "rgba(255,255,255,0.09)",
                  borderRadius: 2,
                }}
                initial={{ y: 220, opacity: 0.15 }}
                animate={{ y: -220, opacity: 1 }}
                transition={{ duration: 9 + (i % 4) * 1.2, repeat: Infinity, ease: "linear", delay }}
              />
            );
          })}
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-14">
          {/* Two-sides layout: Right (title) | Left (stats) */}
          <div className="lg:flex items-start gap-10 lg:justify-between">
            {/* Right side: Title only */}
            <div className="flex-1 min-w-0">
              <motion.h2
                id="shipment-control-heading"
                className="text-right font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
                initial="initial"
                whileInView="animate"
                variants={{ animate: { transition: { staggerChildren: 0.22 } } }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.span variants={fadeUp} className="block">
                  تحكّم في جميع شحناتك بسهولة
                </motion.span>
                <motion.span variants={fadeUp} className="relative inline-block">
                  <span className="block">مع طرودي</span>
                  {/* animated gold underline */}
                  <motion.i
                    aria-hidden
                    className="absolute -bottom-1 right-0 h-1 rounded-full"
                    style={{ backgroundColor: gold, left: 0, transformOrigin: "right" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  />
                </motion.span>

              </motion.h2>
            </div>

            {/* Left side: Stats (outside cards) */}
            <motion.aside
              className="lg:w-[34%] w-full mt-10 lg:mt-0"
              initial="initial"
              whileInView="animate"
              variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-3 sm:p-4 text-white"
                    variants={fade}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {s.type === "text" ? (
                      <div className="text-2xl sm:text-3xl font-extrabold" style={{ color: gold }}>
                        {s.display}
                      </div>
                    ) : (
                      <CountUp target={s.target} suffix={s.suffix} className="text-2xl sm:text-3xl font-extrabold" />
                    )}
                    <div className="mt-1 text-xs sm:text-sm text-white/95">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>

          {/* Cards row: bottom-centered */}
          <motion.div
            className="mt-12 mx-auto max-w-7xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
            initial="initial"
            whileInView="animate"
            variants={{ animate: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } } }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {cards.map((c, idx) => (
              <motion.article
                key={idx}
                className="group w-full rounded-2xl p-6 md:p-6 border border-white/18 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.32)] hover:-translate-y-2 hover:border-white/40 hover:bg-white/14 transition-all duration-300 min-h-[240px] md:min-h-[280px]"
                style={{ backdropFilter: "blur(10px)" }}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ width: 52, height: 52, backgroundColor: "rgba(255,194,0,0.15)", border: `1.5px solid ${gold}` }}
                    aria-hidden
                  >
                    {c.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-extrabold" style={{ color: gold }}>
                      {c.title}
                    </h3>
                    {c.badge ? (
                      <span className="text-xs font-semibold rounded px-2 py-0.5" style={{ background: gold, color: "#1a2042" }}>
                        {c.badge}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-2.5 leading-relaxed text-base md:text-lg text-white/95">
                  {c.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
