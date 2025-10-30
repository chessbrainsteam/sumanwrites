"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">Suman Writes</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughts on leadership, engineering, and everything that connects
            the technical with the human.
          </p>
        </motion.div>

        {/* Profile + intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-100">
            <Image
              src="/images/suman-profile.png"
              alt="Suman Kalavagunta"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi, I’m <strong>Suman Kalavagunta</strong> — a Director of
              Engineering, leadership thinker, and lifelong learner.
            </p>
            <p>
              After years of leading engineering teams, mentoring developers,
              and reflecting on both wins and tough lessons, I decided to start
              writing them down.
            </p>
            <p>
              This site is where I explore how technology and leadership
              intersect — how we lead, how we grow, and how we build things that
              truly matter.
            </p>
          </div>
        </motion.div>

        {/* What you’ll find */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            What You’ll Find Here
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li className="bg-white rounded-xl p-4 border hover:shadow-sm transition">
              💡 Leadership lessons from real career moments
            </li>
            <li className="bg-white rounded-xl p-4 border hover:shadow-sm transition">
              🧠 Engineering insights on scaling systems and simplifying
              architectures
            </li>
            <li className="bg-white rounded-xl p-4 border hover:shadow-sm transition">
              🔥 Thoughts on motivating teams, trust, and developer experience
            </li>
            <li className="bg-white rounded-xl p-4 border hover:shadow-sm transition">
              ⚙️ Strategy, APIs, and system design explained simply
            </li>
          </ul>
        </motion.section>

        {/* Book section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl border p-8 bg-gradient-to-br from-indigo-50 to-white text-center space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            My Book: <em>Human. Leader. Both.</em>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            <em>
              Reflections on What It Means to Lead with Empathy, Clarity, and
              Purpose
            </em>
          </p>
          <p className="text-gray-600">
            This book captures my learnings from nearly two decades in tech
            leadership — balancing clarity with compassion, structure with
            empathy, and ambition with purpose.
          </p>
          <Link
            href="https://www.amazon.com/dp/B0FDH79R5V"
            target="_blank"
            className="inline-block mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            📘 View on Amazon
          </Link>
        </motion.section>

        {/* Why I write */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Why I Write</h2>
          <p>
            I believe great engineering isn’t just about elegant systems —
            it’s about{" "}
            <strong>clarity, collaboration, and continuous learning</strong>.
          </p>
          <p>
            If you’re a <strong>tech leader, engineer, or curious learner</strong>, 
            I hope these essays help you see that leadership and technology 
            are not separate — they amplify each other.
          </p>
          <p className="text-indigo-700 font-medium">
            Let’s keep learning — and building — together.
          </p>
        </motion.section>
        {/* CTA to blog */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-16 text-center"
>
  <h2 className="text-2xl font-semibold text-gray-900">
    Ready to explore the ideas?
  </h2>
  <p className="text-gray-600 mt-2">
    Browse essays on leadership, engineering, and growth.
  </p>
  <Link
    href="/blog"
    className="inline-block mt-6 px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
  >
    ✍️ Read the Blog
  </Link>
</motion.section>

      </div>
    </div>
  );
}
