# 🚀 Lumore Website Development Plan

**Created:** January 20, 2026
**Status:** Ready to Start Development
**Priority:** IMMEDIATE - Build demo website ASAP

---

## 📋 **Overview**

This document outlines the complete strategy for building the Lumore demo website using existing 46 assets with creative CSS/HTML solutions. No new asset generation needed.

### **Goal:**
Build a functional, beautiful demo website that showcases the Lumore brand and products using existing assets creatively.

### **Philosophy:**
**Demo first, enhance later.** Get a working website live quickly, iterate based on feedback, add videos and additional assets gradually.

---

## 📚 **Development Guidelines**

**Important:** This document provides the high-level development plan. For detailed implementation guidelines, best practices, and checklists, see:

- **[Development Guidelines Folder](./development-guidelines/README.md)** - Complete guide to all development resources
- **[Component Best Practices](./development-guidelines/component-best-practices.md)** - Production-ready code examples
- **[Development Checklist](./development-guidelines/development-checklist.md)** - Comprehensive verification checklist
- **[Agent-Skills Integration](./development-guidelines/agent-skills-integration.md)** - Using Claude with agent-skills

These guidelines integrate [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) best practices (45 React rules + 100+ web design guidelines) optimized for Lumore's Next.js 14 + TailwindCSS + Framer Motion stack.

---

## 🎯 **Key Decisions**

1. ✅ **Use transparent products + CSS backgrounds** instead of generating 7 e-commerce cover photos
2. ✅ **Use static testimonial images** instead of converting to video
3. ✅ **Use placeholders** for hero videos and Grab the Deals
4. ✅ **Build ingredient/category cards with code** (HTML/CSS/Framer Motion)
5. ✅ **Focus on speed to demo** over perfect assets

---

## 🛠️ **Tech Stack**

### **Core Technologies:**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React / Heroicons
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel (recommended)

### **Development Tools:**
- **Package Manager:** npm / pnpm / yarn
- **Linting:** ESLint
- **Formatting:** Prettier
- **Version Control:** Git

### **Why This Stack:**
- **Next.js 14:** Modern React framework, excellent performance, built-in image optimization
- **TailwindCSS:** Rapid UI development, consistent design system, easy responsiveness
- **Framer Motion:** Smooth animations, professional micro-interactions
- **TypeScript:** Type safety, better developer experience, fewer bugs

---

## 📂 **Project Structure**

```
lumore/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── layout.tsx               # Root layout
│   │   ├── globals.css              # Global styles
│   │   └── (routes)/                # Additional pages (future)
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── Hero.tsx
│   │   │   ├── TopShelfPicks.tsx
│   │   │   ├── NewRelease.tsx
│   │   │   ├── GrabTheDeals.tsx
│   │   │   ├── IngredientPhilosophy.tsx
│   │   │   ├── RealRoutines.tsx
│   │   │   ├── ExploreByCategory.tsx
│   │   │   ├── PressAndAwards.tsx
│   │   │   ├── CombosAndKits.tsx
│   │   │   ├── FounderStory.tsx
│   │   │   ├── BlogHighlights.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── RetailPartners.tsx
│   │   │   └── EmailSignup.tsx
│   │   ├── shared/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnnouncementBar.tsx
│   │   │   └── ProductCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── ... (other UI primitives)
│   ├── lib/
│   │   ├── constants.ts             # Product data, colors, etc.
│   │   └── utils.ts                 # Utility functions
│   └── types/
│       └── index.ts                 # TypeScript types
├── public/
│   └── assets/                      # All 46 optimized WebP images
│       ├── products/
│       ├── hero/
│       ├── testimonials/
│       ├── combos/
│       ├── blog/
│       ├── press-awards/
│       ├── founder/
│       └── models/
├── docs/                            # Documentation
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 **Asset Usage Strategy**

### **1. Top Shelf Picks (E-commerce Product Cards)**

**Asset:** Transparent product images
**Location:** `/public/assets/products/*-transparent.webp`

**Implementation:**
```tsx
// Transparent product image
<Image src="/assets/products/01-solar-veil-transparent.webp" />

// CSS gradient background
<div className="bg-gradient-to-br from-orange-200 to-orange-50">
  {/* Product image on top */}
