"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Press/Magazine data
const pressFeatures = [
  {
    id: 1,
    name: "VOGUE",
    image: "/assets/press-awards/vogue.webp",
    quote: "The future of clean beauty",
  },
  {
    id: 2,
    name: "ELLE",
    image: "/assets/press-awards/elle.webp",
    quote: "A skincare revolution",
  },
  {
    id: 3,
    name: "ALLURE",
    image: "/assets/press-awards/allure.webp",
    quote: "Editor's Choice 2026",
  },
];

function PressCard({
  feature,
  index,
}: {
  feature: (typeof pressFeatures)[0];
  index: number;
}) {
  return (
    <motion.div
      className="press-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {/* Card Container */}
      <div
        className="relative overflow-hidden rounded-[clamp(1rem,1.5vw,1.25rem)]"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0 2px 8px rgba(59,47,47,0.04), 0 8px 24px rgba(59,47,47,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Magazine Image */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "3/4",
          }}
        >
          <Image
            src={feature.image}
            alt={feature.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 280px, 350px"
          />

          {/* Quote Overlay at Bottom */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background:
                "linear-gradient(to top, rgba(59,47,47,0.85) 0%, rgba(59,47,47,0.4) 60%, transparent 100%)",
              padding: "clamp(2rem, 3vw, 3rem) clamp(1rem, 1.5vw, 1.5rem) clamp(1rem, 1.5vw, 1.5rem)",
            }}
          >
            {/* Magazine Name */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.65rem, 0.75vw, 0.75rem)",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "clamp(0.35rem, 0.5vw, 0.5rem)",
              }}
            >
              {feature.name}
            </p>

            {/* Quote */}
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1.4,
              }}
            >
              &ldquo;{feature.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PressAwards() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        .press-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .press-header {
          text-align: center;
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        .press-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1.5rem, 2.5vw, 2rem);
        }

        .press-card {
          cursor: pointer;
        }

        /* Mobile: horizontal scroll */
        @media (max-width: 768px) {
          .press-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding: 0 1.5rem 1rem;
            margin: 0 -1.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .press-grid::-webkit-scrollbar {
            display: none;
          }

          .press-card {
            flex: 0 0 280px;
          }
        }
      `}</style>

      <div className="press-container">
        {/* Header */}
        <div className="press-header">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
              color: "rgba(59,47,47,0.6)",
              marginBottom: "0.5rem",
            }}
          >
            Featured In
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 500,
              color: "#3B2F2F",
              lineHeight: 1.1,
            }}
          >
            As Seen <span style={{ fontStyle: "italic" }}>In</span>
          </motion.h2>
        </div>

        {/* Press Cards Grid */}
        <div className="press-grid">
          {pressFeatures.map((feature, index) => (
            <PressCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
