# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Vite dev server
npm run build    # Production build to dist/
npm test         # Run all tests (Vitest + jsdom)
```

Node version: 22.12.0

## Architecture

React 18 SPA using Vite, React Router v6, and Bootstrap 5. Deployed to FTP via GitHub Actions on push to master.

### Entry Flow

`index.html` → `src/main.js` → `src/App.jsx` (routes) → `SBC` layout wrapper (Header + main + Footer)

### Routing

All routes defined in `src/App.jsx`. Uses `<BrowserRouter>` with `<SBC>` as the layout wrapper. The `/about/*` route uses a wildcard for nested subpages handled by `PageSidebar`.

### Page Layout Patterns

**Multi-section page** (About page):
```
Page → PageBanner → PageSidebar → PageSection[]
```
`PageSidebar` manages section switching via URL path matching. It calls `onSectionChange(bannerImageUrl, title, bannerMobilePosition, description)` to update the parent's banner. Each `PageSection` supports collapsible "Show More/Less" on mobile.

**Simple page with banner** (Contact, Giving):
```
Page → PageBanner + content
```
Pass `description` prop to `PageBanner` to set SEO meta tags.

**Standalone page** (Home, Sermons, Live, 404):
These add their own `<Helmet>` directly for title/description.

### SEO

`PageBanner.jsx` sets `<title>`, description, og:image, twitter:image, and canonical URL via react-helmet. Pages without a banner add Helmet directly. Default OG/Twitter tags and JSON-LD Church structured data are in `index.html`.

### SermonAudio Integration

Sermon pages embed iframes from `embed.sermonaudio.com`. Three components in `src/components/sermons/`:
- `SermonAudioSeries` — series browser iframe
- `SermonAudioSermon` — single sermon player iframe (150px height)
- `SermonsPage` — main sermons listing iframe

### Homepage Slider

`HomePageSlider.jsx` contains a hardcoded slides array with sermon series and events. Uses `react-slick` with auto-play. Slide URLs should match entries in `public/sitemap.xml`.

### Legacy Notes

- `index.html` has an HTTP→HTTPS redirect script scoped to the production domain
