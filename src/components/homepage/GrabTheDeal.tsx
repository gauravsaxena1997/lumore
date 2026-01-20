"use client";

import Image from "next/image";
import { Gift, Timer } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GrabTheDeal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  // Countdown timer (24 hours from now)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
            >
              <Gift className="h-4 w-4" />
              Daily Deal
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Grab the Deal!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/90"
            >
              Get multiple premium products at an unbeatable price. Limited
              time offer - don't miss out!
            </motion.p>

            {/* Featured Products */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-lg">Today's Bundle Includes:</h3>
              <ul className="space-y-2">
                {[
                  "Solar Veil SPF 50 (₹3,200)",
                  "Dew Drops Serum (₹3,500)",
                  "Lumiskin Cream (₹3,800)"
                ].map((product, i) => (
                  <motion.li
                    key={product}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="text-yellow-300"
                    >
                      ★
                    </motion.span>
                    {product}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              style={{ scale }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl line-through text-white/60">
                  ₹10,500
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold"
                >
                  ₹6,999
                </motion.span>
              </div>
              <p className="text-white/80">Save ₹3,501 (33% off)</p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                <span className="font-semibold">Deal ends in:</span>
              </div>
              <div className="flex gap-4">
                {[
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]"
                  >
                    <motion.div
                      key={item.value}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold"
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-sm text-white/70">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-colors w-full lg:w-auto shadow-xl"
            >
              Grab Now
            </motion.button>
          </motion.div>

          {/* Right: Placeholder for Claw Machine Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
          >
            {/* Placeholder Backdrop */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift className="h-20 w-20 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                Claw Machine Animation
              </h3>
              <p className="text-white/80 mb-4">
                Interactive 3D animation showing all three products being
                grabbed at once!
              </p>
              <div className="text-sm text-white/60">Coming Soon</div>
            </motion.div>

            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-2xl animate-pulse" />

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ delay: 0.4, type: "spring", duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold"
            >
              Hot Deal 🔥
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
