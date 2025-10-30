import PostCard from "@/components/PostCard";
import FeaturedList from "@/components/FeaturedList";
import Pagination from "@/components/Pagination";
import { getAllPosts, getFeaturedPosts } from "@/lib/mdx";
import Link from "next/link";
import { UserGroupIcon, CogIcon } from "@heroicons/react/24/outline";


export const metadata = { title: "Blog — sumanwrites" };

type Search = { [key: string]: string | string[] | undefined };

export default function BlogPage({ searchParams }: { searchParams?: Search }) {
  const posts = getAllPosts();
  const featured = getFeaturedPosts(5);

  // category filter from ?category=Leadership
  const category = (searchParams?.category as string) || "All";

  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((p) => p.category?.toLowerCase() === category.toLowerCase());

  // pagination logic
  const rawPage = Number((searchParams?.page as string) ?? 1);
  const rawPageSize = Number((searchParams?.pageSize as string) ?? 24);

  const pageSize = Math.min(48, Math.max(6, isFinite(rawPageSize) ? rawPageSize : 24));
  const total = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, isFinite(rawPage) ? rawPage : 1), totalPages);

  const start = (page - 1) * pageSize;
  const pagePosts = filteredPosts.slice(start, start + pageSize);

  const query: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(searchParams ?? {})) {
    if (typeof v === "string") query[k] = v;
  }

const categories = [
  { name: "All" },
  { name: "Leadership", icon: "user" },
  { name: "Engineering", icon: "cog" },
];

 

  return (
    <div className="pt-2">
      <div className="container grid gap-8 lg:grid-cols-3">
        {/* Main grid */}
        <section className="lg:col-span-2 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 items-center">
       {categories.map(({ name, icon }) => {
  const active = name === category;
  return (
    <Link
      key={name}
      href={`/blog?category=${name === "All" ? "" : name}`}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border flex items-center gap-2 transition ${
        active
          ? "bg-indigo-600 text-white border-indigo-600"
          : "bg-white text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
      }`}
    >
      {icon === "user" && <UserGroupIcon className="h-4 w-4" />}
      {icon === "cog" && <CogIcon className="h-4 w-4" />}
      {name}
    </Link>
  );
})}

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePosts.length ? (
              pagePosts.map((p) => <PostCard key={p.slug} {...p} size="sm" />)
            ) : (
              <p className="text-gray-500 italic">No posts in this category yet.</p>
            )}
          </div>

          {/* Pagination */}
          <Pagination page={page} pageSize={pageSize} total={total} query={query} />
        </section>

        {/* Sidebar */}
        <section className="hidden lg:block">
          <FeaturedList items={featured} title="Featured" />
        </section>
      </div>
    </div>
  );
}