</div>
```

**Result:** Premium product cards without generating 7 cover photos

**Gradients per Product:**
1. **Solar Veil:** Orange gradient (`from-orange-200 to-orange-50`)
2. **Dew Drops:** Blue gradient (`from-blue-200 to-blue-50`)
3. **Lumiskin:** Green gradient (`from-green-200 to-green-50`)
4. **Reset Mist:** Lavender gradient (`from-purple-200 to-purple-50`)
5. **Melt Away:** Coral gradient (`from-coral-200 to-coral-50`)
6. **Kiss Proof:** Honey gradient (`from-amber-200 to-amber-50`)
7. **Under Cover:** Mint gradient (`from-teal-200 to-teal-50`)

---

### **2. Hero Section**

**Assets:** 3 hero images
**Location:** `/public/assets/hero/`

**Files:**
- `hero-image-female.webp` (Underwater split photography)
- `hero-image-male.webp` (Urban/coastal)
- `hero-image-duo.webp` (Convertible duo)

**Implementation:**
- Carousel with 3 static images
- Auto-rotate or manual controls
- Each with tagline + "Explore More" CTA
- Placeholder slot for "New Release" video (use static image or CSS placeholder)

**Placeholder for Video:**
```tsx
<div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-gray-500">Video Coming Soon</p>
  </div>
</div>
```

---

### **3. Testimonials**

**Assets:** 7 testimonial images (static)
**Location:** `/public/assets/testimonials/`

**Files:**
- `testimonial-1.webp` through `testimonial-7.webp`

**Implementation:**
- Grid or carousel layout
- Image + text overlay (HTML/CSS)
- Star ratings
- Customer name, product, review text
- Tag skin type for relatability

**Result:** Effective social proof without video conversion

---

### **4. New Release Section**

**Asset Strategy:** Static product image + placeholder for factory video

**Implementation:**
- Left: Placeholder for factory video (use CSS animated placeholder or static image)
- Right: Product image, benefits, CTA, countdown timer
- Can use existing product render from `/public/assets/products/`

**Placeholder:**
```tsx
<div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg">
  <div className="absolute inset-0 flex items-center justify-center">
    <PlayCircle className="w-16 h-16 text-gray-400" />
    <p className="text-sm text-gray-500">Manufacturing Video Coming Soon</p>
  </div>
</div>
```

---

### **5. Grab the Deals Section**

**Asset Strategy:** Static product + animated CSS placeholder

**Implementation:**
- Center: Animated placeholder for claw machine video
- Use existing product image with CSS animations (pulse, glow, etc.)
- Side: Product details, timer, "Grab Now" CTA

**Placeholder:**
```tsx
<div className="relative aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-lg">
  <Image
    src="/assets/products/01-solar-veil.webp"
    className="animate-pulse"
  />
  <div className="absolute top-4 right-4">
    <Badge>Daily Special</Badge>
  </div>
