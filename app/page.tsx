import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#e4d9bd] bg-[#f4eddc] px-4 py-1.5 text-sm font-medium text-emerald-900">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-emerald-600"
          />
          معرفة زراعية تنمو مع كل موسم
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.3] text-emerald-950 sm:text-5xl lg:text-6xl">
          مدونة زراعية
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
          أهلاً بك في مدونتنا الزراعية العربية؛ مساحة نشارك فيها المعرفة والخبرات
          حول الزراعة والعناية بالنباتات والاستدامة.
        </p>
      </header>

      <section aria-labelledby="latest-posts" className="mt-16 sm:mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200/90 pb-5">
          <div>
            <h2
              id="latest-posts"
              className="text-2xl font-bold text-stone-900 sm:text-3xl"
            >
              أحدث المقالات
            </h2>
            <p className="mt-2 text-sm text-stone-500 sm:text-base">
              محتوى عملي يبدأ من التربة ولا ينتهي عند الحصاد.
            </p>
          </div>
          <p className="text-sm text-stone-400">{posts.length} مقالات</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} preload={index === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
