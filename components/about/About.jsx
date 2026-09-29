"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const highlights = [
  { icon: "📚", title: "Learning Background", desc: "Programming Hero Complete Web Development Course — 6-month MERN + Next.js Bootcamp" },
  { icon: "🛠️", title: "Practical Focus", desc: "Building real-world applications that solve actual problems, not just tutorial clones" },
  { icon: "📖", title: "Continuous Growth", desc: "Self-studying JavaScript through books, docs, and practice alongside formal training" },
  { icon: "🎯", title: "Career Goal", desc: "Looking for junior MERN/Full-Stack opportunities where I can contribute and grow" },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-[var(--bg-secondary)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest mb-2">About Me</p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              I&apos;m Arzoo Ahmed, a junior web developer from Dhaka, Bangladesh, currently pursuing my BSS Honours degree while actively building full-stack web applications. I discovered programming through curiosity and turned it into a focused skill through structured learning and hands-on projects.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              My development journey started with Programming Hero&apos;s Complete Web Development Course, where I completed a 6-month intensive MERN + Next.js bootcamp. Alongside formal training, I study JavaScript deeply through books and official documentation, and build projects that reflect real-world use cases.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              I work across the full stack — building responsive React frontends, RESTful Node.js/Express backends, and MongoDB databases — with a growing focus on performance, accessibility, and clean code architecture. I also have working knowledge of Firebase for authentication and hosting, and Stripe for payment integration.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Currently, I&apos;m deepening my backend skills, learning Docker for containerization, and improving my understanding of production-ready application architecture. My goal is to join a team where I can contribute meaningfully, learn from experienced developers, and grow steadily as a professional.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Open to Opportunities
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
