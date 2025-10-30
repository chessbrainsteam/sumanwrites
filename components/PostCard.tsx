import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  summary?: string;
  slug: string;
  date: string;
  cover?: string | null;
  size?: "sm" | "md";
};

export default function PostCard({
  title,
  summary,
  slug,
  date,
  cover,
  size = "sm",
}: Props) {
  const compact = size === "sm";

  return (
    <article
      className={`relative flex flex-col rounded-2xl border bg-white/60 backdrop-blur-sm
                  hover:shadow-md transition overflow-hidden p-4`}
    >
      {/* ---- Image ---- */}
      {cover && (
        <Link href={`/essays/${slug}`} className="block overflow-hidden rounded-xl">
          <div className="relative w-full h-40">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover object-top rounded-xl"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>
        </Link>
      )}

      {/* ---- Text ---- */}
      <div className="flex flex-col justify-between flex-1 pt-3">
        <div>
          <h3
            className="font-semibold text-gray-900 text-base leading-snug 
                       line-clamp-2 min-h-[3.2rem]"
            style={{ wordBreak: "break-word" }}
          >
            <Link href={`/essays/${slug}`}>{title}</Link>
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {new Date(date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          {summary && (
            <p
              className="text-sm text-gray-700 mt-2 line-clamp-3"
              style={{ minHeight: compact ? "3.8rem" : "auto" }}
            >
              {summary}
            </p>
          )}
        </div>

        {/* ---- Read more ---- */}
        <div className="pt-3 mt-auto">
          <Link
            href={`/essays/${slug}`}
            className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
