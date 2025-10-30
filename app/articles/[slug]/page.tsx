import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllSlugs, getPostBySlug, getAdjacent, getFeaturedPosts } from "@/lib/mdx";
import ArticleActions from "@/components/ArticleActions";
import remarkGfm from "remark-gfm";


export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — sumanwrites`,
    description: post.summary,
  };
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const { prev, next } = getAdjacent(params.slug);
  const featured = getFeaturedPosts(3);

  return (
    <div className="container grid lg:grid-cols-4 gap-10 pt-6">
      {/* Main content */}
      <article className="reading lg:col-span-3">
        {/* Top navigation and share */}
        <ArticleActions slug={params.slug} />

        {/* Cover */}
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.coverAlt || post.title}
            width={800}
            height={400}
            className="rounded-2xl mb-6 w-full object-cover"
          />
        )}

        {/* Title + Date */}
        <h1 className="text-3xl font-semibold leading-tight mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString()}
        </p>

        {/* MDX Content */}
        <div className="prose prose-lg prose-headings:font-semibold prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
          <MDXRemote
  source={post.content}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  }}
/>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-sm">
          <Link href="/blog" className="text-gray-700 hover:text-black">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-4">
            {prev && (
              <Link
                href={`/articles/${prev.slug}`}
                className="text-gray-700 hover:text-black truncate max-w-[40ch]"
              >
                ← {prev.title}
              </Link>
            )}
            {next && (
              <Link
                href={`/articles/${next.slug}`}
                className="text-gray-700 hover:text-black truncate max-w-[40ch]"
              >
                {next.title} →
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="hidden lg:block space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
          More from Suman Writes
        </h3>

        {featured.map((item) => (
          <Link
            key={item.slug}
            href={`/articles/${item.slug}`}
            className="group block border rounded-lg p-3 hover:shadow-sm transition"
          >
            {item.cover && (
              <Image
                src={item.cover}
                alt={item.title}
                width={300}
                height={180}
                className="rounded-md mb-2 object-cover"
              />
            )}
            <p className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </aside>
    </div>
  );
}
