"use client";

import { products } from "@/lib/constants";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductsInMotion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Select 4 featured products for animation
  const featuredProducts = [
    products[0], // Solar Veil
    products[1], // Dew Drops
    products[2], // Lumiskin
    products[5], // Cloud Nine
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 100]),
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -100]),
            y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 50]),
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Motto/Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <p className="text-sm text-purple-600 font-semibold mb-4 tracking-wide uppercase">
            We believe in efficacy backed ingredient dosing
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We're not here to overwhelm you with{" "}
            <span className="italic text-purple-600">10-step routines</span>.
            <br />
            Just formulas that get the job done{" "}
            <span className="text-pink-600">safely, scientifically,</span>
            <br />& <span className="text-blue-600">superbly</span>.
          </h2>
        </motion.div>

        {/* Floating Products Grid */}
        <div className="relative h-[600px] mt-20">
          {featuredProducts.map((product, index) => (
            <FloatingProduct
              key={product.id}
              product={product}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingProduct({
  product,
  index,
  scrollYProgress,
}: {
  product: any;
  index: number;
  scrollYProgress: any;
}) {
  // Position each product in different corners/areas
  const positions = [
    { initial: { top: "10%", left: "5%" }, size: "w-48 h-48" },
    { initial: { top: "15%", right: "10%" }, size: "w-56 h-56" },
    { initial: { bottom: "20%", left: "15%" }, size: "w-52 h-52" },
    { initial: { bottom: "15%", right: "5%" }, size: "w-48 h-48" },
  ];

  const position = positions[index];

  // Create parallax and rotation effects based on scroll
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -100]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -20 : 20, 0, index % 2 === 0 ? 20 : -20]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.8, 1.1, 1, 1.1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.3, 1, 1, 1, 0.3]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        bounce: 0.4,
      }}
      viewport={{ once: true }}
      style={{
        ...position.initial,
        y,
        rotate,
        scale,
        opacity,
      }}
      className={`absolute ${position.size} group cursor-pointer`}
    >
      {/* Product Container with Gradient Background */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${product.gradient}`}
      >
        {/* Product Image */}
        <div className="relative w-full h-full p-6">
          <Image
            src={product.imageTransparent}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Hover Info Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center transition-opacity"
        >
          <p className="text-white font-bold text-lg mb-2">{product.name}</p>
          <p className="text-white/90 text-sm mb-3">{product.description}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-semibold">{product.rating}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <p className="text-sm font-semibold text-gray-900">{product.name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
