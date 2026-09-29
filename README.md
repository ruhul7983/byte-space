# ByteSpace - Online Learning Platform

ByteSpace is a modern, high-performance online learning platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It offers a polished, responsive user experience with rich micro-interactions, modular UI architecture, and a multi-theme design system.

---

## 🚀 Tech Stack & Core Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables and `@theme inline` tokens
- **Typography**:
  - **Poppins** (`next/font/google` for headings and display figures)
  - **Satoshi** (Embedded `@font-face` from Fontshare for body, metadata, and controls)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript 5 with strict typing

---

## 🏛️ Project Architecture & Directory Structure

The project strictly follows Next.js App Router best practices, featuring route grouping, private section colocation, and atomic shared components.

```text
byte-space/
├── app/
│   ├── (home)/                     # Route Group: Landing Page (clean URL '/')
│   │   ├── _sections/              # Colocated Private Section Components
│   │   │   ├── Hero.tsx            # Hero banner, floating shapes, search & stat cards
│   │   │   ├── BrandLogo.tsx       # Partner brand logos carousel bar
│   │   │   ├── CoursesSection.tsx  # Course catalog with category filter pills & grid
│   │   │   ├── PlatformGrowthSection.tsx # Two-column student & creator growth featurettes
│   │   │   ├── CourseCategories.tsx# Learning paths grid with icon badges
│   │   │   ├── JoinUs.tsx          # Creator recruitment CTA with 3D floating accents
│   │   │   └── CommunityFeedback.tsx # Testimonials with dynamic radial glow effects
│   │   ├── layout.tsx              # Layout specific to (home) route (injects Footer)
│   │   └── page.tsx                # Home page composer assembling all sections
│   ├── globals.css                 # Global styles, Tailwind v4 @theme & multi-theme variables
│   ├── layout.tsx                  # Root layout (HTML shell, font loaders, global meta)
│   └── favicon.ico                 # Site favicon
├── components/                     # Reusable Application-Wide Components
│   ├── Navbar/
│   │   └── Navbar.tsx              # Responsive navigation bar with mobile slide-down drawer
│   ├── Footer/
│   │   └── Footer.tsx              # Comprehensive footer with newsletter, links & copyright
│   └── CourseCard/
│       └── CourseCard.tsx          # Reusable course card (badges, avatar stack, price)
├── public/                         # Static Assets & Media
│   └── images/
│       ├── brand/                  # Partner logos (brand1 - brand5)
│       ├── growth/                 # Growth section assets (girl.png, twist.png)
│       ├── hero/                   # 3D floating shapes, student centerpiece (boy.png)
│       └── logo.png / logo-footer.png # Brand logos
├── next.config.ts                  # Next.js runtime configuration
├── tsconfig.json                   # TypeScript compiler options
├── package.json                    # Project dependencies and scripts
└── README.md                       # Complete project documentation
```

---

## 🧩 Key Architectural Decisions

### 1. Route Groups `(home)` & Private Sections `_sections`
- **Route Group `(home)`**: Isolates marketing page layout and routing without affecting the root URL path (`/`).
- **Private Folders `_sections`**: Prefixed with an underscore (`_sections`) to keep individual section components colocated with the page that consumes them while ensuring Next.js does not treat them as accessible URL endpoints.

### 2. Composition of Sections on Landing Page
[`app/(home)/page.tsx`](app/(home)/page.tsx) acts as a clean orchestrator:
1. `<Hero />` — Interactive search, hero headline, student centerpiece, and floating stat badges.
2. `<BrandLogo />` — Clean partner trust bar.
3. `<CoursesSection />` — Filterable course list powered by reusable `<CourseCard />` components.
4. `<PlatformGrowthSection />` — Visual blocks detailing student progression & instructor course-management tooling with custom radial gradients.
5. `<CourseCategories />` — Categorized paths (Design, Development, IT, Business, Marketing, Photography).
6. `<JoinUs />` — Call-to-action banner with decorative 3D geometries.
7. `<CommunityFeedback />` — Social proof and student/creator reviews.

---

## 🎨 Theme Engine & Design System

The application uses a centralized token system defined in [`app/globals.css`](app/globals.css) that integrates directly with Tailwind CSS v4's `@theme inline`.

### Theme Variables & Presets
All core colors are driven by semantic CSS variables, allowing instant theme switching via `data-theme`:

| Token | Default Theme | Dark Mode | Emerald | Violet |
| :--- | :--- | :--- | :--- | :--- |
| `--primary` | `#003BE2` | `#0B0F19` | `#064E3B` | `#4C1D95` |
| `--accent` | `#D4FB20` | `#38BDF8` | `#34D399` | `#F472B6` |
| `--accent-ring` | `#CBFC01` | `#0284C7` | `#10B981` | `#EC4899` |
| `--bg-card` | `#FFFFFF` | `#1E293B` | `#FFFFFF` | `#FFFFFF` |
| `--bg-progress` | `#F6F6F6` | `#334155` | `#ECFDF5` | `#FDF2F8` |
| `--text-nav` | `#F5F5F6` | `#F1F5F9` | `#F0FDF4` | `#FAF5FF` |
| `--text-hero-sub`| `#E5E6E8` | `#94A3B8` | `#D1FAE5` | `#E9D5FF` |
| `--text-card-title`| `#242528`| `#F8FAFC` | `#064E3B` | `#4C1D95` |

### Tailwind Utility Classes Available
- **Backgrounds**: `bg-primary`, `bg-accent`, `bg-card`, `bg-progress`
- **Typography**: `text-text-primary`, `text-nav-text`, `text-hero-sub`, `text-card-title`, `text-text-muted`
- **Borders & Accents**: `border-accent-ring`, `text-star`, `fill-star`
- **Font Families**: `font-poppins`, `font-satoshi`

---

## 🔤 Typography Strategy

- **Poppins**: Loaded via `next/font/google` in [`app/layout.tsx`](app/layout.tsx) with font subset optimization and zero Cumulative Layout Shift (CLS). Used for prominent headings, percentage stats, and price points.
- **Satoshi**: Embedded directly via `@font-face` rules in [`app/globals.css`](app/globals.css) with `font-display: swap` for body copy, category badges, navigation links, and descriptions.

---

## 📱 Responsive Design Strategy

The layout is built mobile-first and tuned across three primary breakpoints:
- **Mobile (`< 640px`)**:
  - `Navbar`: Collapses navigation links into a slide-down mobile drawer with hamburger toggle.
  - `Hero`: The student illustration is anchored flush to the bottom-most baseline, while search capsules and floating stat cards scale smoothly without horizontal overflow.
  - `Grids`: Course cards and testimonials collapse into clean single-column or dual-column layouts.
- **Tablet (`640px` - `1024px`)**:
  - Balanced 2-column and 3-column grids for courses and categories.
  - Proportional spacing and scaling on visual compositions in growth sections.
- **Desktop (`>= 1024px`)**:
  - Exact pixel-perfect alignment, complete 3D decorative element placement, radial glow backdrops, and expanded multi-column navigation.

---

## 🛠️ Development & Build Commands

### Prerequisites
- Node.js `18.18+` or `20+`
- npm, pnpm, or yarn

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (with Turbopack)
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Start production server
npm run start

# 5. Run linting checks
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.
