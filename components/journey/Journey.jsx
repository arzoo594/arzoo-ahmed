"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    id: 1,
    period: "Foundation",
    title: "Programming Hero — Complete Web Development Course",
    description:
      "Started my programming journey with Programming Hero's comprehensive web development curriculum. Learned HTML, CSS, JavaScript fundamentals, and got introduced to React and modern frontend development.",
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
    icon: "🚀",
    status: "completed",
  },
  {
    id: 2,
    period: "Intensive Training",
    title: "6-Month MERN + Next.js Bootcamp",
    description:
      "Completed an intensive bootcamp covering the full MERN stack and Next.js. Built multiple projects during this period and earned the Programming Hero Excellence Certificate.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Next.js"],
    icon: "🎓",
    status: "completed",
    certificate: "Programming Hero Excellence Certificate",
  },
  {
    id: 3,
    period: "Self-Learning & Practice",
    title: "Self-Study & Practical Project Development",
    description:
      "Supplemented formal training with independent learning — reading JavaScript books, studying official documentation, and building real-world projects like ClubSphere, RentWheels, and Zap Shipt.",
    tags: ["Firebase", "Stripe", "JWT", "REST APIs", "Tailwind CSS"],
    icon: "📚",
    status: "completed",
  },
  {
    id: 4,
    period: "Current Focus",
    title: "MERN, Next.js & Production-Ready Development",
    description:
      "Actively deepening backend skills, learning Docker, and building production-ready applications with strong focus on performance, SEO, and modern UI/UX. Actively seeking junior MERN/Full-Stack opportunities.",
    tags: ["Next.js", "Docker", "Advanced MongoDB", "SEO", "Performance"],
    icon: "⚡",
    status: "ongoing",
  },
];

export default function Journey() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="journey"
      ref={ref}
      className="py-24 bg-[var(--bg-primary)]"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest mb-2">My Path</p>
          <h2 id="journey-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Development Journey
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            How I went from zero to building full-stack MERN applications — through structured learning, a bootcamp, and consistent self-study.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--accent)]/20 to-transparent hidden sm:block" aria-hidden="true" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-5 w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 hidden sm:flex ${
                    step.status === "ongoing"
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--border-color)] bg-[var(--bg-secondary)]"
                  }`}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>

                <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[var(--accent)] text-xs font-medium uppercase tracking-wide">{step.period}</span>
                      <h3 className="text-[var(--text-primary)] font-bold text-base mt-0.5">{step.title}</h3>
                    </div>
                    {step.status === "ongoing" && (
                      <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/25 font-medium shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{step.description}</p>

                  {step.certificate && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-4">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                      <span className="text-[var(--accent)] text-xs font-medium">{step.certificate}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
