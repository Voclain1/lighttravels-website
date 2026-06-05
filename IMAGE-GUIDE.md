# Image Guide — Light Travels Website

Complete inventory of every image used on the site, with two methods to change them.

---

## Image inventory (17 unique image slots)

Currently all images are loaded from Unsplash by URL — no images stored locally. Here's every one, where it appears, and what it should depict.

### Background / hero images

| # | Where it appears | Page · Line | Current Unsplash ID | What it shows now | Suggested replacement |
|---|------|-------------|---------------------|-------------------|---------------------|
| 1 | Home hero (full screen) | `index.html` L45 | `photo-1436491865332-7a61a109cc05` | Plane wing over clouds | **Anything that says "travel" cinematically** — runway sunset, airport at dusk, plane window view, etc. Wide landscape. |
| 2 | Home CTA banner | `index.html` L280 | `photo-1488085061387-422e29b40080` | Passport + map close-up | Travel essentials, departure board, world map detail |
| 3 | About hero + CTA | `about.html` L38, L134 | `photo-1488085061387-422e29b40080` | Passport + map | Team-at-work, office, or atmospheric travel shot |
| 4 | About intro band | `about.html` L59 | `photo-1521737604893-d14cc237f11d` | Business handshake | Portrait of your team or office (PORTRAIT orientation) |
| 5 | Services hero | `services.html` L38 | `photo-1530521954074-e64f6810b32d` | Airport interior | Airport, ticket counter, planning desk |
| 6 | Services CTA banner | `services.html` L176 | `photo-1436491865332-7a61a109cc05` | Plane wing | Same as #1 or reuse |
| 7 | Destinations hero | `destinations.html` L38 | `photo-1488646953014-85cb44e25828` | Suitcase + passport | Atmospheric travel collage or destination collage |
| 8 | Destinations intro band | `destinations.html` L140 | `photo-1469854523086-cc02fe5d8800` | World map illustration | World map, globe, or planning desk (PORTRAIT) |
| 9 | Destinations CTA | `destinations.html` L155 | `photo-1469854523086-cc02fe5d8800` | World map | Same as #8 or different destination shot |
| 10 | Pilgrimage hero + intro + CTA | `pilgrimage.html` L38, L59, L140 | `photo-1591604129939-f1efa4d9f7fa` | Mecca at night | Mecca, Medina, or the Kaaba (respectful, well-lit) |
| 11 | Corporate hero + CTA | `corporate.html` L38, L128 | `photo-1521737604893-d14cc237f11d` | Business handshake | Boardroom, business class lounge, executive on phone |
| 12 | Corporate intro band | `corporate.html` L60 | `photo-1556761175-5973dc0f32e7` | Business meeting | Team meeting or executive workspace (PORTRAIT) |
| 13 | Contact hero | `contact.html` L38 | `photo-1488646953014-85cb44e25828` | Suitcase + passport | Lagos office shot, or atmospheric travel image |
| 14 | Home intro band | `index.html` L76 | `photo-1488646953014-85cb44e25828` | Suitcase + passport | Team / office / consultation portrait (PORTRAIT) |

### Destination cards (smaller images, ~900px wide)

| # | Card | Page · Line | Current Unsplash ID | Notes |
|---|------|-------------|---------------------|-------|
| 15 | Dubai | `index.html` L169, `destinations.html` L61 | `photo-1512453979798-5ea266f8880c` | Burj Khalifa / skyline |
| 16 | Paris | `index.html` L177, `destinations.html` L69 | `photo-1502602898657-3e91760cbb34` | Eiffel Tower |
| 17 | London | `index.html` L185, `destinations.html` L77 | `photo-1513635269975-59663e0ac1ad` | Big Ben / skyline |
| 18 | Mecca | `index.html` L193 | `photo-1591604129939-f1efa4d9f7fa` | Kaaba at night |
| 19 | Jerusalem | `index.html` L201 | `photo-1544735716-392fe2489ffa` | Old city / Western Wall |
| 20 | Maldives | `index.html` L209, `destinations.html` L93 | `photo-1539367628448-4bc5c9d171c8` | Overwater villas |
| 21 | New York | `destinations.html` L85 | `photo-1485871981521-5b1fd3805eee` | Manhattan skyline |
| 22 | Istanbul | `destinations.html` L101 | `photo-1580060839134-75a5edca2e99` | Hagia Sophia / mosques |
| 23 | Cape Town | `destinations.html` L109 | `photo-1580060839134-75a5edca2e99` (fallback `photo-1576487248805-cf45f6bcc67f`) | Table Mountain |
| 24 | Bali | `destinations.html` L117 | `photo-1480796927426-f609979314bd` | Rice terraces / temples |
| 25 | Toronto | `destinations.html` L125 | `photo-1543349689-9a4d426bee8e` | CN Tower / skyline |

---

