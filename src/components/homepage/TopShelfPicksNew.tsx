"use client";

import { products } from "@/lib/constants";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function TopShelfPicksNew() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Top Shelf Picks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most-loved products, curated for your skin's unique needs.
              Scroll to discover all.
            </p>
          </motion.div>
        </div>

        {/* Vertical Scroll Container */}
        <div
          ref={scrollRef}
          className="space-y-8 max-h-[2000px]"
        >
          {products.map((product, index) => (
            <ProductRow key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductRow({ product, index }: { product: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Alternate layout: even indices left, odd indices right
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Product Image */}
      <div
        className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className={`relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${product.gradient}`}>
          <Image
            src={product.imageTransparent}
            alt={`${product.name} - ${product.description}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
            className="object-contain p-8"
          />
        </div>

        {/* Ingredient Badge - Appears on scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-2 border-purple-200"
        >
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold">Key Ingredient</span>
          </div>
          <p className="text-sm font-bold text-gray-900">
            {product.ingredients[0]}
          </p>
        </motion.div>
      </div>

      {/* Product Info */}
      <div
        className={`space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            {product.category}
          </span>
        </motion.div>

        {/* Product Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          {product.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600"
        >
          {product.description}
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          {product.benefits.map((benefit: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500 text-lg">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-lg font-semibold text-gray-900">
              {product.rating}
            </span>
          </div>
          <span className="text-gray-500">
            ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </motion.div>

        {/* Ingredients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-2"
        >
          {product.ingredients.map((ingredient: string, i: number) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {ingredient}
            </span>
          ))}
        </motion.div>

        {/* Price and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-6 pt-4"
        >
          <div>
            <p className="text-4xl font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-gray-500">{product.size}</p>
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
