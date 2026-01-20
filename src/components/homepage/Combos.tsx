"use client";

import { bundles } from "@/lib/constants";
import Image from "next/image";
import { Package } from "lucide-react";
import { motion } from "framer-motion";

export default function Combos() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Package className="h-4 w-4" />
            Bundles & Kits
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Your Routine
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated skincare sets designed for specific needs. Save more when
            you bundle.
          </p>
        </motion.div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.slice(0, 3).map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Savings Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                >
                  Save ₹{bundle.savings.toLocaleString('en-IN')}
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {bundle.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {bundle.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{bundle.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Shop Bundle
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
          >
            View All Bundles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
