import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("ar", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function BackToHomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-full border border-[#e4d9bd] bg-[#f4eddc] px-4 py-2 text-sm font-bold text-emerald-900 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ea]"
    >
      <span aria-hidden="true" className="text-base leading-none">
        →
      </span>
      العودة إلى الرئيسية
    </Link>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "ar_MA",
      siteName: "مدونة زراعية",
      publishedTime: post.date,
      authors: ["مدونة زراعية"],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ar",
    author: {
      "@type": "Organization",
      name: "مدونة زراعية",
    },
    publisher: {
      "@type": "Organization",
      name: "مدونة زراعية",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16 lg:py-20">
        <BackToHomeLink />

        <header className="mt-10 border-b border-stone-200/90 pb-8 sm:mt-12 sm:pb-10">
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

          <h1
            id="post-title"
            className="mt-4 text-3xl font-extrabold leading-[1.4] text-emerald-950 sm:text-4xl sm:leading-[1.35] lg:text-5xl"
          >
            {post.title}
          </h1>

          <div className="mt-8 overflow-hidden rounded-xl shadow-md">
            <Image
              src={post.coverImage}
              alt={`صورة غلاف مقال ${post.title}`}
              width={800}
              height={400}
              preload
              sizes="(min-width: 768px) 720px, calc(100vw - 48px)"
              className="h-56 w-full object-cover sm:h-80"
            />
          </div>
        </header>

        <article
          aria-labelledby="post-title"
          className="article-content mt-8 sm:mt-10"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 border-t border-stone-200/90 pt-8 sm:mt-14">
          <BackToHomeLink />
        </div>
      </main>
    </>
  );
}
