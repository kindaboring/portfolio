import Image from "next/image";
import Link from "next/link";

export default function ProfileHeader() {
  return (
    <div>
      {/* Banner */}
      <div className="h-32 w-full relative overflow-hidden">
        <Image src="/header.jpg" alt="Banner" fill style={{ objectFit: "cover" }} priority />
      </div>

      {/* Avatar */}
      <div className="px-4 flex items-start justify-between" style={{ marginTop: "-40px", position: "relative", zIndex: 1 }}>
        <div
          className="w-20 h-20 rounded-full border-4 overflow-hidden select-none flex-shrink-0"
          style={{
            borderColor: "var(--bg)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Image src="/headshot.jpg" alt="Kyle Cummings" width={80} height={80} style={{ objectFit: "cover", width: "100%", height: "100%" }} priority />
        </div>
      </div>

      {/* Name + handle */}
      <div className="px-4 mt-2">
        <h1 className="text-lg font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
          Kyle Cummings
        </h1>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
          @kylecumm1ngs
        </p>
      </div>

      {/* Bio */}
      <div className="px-4 mt-2">
        <p className="text-sm leading-snug" style={{ color: "var(--text-primary)" }}>
          infrastructure & devops engineer with 8+ years building and
          automating cloud systems across AWS, Azure, and GCP.
        </p>
      </div>

      {/* Location + link */}
      <div className="px-4 mt-2 flex flex-wrap gap-x-3 gap-y-1">
        <span className="flex items-center gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" />
            <circle cx="12" cy="8" r="2" />
          </svg>
          baltimore/nyc
        </span>
        <Link
          href="https://kylec.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm transition-colors hover:underline"
          style={{ color: "var(--accent)" }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
          kylec.dev
        </Link>
      </div>

      <div className="mt-3" style={{ borderBottom: "1px solid var(--border)" }} />
    </div>
  );
}
