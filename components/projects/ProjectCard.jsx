import Link from "next/link";

const statusConfig = {
  completed: { label: "Completed", className: "bg-green-500/15 text-green-400 border-green-500/20" },
  ongoing: { label: "In Progress", className: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20" },
  planned: { label: "Planned", className: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
};

export default function ProjectCard({ project }) {
  const { slug, title, tagline, description, technologies, github, live, status, category } = project;
  const statusInfo = statusConfig[status] || statusConfig.completed;

  return (
    <article className="group flex flex-col h-full rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent)]/40 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-[var(--accent)]/5">
      {/* Image placeholder with gradient */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative z-10 text-center px-4">
          <div className="text-4xl font-bold text-[var(--accent)]/20 select-none" aria-hidden="true">
            {title.slice(0, 2).toUpperCase()}
          </div>
        </div>
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full border font-medium ${statusInfo.className}`}
        >
          {statusInfo.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[var(--text-primary)] font-bold text-base leading-snug">{title}</h3>
        </div>
        <p className="text-[var(--accent)] text-xs font-medium mb-3">{tagline}</p>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] font-medium">
              +{technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)]">
          <Link
            href={`/projects/${slug}`}
            className="flex-1 text-center text-xs py-1.5 rounded-md border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            Details
          </Link>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              aria-label={`${title} GitHub repository`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              aria-label={`${title} live demo`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
