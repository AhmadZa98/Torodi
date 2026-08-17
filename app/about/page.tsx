"use client";
import { FaLocationDot, FaTruck, FaGlobe, FaBoxOpen, FaShield } from "react-icons/fa6";
import SplitText from "@/components/SplitText";
import CitiesGrid from "@/components/CitiesGrid";

function About() {
    return (
        <>
            <style jsx global>{`
                .split-parent .split-word:nth-child(2),
                .split-parent .split-word:nth-child(3),
                .split-parent .split-word:nth-child(4) {
                    color: #ffc200;
                }
            `}</style>
            <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h1>
                    <div className="mx-auto mb-4 h-1.5 w-34 rounded-full bg-gradient-to-r from-[#ffc200] via-[#ffd54d] to-[#ffc200] shadow-[0_0_12px_rgba(255,194,0,0.6)]"></div>
                    <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">
                        طرودي تسهّل عليك التسوّق من أي متجر عالمي واستلام طلباتك داخل فلسطين بسرعة وأمان. نقدم عنوان شحن دولي خاص بك، نجمع الطرود من المتاجر، ونوصلها إلى باب منزلك.
                    </p>
                </div>

                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                    {/* Right: Narrative */}
                    <div className="order-1 lg:order-2 text-right space-y-5">
                        <p className="text-gray-700 leading-relaxed">
                            خدماتنا مُصممة لتكون بسيطة وشفافة — أسعار واضحة، متابعة لحظة بلحظة، ودعم فني جاهز لمساعدتك في كل خطوة.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            في طرودي، نقدم تجربة متكاملة تشمل:
                        </p>

                        {/* Features list */}
                        <ul className="space-y-3">
                            <li className="flex items-start justify-end gap-3">
                                <div className="text-right">
                                    <div className="font-medium text-gray-900">توفير عناوين شحن دولية خاصة بك.</div>
                                </div>
                                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                    <FaGlobe size={16} />
                                </span>
                            </li>
                            <li className="flex items-start justify-end gap-3">
                                <div className="text-right">
                                    <div className="font-medium text-gray-900">استلام وتجميع الطرود القادمة من مختلف المتاجر.</div>
                                </div>
                                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                    <FaBoxOpen size={16} />
                                </span>
                            </li>
                            <li className="flex items-start justify-end gap-3">
                                <div className="text-right">
                                    <div className="font-medium text-gray-900">توصيل الطلبات إلى باب منزلك في جميع المدن الفلسطينية.</div>
                                </div>
                                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                    <FaTruck size={16} />
                                </span>
                            </li>
                            <li className="flex items-start justify-end gap-3">
                                <div className="text-right">
                                    <div className="font-medium text-gray-900">دعم فني ومتابعة فورية لكل شحنة حتى تصل بأمان.</div>
                                </div>
                                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc200]/15 text-[#ffc200]">
                                    <FaShield size={16} />
                                </span>
                            </li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            نهدف إلى جعل التسوق العالمي سهلاً وآمناً لكل فلسطيني، مع ضمان سرعة الخدمة ووضوح الإجراءات، لأننا نؤمن أن كل طرد يحمل قصة... وقصتك تبدأ من طرودي.
                        </p>
                    </div>

                    {/* Left: Image / Highlight */}
                    <div className="order-2 lg:order-1 w-full flex items-center justify-center overflow-hidden rounded-xl group">
                        <img
                            src="/man5.png"
                            alt="فريق طرودي"
                            className="w-full object-cover max-h-[520px] rounded-xl transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                        />
                    </div>
                    
                </div>
            </div>
            {/* Cities coverage section */}
            <CitiesGrid />
        </section>
        </>
    );
}

export default About;