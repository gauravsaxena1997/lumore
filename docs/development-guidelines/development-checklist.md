# ✅ Development Checklist

**Created:** January 20, 2026
**Purpose:** Comprehensive checklist for developing production-ready Lumore components

---

## 📋 Overview

Use this checklist throughout the development lifecycle to ensure every component meets Lumore's standards for performance, accessibility, and user experience. Based on [Vercel agent-skills best practices](https://github.com/vercel-labs/agent-skills).

---

## 🎯 Before Starting Component Development

### Planning Phase

- [ ] **Review relevant agent-skills guidelines** for the component type
  - ProductCard: Image optimization, accessibility, animations
  - Forms: Autocomplete attributes, keyboard navigation
  - Modals: Focus management, keyboard shortcuts
  - Navigation: Skip links, ARIA roles

- [ ] **Plan data fetching strategy**
  - Identify all required data
  - Map out fetch sequence
  - Combine into `Promise.all()` for parallel fetching
  - No sequential waterfalls allowed

- [ ] **Identify heavy components for dynamic imports**
  - Review component bundle size impact
  - Mark components >50KB for dynamic import
  - Plan loading states for dynamic components

- [ ] **Plan accessibility requirements**
  - List all interactive elements
  - Map keyboard navigation flow
  - Identify required ARIA attributes
  - Plan focus management

- [ ] **Design animation strategy**
  - Only transform/opacity animations
  - Define animation durations (<300ms)
  - Plan `useReducedMotion` behavior

---

## 💻 During Component Development

### Code Quality

- [ ] **TypeScript types defined**
  - All props have interfaces
  - No `any` types used
  - Return types specified

- [ ] **Component structure follows patterns**
  - Hooks at top
  - Event handlers defined
  - JSX returned
  - Exports at bottom

### Performance

- [ ] **No sequential data fetching**
  - All fetches in `Promise.all()`
  - Server-side queries cached with `React.cache()`
  - No awaiting inside loops

- [ ] **Dynamic imports for heavy components**
  ```tsx
  const HeavyComponent = dynamic(() => import('./HeavyComponent'));
  ```

- [ ] **Specific imports (no barrel imports)**
  ```tsx
  // Good
  import { ProductCard } from '@/components/products/ProductCard';

  // Bad
  import { ProductCard } from '@/components/products';
  ```

### Images

- [ ] **Explicit width and height on all images**
  ```tsx
  <Image src="..." width={400} height={400} />
  ```

- [ ] **Priority loading strategy implemented**
  - Above-fold: `priority={true}` and `loading="eager"`
  - Below-fold: `priority={false}` and `loading="lazy"`

- [ ] **Proper alt text**
  - Descriptive and specific
  - Includes product name and key details

### Accessibility

- [ ] **All icon buttons have `aria-label`**
  ```tsx
  <button aria-label="Open shopping cart">
    <ShoppingCart />
  </button>
  ```

- [ ] **Forms have proper attributes**
  - `autocomplete` on all inputs
  - `inputMode` for numeric fields
  - `aria-required` on required fields
  - Never disable paste

- [ ] **Keyboard navigation implemented**
  - Tab: Navigate between elements
  - Enter/Space: Activate buttons/links
  - Escape: Close modals/dropdowns
  - Arrow keys: Navigate within menus

- [ ] **Focus management**
  - Modals trap focus
  - Focus restored after modal close
  - Skip-to-content link present
  - Visible focus indicators

- [ ] **Semantic HTML used**
  - `<nav>` for navigation
  - `<main>` for main content
  - `<article>` for product cards
  - `<button>` for actions (not divs)

### Animations

- [ ] **Only animate transform/opacity**
  ```tsx
  // Good
  whileHover={{ y: -4, scale: 1.05 }}

  // Bad
  whileHover={{ width: '100%', padding: '2rem' }}
  ```

- [ ] **Duration < 300ms for interactions**
  - Hover: 150-200ms
  - Click: 100ms
  - Transitions: 300ms
  - Maximum: 500ms

- [ ] **`useReducedMotion` implemented**
  ```tsx
  const prefersReducedMotion = useReducedMotion();
  animate={prefersReducedMotion ? {} : { scale: 1.05 }}
  ```

- [ ] **No `transition: all` in CSS**
  ```css
  /* Good */
  transition: transform 0.2s, opacity 0.2s;

  /* Bad */
  transition: all 0.2s;
  ```

