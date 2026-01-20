"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean; // For above-fold products
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement add to cart functionality
    console.log("Add to cart:", product.name);
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.article
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.gradient} p-6 shadow-sm hover:shadow-md transition-shadow`}
        whileHover={prefersReducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Product Image - Explicit dimensions to prevent layout shift */}
        <div className="relative aspect-square mb-4">
          <Image
            src={product.imageTransparent}
            alt={`${product.name} - ${product.description}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
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
              ₹{product.price.toLocaleString('en-IN')}
            </p>

            {/* Accessible button with aria-label */}
            <motion.button
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
              className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
