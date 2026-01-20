"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import { BlogPost } from "@/types";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      className="blog-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Card Container */}
      <div
        className="h-full overflow-hidden rounded-[clamp(1rem,1.5vw,1.25rem)] cursor-pointer"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0 2px 8px rgba(59,47,47,0.04), 0 8px 24px rgba(59,47,47,0.06)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "16/10",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 300px, 400px"
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          {/* Read Time */}
          <div
            className="flex items-center gap-1.5"
            style={{
              marginBottom: "clamp(0.5rem, 0.75vw, 0.75rem)",
            }}
          >
            <Clock
              size={14}
              style={{ color: "rgba(59,47,47,0.5)" }}
              strokeWidth={1.5}
            />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.7rem, 0.8vw, 0.75rem)",
                fontWeight: 400,
                color: "rgba(59,47,47,0.5)",
              }}
            >
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              fontWeight: 500,
              color: "#3B2F2F",
              lineHeight: 1.35,
              marginBottom: "clamp(0.5rem, 0.75vw, 0.75rem)",
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
              fontWeight: 300,
              color: "rgba(59,47,47,0.65)",
              lineHeight: 1.6,
              marginBottom: "clamp(0.75rem, 1vw, 1rem)",
            }}
          >
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div
            className="flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
            style={{
              color: "#D4A574",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.8rem, 0.85vw, 0.85rem)",
                fontWeight: 500,
              }}
            >
              Read More
            </span>
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogHighlights() {
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
        .blog-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .blog-header {
          text-align: center;
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1.5rem, 2.5vw, 2rem);
          margin-bottom: clamp(2rem, 3vw, 3rem);
        }

        .blog-card:hover > div {
          box-shadow: 0 4px 12px rgba(59,47,47,0.06), 0 12px 32px rgba(59,47,47,0.1);
          transform: translateY(-4px);
        }

        .blog-cta-wrapper {
          text-align: center;
        }

        .blog-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: clamp(0.85rem, 1.25vw, 1rem) clamp(1.5rem, 2.5vw, 2rem);
          border: 1px solid rgba(59,47,47,0.15);
          border-radius: 100px;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-cta:hover {
          background: #3B2F2F;
          border-color: #3B2F2F;
          gap: 0.75rem;
        }

        .blog-cta:hover .cta-text {
          color: #FFFFFF;
        }

        .blog-cta:hover .cta-icon {
          color: #FFFFFF;
        }

        /* Mobile: horizontal scroll */
        @media (max-width: 900px) {
          .blog-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding: 0 1.5rem 1rem;
            margin: 0 -1.5rem clamp(2rem, 3vw, 3rem);
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .blog-grid::-webkit-scrollbar {
            display: none;
          }

          .blog-card {
            flex: 0 0 300px;
          }
        }
      `}</style>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
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
            Learn & Discover
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
            From the <span style={{ fontStyle: "italic" }}>Journal</span>
          </motion.h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="blog-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="blog-cta group">
            <span
              className="cta-text"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                fontWeight: 500,
                color: "#3B2F2F",
                transition: "color 0.3s ease",
              }}
            >
              View All Articles
            </span>
            <ArrowRight
              size={18}
              className="cta-icon transition-all group-hover:translate-x-1"
              style={{ color: "#3B2F2F", transition: "color 0.3s ease" }}
              strokeWidth={2}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
