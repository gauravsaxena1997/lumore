"use client";

import Image from "next/image";
import { Sparkles, Factory } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function NewRelease() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Placeholder for Manufacturing Video */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ rotate }}
            className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Placeholder Backdrop */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Factory className="h-20 w-20 text-purple-600 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Manufacturing Video
              </h3>
              <p className="text-gray-600 mb-4">
                Watch how Solar Veil is crafted with precision and care
              </p>
              <div className="text-sm text-gray-500">
                Coming Soon
              </div>
            </motion.div>

            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-dashed border-purple-300 rounded-2xl animate-pulse" />
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="h-4 w-4" />
              New Release
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Solar Veil SPF 50
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              Your daily defense against sun damage. Lightweight, non-greasy
              formula with Vitamin C and Niacinamide for added brightening.
            </motion.p>

            {/* Key Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-gray-900">
                Key Ingredients:
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Vitamin C", "Niacinamide", "Zinc Oxide", "Hyaluronic Acid"].map((ingredient, i) => (
                  <motion.span
                    key={ingredient}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      i === 0 ? "bg-orange-100 text-orange-700" :
                      i === 1 ? "bg-blue-100 text-blue-700" :
                      i === 2 ? "bg-gray-100 text-gray-700" :
                      "bg-teal-100 text-teal-700"
                    }`}
                  >
                    {ingredient}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="font-semibold text-gray-900">
                Benefits:
              </h3>
              <ul className="space-y-1">
                {[
                  "SPF 50 broad spectrum protection",
                  "Brightens and evens skin tone",
                  "Lightweight, non-greasy formula",
                  "No white cast"
                ].map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-green-500">✓</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 pt-4"
            >
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ₹3,200
                </p>
                <p className="text-sm text-gray-500">50ml</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
