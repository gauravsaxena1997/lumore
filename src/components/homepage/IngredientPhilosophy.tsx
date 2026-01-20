"use client";

import { motion } from "framer-motion";
import { Droplets, Sun, Shield, Sparkles, Leaf, Zap, Clock, Waves } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Ingredient data with product mapping - 8 ingredients for 4x2 honeycomb
const ingredients = [
  {
    id: 1,
    name: "Hyaluronic Acid",
    benefit: "Deep Hydration",
    description: "Holds 1000x its weight in water for plumping",
    icon: Droplets,
    color: "#B8D4E8",
    usedIn: ["Dew Drops", "Kiss Proof"],
  },
  {
    id: 2,
    name: "Vitamin C",
    benefit: "Brightening",
    description: "Evens skin tone and boosts radiance",
    icon: Sun,
    color: "#FFE5CC",
    usedIn: ["Solar Veil", "Lumiskin"],
  },
  {
    id: 3,
    name: "Niacinamide",
    benefit: "Barrier Repair",
    description: "Minimizes pores while reducing redness",
    icon: Shield,
    color: "#D8CEE8",
    usedIn: ["Solar Veil", "Reset Mist"],
  },
  {
    id: 4,
    name: "Retinol",
    benefit: "Anti-Aging",
    description: "Accelerates cell turnover for youthful skin",
    icon: Clock,
    color: "#F5E6D3",
    usedIn: ["Night Repair", "Lumiskin"],
  },
  {
    id: 5,
    name: "Peptides",
    benefit: "Firming",
    description: "Signals collagen production for firmer skin",
    icon: Sparkles,
    color: "#F5D4C8",
    usedIn: ["Dew Drops", "Under Cover"],
  },
  {
    id: 6,
    name: "Vitamin E",
    benefit: "Nourishing",
    description: "Protects and repairs with antioxidant power",
    icon: Leaf,
    color: "#C5D8BE",
    usedIn: ["Melt Away", "Kiss Proof"],
  },
  {
    id: 7,
    name: "Caffeine",
    benefit: "Energizing",
    description: "Reduces puffiness and dark circles",
    icon: Zap,
    color: "#D4E8DD",
    usedIn: ["Under Cover"],
  },
  {
    id: 8,
    name: "Squalane",
    benefit: "Moisturizing",
    description: "Lightweight oil that locks in hydration",
    icon: Waves,
    color: "#E8E4D4",
    usedIn: ["Dew Drops", "Melt Away"],
  },
];

