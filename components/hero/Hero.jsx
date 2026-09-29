
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arzoo594",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arzoo-ahmed2003/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:arzooahmed0170609@email.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let dots = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const initDots = () => {
      dots = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const accentRaw =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#a3e635";

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `${accentRaw}40`;
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(
            dots[i].x - dots[j].x,
            dots[i].y - dots[j].y
          );

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);

            ctx.strokeStyle = `${accentRaw}${Math.floor(
              (1 - dist / 120) * 30
            )
              .toString(16)
              .padStart(2, "0")}`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]"
      aria-label="Introduction"
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/3 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[var(--accent)]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium mb-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"
                aria-hidden="true"
              />

Currently Open to New Opportunities            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[var(--text-secondary)] text-lg mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] tracking-tight mb-4"
            >
              Arzoo{" "}
              <span className="text-[var(--accent)]">Ahmed</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-xl sm:text-2xl text-[var(--text-secondary)] font-medium mb-6"
            >
              Junior MERN Stack Developer &amp; Full-Stack Web Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              I build modern, responsive and user-focused web applications with
              React, Next.js, Node.js and MongoDB while continuously learning and
              improving my skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent)] text-[var(--bg-primary)] font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                View Projects

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>

                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex items-center gap-4"
            >
              <span className="text-[var(--text-muted)] text-sm">
                Find me on
              </span>

              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center items-center"
            aria-hidden="true"
          >
            <div className="relative">

              {/* Outer ring */}
              <div className="w-72 h-72 rounded-full border border-[var(--accent)]/20 flex items-center justify-center">

                {/* Inner ring */}
                <div className="w-56 h-56 rounded-full border border-[var(--accent)]/30 flex items-center justify-center">

                  {/* Center card */}
                  <div className="w-44 h-44 rounded-2xl border border-[var(--border-color)] flex flex-col items-center justify-center gap-3 shadow-lg">

                    <div className="w-14 h-14 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--bg-primary)] font-bold text-xl">
                      AA
                    </div>

                    {/* 
                    <div className="text-center">
                      <p className="text-[var(--text-primary)] font-semibold text-sm">
                        Arzoo Ahmed
                      </p>
                      <p className="text-[var(--text-muted)] text-xs mt-0.5">
                        MERN Developer
                      </p>
                    </div> 
                    */}

                    <img
                      className="-mt-2 bg-black rounded-full"
                      src="https://i.ibb.co.com/tphsDJ27/image.png"
                      alt=""
                    />

                    <div className="flex gap-1">
                      {["React", "Node", "MongoDB"].map((t) => (
                        <span
                          key={t}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {[
                { label: "React", angle: 0, delay: "0s" },
                { label: "Next.js", angle: 72, delay: "0.5s" },
                { label: "Node.js", angle: 144, delay: "1s" },
                { label: "MongoDB", angle: 216, delay: "1.5s" },
                { label: "Express", angle: 288, delay: "2s" },
              ].map(({ label, angle, delay }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 136;
                const x = r * Math.cos(rad - Math.PI / 2);
                const y = r * Math.sin(rad - Math.PI / 2);

                return (
                  <div
                    key={label}
                    className="absolute text-[10px] px-2 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] font-medium shadow-sm animate-float"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: delay,
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
          aria-hidden="true"
        >
          <span className="text-xs">Scroll</span>

          <div className="w-5 h-8 rounded-full border border-[var(--border-color)] flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[var(--accent)] animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}