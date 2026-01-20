'use client';

import { useEffect, useState } from 'react';
import HeroSection, { HeroVariant } from './HeroSection';

interface HeroABTestProps {
  /**
   * Force a specific variant (useful for testing)
   * If not provided, will randomly assign variant
   */
  forceVariant?: HeroVariant;

  /**
   * Callback when variant is assigned (for analytics tracking)
   */
  onVariantAssigned?: (variant: HeroVariant) => void;
}

/**
 * A/B Testing wrapper for Hero Section
 *
 * Randomly assigns users to either 'female' or 'male' hero variant
 * and tracks the assignment in localStorage to maintain consistency
 * across page visits.
 *
 * Usage:
 * ```tsx
 * <HeroABTest onVariantAssigned={(variant) => analytics.track('hero_variant', variant)} />
 * ```
 *
 * For testing specific variants:
 * ```tsx
 * <HeroABTest forceVariant="female" />
 * ```
 */
export default function HeroABTest({ forceVariant, onVariantAssigned }: HeroABTestProps) {
  const [variant, setVariant] = useState<HeroVariant | null>(null);

  useEffect(() => {
    if (forceVariant) {
      setVariant(forceVariant);
      onVariantAssigned?.(forceVariant);
      return;
    }

    // Check if user already has an assigned variant
    const storedVariant = localStorage.getItem('hero_variant') as HeroVariant | null;

    if (storedVariant && (storedVariant === 'female' || storedVariant === 'male')) {
      setVariant(storedVariant);
      onVariantAssigned?.(storedVariant);
    } else {
      // Randomly assign variant (50/50 split)
      const randomVariant: HeroVariant = Math.random() < 0.5 ? 'female' : 'male';
      setVariant(randomVariant);
      localStorage.setItem('hero_variant', randomVariant);
      onVariantAssigned?.(randomVariant);
    }
  }, [forceVariant, onVariantAssigned]);

  // Show nothing until variant is determined (prevents flash)
  if (!variant) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
      </div>
    );
  }

  return <HeroSection variant={variant} />;
}
