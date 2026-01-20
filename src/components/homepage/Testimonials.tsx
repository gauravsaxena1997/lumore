"use client";

import { testimonials } from "@/lib/constants";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-b from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-purple-600 font-semibold mb-4 tracking-wide uppercase">
            Real People, Real Routines
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lumore in <span className="italic text-purple-600">motion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of customers who've transformed their skin with our
            science-backed formulas
          </p>
        </motion.div>

        {/* Vertical Scrolling Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            Read All Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  scrollYProgress,
}: {
  testimonial: any;
  index: number;
  scrollYProgress: any;
}) {
  const ref = useRef(null);

  // Different scroll effects for odd/even cards
  const isEven = index % 2 === 0;
  const xOffset = isEven ? -100 : 100;

  const x = useTransform(
    scrollYProgress,
    [index * 0.1, (index + 1) * 0.1],
    [xOffset, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [index * 0.08, (index + 1) * 0.08, (index + 2) * 0.08],
    [0, 1, 0.7]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ x, opacity }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Customer Image/Video Placeholder */}
      <div className={`relative ${isEven ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />

          {/* Floating Quote Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl"
          >
            <Quote className="h-6 w-6 text-purple-600" />
          </motion.div>

          {/* Product Badge */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <p className="text-sm font-semibold text-gray-900">
              Using: {testimonial.product}
            </p>
            {testimonial.skinType && (
              <p className="text-xs text-gray-600 mt-1">
                {testimonial.skinType} skin
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Review Content */}
      <div className={`space-y-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-1"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Star
                className={`h-7 w-7 ${
                  i < testimonial.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Review Text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed"
        >
          "{testimonial.review}"
        </motion.blockquote>

        {/* Customer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 pt-4"
        >
          <div className="relative h-16 w-16 rounded-full overflow-hidden ring-4 ring-purple-100">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-600">Verified Customer</p>
          </div>
        </motion.div>

        {/* Results Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
        >
          <span className="text-green-500">✓</span>
          Visible results in 2 weeks
        </motion.div>
      </div>
    </motion.div>
  );
}
