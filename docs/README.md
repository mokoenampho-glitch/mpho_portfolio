# Mpho Mokoena Portfolio - GitHub Pages

This is a single-page HTML portfolio optimized for GitHub Pages deployment.

## Features

- ✨ Modern minimalist design with brown palette (#EBE1D7, #C5AC8E, #EDE5DB, #71523D)
- 🎨 Dark/Light theme toggle with Grok-style gradients
- 💫 Animated particle system with pink accents (#FF3366)
- 🪟 Glassmorphism effects and paint overlays
- 📱 Fully responsive design
- ⚡ Performance optimized (no external dependencies)
- ♿ Accessible with keyboard navigation

## Deployment to GitHub Pages

### Option 1: Deploy from `docs` folder (Recommended)

1. Push this code to your GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main` and folder: `/docs`
5. Click Save
6. Your site will be available at: `https://[username].github.io/[repository-name]/`

### Option 2: Deploy from root

1. Move `index.html` and `.nojekyll` from `docs/` to root directory
2. Go to repository Settings → Pages
3. Select branch: `main` and folder: `/ (root)`
4. Click Save

## Local Development

Simply open `index.html` in your browser. No build process required!

## Customization

All styling is contained in the `<style>` tag in the HTML file:
- Colors: Edit CSS custom properties in `:root` and `.dark`
- Particles: Adjust particle count and behavior in the JavaScript section
- Content: Edit HTML sections directly

## Performance

- Pure HTML/CSS/JS (no frameworks, ~90KB total)
- Canvas-based particle system (60fps)
- Optimized for mobile (reduced particles on small screens)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

© 2025 Mpho Mokoena. All rights reserved.