</div>
```

**CSS Animation:**
```css
@keyframes claw-grab {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-claw {
  animation: claw-grab 2s ease-in-out infinite;
}
```

---

### **6. Ingredient Cards (HTML/CSS/Framer Motion)**

**Asset Strategy:** No images - build with code

**Implementation:**
- Hexagon design using CSS clip-path or SVG
- Gradient backgrounds
- Icon for each ingredient (Lucide/Heroicons)
- Hover animations (Framer Motion)

**Example:**
```tsx
<motion.div
  className="hexagon bg-gradient-to-br from-blue-400 to-purple-500"
  whileHover={{ scale: 1.05 }}
>
  <Icon className="w-8 h-8" />
  <h3>Hyaluronic Acid</h3>
  <p>Deep hydration</p>
</motion.div>
```

**Hexagon CSS:**
```css
.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
```

---

### **7. Category Cards (HTML/CSS/Framer Motion)**

**Asset Strategy:** No images - build with code

**Implementation:**
- CSS gradients or textures per category
- Category icon (Lucide/Heroicons)
- Hover effects (scale, glow, bounce)
- Framer Motion animations

**Categories:**
1. Cleanse (green/mint)
2. Hydrate (blue/aqua)
3. Treat (purple/lavender)
4. Moisturise (cream/peach)
5. Protect (orange/yellow)
6. Comfort (pink/coral)

**Example:**
```tsx
<motion.div
  className="category-card bg-gradient-to-br from-green-400 to-teal-500"
  whileHover={{ scale: 1.05, rotate: 2 }}
>
  <Droplets className="w-12 h-12" />
  <h3>Hydrate</h3>
  <p>Quench your skin</p>
</motion.div>
```

---

### **8. Combo/Ritual Sets**

**Assets:** 5 combo/ritual set images
**Location:** `/public/assets/combos/`

**Files:**
- `morning-ritual.webp`
- `evening-ritual.webp`
- `hydration-power-duo.webp`
- `daily-defense-duo.webp`
- `fresh-start-duo.webp`

**Implementation:**
- Slider/carousel of bundle cards
- Show savings labels
- Quick add to cart
- Show included products

---

### **9. Blog Headers**

**Assets:** 3 blog header images
**Location:** `/public/assets/blog/`

**Implementation:**
- Blog card with image
- Headline and excerpt as HTML/CSS text overlay
- Read more CTA

---

### **10. Press & Awards**

**Assets:** 3 press/awards images
**Location:** `/public/assets/press-awards/`

**Implementation:**
- Carousel of magazine mockups
- Auto-scroll ticker
- Add additional text via CSS overlay if needed

---

### **11. Founder Portraits**

**Assets:** 2 founder portraits
**Location:** `/public/assets/founder/`

**Implementation:**
- Image + mission statement
- Collapsible narrative (expand/collapse)
- Humanize the brand

---

## 📱 **Component Development Priority**

### **Phase 1: Core Layout (Week 1)**
1. ✅ Navigation & Mega-Menu
2. ✅ Footer
3. ✅ Announcement Bar
4. ✅ Base page structure

### **Phase 2: Hero & Products (Week 1-2)**
5. ✅ Hero Carousel (3 images + placeholder)
6. ✅ Value Icons Row
7. ✅ Top Shelf Picks (transparent products + CSS backgrounds)
8. ✅ Combo/Ritual Sets slider

### **Phase 3: Engagement Sections (Week 2)**
9. ✅ New Release (with placeholder)
10. ✅ Grab the Deals (with placeholder)
11. ✅ Testimonials (static images)
12. ✅ Ingredient Philosophy (code-based cards)

### **Phase 4: Discovery & Social Proof (Week 2-3)**
13. ✅ Explore by Category (code-based cards)
14. ✅ Real Routines (static or placeholders)
15. ✅ Press & Awards
16. ✅ Blog Highlights

### **Phase 5: Conversion & Footer (Week 3)**
17. ✅ Founder Story
18. ✅ Retail Partners
19. ✅ Email Signup
20. ✅ Final polish & responsiveness

---

## 🎨 **Design System**

### **Typography:**
- **Headings:** Playfair Display (serif)
  - H1: 48px (desktop), 36px (mobile)
  - H2: 36px (desktop), 28px (mobile)
  - H3: 24px (desktop), 20px (mobile)
- **Body:** Inter (sans-serif)
  - Body: 16px
  - Small: 14px
  - Tiny: 12px

### **Color Palette:**
**Product Colors:**
- Solar Veil: #FFE5CC (peach orange)
- Dew Drops: #B8D4E8 (ocean blue)
- Lumiskin: #C5D8BE (sage green)
- Reset Mist: #D8CEE8 (lavender)
- Melt Away: #F5D4C8 (peachy coral)
- Kiss Proof: #F0DCC8 (honey nude)
- Under Cover: #D4E8DD (mint green)

**Brand Colors:**
- Primary: Iridescent lilac (#E5D4F7)
- Secondary: Ocean blue (#B8D4E8)
- Accent: Soft mint (#D4E8DD)
- Neutral: Pearl white (#FAFAFA)

### **Spacing:**
- Base unit: 4px
- Section padding: 80px (desktop), 40px (mobile)
- Component spacing: 24px
- Element spacing: 16px

### **Shadows:**
- Small: `shadow-sm` (cards)
- Medium: `shadow-md` (hover states)
- Large: `shadow-lg` (modals, mega-menu)

### **Animations:**
- Duration: 200-300ms (fast), 500ms (normal), 800ms (slow)
- Easing: ease-in-out, cubic-bezier(0.4, 0, 0.2, 1)
- Hover: scale(1.05), translateY(-4px)

---

## 🧩 **Component Architecture**

### **Reusable Components:**

**ProductCard:**
```tsx
interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  image: string; // transparent product
  gradient: string; // CSS gradient classes
  href: string;
}
```

**TestimonialCard:**
```tsx
interface TestimonialCardProps {
  image: string;
  name: string;
  product: string;
  review: string;
  rating: number;
  skinType?: string;
}
```

**CategoryCard:**
```tsx
interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  href: string;
}
```

**IngredientCard:**
```tsx
interface IngredientCardProps {
  name: string;
  benefit: string;
  icon: LucideIcon;
  color: string;
}
```

---

## 📊 **Data Structure**

### **Product Data:**
```typescript
interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string; // with background
  imageTransparent: string; // transparent version
  gradient: string; // CSS gradient for card
  category: string;
  ingredients: string[];
  benefits: string[];
  size: string;
  color: string; // hex color
}

