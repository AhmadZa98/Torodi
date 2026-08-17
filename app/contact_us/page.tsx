import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaLocationDot, FaPaperPlane } from "react-icons/fa6";

function ContactUs() {
    const phoneNumber = "+972586306057";
    const emailAddress = "info@torodi.com"; // يمكن تعديله بسهولة لاحقًا
        const locationQuery = "ضواحي القدس - السواحرة الشرقية - بجانب حاجز الكونتينر الشارع الرئيسي";
        const mapUrl = "https://maps.app.goo.gl/82k6kjuk5gVwo63UA";
        // استخدمنا رابط التضمين الرسمي كما زودتني به لضمان ظهور الدبوس بدقة
        const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3393.0091945686886!2d35.290071999999995!3d31.742949999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQ0JzM0LjYiTiAzNcKwMTcnMjQuMyJF!5e0!3m2!1sar!2s!4v1762193224219!5m2!1sar!2s";
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative sub logo refined */}
                <img
                    src="/subLogo.svg"
                    alt="شعار طرودي الثانوي"
                    className="hidden md:block absolute top-6 right-50 w-32 lg:w-40 opacity-70 transition-transform duration-500 ease-out hover:rotate-6 hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                />
            <div className="max-w-6xl mx-auto">
                {/* <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
                    <p className="text-lg text-gray-600">نحن هنا للإجابة على استفساراتك</p>
                </div> */}

                {/* عنوان ترحيبي يمتد على عرض العمودين وفي المنتصف */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">أهلاً بكم في طرودي - خدمة البريد والطرود الموثوقة</h2>
                    <p className="mt-2 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        نرحب بتواصلكم معنا ونقدّر اختياركم لخدماتنا. في طرودي، نلتزم بتقديم أفضل تجربة في إرسال واستقبال الطرود بكفاءة واحترافية عالية.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 items-stretch">
                    {/* النصوص على اليمين */}
                    <div className="order-1 lg:order-2 text-right w-full h-full">
                        <div className="bg-white/80 rounded-xl p-4 md:p-5 border border-[#ffc200]/40 shadow-[0_8px_32px_rgba(255,194,0,0.12)] backdrop-blur w-full h-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">فريقنا المتخصص جاهز لخدمتكم</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                يسعى فريق دعم العملاء لدينا إلى الإجابة على جميع استفساراتكم وحل أي مشاكل قد تواجهونها في أسرع وقت ممكن. نحن ملتزمون بضمان تجربة خدمة سلسة وآمنة من البداية إلى النهاية.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">طرق التواصل معنا</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">اختر الطريقة التي تناسبك للتواصل معنا:</p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#contactForm" className="flex items-start justify-end gap-3 no-underline" aria-label="اذهب إلى نموذج التواصل">
                                        <div className="text-right">
                                            <div className="font-medium text-gray-900">نموذج التواصل الإلكتروني</div>
                                            <div className="text-gray-600 text-sm">استخدم نموذجنا المباشر لإرسال استفساراتك أو طلباتك بسهولة</div>
                                        </div>
                                        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                            <FaPaperPlane size={16} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${phoneNumber.replace(/[^+\\d]/g, "")}`} className="flex items-start justify-end gap-3 no-underline" aria-label="اتصل بنا">
                                        <div className="text-right">
                                            <div className="font-medium text-gray-900">الهاتف</div>
                                            <div className="text-gray-600 text-sm">اتصل بنا مباشرة للحصول على إجابات فورية</div>
                                        </div>
                                        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                            <FaPhone size={16} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${emailAddress}`} className="flex items-start justify-end gap-3 no-underline" aria-label="أرسل بريدًا إلكترونيًا">
                                        <div className="text-right">
                                            <div className="font-medium text-gray-900">البريد الإلكتروني</div>
                                            <div className="text-gray-600 text-sm">أرسل لنا رسالتك وسنرد عليك في أقرب وقت</div>
                                        </div>
                                        <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                            <FaEnvelope size={16} />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start justify-end gap-3 no-underline" aria-label="افتح الموقع على الخريطة في تبويب جديد">
                                        <div className="text-right">
                                            <div className="font-medium text-gray-900">الزيارة الشخصية</div>
                                            <div className="text-gray-600 text-sm">تفضل بزيارة مكتبنا الرئيسي في ضواحي القدس - السواحرة الشرقية - بجانب حاجز الكونتينر الشارع الرئيسي</div>
                                        </div>
        							<span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                            <FaLocationDot size={16} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* الفورم على اليسار بحجم أصغر */}
                    <div className="order-2 lg:order-1 w-full h-full">
                        <form id="contactForm" className="bg-white shadow-lg rounded-xl p-4 md:p-5 space-y-4 border-2 border-[#ffc200] w-full h-full" action="contactForm">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-right text-sm font-medium text-gray-700">
                                    الاسم <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffc200] focus:border-transparent transition duration-200 text-right"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-right text-sm font-medium text-gray-700">
                                    العنوان
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffc200] focus:border-transparent transition duration-200 text-right"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-right text-sm font-medium text-gray-700">
                                    البريد الإلكتروني <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffc200] focus:border-transparent transition duration-200 text-right"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mobile" className="block text-right text-sm font-medium text-gray-700">
                                    رقم الهاتف <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffc200] focus:border-transparent transition duration-200 text-right"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-right text-sm font-medium text-gray-700">
                                    الرسالة <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffc200] focus:border-transparent transition duration-200 resize-none text-right"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ffc200] hover:bg-[#e6af00] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ffc200] focus:ring-offset-2"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>

                    {/* خريطة جوجل في الأسفل */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 text-right mb-4">موقعنا على الخريطة</h3>
                        <div className="relative w-full overflow-hidden rounded-xl border-2 border-[#ffc200] shadow-[0_8px_32px_rgba(255,194,0,0.12)] h-[420px]">
                            <iframe
                                src={mapEmbedSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                aria-label="خريطة موقع طرودي"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default ContactUs;
