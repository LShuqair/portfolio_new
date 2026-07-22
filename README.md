# Luna Shuqair — Portfolio

An Awwwards-style, single-scroll interactive portfolio for a security-cleared
FSO / front-end developer. Built with React + Vite + Tailwind, GSAP
ScrollTrigger, Lenis smooth scroll, and a React Three Fiber hero scene.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Design concept

The site treats every section like a clearance/access-control terminal,
rendered with editorial polish rather than a literal "hacker" look:

- **Loader** (`Loader.jsx`) — an "ACCESS GRANTED" verification sequence
  instead of a generic progress bar.
- **Hero** (`Hero.jsx` + `AccessGridScene.jsx`) — a React Three Fiber scene
  of a wireframe "core" orbited by a distributed point field, standing in
  for an access-control network.
- **Case Files** (`CaseFiles.jsx` + `CaseFile.jsx`) — work experience
  presented as expandable dossier entries with real classification-style
  metadata (case ID, status, period).
- **Clearance & Skills** (`Clearance.jsx`) — core competencies, stack,
  certifications, and education as "permissions."
- **Contact** (`Contact.jsx`) — direct, large-type call to action.
- **Custom cursor** (`CustomCursor.jsx`) — a targeting reticle that snaps
  and labels itself over interactive elements (desktop only; disabled on
  touch devices).

All copy and facts are sourced verbatim from the original resume in
`src/data/content.js` — edit that file to update content without touching
any component markup.

## Motion architecture

- `src/hooks/useLenis.js` initializes Lenis and syncs it to GSAP's ticker
  and `ScrollTrigger.update`, so scroll-driven animations stay in lockstep
  with the smoothed scroll position. It's disabled automatically when the
  OS-level "reduce motion" preference is on.
- Each section registers its own `ScrollTrigger` reveal animations inside a
  `gsap.context()` scoped to that section, and reverts them on unmount.
- The loader-to-hero transition (slide up + reveal) doubles as the site's
  cinematic entrance transition, since this is a single continuously
  scrolling page rather than a multi-route app.

## Notes

- Tailwind tokens (colors, fonts) live in `tailwind.config.js` — this is
  the single source of truth for the palette and type scale.
- `prefers-reduced-motion` is respected globally (see `src/styles/index.css`
  and `useLenis.js`).
- The custom cursor is hidden automatically on touch/coarse-pointer
  devices in favor of the native cursor.
