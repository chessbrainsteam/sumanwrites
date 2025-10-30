// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "sumanwrites — essays by Suman Kalavagunta",
  description: "Essays on leadership, engineering, and human systems.",
  openGraph: {
    title: "sumanwrites",
    description: "Essays on leadership, engineering, and human systems.",
    type: "website",
    url: "https://sumanwrites.com",
  },
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main className="container pb-16">{children}</main>
        <footer className="container border-t border-gray-200 py-10 text-sm text-gray-600">
          © {new Date().getFullYear()} Suman Kalavagunta.
        </footer>
      </body>
    </html>
  );
}
