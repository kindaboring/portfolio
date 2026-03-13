import Image from "next/image";
import Link from "next/link";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const posts = [
  {
    id: "hiring",
    title: "what i actually look for when hiring students",
    href: "https://kylecumm1ngs.substack.com/p/what-i-actually-look-for-when-hiring",
    image: "https://substack-post-media.s3.amazonaws.com/public/images/c6fcfde2-851e-49b7-a51b-50ce0df4087f_1200x630.png",
  },
];

export default function SubstackCard() {
  return (
    <article className="content-card" style={{ padding: "20px" }}>
      {/* Top row: icon + title + link */}
      <div className="flex items-center gap-3">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255, 103, 25, 0.12)", color: "#ff6719" }}
        >
          <SubstackIcon />
        </div>
        <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
          Writing
        </span>
        <Link
          href="https://kylecumm1ngs.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Link>
      </div>

      {/* Post tiles */}
      <div className="grid grid-cols-1 gap-3 mt-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-tile flex flex-col items-center gap-1"
            style={{ textDecoration: "none" }}
          >
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "2/1" }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <span
              className="text-xs font-semibold text-center"
              style={{ color: "var(--text-secondary)" }}
            >
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
