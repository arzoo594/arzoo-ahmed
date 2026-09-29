"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "mern", label: "MERN" },
  { id: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, inView] = useInView({ threshold: 0.05 });

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-[var(--bg-secondary)]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Real-world applications built with the MERN stack and modern web technologies. Each project solves a genuine problem.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 ${
                activeFilter === id
                  ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                  : "bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
              }`}
              aria-pressed={activeFilter === id}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-12">No projects found for this filter.</p>
        )}
      </div>
    </section>
  );
}
