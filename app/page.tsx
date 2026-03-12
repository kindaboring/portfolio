import ProfileHeader from "./components/ProfileHeader";
import SubstackCard from "./components/SubstackCard";
import SocialsCard from "./components/SocialsCard";
import ProjectsCard from "./components/ProjectsCard";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Centered feed container */}
      <div className="mx-auto w-full max-w-[600px]">
        {/* Profile header */}
        <ProfileHeader />

        {/* Feed */}
        <div className="px-4 py-3 flex flex-col gap-3">
          {/* Projects card */}
          <ProjectsCard />

          {/* Substack card (pinned) */}
          <SubstackCard />

          {/* Socials card */}
          <SocialsCard />
        </div>

        {/* Bottom padding for mobile */}
        <div className="h-16" />
      </div>
    </main>
  );
}
