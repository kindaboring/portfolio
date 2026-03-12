import Link from "next/link";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function SubstackCard() {
  return (
    <Link href="https://substack.com/@kylecummings" target="_blank" rel="noopener noreferrer">
      <article className="content-card" style={{ padding: "20px" }}>
        {/* Top row: icon + title */}
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(255, 103, 25, 0.12)" }}
          >
            <span style={{ color: "#ff6719" }}>
              <SubstackIcon />
            </span>
          </div>
          <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
            Writing
          </span>
        </div>

        {/* Description */}
        <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          I write about building things, ideas, and whatever I&apos;m thinking about.
        </p>

        {/* Bottom divider row */}
        <div
          className="flex items-center gap-2 mt-3 pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span style={{ color: "#ff6719" }}>
            <SubstackIcon />
          </span>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Subscribe on Substack
          </span>
          <span className="ml-auto" style={{ color: "var(--text-secondary)" }}>
            <ExternalLinkIcon />
          </span>
        </div>
      </article>
    </Link>
  );
}
