# StoryCast Sass Architecture

## Overview

This project uses Sass (SCSS syntax) with a modular architecture following BEM methodology and design token principles.

## File Structure

```
sass/
├── main.scss              # Main entry point - imports all partials
├── _colors.scss           # Color tokens (primary, accent, neutral, shadows)
├── _typography.scss       # Typography tokens (fonts, sizes, weights, line-heights)
├── _spacing.scss          # Spacing tokens (margins, padding, border-radius, breakpoints)
├── _base.scss            # Reset and base element styles
├── _layout.scss          # Layout components (header, footer, navigation)
├── _components.scss      # Reusable components (buttons, cards, search, social icons)
├── _pages.scss           # Page-specific styles (home, story detail, about)
└── _responsive.scss      # Media queries for responsive design
```

## Design Tokens

### Colors (`_colors.scss`)

- **Primary**: `$color-primary` - Main brand color (#4F6EF7)
- **Accent**: `$color-accent-yellow`, `$color-accent-pink`, etc.
- **Text**: `$color-text-primary`, `$color-text-secondary`, `$color-text-tertiary`
- **Backgrounds**: `$color-bg-light`, `$color-bg-lighter`
- **Shadows**: `$shadow-sm`, `$shadow-md`, `$shadow-lg`, `$shadow-xl`

### Typography (`_typography.scss`)

- **Font Family**: `$font-primary` (Inter)
- **Font Sizes**: `$font-size-xs` through `$font-size-9xl`
- **Font Weights**: `$font-weight-light` through `$font-weight-bold`
- **Line Heights**: `$line-height-tight` through `$line-height-loose`

### Spacing (`_spacing.scss`)

- **Base Unit**: `$space-unit` (8px)
- **Scale**: `$space-1` (8px) through `$space-12` (96px)
- **Border Radius**: `$radius-sm` through `$radius-full`
- **Breakpoints**: `$breakpoint-sm` through `$breakpoint-xl`

## Compilation

### One-time Compilation

```bash
sass sass/main.scss css/main.css
```

### Watch Mode (Auto-compile on save)

```bash
sass --watch sass/main.scss:css/main.css
```

## Page-Specific Styles

### About Page

The about page includes the following sections:

- **Mission Section**: Hero-style intro with gradient background
- **Accessibility Features**: Grid of feature cards with hover effects
- **Newsletter Section**: Subscription form with illustration
- **Engagement Section**: Step-by-step guide cards

## Container Queries

Container queries are used in the features grid to enable component-level responsiveness:

```scss
.features-grid {
  @container (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
```

## Accessibility Features

- **Focus States**: All interactive elements have visible focus indicators
- **Color Contrast**: All text meets WCAG AA standards
- **Semantic HTML**: Styles are built on semantic HTML structure
- **Screen Reader Support**: `.visually-hidden` utility class for screen reader only content

## BEM Methodology

The project follows BEM (Block Element Modifier) naming convention:

```scss
.block {
} // Component
.block__element {
} // Child element
.block--modifier {
} // Variation
```

Example:

```scss
.card {
} // Block
.card__title {
} // Element
.card__image {
} // Element
.card--featured {
} // Modifier
```

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 992px
- **Large Desktop**: > 992px

## Best Practices

1. Always use design tokens (variables) instead of hard-coded values
2. Follow BEM naming convention for consistency
3. Keep partials focused on single responsibility
4. Use nesting sparingly (max 3 levels deep)
5. Group related properties together
6. Add comments for complex logic

## Future Improvements

- Migrate from `@import` to `@use` (Dart Sass 3.0 preparation)
- Replace `darken()` with `color.scale()` or `color.adjust()`
- Add more container queries for component-level responsiveness
- Create utility classes partial for common patterns