### Styling

- [ ] **TailwindCSS classes used**
- [ ] **Dark mode classes added**
  ```tsx
  className="bg-white dark:bg-gray-900"
  ```
- [ ] **Responsive classes applied**
  - Mobile first (default)
  - Tablet: `md:` prefix
  - Desktop: `lg:` and `xl:` prefixes

### Forms (if applicable)

- [ ] **Proper `autocomplete` attributes**
  - Email: `autocomplete="email"`
  - Address: `autocomplete="shipping address-line1"`
  - Credit card: `autocomplete="cc-number"`

- [ ] **Correct `inputMode` for mobile**
  - Numeric: `inputMode="numeric"`
  - Email: `inputMode="email"`
  - Tel: `inputMode="tel"`

- [ ] **Never disable paste**
  - Remove `onPaste={(e) => e.preventDefault()}`

- [ ] **Validation with clear errors**
  - Error messages linked via `aria-describedby`
  - Errors announced to screen readers with `role="alert"`

### Modals (if applicable)

- [ ] **Focus trap implemented**
- [ ] **Escape key closes modal**
- [ ] **Click outside closes modal**
- [ ] **Body scroll prevented when open**
- [ ] **Focus restored on close**
- [ ] **`overscroll-behavior: contain`**
- [ ] **`aria-modal="true"` and `role="dialog"`**

---

## ✅ Before Component Completion

### Self-Review

- [ ] **Code reviewed for best practices**
  - No console.logs
  - No commented code
  - Consistent formatting
  - Clear variable names

- [ ] **Error handling implemented**
  - Try/catch blocks where needed
  - Error states displayed to users
  - Fallback UI for failures

- [ ] **Loading states added**
  - Skeleton screens for data fetching
  - Spinners for actions
  - Disabled states during submission

### Testing Checklist

- [ ] **Component renders without errors**
- [ ] **All interactive elements work**
- [ ] **Data fetching succeeds**
- [ ] **Error states display correctly**
- [ ] **Loading states display correctly**

---

## 🧪 Accessibility Testing

### Keyboard Navigation

- [ ] **Test with keyboard only (no mouse)**
  - Tab through all interactive elements
  - Activate buttons with Enter/Space
  - Close modals with Escape
  - Navigate dropdowns with Arrow keys

- [ ] **Focus visible on all elements**
  - Outline visible on focus
  - Focus not trapped unintentionally
  - Focus order is logical

### Screen Reader Testing

- [ ] **Test with screen reader** (VoiceOver on Mac, NVDA/JAWS on Windows)
  - All buttons announced correctly
  - Form labels read properly
  - Error messages announced
  - Modal content accessible

- [ ] **ARIA attributes correct**
  - `aria-label` on icon buttons
  - `aria-required` on required inputs
  - `aria-describedby` linking errors
  - `aria-modal` on modals

### Color & Contrast

- [ ] **Color contrast meets WCAG AA**
  - Text: 4.5:1 contrast ratio
  - Large text: 3:1 contrast ratio
  - Interactive elements distinguishable

- [ ] **Does not rely solely on color**
  - Errors shown with icons/text
  - Links underlined or styled distinctly

---

## 🎨 Visual Testing

### Responsive Design

- [ ] **Test on mobile (375px width)**
  - Layout not broken
  - Text readable
  - Buttons tappable (min 44x44px)
  - Images scaled properly

- [ ] **Test on tablet (768px width)**
  - Grid layouts adapt
  - Navigation switches appropriately

- [ ] **Test on desktop (1440px+ width)**
  - Max-width constraints applied
  - Content centered
  - Images not pixelated

### Dark Mode

- [ ] **Component looks good in dark mode**
  - Text readable
  - Colors inverted properly
  - Borders visible
  - Interactive elements clear

- [ ] **Smooth transition between modes**
  - No flash of wrong theme
  - Gradients adapt properly

---

## ⚡ Performance Testing

### Layout Shift

- [ ] **No layout shift on image load**
  - All images have width/height
  - Skeleton screens match final size
  - Content doesn't jump around

- [ ] **Test with slow network** (Chrome DevTools: Slow 3G)
  - Images load progressively
  - No broken layout before images load

### Animation Performance

