# 🧩 Component Best Practices Guide

**Created:** January 20, 2026
**Purpose:** Implementation guides for Lumore components following Vercel agent-skills best practices

---

## 📋 Overview

This guide provides detailed implementation patterns for common Lumore components, ensuring:
- ⚡ Optimal performance (no waterfalls, efficient rendering)
- ♿ Full accessibility (keyboard nav, screen readers, ARIA)
- 🎬 Smooth animations (60fps, respects motion preferences)
- 🖼️ Image optimization (no layout shift, proper loading)

---

## 🛍️ ProductCard Component

### **Requirements:**
- Explicit image dimensions (prevent layout shift)
- Priority loading for above-fold cards
- Lazy loading for below-fold cards
- Accessible "Add to Cart" button
- Smooth hover animations (transform/opacity only)
- Dark mode support
- Motion preferences respected

### **Implementation:**

```tsx
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviewCount: number;
    imageTransparent: string;
    gradient: string;
    slug: string;
  };
  priority?: boolean; // For above-fold products
  index?: number; // For analytics
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl ${product.gradient} p-6 shadow-sm transition-shadow hover:shadow-md`}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Product Image - Explicit dimensions to prevent layout shift */}
      <div className="relative aspect-square mb-4">
        <Image
          src={product.imageTransparent}
          alt={`${product.name} - ${product.description}`}
          width={400}
          height={400}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-100">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ${product.price}
          </p>

          {/* Accessible button with aria-label */}
          <motion.button
            onClick={() => {
              // Add to cart logic
              console.log('Add to cart:', product.id);
            }}
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>

      {/* Quick View Badge (appears on hover) */}
      <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          aria-label={`Quick view ${product.name}`}
          className="rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm dark:bg-gray-800/90"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}
```

### **Usage:**

```tsx
// Homepage - Top Shelf Picks section
export function TopShelfPicks() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12">Top Shelf Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 3} // First 3 cards load immediately
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
```

---

## 📝 CheckoutForm Component

### **Requirements:**
- Proper `autocomplete` attributes for all inputs
- Correct `inputMode` for mobile keyboards
- Never disable paste
- Screen reader accessible
- Validation with clear error messages
- Keyboard accessible

### **Implementation:**

```tsx
import { useState } from 'react';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutData) => void;
}

interface CheckoutData {
  email: string;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    postalCode: string;
    country: string;
  };
  payment: {
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation and submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Section */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-label="Email address"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Shipping Address */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Shipping Address
        </legend>

        {/* Address Line 1 */}
        <div>
          <label htmlFor="address-line1" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Address Line 1
          </label>
          <input
            id="address-line1"
            type="text"
            name="address-line1"
            autoComplete="shipping address-line1"
            required
            aria-required="true"
            aria-label="Shipping address line 1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <label htmlFor="address-line2" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Address Line 2 (Optional)
          </label>
          <input
            id="address-line2"
            type="text"
            name="address-line2"
            autoComplete="shipping address-line2"
            aria-label="Shipping address line 2"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            autoComplete="shipping address-level2"
            required
            aria-required="true"
            aria-label="City"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Postal Code
          </label>
          <input
            id="postal-code"
            type="text"
            name="postal-code"
            autoComplete="shipping postal-code"
            required
            aria-required="true"
            aria-label="Postal code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
          />
        </div>
      </fieldset>

      {/* Payment Information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Payment Information
        </legend>

        {/* Credit Card Number - numeric keyboard on mobile */}
        <div>
          <label htmlFor="cc-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Card Number
          </label>
          <input
            id="cc-number"
            type="text"
            name="cc-number"
            autoComplete="cc-number"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            aria-required="true"
            aria-label="Credit card number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
            // IMPORTANT: Never disable paste
            // onPaste={(e) => e.preventDefault()} // DON'T DO THIS
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Expiry Date */}
          <div>
            <label htmlFor="cc-exp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Expiry (MM/YY)
            </label>
            <input
              id="cc-exp"
              type="text"
              name="cc-exp"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              inputMode="numeric"
              required
              aria-required="true"
              aria-label="Card expiration date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>

          {/* CVC */}
          <div>
            <label htmlFor="cc-csc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              CVC
            </label>
            <input
              id="cc-csc"
              type="text"
              name="cc-csc"
              autoComplete="cc-csc"
              inputMode="numeric"
              pattern="[0-9]*"
              required
              aria-required="true"
              aria-label="Card security code"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
        </div>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-purple-600 px-4 py-3 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600"
      >
        Complete Purchase
      </button>
    </form>
  );
}
```

---

## 🔍 ProductModal Component (Quick View)

### **Requirements:**
- Focus trap within modal
- ESC key closes modal
- Prevent body scroll when open
- Restore focus to trigger element on close
- Accessible close button
- `overscroll-behavior: contain`

### **Implementation:**

```tsx
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Store previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus close button when modal opens
    closeButtonRef.current?.focus();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';

      // Restore focus to trigger element
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-20 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-transform hover:scale-110 dark:bg-gray-800/90"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className={`relative aspect-square rounded-xl ${product.gradient} p-8`}>
                <Image
                  src={product.imageTransparent}
                  alt={product.name}
                  width={500}
                  height={500}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h2 id="modal-title" className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  ${product.price}
                </p>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Benefits
                  </h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-500">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    // Add to cart logic
                    console.log('Add to cart:', product.id);
                    onClose();
                  }}
                  aria-label={`Add ${product.name} to cart`}
                  className="w-full rounded-full bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:hover:bg-purple-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
