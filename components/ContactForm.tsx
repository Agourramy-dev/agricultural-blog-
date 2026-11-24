"use client";

import { useState, type FormEvent } from "react";

const fieldClassName =
  "w-full rounded-xl border border-stone-200 bg-[#fffdf8] px-4 py-3 text-[15px] text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-[0_2px_12px_-8px_rgba(47,62,39,0.25)] sm:p-8"
    >
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
          <p>شكراً لتواصلك! تم استلام رسالتك بنجاح، وسنعود إليك قريباً.</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-stone-700"
          >
            الاسم
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="اسمك الكامل"
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-stone-700"
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@example.com"
            dir="ltr"
            className={`${fieldClassName} text-left`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-bold text-stone-700"
        >
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="اكتب رسالتك هنا..."
          className={`${fieldClassName} resize-y leading-7`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-800 px-7 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
      >
        إرسال
      </button>
    </form>
  );
}
