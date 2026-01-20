"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { Testimonial } from "@/types";

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      className="flex-shrink-0 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        width: "clamp(320px, 28vw, 400px)",
      }}
    >
      <div
        className="h-full rounded-[clamp(1.25rem,2vw,1.5rem)] overflow-hidden"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0 2px 8px rgba(59,47,47,0.04), 0 8px 24px rgba(59,47,47,0.06)",
        }}
      >
        {/* Image/Video Area - Will be video later */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "4/5",
            background: "linear-gradient(135deg, #F5EDE8 0%, #FFF8F3 100%)",
          }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 320px, 400px"
          />

          {/* Quote Icon Overlay */}
          <div
            className="absolute top-4 right-4 rounded-full p-3"
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Quote
              size={18}
              style={{ color: "#3B2F2F" }}
              strokeWidth={1.5}
            />
          </div>

          {/* Gradient Overlay at Bottom */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "50%",
              background:
                "linear-gradient(to top, rgba(255,248,243,0.95) 0%, transparent 100%)",
            }}
          />

          {/* Review Content Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5"
            style={{
              paddingBottom: "clamp(1.25rem, 2vw, 1.5rem)",
            }}
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < testimonial.rating ? "#C4956A" : "transparent"}
                  stroke={i < testimonial.rating ? "#C4956A" : "rgba(59,47,47,0.3)"}
                  strokeWidth={1.5}
                />
              ))}
            </div>

            {/* Review Quote */}
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1rem, 1.15vw, 1.1rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#3B2F2F",
                lineHeight: 1.5,
                marginBottom: "clamp(0.75rem, 1vw, 1rem)",
              }}
            >
              &ldquo;{testimonial.review}&rdquo;
            </p>

            {/* Customer Info */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.85rem, 0.95vw, 0.9rem)",
                  fontWeight: 500,
                  color: "#3B2F2F",
                }}
              >
                {testimonial.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.8vw, 0.75rem)",
                  fontWeight: 400,
                  color: "rgba(59,47,47,0.6)",
                  marginTop: "0.15rem",
                }}
              >
                Using {testimonial.product}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Title Card Component
function TitleCard() {
  return (
    <div
      className="flex-shrink-0 flex flex-col justify-center"
      style={{
        width: "clamp(280px, 24vw, 360px)",
        paddingRight: "clamp(1rem, 2vw, 2rem)",
      }}
    >
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
        Real Stories
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
          marginBottom: "clamp(0.75rem, 1.25vw, 1rem)",
        }}
      >
        Real
        <br />
        <span style={{ fontStyle: "italic" }}>Results</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
          fontWeight: 300,
          color: "rgba(59,47,47,0.65)",
          lineHeight: 1.6,
          marginBottom: "clamp(1.5rem, 2vw, 2rem)",
        }}
      >
        Join thousands who&apos;ve transformed their skin with our science-backed
        formulas
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-6"
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.5rem, 2vw, 1.75rem)",
              fontWeight: 500,
              color: "#3B2F2F",
            }}
          >
            10K+
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.65rem, 0.75vw, 0.7rem)",
              fontWeight: 400,
              color: "rgba(59,47,47,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Happy Customers
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.5rem, 2vw, 1.75rem)",
              fontWeight: 500,
              color: "#3B2F2F",
            }}
          >
            4.8
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.65rem, 0.75vw, 0.7rem)",
              fontWeight: 400,
              color: "rgba(59,47,47,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Avg Rating
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LuxuryTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement - reduced to ~45% to minimize right gap
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        background: "#FFF8F3",
        // Reduced height for less scroll distance
        height: "200vh",
      }}
    >
      {/* Sticky Container - stays fixed while we scroll through the section */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{
          height: "auto",
          minHeight: "80vh",
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Soft blob - left */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "-5%",
              width: "40%",
              height: "50%",
              background:
                "radial-gradient(ellipse at center, rgba(225,200,185,0.35) 0%, rgba(225,200,185,0.1) 50%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
          {/* Soft blob - right */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "-10%",
              width: "45%",
              height: "55%",
              background:
                "radial-gradient(ellipse at center, rgba(235,215,200,0.3) 0%, transparent 60%)",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Horizontal Scroll Content */}
        <motion.div
          ref={scrollRef}
          className="flex items-center"
          style={{
            x,
            gap: "clamp(1.5rem, 2.5vw, 2rem)",
            paddingLeft: "clamp(2rem, 6vw, 5rem)",
            paddingRight: "clamp(2rem, 6vw, 5rem)",
          }}
        >
          {/* Title Card */}
          <TitleCard />

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