const products: Product[] = [
  {
    id: 1,
    name: "solar veil",
    slug: "solar-veil",
    description: "SPF 50 Sunscreen",
    price: 38,
    rating: 4.9,
    reviewCount: 1247,
    image: "/assets/products/01-solar-veil.webp",
    imageTransparent: "/assets/products/01-solar-veil-transparent.webp",
    gradient: "from-orange-200 to-orange-50",
    category: "Protect",
    ingredients: ["Vitamin C", "Niacinamide", "Zinc Oxide"],
    benefits: ["SPF 50 Protection", "Brightening", "Lightweight"],
    size: "50ml",
    color: "#FFE5CC"
  },
  // ... 6 more products
];
```

### **Testimonial Data:**
```typescript
interface Testimonial {
  id: number;
  name: string;
  product: string;
  review: string;
  rating: number;
  image: string;
  skinType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maya Chen",
    product: "Dew Drops Serum",
    review: "This serum transformed my dry skin into glowing, plump perfection!",
    rating: 5,
    image: "/assets/testimonials/testimonial-1.webp",
    skinType: "Dry"
  },
  // ... 6 more testimonials
];
```

### **Bundle Data:**
```typescript
interface Bundle {
  id: number;
  name: string;
  description: string;
  products: number[]; // product IDs
  price: number;
  savings: number;
  image: string;
}

const bundles: Bundle[] = [
  {
    id: 1,
    name: "Morning Ritual",
    description: "Complete AM skincare routine",
    products: [2, 3, 1], // Dew Drops, Lumiskin, Solar Veil
    price: 98,
    savings: 16,
    image: "/assets/combos/morning-ritual.webp"
  },
  // ... 4 more bundles
];
```

---

## 📚 **Best Practices Reference**

This section integrates best practices from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills), providing 45 React performance rules and 100+ web design guidelines optimized for Next.js 14, TailwindCSS, and Framer Motion.

### **Resource Links:**
- [React Best Practices (45 rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)
- [Web Design Guidelines (100+ rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)
- [Web Interface Guidelines Reference](https://github.com/vercel-labs/web-interface-guidelines)

### **Priority Levels:**
- **CRITICAL:** Must implement immediately - major performance/accessibility impact
- **HIGH:** Implement during initial development - significant UX improvement
- **MEDIUM:** Implement during polish phase - quality enhancement

---

## ⚡ **Performance Guidelines**

### **CRITICAL: Eliminating Waterfalls**

Never await sequential data fetches on product pages. Use `Promise.all()` for parallel queries.

**Bad: Sequential waterfalls**
```typescript
// DON'T: Each request waits for previous to complete
const product = await fetchProduct(id);
const reviews = await fetchReviews(id);
const related = await fetchRelated(product.category);
```

**Good: Parallel fetching**
```typescript
// DO: All requests execute simultaneously
const [product, reviews, related] = await Promise.all([
  fetchProduct(id),
  fetchReviews(id),
  fetchRelated(category) // Pass category directly, don't wait for product
]);
```

### **CRITICAL: Bundle Size Optimization**

**Avoid Barrel Imports:**
```typescript
// DON'T: Imports entire barrel file
import { ProductCard, ProductFilter, ReviewForm } from '@/components/products';

