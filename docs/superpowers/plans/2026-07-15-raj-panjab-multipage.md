# Raj Panjab Records Multi-Page Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium static multi-page website for Raj Panjab Records Ltd. using local photos/videos, verified YouTube channel references, and SEO-friendly page structure.

**Architecture:** The site will be plain static HTML with shared CSS and JavaScript. Every page uses the same header, footer, visual language, and SEO conventions while keeping page-specific content in separate HTML files.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, local media assets, YouTube embeds/links.

## Global Constraints

- Use the local `photo/` and `video/` assets.
- Embed and link to the official YouTube channel at `https://www.youtube.com/@rajvatansingh`.
- Avoid fake statistics.
- Use public channel figures only when sourced or visibly available, such as the currently observed YouTube search result showing 31.3K subscribers and 21 videos on July 15, 2026.
- Where exact figures are not verified, use qualitative copy instead.
- Style should be dark, cinematic, black-and-gold, and editorial.
- Navigation must include Home, Music, Artists, Videos, About Us, News, Contact, plus a Subscribe CTA.
- Each page needs a unique title, meta description, canonical path, Open Graph tags, and meaningful headings.
- Add structured data for organization and music/artist context where appropriate.
- Create `sitemap.xml` and `robots.txt`.
- Use descriptive image alt text and semantic HTML.

---

## File Structure

- Create `assets/css/site.css`: shared layout, typography, responsive navigation, cards, galleries, forms, and media sections.
- Create `assets/js/site.js`: mobile navigation, active link state, reveal animations, video mute/play controls, and current year.
- Create `index.html`: homepage with hero, real figures, featured videos, services preview, and SEO intro.
- Create `music.html`: release showcase and YouTube music links.
- Create `videos.html`: embedded YouTube channel/videos and local MP4 showcase.
- Create `artists.html`: Rajvatan Singh profile and gallery.
- Create `about.html`: label story, values, services, and production identity.
- Create `news.html`: starter SEO article cards.
- Create `contact.html`: collaboration CTA and form UI.
- Create `sitemap.xml`: static page list.
- Create `robots.txt`: allow crawling and reference sitemap.

---

### Task 1: Shared Assets And Site Shell

**Files:**
- Create: `assets/css/site.css`
- Create: `assets/js/site.js`

**Interfaces:**
- Consumes: local assets under `photo/` and `video/`.
- Produces: reusable classes `.site-header`, `.hero`, `.page-hero`, `.media-grid`, `.release-card`, `.section`, `.btn`, `.stat-strip`, `.footer`, and JavaScript behavior for `[data-nav-toggle]`, `[data-current-year]`, and `.reveal`.

- [ ] **Step 1: Create shared CSS**

Add a complete black-and-gold responsive stylesheet in `assets/css/site.css` defining typography, header, hero, media grids, release cards, galleries, forms, embeds, and mobile breakpoints.

- [ ] **Step 2: Create shared JavaScript**

Add `assets/js/site.js` with mobile nav toggle, active nav matching from `location.pathname`, reveal observer with fallback, local video mute toggles for `[data-video-toggle]`, and current year injection.

- [ ] **Step 3: Verify asset files exist**

Run: `Test-Path assets/css/site.css; Test-Path assets/js/site.js`

Expected: both output `True`.

---

### Task 2: Home Page

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: `assets/css/site.css`, `assets/js/site.js`, `photo/1.jpg`, `photo/4.jpg`, `photo/653934720_18097748486053945_6033242487611533745_n.jpg`, `video/1.mp4`.
- Produces: primary landing page with navigation, hero, real channel figures, feature sections, and structured data.

- [ ] **Step 1: Build homepage**

Create `index.html` with metadata, canonical URL, Open Graph tags, JSON-LD Organization schema, shared navigation, video-backed hero, `31.3K subscribers` and `21 videos` stat strip dated July 15, 2026, featured YouTube CTA, local photo highlights, and footer.

