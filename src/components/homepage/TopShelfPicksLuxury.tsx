"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import { products } from "@/lib/constants";
import { Product } from "@/types";

// LuxuryProductCard component
function LuxuryProductCard({
  product,
}: {
  product: Product;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  }, []);

  // Calculate parallax offset (subtle 3-5px movement)
  const parallaxX = (mousePos.x - 0.5) * -8;
  const parallaxY = (mousePos.y - 0.5) * -8;

  // Format price in INR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Capitalize first letter of each word
  const capitalizeWords = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 relative cursor-pointer"
      style={{
        width: "clamp(280px, 22vw, 340px)",
        aspectRatio: "3/4.5",
      }}
    >
      <div
        className="w-full h-full rounded-[clamp(1.25rem,2vw,1.5rem)] overflow-hidden"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(59,47,47,0.04), 0 8px 24px rgba(59,47,47,0.06)",
        }}
      >
        {/* Image Area (60% of card) */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "60%",
            background: `linear-gradient(135deg, ${product.color}40, ${product.color}15)`,
          }}
        >
          {/* Category Badge */}
          <div
            className="absolute top-4 left-4 z-10"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.6rem, 0.7vw, 0.7rem)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(59,47,47,0.6)",
              background: "rgba(255,255,255,0.85)",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              backdropFilter: "blur(8px)",
            }}
          >
            {product.category}
          </div>

          {/* Product Image with Parallax */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              x: parallaxX,
              y: parallaxY,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative"
              style={{
                width: "95%",
                height: "95%",
              }}
            >
              <Image
                src={product.imageTransparent}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>
          </motion.div>
        </div>

        {/* Content Area (40% of card) */}
        <div
          className="relative flex flex-col justify-between"
          style={{
            height: "40%",
            padding: "clamp(1rem, 1.5vw, 1.25rem)",
          }}
        >
          {/* Product Info */}
          <div>
            {/* Name */}
            <h3
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                fontWeight: 500,
                color: "#3B2F2F",
                marginBottom: "0.25rem",
                textTransform: "capitalize",
              }}
            >
              {capitalizeWords(product.name)}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)",
                fontWeight: 300,
                color: "rgba(59,47,47,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star
                size={14}
                fill="#D4A574"
                stroke="#D4A574"
                strokeWidth={1}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.8rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                {product.rating}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.65rem, 0.75vw, 0.7rem)",
                  color: "rgba(59,47,47,0.5)",
                }}
              >
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
                fontWeight: 600,
                color: "#3B2F2F",
              }}
            >
              {formatPrice(product.price)}
            </span>

            {/* Add to Cart Button */}
            <motion.button
              className="flex items-center justify-center overflow-hidden"
              style={{
                background: "#3B2F2F",
                color: "#FFF8F3",
                borderRadius: "9999px",
                height: "2.5rem",
              }}
              initial={{ width: "2.5rem" }}
              animate={{
                width: isHovered ? "5.5rem" : "2.5rem",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart logic
              }}
            >
              <ShoppingCart size={16} className="flex-shrink-0" />
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      marginLeft: "0.5rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Add
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Title Card component - scrolls with products
function TitleCard() {
  return (
    <div
      className="flex-shrink-0 flex flex-col justify-center"
      style={{
        width: "clamp(280px, 22vw, 340px)",
        height: "100%",
        paddingRight: "clamp(1rem, 2vw, 2rem)",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 500,
          color: "#3B2F2F",
          lineHeight: 1.1,
          marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
        }}
      >
        Top Shelf
        <br />
        <span style={{ fontStyle: "italic" }}>Picks</span>
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
          fontWeight: 300,
          color: "rgba(59,47,47,0.65)",
          lineHeight: 1.6,
          marginBottom: "clamp(1.5rem, 2.5vw, 2rem)",
        }}
      >
        Our most-loved formulations, backed by science
      </p>

      {/* Subtle scroll hint */}
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronRight size={16} color="rgba(59,47,47,0.4)" />
        </motion.div>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(0.7rem, 0.8vw, 0.75rem)",
            fontWeight: 400,
            color: "rgba(59,47,47,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          Scroll to explore
        </span>
      </div>
    </div>
  );
}

export default function TopShelfPicksLuxury() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll state
  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFF8F3",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft blob - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: "50%",
            height: "55%",
            background:
              "radial-gradient(ellipse at center, rgba(225,200,185,0.4) 0%, rgba(225,200,185,0.15) 40%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
        {/* Medium blob - top right */}
        <div
          style={{
            position: "absolute",
            top: "0%",
            right: "-8%",
            width: "40%",
            height: "45%",
            background:
              "radial-gradient(ellipse at center, rgba(235,215,200,0.35) 0%, rgba(235,215,200,0.1) 50%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        {/* Small accent blob - center */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "40%",
            width: "25%",
            height: "30%",
            background:
              "radial-gradient(ellipse at center, rgba(220,195,180,0.25) 0%, transparent 60%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Scroll Container Wrapper */}
        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto scrollbar-hide"
            style={{
              gap: "clamp(1.25rem, 2.5vw, 2rem)",
              paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
              paddingRight: "clamp(1.5rem, 5vw, 4rem)",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {/* Title Card - scrolls with products */}
            <TitleCard />

            {/* Product Cards */}
            {products.map((product) => (
              <LuxuryProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div
          className="mx-auto"
          style={{
            width: "clamp(120px, 20vw, 200px)",
            height: "3px",
            background: "rgba(59,47,47,0.1)",
            borderRadius: "9999px",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#3B2F2F",
              borderRadius: "9999px",
              width: `${Math.max(20, scrollProgress * 100)}%`,
              transition: "width 0.1s ease-out",
            }}
          />
        </div>
      </div>

    </section>
  );
}
