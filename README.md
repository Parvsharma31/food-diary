# 🍽️ Food Diary

A visually stunning, food-themed recipe website built with **React + Vite**. Explore world cuisines, discover chef-inspired recipes, and level up your home cooking with practical kitchen tips.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🏠 Animated Hero Section** — Full-viewport hero with floating food emojis, gradient text, and smooth CTA buttons
- **🎠 Featured Carousel** — Auto-advancing image carousel with interactive navigation dots and ken-burns zoom  
- **📚 Recipe Collections** — Curated collection cards with parallax hover effects and text reveal animations
- **🌍 World Cuisines** — Explore Italian, Chinese, Mexican, and Indian cuisines with food emoji badges
- **👨‍🍳 Famous Chefs** — Chef profiles with animated gradient avatar borders and quote-style bios
- **💡 Kitchen Tips** — Practical cooking tips with animated icon cards and glow-on-hover effects
- **📖 Recipe Cards** — Ingredient count badges, shimmer hovers, and category tags
- **🎨 Scroll Reveal Animations** — Staggered fade-in-up animations as sections enter the viewport
- **📱 Responsive Design** — Mobile hamburger menu with slide-in overlay
- **🔝 Scroll-to-Top** — Floating button that appears after scrolling
- **🌊 Wave Footer** — Multi-column footer with SVG wave divider

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components & state management |
| Vite 5 | Fast dev server & build tool |
| React Router DOM | Client-side routing |
| Vanilla CSS | Custom design system with CSS variables |
| IntersectionObserver | Scroll-reveal animations |
| Google Fonts | Outfit + Playfair Display typography |

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/food-diary.git
cd food-diary

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
food-diary/
├── assets/              # SVG icons and images
├── data/
│   └── recipes.json     # Recipe data (title, description, image, ingredients)
├── src/
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll animation hook
│   ├── components/
│   │   ├── FeaturedCarousel.jsx  # Auto-advancing image carousel with dots
│   │   ├── RecipeCard.jsx        # Recipe card with badges and scroll-reveal
│   │   └── LoginModal.jsx        # Sign-in modal dialog
│   ├── pages/
│   │   ├── Home.jsx              # Hero, collections, tips, recipe list
│   │   ├── Cuisines.jsx          # World cuisines grid
│   │   ├── FamousChefs.jsx       # Chef profile cards
│   │   ├── AboutUs.jsx           # About section with stats
│   │   ├── RecipeList.jsx        # Recipe grid loader
│   │   └── RecipeDetail.jsx      # Individual recipe view
│   ├── App.jsx           # Root layout, nav, footer
│   ├── main.jsx          # React entry point
│   └── styles.css        # Complete design system (~900 lines)
├── index.html            # HTML entry with SEO meta tags
├── vite.config.js        # Vite configuration
└── package.json
```

## 🎨 Design System

The CSS uses a warm, food-themed color palette:

| Token | Color | Usage |
|---|---|---|
| `--orange` | `#FF6B35` | Primary actions, CTAs |
| `--tomato` | `#E8412C` | Accents, gradients |
| `--honey` | `#FFD23F` | Highlights, badges |
| `--herb` | `#2D9B3A` | Success, tags |
| `--chocolate` | `#1A1A2E` | Footer, dark surfaces |
| `--cream` | `#FFF8E7` | Warm backgrounds |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
