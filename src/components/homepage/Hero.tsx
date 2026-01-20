"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/lib/constants";

// Static hero image - female model
const heroImage = {
  src: "/assets/hero/hero-image-female-landscape.webp",
  alt: "Radiant beauty",
};

// Orbit configuration
const ORBIT_RADIUS = 400;
const PRODUCT_SIZE = 180;

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Continuous orbit animation - slower and more elegant (~30 seconds per revolution)
  useAnimationFrame((time, delta) => {
    if (prefersReducedMotion) return;
    setRotation((prev) => (prev + delta * 0.012) % 360);
  });

  // Calculate each product's position on a half-circle arc
  const getProductPosition = (index: number, totalProducts: number = 7) => {
    // Products evenly spaced around full 360° for continuous flow
    const angleStep = 360 / totalProducts;
    const baseAngle = index * angleStep;
    const currentAngle = (baseAngle + rotation) % 360;

    // Convert to radians
    const rad = currentAngle * (Math.PI / 180);

    // x positive = towards right edge, y positive = towards bottom
    const x = Math.cos(rad) * ORBIT_RADIUS;
    const y = Math.sin(rad) * ORBIT_RADIUS;

    // Products are visible when on the RIGHT side of the circle (x > 0)
    const isOnRightSide = x > 0;

    // Scale: larger when closer to the front (middle of visible arc, where x is max)
    const scale = isOnRightSide ? 0.85 + (x / ORBIT_RADIUS) * 0.25 : 0.75;

    // Opacity: very high overall, minimal fade at entry/exit points
    let opacity = 0;
    if (isOnRightSide) {
      const yNormalized = Math.abs(y) / ORBIT_RADIUS;
      opacity = 1 - yNormalized * 0.08; // Near full opacity (0.92 to 1.0)
    }

    // Z-index: products in front (higher x) should be on top
    const zIndex = Math.round((x / ORBIT_RADIUS) * 10) + 10;

    // Gentle tilt: smooth wave-like tilt based on position
    const gentleTilt = (y / ORBIT_RADIUS) * 10;

    return { x, y, scale, opacity, zIndex, gentleTilt, isOnRightSide };
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className="relative w-full"
      style={{
        background: "#FFF8F3",
        padding: "clamp(0.75rem, 1.5vw, 1.25rem)", // Frame padding from edges
      }}
    >
      {/* Video Frame Wrapper - positions cutouts and curves */}
      <div
        className="relative"
        style={{
          height: "calc(100vh - clamp(1.5rem, 3vw, 2.5rem))",
        }}
      >
        {/* Video Frame Container - with rounded corners and overflow hidden for images */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "clamp(2rem, 4vw, 3rem)",
          }}
        >
        {/* Static Hero Image Background */}
        <div className="absolute inset-0 z-0">
          {/* Blurred background layer - fills gaps */}
          <Image
            src={heroImage.src}
            alt=""
            fill
            priority
            quality={50}
            className="object-cover scale-110"
            style={{ filter: "blur(30px)" }}
            sizes="100vw"
          />
          {/* Main sharp image */}
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            quality={90}
            className="object-contain"
            sizes="100vw"
          />
          {/* Left edge blend overlay */}
          <div
            className="absolute inset-y-0 left-0 z-[1] pointer-events-none"
            style={{
              width: "20%",
              background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
            }}
          />
          {/* Right edge blend overlay */}
          <div
            className="absolute inset-y-0 right-0 z-[1] pointer-events-none"
            style={{
              width: "20%",
              background: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Top fade effect for navigation visibility - much stronger */}
        <div
          className="absolute inset-x-0 top-0 z-[2]"
          style={{
            height: "clamp(160px, 28vh, 250px)",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.3) 65%, transparent 100%)",
          }}
        />
        {/* Left fade effect for text readability */}
        <div
          className="absolute inset-y-0 left-0 z-[2]"
          style={{
            width: "clamp(300px, 45vw, 550px)",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.15) 60%, transparent 100%)",
          }}
        />

        {/* Product Orbit - Right Side Half Circle (inside frame) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-[3] hidden lg:block overflow-hidden"
        >
          {/* Orbit center positioned at right edge, vertically centered */}
          <div
            className="absolute"
            style={{
              top: "50%",
              right: "0px",
              transform: "translateY(-50%)",
            }}
          >
            {/* Visible orbit path - subtle circular ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: ORBIT_RADIUS * 2,
                height: ORBIT_RADIUS * 2,
                left: -ORBIT_RADIUS,
                top: -ORBIT_RADIUS,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  inset 0 0 60px rgba(255, 255, 255, 0.05),
                  0 0 40px rgba(255, 255, 255, 0.03)
                `,
                background: "radial-gradient(circle, transparent 60%, rgba(255,255,255,0.02) 100%)",
              }}
            />

            {/* Second subtle ring for depth */}
            <div
              className="absolute rounded-full"
              style={{
                width: ORBIT_RADIUS * 2 + 40,
                height: ORBIT_RADIUS * 2 + 40,
                left: -ORBIT_RADIUS - 20,
                top: -ORBIT_RADIUS - 20,
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            />

            {/* Products */}
            {products.slice(0, 7).map((product, index) => {
              const { x, y, scale, opacity, zIndex, gentleTilt, isOnRightSide } = getProductPosition(index);
              return (
                <motion.div
                  key={product.id}
                  className="absolute"
                  animate={{
                    x: -x,
                    y: y,
                    scale: scale,
                    opacity: prefersReducedMotion ? (isOnRightSide ? 0.95 : 0) : opacity,
                    rotate: gentleTilt,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.1,
                    ease: "linear",
                  }}
                  style={{
                    zIndex,
                    marginLeft: -PRODUCT_SIZE / 2,
                    marginTop: -PRODUCT_SIZE / 2,
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      width: PRODUCT_SIZE,
                      height: PRODUCT_SIZE,
                      filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) drop-shadow(0 6px 15px rgba(0,0,0,0.25)) drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
                    }}
                  >
                    <Image
                      src={product.imageTransparent}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes={`${PRODUCT_SIZE}px`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* COMMENTED OUT: Background Video
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(255,248,243,0.15)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 z-[1]"
            style={{
              height: "clamp(120px, 20vh, 180px)",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 z-[1]"
            style={{
              width: "clamp(300px, 45vw, 550px)",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.15) 60%, transparent 100%)",
            }}
          />
        </div>
        END COMMENTED OUT VIDEO */}
        </div>
        {/* End of inner overflow container */}

        {/* Top-Right Cutout - SINGLE HORIZONTAL ROW */}
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 z-20 flex flex-row items-center"
          style={{
            background: "#FFF8F3",
            borderBottomLeftRadius: "clamp(40px, 8vw, 80px)",
            padding: "clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)",
            paddingBottom: "clamp(1.25rem, 2.5vw, 2rem)",
            paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)",
            gap: "clamp(0.75rem, 1.5vw, 1rem)",
          }}
        >
          {/* Social Icons - in row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
            style={{ gap: "clamp(0.5rem, 1vw, 0.75rem)" }}
          >
            {["instagram", "x", "facebook"].map((social) => (
              <button
                key={social}
                onClick={handleLinkClick}
                className="rounded-full border flex items-center justify-center hover:bg-[#3B2F2F] hover:text-white hover:border-[#3B2F2F] transition-all"
                style={{
                  width: "clamp(2rem, 3vw, 2.5rem)",
                  height: "clamp(2rem, 3vw, 2.5rem)",
                  borderColor: "rgba(59,47,47,0.3)",
                  color: "#3B2F2F",
                }}
                aria-label={social}
              >
                {social === "instagram" && (
                  <svg
                    style={{
                      width: "clamp(0.875rem, 1.2vw, 1rem)",
                      height: "clamp(0.875rem, 1.2vw, 1rem)",
                    }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {social === "x" && (
                  <svg
                    style={{
                      width: "clamp(0.75rem, 1vw, 0.875rem)",
                      height: "clamp(0.75rem, 1vw, 0.875rem)",
                    }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social === "facebook" && (
                  <svg
                    style={{
                      width: "clamp(0.875rem, 1.2vw, 1rem)",
                      height: "clamp(0.875rem, 1.2vw, 1rem)",
                    }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>

          {/* Explore Now Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleLinkClick}
            className="flex items-center rounded-full transition-all hover:scale-105"
            style={{
              padding: "clamp(0.6rem, 1.2vw, 0.875rem) clamp(1.25rem, 2vw, 1.75rem)",
              fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "#3B2F2F",
              color: "#FFF8F3",
              gap: "clamp(0.5rem, 0.75vw, 0.625rem)",
            }}
          >
            Explore Now
            <svg
              style={{
                width: "clamp(0.75rem, 1vw, 0.875rem)",
                height: "clamp(0.75rem, 1vw, 0.875rem)",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Bottom-Left Cutout with Stats */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 z-20 flex items-center"
          style={{
            background: "#FFF8F3",
            borderTopRightRadius: "clamp(40px, 8vw, 80px)",
            padding: "clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 3vw, 2.5rem)",
            paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
            paddingRight: "clamp(2rem, 4vw, 3.5rem)",
            gap: "clamp(1.5rem, 3vw, 3rem)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center"
            style={{ gap: "clamp(1.5rem, 3vw, 3rem)" }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                50K+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(59,47,47,0.7)",
                }}
              >
                Happy Customers
              </div>
            </div>
            <div
              className="hidden sm:block"
              style={{
                width: 1,
                height: "clamp(2rem, 3vw, 2.5rem)",
                background: "rgba(59,47,47,0.2)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                98%
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(59,47,47,0.7)",
                }}
              >
                See Results
              </div>
            </div>
            <div
              className="hidden sm:block"
              style={{
                width: 1,
                height: "clamp(2rem, 3vw, 2.5rem)",
                background: "rgba(59,47,47,0.2)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(59,47,47,0.7)",
                }}
              >
                Awards Won
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation - Logo & Links (inside video frame) - No animation, always visible */}
        <nav
          className="relative z-10"
          style={{
            padding: "clamp(1.25rem, 3vh, 2rem) clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          <div className="flex items-center">
            {/* Logo */}
            <button
              onClick={handleLinkClick}
              className="tracking-[0.2em] hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                color: "#FFF8F3",
                fontWeight: 500,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              LUMORE
            </button>

            {/* Center Navigation */}
            <div
              className="hidden lg:flex items-center"
              style={{
                gap: "clamp(2rem, 4vw, 3.5rem)",
                marginLeft: "clamp(3rem, 6vw, 5rem)",
              }}
            >
              {["Home", "About", "Gallery", "Features"].map((item, index) => (
                <button
                  key={item}
                  onClick={handleLinkClick}
                  className={`tracking-wider uppercase transition-all hover:opacity-70 ${
                    index === 0 ? "border-b-2" : ""
                  }`}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                    color: "#FFF8F3",
                    fontWeight: index === 0 ? 500 : 400,
                    borderColor: index === 0 ? "#FFF8F3" : "transparent",
                    paddingBottom: "0.25rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div
          className="relative z-10 h-full flex flex-col justify-center"
          style={{
            padding: "clamp(2rem, 5vw, 4rem)",
            paddingBottom: "clamp(10rem, 18vh, 14rem)",
            marginTop: "-6rem",
          }}
        >
          {/* Headline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#FFF8F3",
                marginBottom: "clamp(1.5rem, 4vh, 3rem)",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              RADIANCE
              <br />
              THAT GOES BEYOND
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>skincare</span>
            </h1>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
