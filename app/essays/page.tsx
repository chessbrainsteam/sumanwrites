// app/essays/page.tsx
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata = { title: "Essays — sumanwrites" };

export default function EssaysIndex() {
  const posts = getAllPosts();
  return (
    <div className="reading pt-4">
      <h1 className="text-3xl font-semibold mb-6">Essays</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
