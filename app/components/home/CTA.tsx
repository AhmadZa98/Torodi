import Image from "next/image";

export default function CTA() {
  return (
    <section dir="rtl" className="w-full bg-white py-16" role="region" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-white flex flex-col lg:flex-row-reverse items-stretch gap-0 min-h-[600px]">
          {/* Image section - larger, full height on the right */}
          <div className="lg:w-3/5 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <Image
              src="/man4.png"
              alt="رجل يتسوق عبر الإنترنت"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="w-full h-auto max-h-[800px] object-contain rounded-2xl scale-200"
              priority={false}
            />
          </div>
          
          {/* Content section - centered */}
          <div className="lg:w-2/5 flex items-center justify-center p-8 lg:p-12">
            <div className="text-center max-w-xl">
              <h2 id="cta-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2042]">جاهز تبدأ رحلتك بالتسوّق العالمي؟</h2>
              <p className="mt-4 text-slate-700">تواصل معنا لبدء طلبك أو انطلق مباشرة للتسوّق من المتاجر العالمية المعتمدة</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="/contact_us" aria-label="الانتقال إلى صفحة تواصل معنا" className="px-5 py-3 rounded-xl bg-[#1a2042] text-white font-semibold hover:brightness-110 transition border border-[#1a2042] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffc200]">تواصل معنا</a>
                <a href="/shop-now" aria-label="الانتقال إلى صفحة تسوق الآن" className="px-5 py-3 rounded-xl bg-[#ffc200] text-[#1a2042] font-semibold hover:brightness-105 transition border border-[#ffc200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a2042]">تسوق الآن</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
