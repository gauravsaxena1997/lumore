"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/lib/constants";

// Melt Away Balm - New Release product
const meltAwayBalm = products[4]; // id: 5, index: 4

export default function NewRelease() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const productY = useTransform(scrollYProgress, [0, 1], [15, -15]);

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
      {/* Two column layout - video left, content right (matching GrabTheDeal) */}
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
                src="/assets/videos/new-release-factory.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Right edge gradient for seamless blend */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "25%",
              background:
                "linear-gradient(to left, rgba(255,248,243,1) 0%, rgba(255,248,243,0.8) 40%, transparent 100%)",
            }}
          />

          {/* New Release badge on video */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-6 left-6"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              padding: "clamp(0.5rem, 0.75vw, 0.65rem) clamp(1rem, 1.25vw, 1.15rem)",
              borderRadius: "100px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.55rem, 0.7vw, 0.65rem)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#3B2F2F",
              }}
            >
              ✦ Just Launched
            </span>
          </motion.div>
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
            New Release
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
            Melt <span style={{ fontStyle: "italic" }}>Away</span>
          </motion.h2>

          {/* Product card with image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-5 mb-6"
          >
            {/* Product image */}
            <motion.div
              style={{ y: productY }}
              className="relative flex-shrink-0"
            >
              <div
                className="relative"
                style={{
                  width: "clamp(90px, 11vw, 120px)",
                  height: "clamp(90px, 11vw, 120px)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    filter:
                      "drop-shadow(0 8px 20px rgba(59,47,47,0.15)) drop-shadow(0 4px 8px rgba(59,47,47,0.1))",
                  }}
                >
                  <Image
                    src={meltAwayBalm.imageTransparent}
                    alt={meltAwayBalm.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product info */}
            <div className="flex-1">
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                  textTransform: "capitalize",
                  marginBottom: "4px",
                }}
              >
                {meltAwayBalm.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.8rem)",
                  color: "rgba(59,47,47,0.5)",
                  marginBottom: "8px",
                }}
              >
                {meltAwayBalm.description}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)",
                  color: "rgba(59,47,47,0.65)",
                  lineHeight: 1.6,
                }}
              >
                Effortlessly dissolves makeup, sunscreen, and impurities while
                nourishing your skin.
              </p>
            </div>
          </motion.div>

          {/* Key Ingredients inline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {meltAwayBalm.ingredients.map((ingredient, index) => (
              <span
                key={ingredient}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                  background: "rgba(255,255,255,0.9)",
                  padding: "clamp(0.35rem, 0.5vw, 0.45rem) clamp(0.75rem, 1vw, 0.9rem)",
                  borderRadius: "100px",
                  border: "1px solid rgba(59,47,47,0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {ingredient}
              </span>
            ))}
          </motion.div>

          {/* Price + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 flex-wrap"
          >
            {/* Price */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                  lineHeight: 1,
                }}
              >
                ₹{meltAwayBalm.price.toLocaleString()}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.6rem, 0.75vw, 0.7rem)",
                  color: "rgba(59,47,47,0.4)",
                  marginTop: "2px",
                }}
              >
                {meltAwayBalm.size}
              </p>
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
              Shop Now
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

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 flex items-center gap-2"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  style={{
                    width: "clamp(0.75rem, 0.9vw, 0.85rem)",
                    height: "clamp(0.75rem, 0.9vw, 0.85rem)",
                    color:
                      i < Math.floor(meltAwayBalm.rating)
                        ? "#C9A962"
                        : "rgba(59,47,47,0.2)",
                  }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
                color: "rgba(59,47,47,0.5)",
              }}
            >
              {meltAwayBalm.rating} ({meltAwayBalm.reviewCount.toLocaleString()}{" "}
              reviews)
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
