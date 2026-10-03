# Sparroh Shopfits — website prototype

Frontend-only client demo. No backend, CMS, forms or API calls; all content is static in `lib/content.ts`
and was taken from sparrowshopfits.com.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build (use this for the client demo)
```

- `app/page.tsx` — section order
- `components/` — one file per section; only `Navbar`, `Process`, `Testimonials` and `ScrollFx` ship JS
- `components/ScrollFx.tsx` — the single animation runtime (IntersectionObserver reveals + lazy-loaded GSAP ScrollTrigger scrubs)
- `assets/` — WebP sources; `next/image` serves AVIF/WebP at responsive sizes with blur placeholders
