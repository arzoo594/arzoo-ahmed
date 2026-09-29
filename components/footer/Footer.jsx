const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/arzoo594", label: "GitHub" },
  { href: "https://www.linkedin.com/in/arzoo-ahmed2003/", label: "LinkedIn" },
  { href: "mailto:arzooahmed0170609@email.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center text-[var(--bg-primary)] font-bold text-xs" aria-hidden="true">
              AA
            </span>
            <span className="text-[var(--text-secondary)] text-sm font-medium">Arzoo Ahmed</span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[var(--text-muted)] text-xs hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[var(--text-muted)] text-xs hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center">
          <p className="text-[var(--text-muted)] text-xs">
            &copy; {new Date().getFullYear()} Arzoo Ahmed. 
          </p>
        </div>
      </div>
    </footer>
  );
}
