import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("ar", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

type PostCardProps = {
  post: Post;
  preload?: boolean;
};

export default function PostCard({ post, preload = false }: PostCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_2px_12px_-8px_rgba(47,62,39,0.25)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_22px_45px_-24px_rgba(47,82,39,0.45)] focus-within:border-emerald-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        <Image
          src={post.coverImage}
          alt={`صورة غلاف مقال ${post.title}`}
          width={400}
          height={250}
          preload={preload}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-800">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-emerald-600"
          >
            <path d="M20 4C11 5 5 10 5 19c9 0 14-6 15-15Z" />
            <path d="M5 19c3.5-4.5 7-7.5 11-10" />
          </svg>
          <time dateTime={post.date}>
            {dateFormatter.format(new Date(post.date))}
          </time>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-9 text-stone-900 transition-colors group-hover:text-emerald-900 sm:text-2xl sm:leading-10">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-8 text-stone-600">
          {post.excerpt}
        </p>

        <div className="mt-6 border-t border-stone-100 pt-5">
          <Link
            href={`/posts/${post.slug}`}
            aria-label={`اقرأ المزيد: ${post.title}`}
            className="inline-flex w-fit items-center gap-2 border-b-2 border-emerald-200 pb-1 text-sm font-bold text-emerald-800 transition-colors hover:border-emerald-700 hover:text-emerald-950 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
          >
            اقرأ المزيد
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            >
              ←
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
