"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const educationItems = [
  {
    type: "education",
    title: "BSS Honours",
    institution: "Currently Enrolled",
    status: "Running",
    description: "Pursuing a Bachelor of Social Science (Honours) degree alongside my development work.",
    icon: "🎓",
  },
];

const certifications = [
  {
    title: "Programming Hero Excellence Certificate",
    issuer: "Programming Hero",
    description: "Awarded upon successful completion of the Programming Hero Complete Web Development Course, demonstrating proficiency in modern web development technologies.",
    icon: "🏆",
    highlight: true,
  },
];

const training = [
  {
    title: "Complete Web Development Course",
    provider: "Programming Hero",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and deployment.",
    icon: "📖",
  },
  {
    title: "MERN + Next.js Bootcamp",
    provider: "Programming Hero",
    description: "6-month intensive bootcamp focused on the full MERN stack and Next.js, including authentication, payment integration, and production deployment.",
    duration: "6 months",
    icon: "⚡",
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-[var(--bg-secondary)]"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-medium text-sm uppercase tracking-widest mb-2">Background</p>
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span aria-hidden="true">🎓</span> Academic
            </h3>
            {educationItems.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/20 font-medium">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-[var(--text-primary)] font-bold text-base mb-1">{item.title}</h4>
                <p className="text-[var(--accent)] text-xs font-medium mb-2">{item.institution}</p>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span aria-hidden="true">🏆</span> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className={`p-5 rounded-xl border ${cert.highlight ? "bg-[var(--accent)]/5 border-[var(--accent)]/25" : "bg-[var(--bg-primary)] border-[var(--border-color)]"}`}
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{cert.icon}</div>
                  <h4 className="text-[var(--text-primary)] font-bold text-sm mb-1">{cert.title}</h4>
                  <p className="text-[var(--accent)] text-xs font-medium mb-2">{cert.issuer}</p>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span aria-hidden="true">📚</span> Training
            </h3>
            <div className="space-y-4">
              {training.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl" aria-hidden="true">{item.icon}</span>
                    {item.duration && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20 font-medium">
                        {item.duration}
                      </span>
                    )}
                  </div>
                  <h4 className="text-[var(--text-primary)] font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-[var(--accent)] text-xs font-medium mb-2">{item.provider}</p>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
