"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function BrandMotto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for products
  const leftProductY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightProductY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const leftProductRotate = useTransform(scrollYProgress, [0, 1], [-8, -15]);
  const rightProductRotate = useTransform(scrollYProgress, [0, 1], [8, 15]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "clamp(500px, 80vh, 700px)",
        // Sky gradient background
        background: "linear-gradient(180deg, #E8F4FC 0%, #F5FAFD 30%, #FFFFFF 70%, #FFF8F3 100%)",
      }}
    >
      <style>{`
        .motto-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 4rem);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: inherit;
        }

        .motto-content {
          text-align: center;
          max-width: 700px;
          z-index: 10;
          position: relative;
        }

        .product-left {
          position: absolute;
          left: clamp(-50px, -2vw, 0px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
        }

        .product-right {
          position: absolute;
          right: clamp(-50px, -2vw, 0px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
        }

        .product-image {
          width: clamp(180px, 22vw, 280px);
          height: auto;
          filter: drop-shadow(0 25px 50px rgba(59,47,47,0.2)) drop-shadow(0 10px 20px rgba(59,47,47,0.15));
        }

        /* Cloud elements */
        .clouds {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .cloud {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(40px);
        }

        .cloud-1 {
          width: 300px;
          height: 100px;
          top: 10%;
          left: 5%;
        }

        .cloud-2 {
          width: 400px;
          height: 120px;
          top: 20%;
          right: 10%;
        }

        .cloud-3 {
          width: 250px;
          height: 80px;
          bottom: 30%;
          left: 15%;
        }

        .cloud-4 {
          width: 350px;
          height: 100px;
          bottom: 20%;
          right: 5%;
        }

        /* Mobile: hide products or show smaller */
        @media (max-width: 1100px) {
          .product-left,
          .product-right {
            display: none;
          }

          .motto-content {
            max-width: 100%;
            padding: 0 1rem;
          }
        }
      `}</style>

      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />

        {/* Soft gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(184,212,232,0.3) 0%, transparent 60%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(ellipse at center, rgba(212,232,221,0.25) 0%, transparent 60%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="motto-container">
        {/* Left Product - Tilted with Parallax */}
        <motion.div
          className="product-left"
          style={{
            y: leftProductY,
            rotate: leftProductRotate,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/assets/products/02-dew-drops-transparent.webp"
              alt="Dew Drops Serum"
              width={280}
              height={400}
              className="product-image"
              style={{
                transform: "perspective(1000px) rotateY(15deg)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Center Content */}
        <div className="motto-content">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5B8DB8",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            Our Philosophy
          </motion.p>

          {/* Main Motto */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#3B2F2F",
              lineHeight: 1.3,
              marginBottom: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            Your bathroom shelf doesn&apos;t need a{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "#5B8DB8",
              }}
            >
              chemistry degree
            </span>
            . We did the homework so your skin can just{" "}
            <span style={{ fontStyle: "italic" }}>show up glowing</span>.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              fontWeight: 300,
              color: "rgba(59,47,47,0.7)",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            No fairy tales. No miracles. Just molecules that actually deliver.
          </motion.p>
        </div>

        {/* Right Product - Tilted with Parallax */}
        <motion.div
          className="product-right"
          style={{
            y: rightProductY,
            rotate: rightProductRotate,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/assets/products/01-solar-veil-transparent.webp"
              alt="Solar Veil SPF"
              width={280}
              height={400}
              className="product-image"
              style={{
                transform: "perspective(1000px) rotateY(-15deg)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
