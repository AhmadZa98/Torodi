import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  const phone = "+972586306057";
  const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}`;
  const email = "info@torodi.com";
  const mapUrl = "https://maps.app.goo.gl/82k6kjuk5gVwo63UA";

  return (
    <footer className="mt-16 bg-[#0f172a] text-white/85 border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* About */}
          <div className="space-y-4 text-right" dir="rtl">
            <div className="flex items-center justify-end">
              <Image src="/logo2.svg" alt="Torodi Logo" width={140} height={40} />
            </div>
            <h3 className="text-lg font-semibold text-[#ffc200]">طرودي</h3>
            <p className="text-sm leading-7 text-white/80">
              عنوانك للتسوق من كل مكان في العالم. نربطك بأشهر المتاجر العالمية ونوصل طلباتك بسهولة داخل فلسطين.
            </p>
            <div className="flex items-center justify-end gap-3">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaFacebookF size={14} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaInstagram size={14} />
              </a>
              <a href="https://tiktok.com/@" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaTiktok size={14} />
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#25D366] transition" aria-label="WhatsApp">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-right" dir="rtl">
            <h3 className="text-lg font-semibold text-[#ffc200]">تواصل معنا</h3>
            <ul className="space-y-3">
              <li>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/85 hover:text-white transition flex-row-reverse">
                  <span>ضواحي القدس – السواحرة الشرقية – بجانب حاجز الكونتينر</span>
                  <FaLocationDot size={16} className="shrink-0" />
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/[^+\\d]/g, "")}`} className="inline-flex items-center gap-2 text-white/85 hover:text-white transition flex-row-reverse">
                  {/* Force left-to-right for the phone so the leading + stays on the left */}
                  <span dir="ltr" style={{ unicodeBidi: 'embed' }}>{phone}</span>
                  <FaPhone size={16} className="shrink-0" />
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-white/85 hover:text-white transition flex-row-reverse">
                  <span>{email}</span>
                  <FaEnvelope size={16} className="shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-right" dir="rtl">
            <h3 className="text-lg font-semibold text-[#ffc200]">روابط سريعة</h3>
            <ul className="space-y-2 text-white/85">
              <li><Link className="hover:text-white transition" href="/">الرئيسية</Link></li>
              <li><Link className="hover:text-white transition" href="/about">عن الشركة</Link></li>
              <li><Link className="hover:text-white transition" href="/services">خدماتنا</Link></li>
              <li><Link className="hover:text-white transition" href="/contact_us">تواصل معنا</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/70 flex items-center justify-between flex-wrap gap-2">
          <p>© {year} Torodi. جميع الحقوق محفوظة.</p>
          <p>البريد والطرود الموثوقة • سرعة | أمان | احترافية</p>
        </div>
      </div>
    </footer>
  );
}