// DO: Import specific files only
import { ProductCard } from '@/components/products/ProductCard';
const ProductFilter = dynamic(() => import('@/components/products/ProductFilter'));
const ReviewForm = dynamic(() => import('@/components/products/ReviewForm'));
```

**Dynamic Imports for Heavy Components:**
Use `next/dynamic` for:
- Product comparison tool
- Review submission form
- Product filters/sorting UI
- Image galleries (below fold)
- Virtual try-on features (future)

```typescript
import dynamic from 'next/dynamic';

const ProductFilter = dynamic(() => import('@/components/products/ProductFilter'), {
  loading: () => <FilterSkeleton />,
  ssr: false // If component doesn't need SSR
});
```

### **HIGH: Server-Side Performance**

**Use React.cache() for Repeated Queries:**
```typescript
import { cache } from 'react';

// Cache ingredient lookups across components
export const getIngredient = cache(async (id: string) => {
  return await db.ingredients.findUnique({ where: { id } });
});

// Cache product queries
export const getProduct = cache(async (slug: string) => {
  return await db.products.findUnique({ where: { slug } });
});
```

**Parallelize Server Components:**
```typescript
// In product page layout
export default async function ProductLayout({ params }) {
  // Fetch in parallel on server
  const [product, similarProducts, reviews] = await Promise.all([
    getProduct(params.slug),
    getSimilarProducts(params.slug),
    getReviews(params.slug)
  ]);

  return (
    <div>
      <ProductDetails product={product} />
      <ReviewsList reviews={reviews} />
      <SimilarProducts products={similarProducts} />
    </div>
  );
}
```

---

## ♿ **Accessibility Guidelines**

### **CRITICAL: Icon Buttons**

All icon-only buttons MUST have `aria-label`.

**Shopping Cart, Search, Menu, Filters, Close buttons:**
```tsx
// DON'T: No accessibility
<button onClick={openCart}>
  <ShoppingCart />
</button>

// DO: Proper aria-label
<button onClick={openCart} aria-label="Open shopping cart">
  <ShoppingCart />
</button>
```

**Apply to:**
- Shopping cart icon
- Search icon
- Mobile menu hamburger
- Product filter toggles
- Modal close buttons
- Social media icons
- Wishlist/favorite buttons

### **HIGH: Form Accessibility**

**Proper Autocomplete Attributes:**
```tsx
// Checkout form - shipping address
<input
  type="text"
  name="address-line1"
  autocomplete="shipping address-line1"
  required
  aria-required="true"
  aria-label="Shipping address line 1"
/>

// Credit card number
<input
  type="text"
  name="cc-number"
  autocomplete="cc-number"
  inputMode="numeric"
  pattern="[0-9]*"
  aria-label="Credit card number"
/>

// Email for newsletter
<input
  type="email"
  name="email"
  autocomplete="email"
  aria-label="Email address"
/>
```

**NEVER Disable Paste:**
```tsx
// DON'T: Prevents password managers
<input
  type="password"
  onPaste={(e) => e.preventDefault()}
/>

