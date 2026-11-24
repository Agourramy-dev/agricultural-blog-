import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على رسالة مدونة زراعية وما تقدمه من معرفة زراعية عملية.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      <article className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_12px_-8px_rgba(47,62,39,0.25)] sm:p-12">
        <span
          aria-hidden="true"
          className="block h-1 w-14 rounded-full bg-emerald-700"
        />

        <h1 className="mt-6 text-3xl font-extrabold leading-[1.35] text-emerald-950 sm:text-4xl">
          من نحن
        </h1>

        <p className="mt-5 text-[17px] leading-9 text-stone-600 sm:text-lg sm:leading-10">
          مدونة زراعية منصة عربية مستقلة تُعنى بنشر المعرفة الزراعية العملية
          وتبسيطها، انطلاقاً من قناعة بأن قراراً زراعياً مبنياً على معلومة دقيقة
          أفضل من التجربة العشوائية. رسالتها تمكين المزارعين وأصحاب المشاريع
          الصغيرة والمهتمين بالزراعة المنزلية من فهم التربة والبذور والري
          والمحاصيل بأسلوب واضح وقابل للتطبيق. نقدّم مقالات ومبادئ توجيهية تجمع
          بين الخبرة الميدانية والمراجع العلمية، ونحرص على اختيار موضوعات تخدم
          الإنتاج والاستدامة في المنطقة العربية. ونسعد دائماً بأسئلتكم
          واقتراحاتكم لأنها تساعدنا على اختيار مواضيع المرحلة القادمة.
        </p>
      </article>
    </main>
  );
}
