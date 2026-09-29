"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skillCategories } from "@/data/skills";

const colorMap = {
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  yellow: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  white: "bg-zinc-500/15 text-zinc-300 border-zinc-500/20",
  teal: "bg-teal-500/15 text-teal-400 border-teal-500/20",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  pink: "bg-pink-500/15 text-pink-400 border-pink-500/20",
  green: "bg-green-500/15 text-green-400 border-green-500/20",
  gray: "bg-zinc-600/15 text-zinc-400 border-zinc-600/20",
  red: "bg-red-500/15 text-red-400 border-red-500/20",
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-[var(--bg-primary)]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest mb-2">Technical Skills</p>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Technologies I Work With
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            A range of tools and technologies I use to build full-stack web applications, organized by category.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIdx * 0.07 }}
              className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)]/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <h3 className="text-[var(--text-primary)] font-semibold text-sm">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, color }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${colorMap[color] || colorMap.blue}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
