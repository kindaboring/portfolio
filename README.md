# Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing Cloud & DevOps engineering projects and skills.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth scrolling navigation
- Professional sections: Hero, About, Skills, Projects, Contact
- Cloud/DevOps focused skill showcase
- Project portfolio with GitHub links

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 with modern features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or push to GitHub and connect your repository to Vercel at [vercel.com](https://vercel.com)

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx** - Update your name and introduction
2. **src/components/About.tsx** - Add your professional background
3. **src/components/Skills.tsx** - Customize your skills (already DevOps focused)
4. **src/components/Projects.tsx** - Add your actual projects with links
5. **src/components/Contact.tsx** - Update email and social links
6. **src/components/Footer.tsx** - Update copyright and links
7. **index.html** - Update page title and meta description

### Colors and Styling

The portfolio uses a purple gradient theme. To customize:

- Main colors are in component CSS files
- Global styles in `src/index.css`
- Dark mode styles using `@media (prefers-color-scheme: dark)`

## License

MIT License - feel free to use this template for your own portfolio.
