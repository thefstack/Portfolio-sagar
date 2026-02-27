# Sagar — Brand Identity & Design Studio

**Live:** [portfolio2.thefstack.com](https://portfolio2.thefstack.com/) &nbsp;|&nbsp; **GitHub:** [thefstack/Portfolio-sagar](https://github.com/thefstack/Portfolio-sagar)

A freelance client project — a modern, animated portfolio website for a branding and design studio. Built with Next.js 16 and React 19, featuring fluid animations, interactive 3D elements, and a dark aesthetic designed to showcase the client's brand identity and packaging design work.

## Features

- Animated hero with light ray effects and scroll-triggered reveals
- Bento grid about section with spotlight and tilt interactions
- Infinite logo loop marquee for tech stack and services
- Project showcase with carousel
- Interactive process timeline
- Client reviews section
- FAQ section with smooth accordion
- Full responsive design (mobile → desktop)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [GSAP 3](https://gsap.com) |
| 3D / WebGL | [Three.js](https://threejs.org), [React Three Fiber](https://r3f.docs.pmnd.rs), [OGL](https://oframe.github.io/ogl/) |
| Icons | [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/) |
| UI Components | [MUI](https://mui.com) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.js         # Root layout with metadata & fonts
│   ├── page.js           # Entry page
│   ├── App.js            # Main app composition
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.jsx        # Sticky navigation with card menu
│   ├── Hero.jsx          # Full-screen hero section
│   ├── AboutMe.jsx       # Bento grid about section
│   ├── Projects.jsx      # Portfolio project showcase
│   ├── Meet.jsx          # Personal intro section
│   ├── Carousel.jsx      # Project carousel
│   ├── Process.jsx       # Design process timeline
│   ├── Services.jsx      # Services offered
│   ├── ClientReview.jsx  # Client testimonials
│   ├── FAQ.jsx           # FAQ accordion
│   ├── FooterCta.jsx     # Footer call to action
│   ├── LogoLoop.jsx      # Infinite marquee loop
│   ├── MagicBento.jsx    # Interactive bento grid
│   ├── LightRays.jsx     # WebGL light ray background
│   └── ...               # Other UI primitives
└── assets/
    └── logo.svg          # Brand logo
```

## Deployment

The site is live at [portfolio2.thefstack.com](https://portfolio2.thefstack.com/).

To deploy your own instance, push to the [GitHub repository](https://github.com/thefstack/Portfolio-sagar) and connect it to [Vercel](https://vercel.com) for automatic deployments on every push. Or deploy manually:

```bash
npx vercel
```
