export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 text-center text-sm text-stone-500">
        <p>© {year} مدونة زراعية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
