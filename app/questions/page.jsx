"use client";
import { useState } from "react";
import { questions } from "./data";

export default function QuestionsPage() {
  const [flipped, setFlipped] = useState(() => new Set());
  const [expanded, setExpanded] = useState(() => new Set());
  const source = (questions && questions.length > 0)
    ? questions
    : Array.from({ length: 20 }, (_, i) => `سؤال ${i + 1}`);
  const cards = source.map((q, i) => ({
    id: i + 1,
    title: q,
    answer: ` إجابة توضيحية مختصرة للسؤال رقم ${i + 1}.`,
  }));

  const toggleFlip = (id) => {
    setFlipped(prev => {
      const next = new Set();
      if (!prev.has(id)) next.add(id); // افتح واحدة فقط وأغلق الباقي
      return next;
    });
  };

  const toggleExpand = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <main className="q-section" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="text-right mb-12">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ffc200]/15 text-[#1f1040] border border-[#ffc200]/30">
              الأسئلة الشائعة
            </span>
          </div>  
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1a2042]">
            أهلاً بك في صفحة الأسئلة الشائعة
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            انقر على البطاقة في الجوال أو مرّر عليها في الكمبيوتر لمعرفة الإجابة.
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const rowIndex = Math.floor(idx / 4) % 5; // 5 ألوان لخمسة صفوف
            return (
              <article
                key={card.id}
                className={`card card-theme-${rowIndex} ${flipped.has(card.id) ? "is-flipped" : ""}`}
                role="button"
                tabIndex={0}
                aria-pressed={flipped.has(card.id)}
                onClick={() => toggleFlip(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFlip(card.id); }
                }}
              >
                <div className="card-inner">
                  <div className="card-face card-front">
                    <span className="card-badge">{card.id}</span>
                    <p className="card-title">{card.title}</p>
                  </div>
                  <div className="card-face card-back">
                    <span className="card-badge">{card.id}</span>
                    <p className={`card-answer ${expanded.has(card.id) ? '' : 'card-answer--clamp'}`}>{card.answer}</p>
                    <button
                      type="button"
                      className="card-more-btn"
                      onClick={(e) => { e.stopPropagation(); toggleExpand(card.id); }}
                      onKeyDown={(e) => { e.stopPropagation(); if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(card.id); } }}
                    >
                      {expanded.has(card.id) ? 'إظهار أقل' : 'عرض المزيد'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}