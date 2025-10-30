// lib/mdx.ts
import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function mdxToHtml(source: string) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
}

export type PostFrontmatter = {
  title: string;
  summary: string;
  date: string;          // ISO date
  featured?: boolean;
  tags?: string[];
  cover?: string;   
  category?: string;     // e.g., "/images/microphone.jpg"
  coverAlt?: string;     // accessible alt text
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

function safeList(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((f) => f.toLowerCase().endsWith(".mdx"));
}

export function getAllSlugs(): string[] {
  return safeList().map((f) => f.replace(/\.mdx$/i, "").trim());
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;

  if (!fm?.title || !fm?.summary || !fm?.date) {
    console.warn(`Skipping ${slug}: missing title/summary/date.`);
    return null;
  }

  return {
    title: fm.title,
    summary: fm.summary,
    date: fm.date,
    featured: !!fm.featured,
    tags: fm.tags ?? [],
    cover: fm.cover,
    category:fm.category,
    coverAlt: fm.coverAlt ?? fm.title,
    slug,
    content,
  };
}

function isPost(p: Post | null): p is Post {
  return p !== null;
}

export function getAllPosts(): Post[] {
  const posts = getAllSlugs().map(getPostBySlug).filter(isPost);
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getFeaturedPosts(max = 5): Post[] {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, max);
}

export function getAdjacent(slug: string): { prev: Post | null; next: Post | null } {
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx < all.length - 1 ? all[idx + 1] : null; // older
  const next = idx > 0 ? all[idx - 1] : null;              // newer
  return { prev, next };
}
