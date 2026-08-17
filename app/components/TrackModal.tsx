"use client";

import { useEffect, useRef } from "react";

type TrackModalProps = {
  open: boolean;
  onClose: () => void;
  trackingNumber?: string;
};

export default function TrackModal({ open, onClose, trackingNumber }: TrackModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus close button on open
    const t = setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="track-modal-title"
      className="fixed inset-0 z-[2000] flex items-center justify-center px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Modal card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/30 bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        <div className="flex items-start justify-between gap-4" dir="rtl">
          <h3 id="track-modal-title" className="text-xl font-extrabold text-[#1a2042]">
            تتبع شحنتك
          </h3>
          <button
            ref={closeRef}
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm font-bold bg-[#ffc200] text-white shadow hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[#ffc200]/40"
            aria-label="إغلاق"
          >
            إغلاق
          </button>
        </div>

        <div className="mt-4 space-y-3" dir="rtl">
          {trackingNumber ? (
            <p className="text-slate-800">
              رقم التتبع: <span className="font-extrabold text-[#1a2042]">{trackingNumber}</span>
            </p>
          ) : (
            <p className="text-slate-700">لم يتم إدخال رقم تتبع.</p>
          )}
          <div className="rounded-xl bg-[#ffc200]/10 border border-[#ffc200]/30 p-4 text-sm text-slate-800">
            سيتم عرض حالة الشحنة هنا بعد ربط واجهة التتبع. هذه نافذة تجريبية قابلة للتوسعة لاحقًا.
          </div>
        </div>
      </div>
    </div>
  );
}