- [ ] **Step 2: Verify homepage loads locally**

Run: `curl.exe -I http://localhost:8000/index.html`

Expected: HTTP status `200`.

---

### Task 3: Music And Videos Pages

**Files:**
- Create: `music.html`
- Create: `videos.html`

**Interfaces:**
- Consumes: `assets/css/site.css`, `assets/js/site.js`, local media, YouTube channel URL, verified video ID `GBI9JjUusHI` for "The Chosen One".
- Produces: music and video browsing pages linked from global navigation.

- [ ] **Step 1: Build music page**

Create `music.html` with release cards for verified or locally visible titles, channel CTA, YouTube links, and qualitative copy where figures are not verified.

- [ ] **Step 2: Build videos page**

Create `videos.html` with local MP4 preview sections, a YouTube channel embed/link area, and an embed for `https://www.youtube.com/embed/GBI9JjUusHI`.

- [ ] **Step 3: Verify pages load locally**

Run: `curl.exe -I http://localhost:8000/music.html; curl.exe -I http://localhost:8000/videos.html`

Expected: both HTTP statuses are `200`.

---

### Task 4: Artists, About, News, And Contact Pages

**Files:**
- Create: `artists.html`
- Create: `about.html`
- Create: `news.html`
- Create: `contact.html`

**Interfaces:**
- Consumes: shared assets and local photos.
- Produces: supporting SEO pages linked from global navigation.

- [ ] **Step 1: Build artist page**

Create `artists.html` with Rajvatan Singh profile, gallery, YouTube and Instagram links, and MusicGroup/Person JSON-LD where appropriate.

- [ ] **Step 2: Build about page**

Create `about.html` with label story, services, values, and media production positioning.

- [ ] **Step 3: Build news page**

Create `news.html` with three starter article cards focused on Punjabi music production, visual identity, and YouTube releases.

- [ ] **Step 4: Build contact page**

Create `contact.html` with collaboration form UI, mailto fallback, and clear CTAs.

- [ ] **Step 5: Verify pages load locally**

Run: `curl.exe -I http://localhost:8000/artists.html; curl.exe -I http://localhost:8000/about.html; curl.exe -I http://localhost:8000/news.html; curl.exe -I http://localhost:8000/contact.html`

Expected: all HTTP statuses are `200`.

---

### Task 5: SEO Files And Local Verification

**Files:**
- Create: `sitemap.xml`
- Create: `robots.txt`
- Modify if needed: HTML pages from Tasks 2-4

**Interfaces:**
- Consumes: final page list.
- Produces: crawler files and verified local site.

- [ ] **Step 1: Create crawler files**

Create `sitemap.xml` listing `index.html`, `music.html`, `videos.html`, `artists.html`, `about.html`, `news.html`, and `contact.html`. Create `robots.txt` allowing all crawlers and referencing the sitemap.

- [ ] **Step 2: Check local asset references**

Run: `rg -n "photo/|video/|youtube.com|youtu.be|assets/css/site.css|assets/js/site.js" *.html`

Expected: pages reference local media, shared assets, and the official YouTube channel.

- [ ] **Step 3: Capture rendered screenshot**

Run Chrome headless against `http://localhost:8000/index.html` and save `homepage-screenshot.png`.

Expected: screenshot file exists and shows the new homepage.

- [ ] **Step 4: Final smoke test**

Run: `curl.exe -I http://localhost:8000/sitemap.xml; curl.exe -I http://localhost:8000/robots.txt`

Expected: both HTTP statuses are `200`.

---

## Self-Review

- Spec coverage: all approved pages, local media usage, YouTube link/embed, real-figures rule, SEO metadata, structured data, sitemap, robots, and local verification are covered.
- Placeholder scan: no TBD/TODO placeholders are present.
- Type consistency: static-site file names and shared CSS/JS selectors are consistent across tasks.