// DO: Allow paste
<input
  type="password"
  name="password"
  autocomplete="current-password"
  aria-label="Password"
/>
```

### **HIGH: Keyboard Navigation**

**Product Filters Must Be Keyboard Accessible:**
- Tab: Navigate between filters
- Enter/Space: Toggle filter selection
- Escape: Close filter dropdown
- Arrow keys: Navigate within dropdowns

**Modal Dialogs (Cart, Quick View) Must:**
- Trap focus within modal when open
- Return focus to trigger element on close
- Close on Escape key
- Prevent body scroll when open

```tsx
import { useEffect, useRef } from 'react';

export function ProductModal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus modal when opened
    modalRef.current?.focus();

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      style={{ overscrollBehavior: 'contain' }}
    >
      {/* Modal content */}
    </div>
  );
}
```

**Skip-to-Content Links:**
```tsx
// In Navigation component
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
>
  Skip to main content
</a>
```

---

## 🎬 **Animation Guidelines**

### **CRITICAL: Only Animate Transform/Opacity**

Animating other properties causes layout recalculation and poor performance.

**DON'T Animate:**
- width, height
- padding, margin
- top, left, right, bottom (use transform instead)
- background-color (use opacity overlay instead)

**DO Animate:**
- transform (translate, scale, rotate)
- opacity

**Framer Motion Usage:**
```tsx
import { motion } from 'framer-motion';

// DON'T: Animates layout properties
<motion.div
  initial={{ opacity: 0, width: 0, height: 0, padding: 0 }}
  animate={{ opacity: 1, width: 'auto', height: 'auto', padding: '1rem' }}
/>

// DO: Only transform and opacity
<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 10 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.2 }}
/>
```

**TailwindCSS Transitions:**
```tsx
// DON'T: Transition all properties
className="transition-all duration-300 hover:scale-105"

// DO: Specify exact properties
className="transition-[transform,opacity] duration-200 hover:scale-105"
```

### **HIGH: Respect User Motion Preferences**

```tsx
import { useReducedMotion } from 'framer-motion';

function ProductCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -4 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
    >
      {/* Product content */}
    </motion.div>
  );
}
```

### **Animation Duration Guidelines:**

- **Fast interactions (hover, click):** 150-200ms
- **Normal animations (page transitions):** 300ms
- **Slow animations (complex movements):** 500ms
- **Never exceed:** 800ms

```tsx
// Product card hover - fast
<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }} />

// Modal open - normal
<motion.div animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />

// Page transition - slow
<motion.div animate={{ x: 0 }} transition={{ duration: 0.5 }} />
```

---

## 🖼️ **Image Optimization**

### **CRITICAL: Prevent Layout Shift**

Always provide explicit `width` and `height` to prevent Cumulative Layout Shift (CLS).

**Product Images:**
```tsx
// DON'T: No dimensions - causes layout shift
<Image
  src="/assets/products/solar-veil.webp"
  alt="Solar Veil Sunscreen"
/>

// DO: Explicit dimensions
<Image
  src="/assets/products/solar-veil.webp"
  alt="Solar Veil Sunscreen"
  width={400}
  height={400}
  priority={false}
/>
```

### **HIGH: Priority Loading Strategy**

**Hero/Above-Fold Images:**
```tsx
// Hero carousel images - load immediately
<Image
  src="/assets/hero/hero-image-female.webp"
  alt="Lumore hero image"
  width={1920}
  height={1080}
  priority={true} // Preload
  loading="eager"
/>
```

**Below-Fold Product Images:**
```tsx
// Product grid - lazy load
{products.map((product, index) => (
  <Image
    key={product.id}
    src={product.imageTransparent}
    alt={product.name}
    width={400}
    height={400}
    priority={index < 3} // First 3 products only
    loading={index < 3 ? 'eager' : 'lazy'}
  />
))}
```

**Product Gallery:**
```tsx
// Main image - priority
<Image src={product.image} priority={true} />

