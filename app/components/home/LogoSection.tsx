"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";

export default function LogoSection() {
  const [logoImagesLoaded, setLogoImagesLoaded] = useState(false);

  useEffect(() => {
    const logoImages = [
      "/LogoLoop/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766240.png",
      "/LogoLoop/aliexpress-icon.png",
      "/LogoLoop/vecteezy_alibaba-logo-rounded-alibaba-logo_54650798.png",
      "/LogoLoop/vecteezy_shein-logo-rounded-shein-logo_54650813.png",
      "/LogoLoop/vecteezy_temu-app-icon-on-transparent-background_55607316.png",
      "/LogoLoop/iHerb-Symbol.png",
    //   "/LogoLoop/Banggood.png",
      "/LogoLoop/ksp_logo.png",
    ];

    let loadedCount = 0;
    const totalImages = logoImages.length;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setLogoImagesLoaded(true);
      return;
    }

    logoImages.forEach((src) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) setLogoImagesLoaded(true);
      };
      img.src = src;
    });
  }, []);

  return (
    <motion.section
      className="mx-auto max-w-7xl px-6 lg:px-8 mt-13 mb-14"
      initial={{ opacity: 0, y: 60 }}
      animate={logoImagesLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <motion.h3
        className="text-xl font-extrabold text-slate-900 mb-2 text-center w-full"
        style={{ letterSpacing: "-0.5px", textShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        animate={logoImagesLoaded ? { y: [0, -3, 0] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        المتاجر العالمية المعتمدة من <span style={{ color: "#ffc200", fontWeight: "900" }}>طرودي</span>
      </motion.h3>
      <motion.div
        className="rounded-2xl border-2 border-[#ffc200]/40 bg-white/70 backdrop-blur-md p-6 shadow-[0_8px_32px_rgba(255,194,0,0.15)] flex flex-col items-center"
        animate={logoImagesLoaded ? {
          y: [0, -4, 0],
          boxShadow: [
            "0 8px 32px rgba(255,194,0,0.15)",
            "0 12px 36px rgba(255,194,0,0.2)",
            "0 8px 32px rgba(255,194,0,0.15)",
          ],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl md:max-w-4xl scale-90 md:scale-100">
            <LogoLoop
              logos={[
                { src: "/LogoLoop/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766240.png", alt: "Amazon", href: "https://amazon.com" },
                { src: "/LogoLoop/aliexpress-icon.png", alt: "AliExpress", href: "https://aliexpress.com" },
                { src: "/LogoLoop/vecteezy_alibaba-logo-rounded-alibaba-logo_54650798.png", alt: "Alibaba", href: "https://alibaba.com" },
                { src: "/LogoLoop/vecteezy_shein-logo-rounded-shein-logo_54650813.png", alt: "Shein", href: "https://shein.com" },
                { src: "/LogoLoop/vecteezy_temu-app-icon-on-transparent-background_55607316.png", alt: "Temu", href: "https://temu.com" },
                { src: "/LogoLoop/iHerb-Symbol.png", alt: "iHerb", href: "https://iherb.com" },
                // { src: "/LogoLoop/Banggood.png", alt: "Banggood", href: "https://banggood.com" },
                { src: "/LogoLoop/ksp_logo.png", alt: "KSP", href: "https://ksp.co.il" },
              ]}
              speed={110}
              direction="left"
              logoHeight={32}
              gap={24}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="شركاء ومنصات التسوق"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
