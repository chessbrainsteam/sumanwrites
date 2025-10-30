// components/FeaturedList.tsx
import Link from "next/link";

export default function FeaturedList({
  items,
  title = "Featured",
}: {
  items: { slug: string; title: string; cover?: string; coverAlt?: string; date: string }[];
  title?: string;
}) {
  return (
    <aside className="sticky top-6">
      <h2 className="text-base font-semibold mb-4">{title}</h2>
      <ul className="space-y-4">
        {items.map((p) => (
          <li key={p.slug} className="flex gap-3">
            <Link href={`/essays/${p.slug}`} className="block h-14 w-20 shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
              {p.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.cover} alt={p.coverAlt || p.title} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-gray-400 text-xs">No image</div>
              )}
            </Link>
            <div className="min-w-0">
              <Link href={`/essays/${p.slug}`} className="font-medium hover:underline line-clamp-2">
                {p.title}
              </Link>
              <p className="text-[11px] text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
