"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Parody retailer data with SVG-style logos
const retailers = [
  {
    id: 1,
    name: "Naikaa",
    // Mimics Nykaa's colorful, playful style
    style: {
      fontFamily: "'Brush Script MT', cursive",
      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
      fontWeight: 400,
      background: "linear-gradient(135deg, #E91E63 0%, #FF5722 50%, #FFC107 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    } as React.CSSProperties,
  },
  {
    id: 2,
    name: "Amazoon",
    // Mimics Amazon's style - will use custom SVG
    isAmazon: true,
  },
  {
    id: 3,
    name: "Flipkarp",
    // Mimics Flipkart's style - will use custom SVG
    isFlipkart: true,
  },
  {
    id: 4,
    name: "winkkit",
    // Mimics Blinkit's bold style
    style: {
      fontFamily: "var(--font-inter)",
      fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
      fontWeight: 700,
      color: "#1A1A1A",
      letterSpacing: "-0.02em",
    } as React.CSSProperties,
    // Special rendering for the "i" dot
    hasSpecialDot: true,
    dotColor: "#F9E300",
  },
  {
    id: 5,
    name: "Myntro",
    // Mimics Myntra's M logo style - we'll render just the stylized M
    isIcon: true,
    iconGradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FFA726 100%)",
  },
];

// Amazoon logo - mimics Amazon's style with the smile arrow
function AmazoonLogo() {
  return (
    <div className="flex flex-col items-center">
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
          fontWeight: 700,
          color: "#232F3E",
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        amazoon
        {/* The smile/arrow underneath */}
        <svg
          viewBox="0 0 100 20"
          style={{
            position: "absolute",
            bottom: "-8px",
            left: "15%",
            width: "70%",
            height: "auto",
          }}
        >
          <path
            d="M5 12 Q50 25 90 5"
            fill="none"
            stroke="#FF9900"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon
            points="88,2 95,8 85,10"
            fill="#FF9900"
          />
        </svg>
      </span>
    </div>
  );
}

// Flipkarp logo - mimics Flipkart's style with yellow and blue
function FlipkarpLogo() {
  return (
    <div className="flex items-center gap-1">
      {/* The F icon in yellow box */}
      <div
        style={{
          background: "#FFEB3B",
          borderRadius: "4px",
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            fontWeight: 800,
            color: "#2874F0",
            fontStyle: "italic",
          }}
        >
          f
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
          fontWeight: 600,
          color: "#2874F0",
          fontStyle: "italic",
        }}
      >
        lipkarp
      </span>
    </div>
  );
}

// Custom component for Winkkit with yellow dot
function WinkkitLogo() {
  return (
    <span className="relative inline-flex items-center">
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
          fontWeight: 700,
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
        }}
      >
        w
        <span className="relative">
          i
          <span
            className="absolute"
            style={{
              top: "-0.1em",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0.35em",
              height: "0.35em",
              background: "#F9E300",
              borderRadius: "50%",
            }}
          />
        </span>
        nkk
        <span className="relative">
          i
          <span
            className="absolute"
            style={{
              top: "-0.1em",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0.35em",
              height: "0.35em",
              background: "#F9E300",
              borderRadius: "50%",
            }}
          />
        </span>
        t
      </span>
    </span>
  );
}

// Stylized M icon for Myntro (like Myntra's logo)
function MyntroLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 60 50"
        style={{
          width: "clamp(40px, 5vw, 55px)",
          height: "clamp(35px, 4.5vw, 48px)",
        }}
      >
        <defs>
          <linearGradient id="myntroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#FF8E53" />
            <stop offset="100%" stopColor="#FFA726" />
          </linearGradient>
        </defs>
        {/* Stylized M shape similar to Myntra */}
        <path
          d="M5 45 L5 15 C5 10, 10 5, 15 5 L20 5 C25 5, 28 8, 30 15 L30 25 L30 15 C32 8, 35 5, 40 5 L45 5 C50 5, 55 10, 55 15 L55 45"
          fill="none"
          stroke="url(#myntroGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RetailerLogo({
  retailer,
  index,
}: {
  retailer: (typeof retailers)[0];
  index: number;
}) {
  const renderLogo = () => {
    if (retailer.name === "winkkit") return <WinkkitLogo />;
    if (retailer.name === "Amazoon") return <AmazoonLogo />;
    if (retailer.name === "Flipkarp") return <FlipkarpLogo />;
    if (retailer.isIcon) return <MyntroLogo />;
    return <span style={retailer.style}>{retailer.name}</span>;
  };

  return (
    <motion.div
      className="retailer-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
    >
      {renderLogo()}
    </motion.div>
  );
}

export default function AuthorizedRetailers() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      {/* Vintage background image - prominent with vintage effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.8,
        }}
      >
        <Image
          src="/assets/hero/hero-image-duo-landscape.webp"
          alt=""
          fill
          className="object-cover"
          style={{
            filter: "blur(2px) sepia(0.25) saturate(0.85)",
            objectPosition: "center 70%",
          }}
          sizes="100vw"
        />
      </div>

      {/* Overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.6) 100%)",
        }}
      />

      <style>{`
        .retailers-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .retailers-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .retailers-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(2.5rem, 5vw, 5rem);
        }

        .retailer-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .retailer-item:hover {
          opacity: 1;
        }

        /* Subtle disclaimer */
        .disclaimer {
          text-align: center;
          margin-top: clamp(2rem, 3vw, 2.5rem);
        }

        @media (max-width: 640px) {
          .retailers-grid {
            gap: 2rem 3rem;
          }
        }
      `}</style>

      <div className="retailers-container relative z-10">
        {/* Header */}
        <div className="retailers-header">
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
              marginBottom: "clamp(0.75rem, 1vw, 1rem)",
            }}
          >
            Authorised Retailers
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
              fontWeight: 400,
              fontStyle: "italic",
              color: "#3B2F2F",
              lineHeight: 1.2,
            }}
          >
            we&apos;re also available at
          </motion.h2>
        </div>

        {/* Retailer Logos */}
        <div className="retailers-grid">
          {retailers.map((retailer, index) => (
            <RetailerLogo key={retailer.id} retailer={retailer} index={index} />
          ))}
        </div>

        {/* Subtle disclaimer - adds to the playful vibe */}
        <motion.p
          className="disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(0.65rem, 0.75vw, 0.7rem)",
            fontWeight: 300,
            color: "rgba(59,47,47,0.4)",
            fontStyle: "italic",
          }}
        >
          *Names may or may not resemble actual platforms. Any similarity is purely coincidental. 😉
        </motion.p>
      </div>
    </section>
  );
}
