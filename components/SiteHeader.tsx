"use client";

import Link from "next/link";
import { InformationCircleIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: "About", icon: InformationCircleIcon },
    { href: "/blog", label: "Blog", icon: BookOpenIcon },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="container max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
      

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative inline-flex items-center gap-2 transition-colors ${
                  active ? "text-indigo-700" : "hover:text-indigo-700"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}

                {/* Active underline animation */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
