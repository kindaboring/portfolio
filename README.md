# kylec.dev

Personal portfolio site for Kyle Cummings — infrastructure & DevOps engineer. Built with a Twitter/X feed aesthetic.

Live at [kylec.dev](https://kylec.dev)

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- Deployed on **Vercel**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── components/       # UI components (ProfileHeader, PostCard, ProjectsCard, etc.)
├── data/
│   └── projects.ts   # Manually curated projects list
├── globals.css       # CSS variables for theming (light/dark)
└── page.tsx          # Root page
public/               # Static assets (headshot, banner, project images)
```

## Adding Projects

Edit `app/data/projects.ts` to add or update projects displayed on the site.
