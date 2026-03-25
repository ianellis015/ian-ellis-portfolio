# Ian Ellis — Portfolio

Personal portfolio website for Ian Ellis, a full-stack software engineer specializing in AI integrations.

## Tech Stack

- **Next.js 14** (App Router, JavaScript)
- **CSS Modules** with CSS custom properties for theming
- **Framer Motion** for animations and page transitions
- **Lenis** for smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/                  # Next.js App Router pages
  components/           # UI components (each with a .jsx + .module.css)
  lib/
    data.js             # All site content — projects, case studies, services, training events
  styles/
    globals.css         # CSS custom properties, base resets, global styles
public/
  images/               # Static images (hero, about, work, training)
```

## Deployment

Built for deployment on [Vercel](https://vercel.com). Connect the repo in the Vercel dashboard and push to `main` to deploy.
