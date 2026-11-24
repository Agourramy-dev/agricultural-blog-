import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "تواصل مع فريق مدونة زراعية للأسئلة والاقتراحات.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-14 sm:py-20">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold leading-[1.35] text-emerald-950 sm:text-4xl">
          اتصل بنا
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
          لديك سؤال أو اقتراح؟ اكتب لنا رسالتك وسنعود إليك في أقرب وقت ممكن.
        </p>
      </header>

      <div className="mt-8 sm:mt-10">
        <ContactForm />
      </div>
    </main>
  );
}