## How to change images — pick the method that fits

### Method A — Swap to a different Unsplash photo (easiest, takes 30 seconds per image)

You keep using stock photos but pick ones you prefer.

1. Go to **[unsplash.com](https://unsplash.com)** and search for what you want (e.g. "Lagos airport", "business class", "Mecca").
2. Click a photo you like.
3. Look at its URL in the browser bar — it'll look like:
   `https://unsplash.com/photos/some-text-here-aBcDeF12345`
   The photo ID is the LAST segment after the dash: `aBcDeF12345`. Sometimes there's no descriptive text, just the ID.
4. The direct image URL is: `https://images.unsplash.com/photo-XXXXXXXXXXXXX-aBcDeF12345`
   The easiest way to get it: right-click the image on Unsplash → "Copy image address". Strip query parameters.
5. In your code editor, open the HTML file (use the table above to find the right line).
6. Replace the existing `photo-XXXXX...` portion of the `src=` attribute with the new ID.
7. Save. Refresh browser. Done.

**Tip:** Keep the `?auto=format&fit=crop&w=2000&q=80` part at the end — that's what makes Unsplash serve the right size and quality for you.

### Method B — Use your own images (recommended for launch)

For brand control and faster page loads, host images yourself.

1. Create a folder called `images/` at the root of your site (same level as `index.html`).
2. Add your images with descriptive names. Suggested filenames:

   ```
   images/
   ├── hero-home.jpg              (#1 — wide landscape, 2000×1125)
   ├── cta-default.jpg            (#2, #3, #6 — wide landscape, 2000×1125)
   ├── about-intro.jpg            (#4 — portrait, 1200×1500)
   ├── about-header.jpg           (#3 — wide landscape, 2000×1125)
   ├── services-header.jpg        (#5 — wide landscape, 2000×1125)
   ├── destinations-header.jpg    (#7 — wide landscape, 2000×1125)
   ├── destinations-intro.jpg     (#8 — portrait, 1200×1500)
   ├── pilgrimage-header.jpg      (#10 — wide landscape, 2000×1125)
   ├── corporate-header.jpg       (#11 — wide landscape, 2000×1125)
   ├── corporate-intro.jpg        (#12 — portrait, 1200×1500)
   ├── contact-header.jpg         (#13 — wide landscape, 2000×1125)
   ├── home-intro.jpg             (#14 — portrait, 1200×1500)
   │
   ├── dest-dubai.jpg             (900×1200, portrait)
   ├── dest-paris.jpg             (900×1200)
   ├── dest-london.jpg            (900×1200)
   ├── dest-mecca.jpg             (900×1200)
   ├── dest-jerusalem.jpg         (900×1200)
   ├── dest-maldives.jpg          (900×1200)
   ├── dest-newyork.jpg           (900×1200)
   ├── dest-istanbul.jpg          (900×1200)
   ├── dest-capetown.jpg          (900×1200)
   ├── dest-bali.jpg              (900×1200)
   └── dest-toronto.jpg           (900×1200)
   ```

3. In each HTML file, find the `src=` attribute for each image and replace with the local path.

   **Before:**
   ```html
   <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80" alt="">
   ```
   **After:**
   ```html
   <img src="images/hero-home.jpg" alt="">
   ```

4. Save and test.

**Image specs that matter:**
- **Landscape headers/heroes:** 2000×1125 (16:9), JPG, quality 80%, ~150-300 KB each
- **Portrait intro images:** 1200×1500 (4:5), JPG, quality 85%, ~150-250 KB
- **Destination cards:** 900×1200 (3:4), JPG, quality 80%, ~80-150 KB
- **All:** save as JPG (not PNG) unless transparent. Use [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app) to compress.

### Method C — VS Code find-and-replace shortcut

If you want to swap multiple references to the same image in one shot:

1. Open the project folder in VS Code.
2. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac) — opens search-and-replace across all files.
3. In **Find**: paste the full current image URL, e.g.
   `https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80`
4. In **Replace**: paste your new URL or local path, e.g.
   `images/hero-home.jpg`
5. Click "Replace All".
6. Repeat for each unique image you're replacing.

---

## Logo

The logo placeholder is in every page header and footer:

```html
<a href="index.html" class="logo">
  <span class="logo-mark">L</span>
  <span>Light Travels<small>Tours &amp; Logistics</small></span>
</a>
```

To replace with your actual logo:

1. Save your logo as `images/logo.svg` (preferred) or `images/logo.png` (at 2x resolution, e.g. 80px tall).
2. Replace the `<span class="logo-mark">L</span>` with `<img src="images/logo.svg" alt="Light Travels" height="32">` in every HTML file.
3. Optionally remove the text spans if your logo includes the wordmark.

---

That's everything image-related. Once you've swapped the images you want, save and either push to Git (if using GitHub-Vercel) or run `vercel --prod` again.
