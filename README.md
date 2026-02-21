# StoryCast

a accessible websiteto view stories complied fromsimple html scss and js

## project Structure

```
storycast/
├── index.html          # Main landing page
├── story/
│   └── story.html      # Story detail page
├── assets/             # Images and media files
├── sass/
│   └── main.scss       # SCSS source files
└── css/
    └── main.css        # Compiled CSS (auto-generated)
```

## Design & Planning

- **Figma**: (https://www.figma.com/design/0waGbU9yEQRbf9nK1ZTCLc/Storycast?node-id=5-8&t=QaeiI8pT2gmp8Y0Q-1)
- **Sitemap**:(https://drive.google.com/file/d/1xTVrE3UC6EA_zLMt57ag6j-ca9UdidNR/view?usp=sharing)

## languages used

- HTML5
- CSS3
- SCSS/Sass
- js

## Running Locally

### Prerequisites

- A modern web browser
- [Node.js](https://nodejs.org/) and npm (only needed to recompile SCSS)
- Sass compiler (`npm install -g sass`)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/storycast.git
   cd storycast
   ```

2. Open `index.html` directly in your browser — no build step required, the compiled `css/main.css` is already included.

3. _(Optional)_ If you edit the SCSS source files, recompile with:

   ```bash
   sass sass/main.scss css/main.css
   ```

4. _(Optional)_ To auto-compile on every save during development:

   ```bash
   sass --watch sass/main.scss:css/main.css
   ```

## Accessibility Checklist

This project was built with accessibility as a core requirement. The table below documents each criterion and how it was met.

| Criterion                       | How it was met                                                                                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Semantic HTML**               | Every page uses `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<article>`, and `<footer>` rather than generic `<div>` wrappers                               |
| **Heading hierarchy**           | Headings follow a strict `h1` → `h2` order with no levels skipped                                                                                                     |
| **Skip link**                   | A "Skip to main content" link is the first focusable element on every page, allowing keyboard users to bypass repeated navigation                                     |
| **ARIA landmarks**              | All landmark regions (`role="search"`, `aria-label` on multiple `<nav>` elements) are labelled so screen-reader users can navigate by landmark                        |
| **`aria-current="page"`**       | The active navigation link is marked so screen readers announce which page the user is on                                                                             |
| **Descriptive `aria-label`**    | Icon-only links (logo, social icons) carry `aria-label` text; decorative SVGs use `aria-hidden="true"` and `focusable="false"`                                        |
| **Image alt text**              | Decorative images use `alt=""` to be ignored by screen readers; informative images have descriptive alt text                                                          |
| **Audio transcript**            | The audio story section includes a full side-by-side `<article>` transcript inside an `<aside>` labelled "Audio transcript"                                           |
| **Video transcript**            | The video section includes a full side-by-side transcript with the same pattern                                                                                       |
| **Accessible timestamps**       | Transcript timestamps are hidden from screen readers with `aria-hidden="true"`; a visually hidden `<span>` provides a spoken equivalent (e.g. "1 minute 20 seconds.") |
| **`<figure>` / `<figcaption>`** | Media players are wrapped in `<figure>` with a `.visually-hidden` `<figcaption>` that names the content and points to the transcript                                  |
| **Video captions track**        | A `<track kind="captions">` element is present on the `<video>` element ready to receive a VTT file                                                                   |
| **Form labels**                 | Every `<input>` has an associated `<label>` (either visible or `.visually-hidden`)                                                                                    |
| **Focus styles**                | Native browser focus outlines are preserved; custom focus rings are added via `:focus-visible` in the stylesheet                                                      |
| **Colour contrast**             | All text and UI components meet WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text and UI)                                                              |
| **Responsive layout**           | Layouts reflow correctly from 320 px upward; text remains readable at 200% zoom                                                                                       |
| **`lang` attribute**            | `<html lang="en">` is set on every page so screen readers use the correct language profile                                                                            |
| **Page titles**                 | Every page has a unique, descriptive `<title>` element                                                                                                                |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

© 2026 StoryCast. All rights reserved.
