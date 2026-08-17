export default function HowItWorks() {
  // 6 Arabic steps per new specification
  const steps = [
    {
      title: 'الدخول إلى موقع الشراء',
      desc: 'الدخول إلى موقع الذي ترغب بالشراء منه واختيار المنتجات وإضافتها إلى السلة.'
    },
    {
      title: 'تسوق الآن',
      desc: 'الذهاب إلى صفحة "تسوق الآن" ومشاهدة كيفية الطلب من الموقع المختار.'
    },
    {
      title: 'معلومات الشحن',
      desc: 'أخذ المعلومات اللازمة للشحن وإضافتها للموقع.'
    },
    {
      title: 'تأكيد الطلب',
      desc: 'الذهاب إلى خانة تأكيد الطلب وملء النموذج.'
    },
    {
      title: 'تجهيز الطرد',
      desc: 'المتجر يقوم بتجهيز الطرد بعد تأكيد الطلب.'
    },
    {
      title: 'التوصيل / نقطة الاستلام',
      desc: 'تُسلَّم طرودي عبر شركة توصيل أو تُرسل إلى نقطة الاستلام.'
    }
  ];

  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-6 lg:px-8 py-14"
      role="region"
      aria-labelledby="how-heading"
    >
      <header className="text-center mb-10">
        <h2
          id="how-heading"
          className="text-2xl sm:text-3xl font-extrabold text-[#1a2042]"
        >
          رحلة الطلب خطوة بخطوة
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          ست خطوات توضح انتقال الطلب من اختيار المنتج حتى استلامه
        </p>
      </header>

      {/* 3x2 responsive grid of connected cards */}
      <div className="relative" aria-label="ست خطوات لعملية الطلب">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            // Reorder so card 6 appears in position of card 4 (bottom left)
            const order = [0, 1, 2, 5, 4, 3];
            return order.map((origIndex, idx) => {
              const step = steps[origIndex];
              const displayNumber = origIndex + 1; // Display original step number
            const row = Math.floor(idx / 3); // 0 or 1
            const col = idx % 3;            // 0..2
              const last = idx === order.length - 1;
              return (
              <div
                key={idx}
                tabIndex={0}
                aria-label={`خطوة ${displayNumber}: ${step.title} - ${step.desc}`}
                className="group relative rounded-2xl bg-white/85 backdrop-blur-md border border-[#ffc200]/40 shadow-[0_6px_20px_rgba(255,194,0,0.14)] p-6 pt-10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ffc200]/40 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(255,194,0,0.28)]"
              >
                {/* Number badge */}
                <div className="absolute -top-5 -right-5 w-12 h-12 rounded-2xl bg-[#1a2042] text-[#ffc200] font-extrabold flex items-center justify-center shadow-[0_6px_18px_rgba(26,32,66,0.45)]" aria-hidden>
                  {displayNumber}
                </div>
                <h3 className="text-sm font-extrabold text-[#1a2042] mb-2 tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#1a2042]/80">{step.desc}</p>

                {/* Horizontal arrow to next in same row */}
                {col < 2 && row === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -left-10 -translate-y-1/2 w-16 h-10" aria-hidden>
                    <svg viewBox="0 0 120 48" fill="none" className="w-full h-full transform -scale-x-100" preserveAspectRatio="xMidYMid meet">
                      <path d="M6 24 H90" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                      <path d="M90 24 L78 16 M90 24 L78 32" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                {/* Horizontal arrows on bottom row - from card 4 to 5, and from card 5 to 6 */}
                {row === 1 && (idx === 4 || idx === 5) && (
                  <div className="hidden lg:block absolute top-1/2 -right-10 -translate-y-1/2 w-16 h-10" aria-hidden>
                    <svg viewBox="0 0 120 48" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                      <path d="M6 24 H90" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                      <path d="M90 24 L78 16 M90 24 L78 32" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {/* Straight vertical connector from step 3 to step 4 */}
                {idx === 2 && (
                  <div className="hidden lg:block absolute -bottom-12 right-1/2 translate-x-1/2 w-10 h-16" aria-hidden>
                    <svg viewBox="0 0 40 120" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                      <path d="M20 0 V90" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                      <path d="M20 90 L12 78 M20 90 L28 78" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {/* Mobile / small screens arrow: linear vertical flow */}
                {!last && (
                  <div className="lg:hidden mt-6 flex justify-center" aria-hidden>
                    <svg viewBox="0 0 40 90" fill="none" className="w-6 h-12" preserveAspectRatio="xMidYMid meet">
                      <path d="M20 4 V60" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                      <path d="M20 60 L12 48 M20 60 L28 48" stroke="#ffc200" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>
              );
            });
          })()}
        </div>
      </div>

      {/* Hidden descriptive text for screen readers */}
      <p className="sr-only" aria-live="polite">
        المخطط يعرض ست خطوات تبدأ بالدخول للموقع وتنتهي باستلام الطرد أو توصيله.
      </p>
    </section>
  );
}