```

### **Usage:**

```tsx
export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="product-card">
        <button
          onClick={() => setIsModalOpen(true)}
          aria-label={`Quick view ${product.name}`}
        >
          Quick View
        </button>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}
```

---

## 🧭 Navigation Component

### **Requirements:**
- Keyboard accessible mega-menu
- Skip-to-content link for screen readers
- Clear focus indicators
- Mobile responsive
- Search with proper ARIA

### **Implementation:**

```tsx
import { useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm dark:bg-gray-900" role="navigation">
      {/* Skip to Content Link - for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-purple-600 dark:text-purple-400"
            aria-label="Lumore home"
          >
            Lumore
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button - with aria-label */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search products"
              aria-expanded={isSearchOpen}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Button - with aria-label */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Button - with aria-label */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4" role="search">
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-800"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 space-y-2">
            <Link
              href="/products"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
```

---

## 🎬 Animation Best Practices Examples

### **Product Card Hover (Correct)**

```tsx
<motion.div
  whileHover={{ y: -4, scale: 1.02 }} // Only transform
  transition={{ duration: 0.15 }}
  className="product-card"
>
  {/* Content */}
</motion.div>
```

### **Button Click (Correct)**

```tsx
<motion.button
  whileTap={{ scale: 0.95 }} // Only scale
  transition={{ duration: 0.1 }}
>
  Add to Cart
</motion.button>
```

### **Page Transition (Correct)**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

### **Respecting Motion Preferences**

```tsx
import { useReducedMotion } from 'framer-motion';

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? { opacity: 1 } // No movement for reduced motion
          : { opacity: 1, x: 0 } // Full animation
      }
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## 🖼️ Image Component Patterns

### **Hero Image (Priority Load)**

```tsx
<Image
  src="/assets/hero/hero-image-female.webp"
  alt="Lumore underwater skincare photography"
  width={1920}
  height={1080}
  priority={true}
  loading="eager"
  className="w-full h-auto"
/>
```

### **Product Grid (Mixed Priority)**

```tsx
{products.map((product, index) => (
  <Image
    key={product.id}
    src={product.imageTransparent}
    alt={product.name}
    width={400}
    height={400}
    priority={index < 3} // First 3 only
    loading={index < 3 ? 'eager' : 'lazy'}
  />
))}
```

### **Testimonial Images (Lazy Load)**

```tsx
<Image
  src="/assets/testimonials/testimonial-1.webp"
  alt="Customer testimonial"
  width={600}
  height={400}
  loading="lazy"
/>
```

---

## 📋 Summary Checklist

Before marking a component as complete, verify:

### Performance:
- [ ] No sequential data fetching (use `Promise.all()`)
- [ ] Heavy components use dynamic imports
- [ ] Images have explicit width/height
- [ ] Above-fold images have `priority={true}`
- [ ] Below-fold images have `loading="lazy"`

### Accessibility:
- [ ] All icon buttons have `aria-label`
- [ ] Forms have proper `autocomplete` attributes
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus visible on all interactive elements
- [ ] Modals trap focus and restore on close
- [ ] Color contrast meets WCAG AA

### Animations:
- [ ] Only animate transform/opacity
- [ ] Duration < 300ms for interactions
- [ ] `useReducedMotion` implemented
- [ ] No `transition: all` in CSS
- [ ] 60fps maintained

### Dark Mode:
- [ ] Component supports dark mode classes
- [ ] Text readable in both modes
- [ ] Interactive elements visible in both modes

---

**Document Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Implementation 🚀
