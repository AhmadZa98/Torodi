"use client";

import { useState } from "react";
import SplitText from "@/components/SplitText";
import TrackModal from "@/app/components/TrackModal";

export default function TrackBox() {
  const [trackingId, setTrackingId] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex items-center" dir="rtl">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {/* Slogan on the right in the same line with animated accent */}
        <div className="Slogan flex items-center justify-end gap-2" dir="rtl">
          <span className="slogan-accent inline-block px-3 py-1 rounded-lg bg-[#ffc200]/10">طرودي</span>
          <SplitText
            text="عنوانك للتسوق من كل مكان في العالم"
            tag="span"
            className="inline-block text-slate-900"
            splitType="words" 
            delay={60}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="right"
          />
        </div>
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
          <label htmlFor="hero-input" className="sr-only">
            أدخل رقم التتبع
          </label>
          <div className="flex items-stretch gap-2">
            <input
              id="hero-input"
              type="text"
              placeholder=" اكتب رقم التتبع الخاص بك ..."
              className="flex-1 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white/70 rounded-xl border-2 border-[#ffc200] outline-none transition duration-200
                               focus:border-[#ffc200] focus:ring-4 focus:ring-[#ffc200]/40 shadow-sm focus:shadow-[0_10px_28px_rgba(255,194,0,0.28)]"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button
              type="submit"
              className="shrink-0 px-5 py-3 rounded-xl bg-[#ffc200] text-white font-semibold shadow-[0_10px_28px_rgba(255,194,0,0.28)]
                               hover:shadow-[0_12px_30px_rgba(255,194,0,0.35)] hover:brightness-105 active:brightness-95 transition
                               focus:outline-none focus:ring-4 focus:ring-[#ffc200]/40"
              onClick={() => setOpen(true)}
            >
              تتبع
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-600">أدخل رقم الشحنة ثم اضغط تتبع.</p>
        </div>
      </form>

      <TrackModal open={open} onClose={() => setOpen(false)} trackingNumber={trackingId} />
    </div>
  );
}
