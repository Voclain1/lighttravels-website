# Light Travels, Tours & Logistics — Website

Production-ready static HTML/CSS site for **lighttravels.ng**. Lagos-bright palette (Naija green, sunset gold, coral, warm cream) with kente-stripe and Ankara-pattern accents on a premium editorial base. Fonts: Fraunces + Plus Jakarta Sans.

## Pages (7)

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, intro, 9-service grid, destinations, why us, testimonials, CTA |
| About | `about.html` | Story, stats, six values |
| Services | `services.html` | All 13 service offerings, editorial list format |
| Destinations | `destinations.html` | 9 destination cards + custom-itinerary CTA |
| Pilgrimage | `pilgrimage.html` | Hajj, Umrah, Jerusalem, Rome packages |
| Corporate | `corporate.html` | Corporate travel management — 9 components |
| Contact | `contact.html` | Form, full contact info, embedded Google Map |

## Structure

```
site/
├── index.html
├── about.html
├── services.html
├── destinations.html
├── pilgrimage.html
├── corporate.html
├── contact.html
├── css/
│   └── styles.css       ← entire design system, CSS variables, all components
└── js/
    └── main.js          ← scroll header, mobile nav, reveal-on-scroll, form stub
```

## To deploy as static (fastest path)

1. Drop the whole `site/` folder onto Vercel, Netlify, or Cloudflare Pages.
2. Point lighttravels.ng at it.
3. Done.

## To port into your existing Next.js + Payload stack

The HTML is intentionally structured for clean componentization:

- **Header** (`<header class="site-header">`) → `components/SiteHeader.tsx`
- **Footer** (`<footer class="site-footer">`) → `components/SiteFooter.tsx`
- **Hero**, **CTA banner**, **Service grid**, **Destinations grid**, **Pillars**, **Testimonials** — each is a self-contained `<section>` block; lift each into its own component.
- **CSS variables** in `:root` translate one-to-one into Tailwind theme tokens, or paste `styles.css` into `app/globals.css`.
- **Reveal animations** in `main.js` are progressive enhancement — works without JS, animates with it.

## Things to replace before launch

| What | Where | Notes |
|------|-------|-------|
| Logo mark | `<span class="logo-mark">L</span>` in every page | Replace with `<img src="/logo.svg">` |
| Placeholder images | Unsplash URLs throughout | Swap for your own photography or licensed stock |
| Testimonial quotes | `index.html` | Replace `Adaeze O.` / `Tunde A.` with real clients |
| Stat numbers | `about.html` | Adjust `100+`, `1,000+` etc. to real figures |
| Contact form action | `contact.html` form | Currently a JS stub — wire to your Payload `/inquiry` API or Resend/Termii |
| Google Maps embed | `contact.html` | Currently a search-based embed; replace with a proper place-pin embed once you have it |
| `Privacy` / `Terms` footer links | All pages | Currently `#` — wire to real pages when ready |

## Wire the contact form to your Payload inquiry API

In `contact.html`, replace the submit handler in `js/main.js` with:

```js
form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const res = await fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const status = form.querySelector('.form-status');
  status.textContent = res.ok ? 'Thank you. We will be in touch within 24 hours.' : 'Something went wrong. Please email hello@lighttravels.ng directly.';
  if (res.ok) form.reset();
});
```

## Typography

- **Display:** Cormorant Garamond — used on h1–h5
- **Body:** Manrope — used on everything else
- Both loaded from Google Fonts via `<link>`

## Colors (CSS variables, in `styles.css`)

```css
--white:      #FFFFFF
--cream:      #FAF7F2   /* section background variation */
--gold:       #B8893E   /* primary accent */
--gold-light: #D4AC68   /* hover / on-dark accent */
--navy:       #0E2A47   /* headings, primary text */
--navy-deep:  #061B30   /* footer, overlays */
```

## Browser support

Modern browsers — `IntersectionObserver`, CSS Grid, `clamp()`, CSS variables, `aspect-ratio`. Tested on Chrome / Safari / Firefox / Edge (last 2 versions). Mobile responsive at 540px / 768px / 880px breakpoints.
