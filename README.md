# StoryCast

An Accessible Media Feature Microsite - A modern, responsive website showcasing audio stories, documentaries, and video storytelling content.

## Features

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean interface with smooth animations and hover effects
- **Accessible**: Built with semantic HTML and accessibility in mind
- **SCSS Architecture**: Organized and maintainable styling with variables and mixins

## Project Structure

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

## Technologies Used

- HTML5
- CSS3
- SCSS/Sass
- Google Fonts (Inter)

## Development

### Prerequisites

- Node.js and npm installed
- Sass compiler

### Setup

1. Clone or download the project

2. Install Sass globally (if not already installed):

   ```bash
   npm install -g sass
   ```

3. Compile SCSS to CSS:

   ```bash
   sass sass/main.scss css/main.css
   ```

4. For development with auto-compilation:

   ```bash
   sass --watch sass/main.scss css/main.css
   ```

5. Open `index.html` in your browser

## Design System

### Colors

- Primary: `#4F6EF7` (Blue)
- Yellow: `#F5E84C`
- Pink: `#FFB6D9`
- Blue: `#A2C8F5`
- Green: `#B8E6D5`
- Mint: `#A3DED4`

### Typography

- Font Family: Inter
- Heading sizes: 42px (hero), 24px (footer brand), 20px (cards)
- Body text: 14-18px

### Spacing

- XS: 8px
- SM: 16px
- MD: 24px
- LG: 48px
- XL: 64px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 StoryCast. All rights reserved.
