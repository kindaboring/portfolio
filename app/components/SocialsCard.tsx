import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kindaboring",
    image: "/github.png",
  },
  {
    label: "X",
    href: "https://x.com/kylecumm1ngs",
    image: "/twitter.png",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kindaboring",
    image: "/linkedin.png",
  },
];

export default function SocialsCard() {
  return (
    <article className="content-card" style={{ padding: "20px" }}>
      {/* Top row: icon + title */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden">
          <Image src="/socials-icon.jpg" alt="Socials" width={48} height={48} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
        <div>
          <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
            Socials
          </span>
        </div>
      </div>

      {/* Platform tiles */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-tile flex flex-col items-center gap-1"
            style={{ textDecoration: "none" }}
          >
            <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "2/1" }}>
              <Image
                src={social.image}
                alt={social.label}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--text-secondary)" }}
            >
              {social.label}
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