- [ ] **Animations run at 60fps**
  - Test hover states
  - Test transitions
  - No janky animations

- [ ] **Test with `prefers-reduced-motion`**
  - Animations disabled or simplified
  - No motion for users who prefer it

### Bundle Size

- [ ] **Component bundle size acceptable**
  - Heavy components dynamically imported
  - No unnecessary dependencies
  - Tree-shaking working

---

## 🔍 Browser Testing

### Cross-Browser Compatibility

- [ ] **Test on Chrome/Edge**
- [ ] **Test on Safari**
- [ ] **Test on Firefox**
- [ ] **Test on mobile browsers** (iOS Safari, Chrome Mobile)

### Common Issues to Check

- [ ] **Hover states work on mobile** (use tap instead)
- [ ] **Touch targets min 44x44px**
- [ ] **Scrolling smooth**
- [ ] **No horizontal scroll**

---

## 🚀 Pre-Deployment Checklist

### Code Quality

- [ ] **TypeScript compiles without errors**
  ```bash
  npm run build
  ```

- [ ] **No console errors in browser**
- [ ] **No React warnings**

### Performance

- [ ] **Lighthouse score reviewed**
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+

- [ ] **Core Web Vitals acceptable**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Final Checks

- [ ] **All TODOs resolved**
- [ ] **Documentation updated** (if needed)
- [ ] **Component added to Storybook** (if using)
- [ ] **Tested by another team member** (peer review)

---

## 📊 Component Quality Score

Rate your component on these criteria (1-5 scale):

### Performance
- [ ] **No sequential waterfalls** (5 = all parallel)
- [ ] **Bundle size optimized** (5 = minimal size)
- [ ] **Images optimized** (5 = perfect loading strategy)
- [ ] **60fps animations** (5 = buttery smooth)

### Accessibility
- [ ] **Keyboard navigation** (5 = fully navigable)
- [ ] **Screen reader support** (5 = perfect ARIA)
- [ ] **Color contrast** (5 = exceeds WCAG AA)
- [ ] **Focus management** (5 = logical flow)

### User Experience
- [ ] **Loading states** (5 = clear feedback)
- [ ] **Error handling** (5 = helpful messages)
- [ ] **Responsive design** (5 = works everywhere)
- [ ] **Dark mode** (5 = beautiful in both)

**Target Score:** 18-20 per category (90-100%)

---

## 🐛 Common Issues & Fixes

### Issue: Layout Shift on Image Load

**Fix:**
```tsx
// Always provide width and height
<Image src="..." width={400} height={400} />
```

### Issue: Sequential Data Fetching

**Fix:**
```tsx
// Don't do this
const product = await fetchProduct();
const reviews = await fetchReviews();

// Do this
const [product, reviews] = await Promise.all([
  fetchProduct(),
  fetchReviews()
]);
```

### Issue: Janky Animations

**Fix:**
```tsx
// Don't animate width/height/padding
// Only animate transform/opacity

// Bad
<motion.div animate={{ width: '100%' }} />

// Good
<motion.div animate={{ scale: 1 }} />
```

### Issue: Icon Button Not Accessible

**Fix:**
```tsx
// Add aria-label
<button aria-label="Open shopping cart">
  <ShoppingCart />
</button>
```

### Issue: Form Not Mobile-Friendly

**Fix:**
```tsx
// Add inputMode for better mobile keyboards
<input
  type="text"
  inputMode="numeric" // Shows number keyboard
  autocomplete="cc-number"
/>
```

### Issue: Modal Focus Not Trapped

**Fix:**
```tsx
// Use focus trap library or implement manually
useEffect(() => {
  if (isOpen) {
    modalRef.current?.focus();
    // Add focus trap logic
  }
}, [isOpen]);
```

---

## 📚 Additional Resources

- [Vercel Agent Skills - React Best Practices](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)
- [Vercel Agent Skills - Web Design Guidelines](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [MDN - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

---

## 💡 Tips for Success

1. **Use this checklist for every component** - Consistency is key
2. **Don't skip accessibility testing** - 15% of users have disabilities
3. **Test on real devices** - Emulators don't catch everything
4. **Optimize early** - Performance fixes are easier before complexity grows
5. **Get peer reviews** - Fresh eyes catch issues you miss
6. **Prioritize user experience** - Technical excellence serves users

---

**Document Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Use ✅
