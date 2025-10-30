"use client";

import { ShareIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ArticleActions({ slug }: { slug: string }) {
  const shareUrl = encodeURIComponent(`https://www.sumanwrites.com/essays/${slug}`);
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  return (
    <div className="flex items-center justify-between mb-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to Blog
      </Link>

      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-indigo-600"
      >
        <ShareIcon className="h-5 w-5" />
        Share
      </Link>
    </div>
  );
}
