import Link from "next/link";

const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصل بنا" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f4ea]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 py-4 sm:flex-row sm:justify-between">
        <Link
          href="/"
          aria-label="مدونة زراعية - الصفحة الرئيسية"
          className="group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ea]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 text-[#f4eddc] shadow-sm transition-colors group-hover:bg-emerald-900">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M20 4C11 5 5 10 5 19c9 0 14-6 15-15Z" />
              <path d="M5 19c3.5-4.5 7-7.5 11-10" />
            </svg>
          </span>
          <span className="text-lg font-extrabold text-emerald-950 sm:text-xl">
            مدونة زراعية
          </span>
        </Link>

        <nav aria-label="التنقل الرئيسي">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-[#eee6d5] hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