// Gallery thumbnails - lazy
{product.gallery.map((img) => (
  <Image src={img} loading="lazy" />
))}
```

### **MEDIUM: Responsive Images**

```tsx
<Image
  src="/assets/products/solar-veil.webp"
  alt="Solar Veil Sunscreen"
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
/>
```

---

## 🌙 **Dark Mode Guidelines**

### **Set Color Scheme on HTML Element**

Ensures proper form controls and browser UI theming.

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  );
}
```

### **TailwindCSS Dark Mode Implementation**

**Configure tailwind.config.ts:**
```typescript
module.exports = {
  darkMode: 'class', // or 'media' for automatic
  // ... rest of config
};
```

**Component Dark Mode Styles:**
```tsx
// Product card with dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <h2 className="text-gray-800 dark:text-gray-200">Solar Veil</h2>
  <p className="text-gray-600 dark:text-gray-400">SPF 50 Sunscreen</p>
  <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
    Add to Cart
  </button>
</div>
```

**Gradient Backgrounds in Dark Mode:**
```tsx
// Product card gradients
<div className="bg-gradient-to-br from-orange-200 to-orange-50 dark:from-orange-900 dark:to-orange-800">
  {/* Product content */}
</div>
```

---

## 📝 **Form Best Practices**

### **Proper Input Attributes**

**Checkout Form:**
```tsx
<form>
  {/* Email */}
  <input
    type="email"
    name="email"
    autocomplete="email"
    required
    aria-required="true"
    aria-label="Email address"
  />

  {/* Shipping address */}
  <input
    type="text"
    name="address-line1"
    autocomplete="shipping address-line1"
    required
    aria-label="Shipping address line 1"
  />

  <input
    type="text"
    name="address-line2"
    autocomplete="shipping address-line2"
    aria-label="Shipping address line 2"
  />

  <input
    type="text"
    name="city"
    autocomplete="shipping address-level2"
    required
    aria-label="City"
  />

  <input
    type="text"
    name="postal-code"
    autocomplete="shipping postal-code"
    required
    aria-label="Postal code"
  />

  {/* Credit card */}
  <input
    type="text"
    name="cc-number"
    autocomplete="cc-number"
    inputMode="numeric"
    pattern="[0-9]*"
    required
    aria-label="Credit card number"
  />

  <input
    type="text"
    name="cc-exp"
    autocomplete="cc-exp"
    placeholder="MM/YY"
    inputMode="numeric"
    aria-label="Expiration date"
  />

  <input
    type="text"
    name="cc-csc"
    autocomplete="cc-csc"
    inputMode="numeric"
    pattern="[0-9]*"
    aria-label="Security code"
  />
</form>
```

**Newsletter Form:**
```tsx
<form>
  <input
    type="email"
    name="email"
    autocomplete="email"
    placeholder="Enter your email"
    aria-label="Email address for newsletter"
    required
  />
  <button type="submit">Subscribe</button>
</form>
```

### **Input Mode for Mobile**

Use `inputMode` for better mobile keyboard:
```tsx
// Numeric inputs show number keyboard
<input type="text" inputMode="numeric" pattern="[0-9]*" />

// Email shows email keyboard
<input type="email" inputMode="email" />

// URL shows URL keyboard
<input type="url" inputMode="url" />

// Phone shows phone keyboard
<input type="tel" inputMode="tel" />
```

---

## 🔧 **Performance Optimization Checklist**

### **List Virtualization (If >50 Products)**

**Option 1: React Virtuoso**
```bash
npm install react-virtuoso
```

```tsx
import { VirtuosoGrid } from 'react-virtuoso';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <VirtuosoGrid
      data={products}
      itemContent={(index, product) => (
        <ProductCard product={product} />
      )}
      listClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
    />
  );
}
```

**Option 2: CSS content-visibility**
```css
/* For long product lists without virtualization */
.product-card {
  content-visibility: auto;
  contain-intrinsic-size: 300px 400px;
}
```

### **Image Optimization Checklist**

- ✅ All images in WebP format
- ✅ Explicit width/height on all images
- ✅ Priority loading for above-fold images
- ✅ Lazy loading for below-fold images
- ✅ Responsive image sizes configured
- ✅ No images larger than displayed size

