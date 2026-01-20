"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FounderStory() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFF8F3",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        .founder-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .founder-grid {
          display: grid;
          grid-template-columns: minmax(300px, 1fr) 1.5fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .founder-images {
          position: relative;
          width: 100%;
          padding-bottom: 15%;
        }

        .founder-image-primary {
          position: relative;
          width: 85%;
          aspect-ratio: 3/4;
          border-radius: clamp(1rem, 2vw, 1.5rem);
          overflow: hidden;
          z-index: 1;
        }

        .founder-image-secondary {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 55%;
          aspect-ratio: 4/5;
          border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
          overflow: hidden;
          z-index: 2;
          box-shadow: 0 8px 32px rgba(59,47,47,0.15);
        }

        .founder-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .founder-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: clamp(0.75rem, 1vw, 1rem) 0;
          border: none;
          background: none;
          cursor: pointer;
          transition: gap 0.3s ease;
        }

        .founder-cta:hover {
          gap: 0.75rem;
        }

        /* Mobile: stack vertically */
        @media (max-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .founder-images {
            max-width: 400px;
            margin: 0 auto;
            padding-bottom: 12%;
          }

          .founder-image-primary {
            width: 80%;
          }

          .founder-image-secondary {
            width: 50%;
          }

          .founder-content {
            text-align: center;
          }

          .founder-cta {
            justify-content: center;
          }
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "40%",
            height: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(225,200,185,0.25) 0%, transparent 60%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="founder-container">
        <div className="founder-grid">
          {/* Founder Portraits - Overlapping Layout */}
          <div className="founder-images">
            {/* Primary Image */}
            <motion.div
              className="founder-image-primary"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/founder/founder-portrait-1.webp"
                alt="Lumore Founder"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 320px, 425px"
              />
              {/* Subtle border overlay */}
              <div
                className="absolute inset-0"
                style={{
                  border: "1px solid rgba(59,47,47,0.08)",
                  borderRadius: "inherit",
                }}
              />
            </motion.div>

            {/* Secondary Image - Overlapping */}
            <motion.div
              className="founder-image-secondary"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/assets/founder/founder-portrait-2.webp"
                alt="Lumore Founder"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 200px, 275px"
              />
              {/* White border for depth */}
              <div
                className="absolute inset-0"
                style={{
                  border: "3px solid #FFFFFF",
                  borderRadius: "inherit",
                  boxShadow: "inset 0 0 0 1px rgba(59,47,47,0.05)",
                }}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="founder-content">
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
              Our Story
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#3B2F2F",
                lineHeight: 1.35,
                marginBottom: "clamp(1.5rem, 2.5vw, 2rem)",
              }}
            >
              &ldquo;Our mission began with a simple belief: everyone deserves
              skincare that works—formulas backed by science, inspired by
              nature, and crafted with intention.&rdquo;
            </motion.blockquote>

            {/* Founder Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                marginBottom: "clamp(1.5rem, 2.5vw, 2rem)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                  marginBottom: "0.25rem",
                }}
              >
                Priya Sharma
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.75rem, 0.85vw, 0.85rem)",
                  fontWeight: 400,
                  color: "rgba(59,47,47,0.6)",
                }}
              >
                Founder & CEO
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="founder-cta group">
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                    fontWeight: 500,
                    color: "#D4A574",
                  }}
                >
                  Read Our Story
                </span>
                <ArrowRight
                  size={18}
                  style={{ color: "#D4A574" }}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
