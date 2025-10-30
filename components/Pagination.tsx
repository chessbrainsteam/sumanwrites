// components/Pagination.tsx  (SERVER component)
import Link from "next/link";

export default function Pagination({
  page,
  pageSize,
  total,
  query,
}: {
  page: number;
  pageSize: number;
  total: number;
  query?: Record<string, string | undefined>;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(page, 1), totalPages);

  const mkHref = (p: number) => {
    const sp = new URLSearchParams();
    if (query) {
      for (const [k, v] of Object.entries(query)) if (v) sp.set(k, v);
    }
    sp.set("page", String(p));
    sp.set("pageSize", String(pageSize));
    return `/blog?${sp.toString()}`;
  };

  if (totalPages <= 1) return null;

  // simple sliding window of up to 5 pages
  const start = Math.max(1, current - 2);
  const end = Math.min(totalPages, start + 4);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className="mt-6 flex items-center justify-between gap-2">
      <Link
        aria-disabled={current === 1}
        href={current === 1 ? "#" : mkHref(current - 1)}
        className={`px-3 py-1 rounded border ${current === 1 ? "pointer-events-none opacity-40" : ""}`}
      >
        Prev
      </Link>

      <div className="flex items-center gap-1">
        {start > 1 && <Link href={mkHref(1)} className="px-3 py-1 rounded border">1</Link>}
        {start > 2 && <span className="px-2 text-gray-500">…</span>}
        {pages.map((p) => (
          <Link
            key={p}
            href={mkHref(p)}
            className={`px-3 py-1 rounded border ${p === current ? "bg-indigo-600 text-white border-indigo-600" : ""}`}
          >
            {p}
          </Link>
        ))}
        {end < totalPages - 1 && <span className="px-2 text-gray-500">…</span>}
        {end < totalPages && (
          <Link href={mkHref(totalPages)} className="px-3 py-1 rounded border">
            {totalPages}
          </Link>
        )}
      </div>

      <Link
        aria-disabled={current >= totalPages}
        href={current >= totalPages ? "#" : mkHref(current + 1)}
        className={`px-3 py-1 rounded border ${current >= totalPages ? "pointer-events-none opacity-40" : ""}`}
      >
        Next
      </Link>
    </nav>
  );
}
