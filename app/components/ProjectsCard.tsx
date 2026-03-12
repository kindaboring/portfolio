import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default function ProjectsCard() {
  return (
    <article className="content-card" style={{ padding: "20px" }}>
      {/* Top row: icon + title */}
      <div className="flex items-center gap-3">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)" }}
        >
          <CodeIcon />
        </div>
        <div>
          <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
            Projects
          </span>
        </div>
      </div>

      {/* Project tiles */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-tile flex flex-col items-center gap-1"
            style={{ textDecoration: "none" }}
          >
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "2/1" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <span
              className="text-xs font-semibold text-center"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.title}
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
