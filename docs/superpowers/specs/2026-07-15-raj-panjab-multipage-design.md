# Raj Panjab Records Multi-Page Website Design

## Goal

Build a premium multi-page website for Raj Panjab Records Ltd. inspired by the provided black-and-gold music label reference. The site should use the local `photo/` and `video/` assets, embed and link to the official YouTube channel at `https://www.youtube.com/@rajvatansingh`, avoid fake statistics, and improve search visibility for Raj Panjab Records and Rajvatan Singh.

## Approach

Use a static multi-page HTML/CSS/JavaScript site. This matches the current project shape, keeps hosting simple, and avoids unnecessary tooling. Shared styles and scripts will live in `assets/css/site.css` and `assets/js/site.js`.

## Pages

- `index.html`: cinematic home page with hero media, primary calls to action, real public channel figures, featured media, and SEO-rich intro copy.
- `music.html`: release and music showcase with verified titles and YouTube links or embeds.
- `videos.html`: official video page using local MP4 clips where useful and embedded YouTube content from the official channel.
- `artists.html`: Rajvatan Singh artist profile with gallery and career positioning.
- `about.html`: Raj Panjab Records Ltd. story, services, production identity, and brand values.
- `news.html`: starter news/articles section for SEO-friendly updates.
- `contact.html`: collaboration CTA, contact details, form UI, and social links.

## Content And Data Rules

Do not use invented stats such as "2M subscribers", "500 songs", or "100 awards". Use public channel figures only when sourced or visibly available, such as the currently observed YouTube search result showing 31.3K subscribers and 21 videos on July 15, 2026. Where exact figures are not verified, use qualitative copy instead.

Local photos from `photo/` should be used across hero, gallery, cards, and artist sections. Local videos from `video/` should be used for cinematic hero/background moments or video previews, with controls where the user may want to watch them.

## Visual Direction

The style should be dark, cinematic, black-and-gold, and editorial. Navigation should follow the reference structure: Home, Music, Artists, Videos, About Us, News, Contact, plus a Subscribe CTA. Layout should feel premium without copying the reference exactly.

## SEO Requirements

Each page needs a unique title, meta description, canonical path, Open Graph tags, and meaningful headings. Add structured data for the organization and music/artist context where appropriate. Create `sitemap.xml` and `robots.txt`. Use descriptive image alt text and semantic HTML.

## Verification

Run the site locally through the existing static server. Verify the main pages load, navigation works, local photo/video paths resolve, YouTube embeds or links are present, and there are no obvious console or network errors from local assets.