### **Bundle Optimization Checklist**

- ✅ No barrel imports (use specific imports)
- ✅ Dynamic imports for heavy components
- ✅ Tree-shaking enabled
- ✅ No unused dependencies
- ✅ Code splitting by route

### **Accessibility Checklist**

- ✅ All icon buttons have `aria-label`
- ✅ Forms have proper `autocomplete` attributes
- ✅ Keyboard navigation works throughout
- ✅ Skip-to-content link present
- ✅ Focus visible on all interactive elements
- ✅ Color contrast meets WCAG AA standards
- ✅ Screen reader tested

### **Animation Checklist**

- ✅ Only animate transform/opacity
- ✅ Duration < 300ms for interactions
- ✅ `useReducedMotion` implemented
- ✅ No `transition: all`
- ✅ 60fps maintained

---

## 🚀 **Development Workflow**

### **Getting Started:**

1. **Initialize Next.js project:**
```bash
npx create-next-app@latest lumore --typescript --tailwind --app
cd lumore
```

2. **Install dependencies:**
```bash
npm install framer-motion lucide-react
npm install -D @types/node
```

3. **Copy assets:**
```bash
cp -r /path/to/assets/* public/assets/
```

4. **Set up project structure:**
```bash
mkdir -p src/components/{homepage,shared,ui}
mkdir -p src/lib src/types
```

5. **Configure TailwindCSS:**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'solar-veil': '#FFE5CC',
        'dew-drops': '#B8D4E8',
        'lumiskin': '#C5D8BE',
        // ... other product colors
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### **Development Process:**

1. **Component-first approach:**
   - Build UI components in isolation
   - Test responsiveness
   - Add animations
   - Connect data

2. **Mobile-first responsive:**
   - Design for mobile first
   - Add tablet breakpoints (md:)
   - Add desktop breakpoints (lg:, xl:)

3. **Progressive enhancement:**
   - Core functionality first
   - Add animations
   - Add micro-interactions
   - Add advanced features

4. **Testing:**
   - Test on Chrome, Safari, Firefox
   - Test on mobile devices
   - Test accessibility (keyboard navigation, screen readers)
   - Test performance (Lighthouse)

---

## ✅ **Success Metrics**

### **Performance:**
- Lighthouse score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total page size: < 5 MB
- Image optimization: WebP format, proper sizing

### **User Experience:**
- Mobile-responsive on all devices
- Smooth animations (60fps)
- Accessible (WCAG 2.1 AA)
- Fast page transitions
- Clear CTAs

### **Visual Quality:**
- Premium aesthetic
- Consistent design system
- Professional animations
- Beautiful product presentation
- Engaging social proof

---

## 📈 **Future Enhancements**

### **Post-Launch (Optional):**

1. **Add e-commerce cover photos:**
   - Generate 7 styled product photos
   - Replace CSS backgrounds if desired
   - A/B test which performs better

2. **Add videos:**
   - Convert 7 testimonial images to video (Veo 3, Luma, Kling)
   - Generate 3 hero videos (floating product, factory, claw machine)
   - Replace placeholders

3. **Add supplementary images:**
   - 4 product lineup renders
   - 4 Real Routines lifestyle shots
   - Additional marketing assets

4. **Add functionality:**
   - Shopping cart
   - Checkout flow
   - User accounts
   - Product reviews
   - Search functionality

5. **Add pages:**
   - Individual product pages
   - Category pages
   - Blog articles
   - About page
   - Contact page

---

## 🎯 **Key Takeaways**

1. ✅ **Can build complete demo with existing 46 assets**
2. ✅ **No new asset generation needed**
3. ✅ **CSS/HTML solutions for missing assets**
4. ✅ **Focus on speed to demo**
5. ✅ **Enhance with videos/covers later**

**Result:** Functional, beautiful demo website ready to launch quickly, with room for gradual enhancement based on feedback.

---

**Document Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Development 🚀