// Hexagonal ingredient card
function HexagonCard({
  ingredient,
  index,
}: {
  ingredient: (typeof ingredients)[0];
  index: number;
}) {
  const Icon = ingredient.icon as LucideIcon;

  return (
    <motion.div
      className="hex-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
    >
      {/* Hexagon border - slightly larger behind */}
      <div
        className="hex-border"
        style={{
          background: `${ingredient.color}50`,
        }}
      />
      {/* Hexagon Shape */}
      <div
        className="hex-shape"
        style={{
          background: `linear-gradient(155deg, ${ingredient.color}35, ${ingredient.color}15, #FFFFFF)`,
        }}
      >
        {/* Content inside hexagon */}
        <div className="hex-content">
          {/* Icon */}
          <Icon
            className="hex-icon"
            style={{ color: "#3B2F2F" }}
            strokeWidth={1.5}
          />

          {/* Name */}
          <h3
            className="hex-name"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#3B2F2F",
            }}
          >
            {ingredient.name}
          </h3>

          {/* Benefit */}
          <p
            className="hex-benefit"
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(59,47,47,0.5)",
            }}
          >
            {ingredient.benefit}
          </p>

          {/* Description */}
          <p
            className="hex-description"
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(59,47,47,0.7)",
            }}
          >
            {ingredient.description}
          </p>

          {/* Found in */}
          <div className="hex-products">
            <p
              className="hex-found-label"
              style={{
                fontFamily: "var(--font-inter)",
                color: "rgba(59,47,47,0.5)",
              }}
            >
              Found in:
            </p>
            <p
              className="hex-product-list"
              style={{
                fontFamily: "var(--font-inter)",
                color: "#3B2F2F",
              }}
            >
              {ingredient.usedIn.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IngredientPhilosophy() {
  // Split ingredients: 4 on top, 4 on bottom
  const row1 = ingredients.slice(0, 4);
  const row2 = ingredients.slice(4, 8);

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
        .honeycomb-wrapper {
          /* Hexagon sizing for 4x2 grid - LARGER to fill space */
          --hex-size: clamp(170px, 15vw, 210px);
          --hex-margin: clamp(6px, 0.8vw, 10px);
          /* Calculated: height = size * 1.1547 (1/cos(30deg)) */
          --hex-height: calc(var(--hex-size) * 1.1547);
          /* Calculated: vertical overlap = margin - size * 0.2885 (tan(30deg)/2) */
          --hex-row-overlap: calc(var(--hex-margin) - var(--hex-size) * 0.2885);
          /* Calculated: horizontal offset for row 2 = size/2 + margin */
          --hex-row-offset: calc(var(--hex-size) / 2 + var(--hex-margin));
        }

        .honeycomb-container {
          display: flex;
          align-items: center;
          gap: clamp(2rem, 3.5vw, 4rem);
          padding: 0 clamp(1.5rem, 3vw, 3rem);
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Left column - Title only */
        .title-section {
          flex-shrink: 0;
          width: clamp(200px, 18vw, 250px);
          text-align: left;
        }

        /* Honeycomb grid */
        .honeycomb-grid {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hex-row {
          display: flex;
          gap: calc(var(--hex-margin) * 3);
        }

        /* Row 2: Offset and overlap using proper honeycomb formulas */
        .hex-row.row-2 {
          margin-left: calc(var(--hex-size) / 2 + var(--hex-margin) * 1.5);
          margin-top: var(--hex-row-overlap);
        }

        /* Hexagon item container */
        .hex-item {
          width: var(--hex-size);
          height: var(--hex-height);
          position: relative;
        }

        /* Hexagon border - pseudo element behind main shape */
        .hex-border {
          position: absolute;
          inset: -2px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        /* Hexagon shape - pointy top using clip-path */
        .hex-shape {
          position: absolute;
          inset: 0;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .hex-item:hover .hex-shape {
          filter: brightness(1.02);
        }

        /* Content inside hexagon */
        .hex-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: clamp(0.6rem, 1vw, 1rem);
          width: 85%;
          height: 72%;
          justify-content: center;
        }

        .hex-icon {
          width: clamp(22px, 2.2vw, 28px);
          height: clamp(22px, 2.2vw, 28px);
          margin-bottom: clamp(0.3rem, 0.5vw, 0.5rem);
          flex-shrink: 0;
        }

        .hex-name {
          font-size: clamp(0.9rem, 1.05vw, 1.05rem);
          font-weight: 500;
          margin-bottom: clamp(0.15rem, 0.25vw, 0.25rem);
          line-height: 1.2;
        }

        .hex-benefit {
          font-size: clamp(0.55rem, 0.65vw, 0.65rem);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: clamp(0.25rem, 0.4vw, 0.35rem);
        }

        .hex-description {
          font-size: clamp(0.65rem, 0.75vw, 0.75rem);
          font-weight: 300;
          line-height: 1.35;
          margin-bottom: clamp(0.3rem, 0.5vw, 0.5rem);
        }

        .hex-products {
          margin-top: auto;
        }

        .hex-found-label {
          font-size: clamp(0.55rem, 0.65vw, 0.6rem);
          font-weight: 400;
          margin-bottom: 0.1rem;
        }

        .hex-product-list {
          font-size: clamp(0.65rem, 0.75vw, 0.7rem);
          font-weight: 500;
          line-height: 1.3;
        }

        /* Mobile: horizontal scroll */
        @media (max-width: 1100px) {
          .honeycomb-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .title-section {
            width: 100%;
            text-align: center;
            padding: 0 1.5rem;
          }

          .honeycomb-grid {
            width: 100%;
            overflow-x: auto;
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
            padding: 0 1.5rem 1rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .honeycomb-grid::-webkit-scrollbar {
            display: none;
          }

          .hex-row {
            flex-direction: row;
            flex-shrink: 0;
            gap: 0.75rem;
          }

          .hex-row.row-2 {
            margin-left: 0;
            margin-top: 0;
          }

          .hex-item {
            width: 155px;
            height: calc(155px * 1.1547);
            flex-shrink: 0;
          }

          .hex-content {
            padding: 0.6rem;
            width: 85%;
            height: 72%;
          }

          .hex-icon {
            width: 20px;
            height: 20px;
            margin-bottom: 0.25rem;
          }

          .hex-name {
            font-size: 0.8rem;
          }

          .hex-benefit {
            font-size: 0.5rem;
          }

          .hex-description {
            font-size: 0.58rem;
          }

          .hex-found-label {
            font-size: 0.5rem;
          }

          .hex-product-list {
            font-size: 0.58rem;
          }
        }
      `}</style>

      <div className="honeycomb-wrapper">
        <div className="honeycomb-container">
          {/* Title Section */}
          <div className="title-section">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-dancing)",
                fontSize: "clamp(1.35rem, 1.75vw, 1.6rem)",
                color: "rgba(59,47,47,0.6)",
                marginBottom: "0.5rem",
              }}
            >
              Science Meets Nature
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 500,
                color: "#3B2F2F",
                lineHeight: 1.1,
                marginBottom: "clamp(0.75rem, 1.25vw, 1rem)",
              }}
            >
              Ingredients
              <br />
              <span style={{ fontStyle: "italic" }}>With Purpose</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)",
                fontWeight: 300,
                color: "rgba(59,47,47,0.65)",
                lineHeight: 1.6,
              }}
            >
              Every formula is crafted with clinically-proven actives that deliver real results
            </motion.p>
          </div>

          {/* Honeycomb Grid - 4x2 layout */}
          <div className="honeycomb-grid">
            {/* Row 1: 4 hexagons */}
            <div className="hex-row row-1">
              {row1.map((ingredient, index) => (
                <HexagonCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  index={index}
                />
              ))}
            </div>

            {/* Row 2: 4 hexagons - offset using honeycomb formula */}
            <div className="hex-row row-2">
              {row2.map((ingredient, index) => (
                <HexagonCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  index={index + 4}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
