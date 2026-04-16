# Rewired Minds — Website

A dark-themed e-commerce website for P.D. Groesbeek's PDF books, built with React + TypeScript + Vite.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx / .css         # Sticky navigation
│   ├── Hero.tsx / .css           # Hero section with animated book mockup
│   ├── TrustBar.tsx / .css       # Scrolling trust strip
│   ├── BooksSection.tsx / .css   # Book grid with category filters
│   ├── BookCard.tsx / .css       # Individual book card
│   ├── About.tsx / .css          # Author section
│   ├── Testimonials.tsx / .css   # Reader reviews
│   ├── Contact.tsx / .css        # Contact form
│   └── Footer.tsx / .css         # Footer with links
├── data/
│   └── books.ts                  # All book data — edit here to update books/prices
├── App.tsx / App.css
├── main.tsx
└── index.css                     # Global styles, CSS variables, animations
```

## Customisation Guide

### Updating Books & Prices
Edit `src/data/books.ts` — change titles, descriptions, prices, colours, and icons.

### Adding Real Author Photo
In `src/components/About.tsx`, replace the `.about__photo-placeholder` div with:
```tsx
<img src="/author.jpg" alt="P.D. Groesbeek" className="about__photo-img" />
```
Then add to `About.css`:
```css
.about__photo-img {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 4px;
}
```

### Wiring Up Payments
In `src/components/BookCard.tsx`, the `handleAdd` button fires a local state change.
Connect it to your payment provider (PayFast, PayGate, Stripe, etc.) here.

### Contact Form
In `src/components/Contact.tsx`, the `handleSubmit` function currently simulates a send.
Wire it to an email service like EmailJS, Formspree, or your own backend API.

### Brand Colours
All colours are CSS variables in `src/index.css` under `:root {}`.
Main brand orange: `--orange-fire: #e85d04`

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Netlify, Vercel, or any static host.
