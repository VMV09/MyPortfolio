# Vishruth M V Portfolio

Personal portfolio website for Vishruth M V, built to present engineering work, AI/ML research, technical seminars, publications, achievements, and contact information in one polished web experience.

Repository: https://github.com/VMV09/MyPortfolio

## Project Overview

This project is a React single-page portfolio application powered by Vite. It includes a custom in-app routing layer for detail pages, animated section reveals, responsive portfolio sections, downloadable resume support, and an EmailJS-powered contact form.

The site is structured around these major sections:

- Hero introduction with skills marquee and resume download
- About, experience, seminars, achievements, and social presence
- Flagship project case study pages under `/projects/:slug`
- Event detail pages under `/events/:slug`
- Publications and research links
- Contact form with EmailJS integration

## Tech Stack

- React 19
- Vite using `rolldown-vite`
- Tailwind CSS 4
- Framer Motion and GSAP for animation support
- Lucide React for icons
- EmailJS for contact-form delivery
- ESLint for code quality checks

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

The optimized production output is generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Environment Variables

The contact form uses EmailJS. Create a local `.env` file from `.env.example`:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

If these values are missing, the contact form will show a fallback message asking visitors to email directly.

## Repository Structure

```text
.
|-- public/                  Static images, resume, project media, icons
|-- src/
|   |-- components/          Reusable UI components
|   |-- components/events/   Event card components
|   |-- data/                Portfolio data for events, projects, publications
|   |-- layout/              Navbar and footer
|   |-- pages/               Detail views for projects and events
|   |-- sections/            Main homepage sections
|   |-- App.jsx              App composition and lightweight routing
|   |-- index.css            Global styles and Tailwind theme usage
|   `-- main.jsx             React entry point
|-- index.html               HTML shell and SEO metadata
|-- vite.config.js           Vite, React, Tailwind, and alias configuration
`-- package.json             Scripts and dependencies
```

## Updating Portfolio Content

Most visible portfolio content is stored directly in React section files or small data modules:

- Flagship project detail content: `src/data/flagshipProjects.js`
- Event detail content: `src/data/events.js`
- Publication entries: `src/data/publicationevent.js`
- Featured project cards: `src/sections/Projects.jsx`
- Contact details and form behavior: `src/sections/Contact.jsx`
- Hero copy, resume button, and skill list: `src/sections/Hero.jsx`
- SEO title and description: `index.html`

Images, certificates, project screenshots, and the resume live in `public/`. Files placed there are served from the site root, so `public/resume.pdf` is referenced as `/resume.pdf`.

## Routing Notes

The app does not use `react-router`. Internal navigation is handled in `src/App.jsx` with the History API:

- `/` renders the homepage sections.
- `/events/:slug` renders an event detail page.
- `/projects/:slug` renders a flagship project detail page.

When adding new events or projects, make sure each item has a unique `slug` and that links use the matching path.

## Deployment Notes

This project can be deployed to any static hosting provider that supports Vite builds, such as Vercel, Netlify, GitHub Pages, or similar platforms.

For hosts that serve deep links directly, configure fallback routing to `index.html` so `/events/:slug` and `/projects/:slug` work after refresh.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the repo |
