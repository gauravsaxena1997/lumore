"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/lib/constants";

// Deal configuration - matches video: Solar Veil, Reset Mist (toner), Lumiskin
const dealProducts = [products[0], products[3], products[2]]; // Solar Veil, Reset Mist, Lumiskin
const originalPrice = dealProducts.reduce((sum, p) => sum + p.price, 0); // ₹9,400
const dealPrice = 6499;
const savings = originalPrice - dealPrice;

export default function GrabTheDeal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Countdown timer
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
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  // Subtle parallax for product images
  const productY1 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const productY2 = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const productY3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const productYValues = [productY1, productY2, productY3];

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{
        background: "#FFF8F3",
      }}
    >
      {/* Two column layout - no gap */}
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Left - Video */}
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "clamp(350px, 55vh, 500px)",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: videoScale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/assets/videos/grab-the-deal.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Right edge blur to hide watermark */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "25%",
              background: "linear-gradient(to left, rgba(255,248,243,1) 0%, rgba(255,248,243,0.8) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Right - Content */}
        <div
          className="flex flex-col justify-center"
          style={{
            padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem)",
            background: "#FFF8F3",
          }}
        >
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(59,47,47,0.5)",
              marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
            }}
          >
            Limited Time Offer
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#3B2F2F",
              marginBottom: "clamp(1.5rem, 2.5vw, 2rem)",
            }}
          >
            Grab the <span style={{ fontStyle: "italic" }}>Deal</span>
          </motion.h2>

          {/* Product cards - larger, transparent bg, custom shadows, parallax */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-6"
            style={{ maxWidth: "450px" }}
          >
            {dealProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
                viewport={{ once: true }}
                style={{ y: productYValues[index] }}
                className="text-center"
              >
                <div
                  className="relative mx-auto mb-3"
                  style={{
                    width: "clamp(90px, 11vw, 120px)",
                    height: "clamp(90px, 11vw, 120px)",
                  }}
                >
                  {/* Custom shadow layers for depth */}
                  <div
                    className="absolute inset-0"
                    style={{
                      filter: "drop-shadow(0 8px 20px rgba(59,47,47,0.15)) drop-shadow(0 4px 8px rgba(59,47,47,0.1))",
                    }}
                  >
                    <Image
                      src={product.imageTransparent}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                    fontWeight: 500,
                    color: "#3B2F2F",
                    textTransform: "capitalize",
                    marginBottom: "2px",
                  }}
                >
                  {product.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
                    color: "rgba(59,47,47,0.45)",
                  }}
                >
                  {product.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple pricing text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
                color: "rgba(59,47,47,0.6)",
                lineHeight: 1.6,
              }}
            >
              Get all three for{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                ₹{dealPrice.toLocaleString()}
              </span>
              {" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "rgba(59,47,47,0.35)",
                }}
              >
                ₹{originalPrice.toLocaleString()}
              </span>
              {" — "}
              <span style={{ color: "#3B2F2F", fontWeight: 500 }}>
                Save ₹{savings.toLocaleString()}
              </span>
            </p>
          </motion.div>

          {/* Countdown + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 flex-wrap"
          >
            {/* Countdown */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(59,47,47,0.4)",
                }}
              >
                Ends in
              </span>
              <div
                className="flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.85rem, 1.05vw, 0.95rem)",
                  fontWeight: 600,
                  color: "#3B2F2F",
                  background: "rgba(255,255,255,0.9)",
                  padding: "clamp(0.4rem, 0.6vw, 0.55rem) clamp(0.75rem, 1vw, 0.9rem)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(59,47,47,0.06)",
                }}
              >
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <span style={{ opacity: 0.3 }}>:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span style={{ opacity: 0.3 }}>:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleLinkClick}
              className="group flex items-center gap-2 transition-all hover:scale-105"
              style={{
                background: "#3B2F2F",
                color: "#FFF8F3",
                padding: "clamp(0.75rem, 1.1vw, 1rem) clamp(1.5rem, 2.25vw, 2rem)",
                borderRadius: "100px",
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.7rem, 0.85vw, 0.8rem)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Grab Deal
              <svg
                className="transition-transform group-hover:translate-x-1"
                style={{
                  width: "clamp(0.9rem, 1.1vw, 1rem)",
                  height: "clamp(0.9rem, 1.1vw, 1rem)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
