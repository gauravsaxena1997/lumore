"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, Recycle, ShieldCheck, LucideIcon } from "lucide-react";

// Stats data - 4 stats shown as 2 pairs
const statsData = [
  { value: "100%", label: "Clean Ingredients", Icon: Leaf },
  { value: "Always", label: "Cruelty Free", Icon: Heart },
  { value: "Sustainable", label: "Packaging", Icon: Recycle },
  { value: "Dermatologist", label: "Tested", Icon: ShieldCheck },
];

// Philosophy images that change with scroll
const philosophyImages = [
  {
    src: "/assets/blog/blog-1.webp",
    alt: "Lumore brand story",
  },
  {
    src: "/assets/hero/hero-image-male-landscape.webp",
    alt: "Skincare ritual",
  },
];

// Static quote
const quote = {
  text: "True beauty is not about perfection, it's about nurturing what makes you unique.",
  author: "Lumore Philosophy"
};

// Single stat item display
function StatItem({
  value,
  label,
  Icon,
}: {
  value: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Horizontal row: Icon + Value */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <Icon
          style={{
            width: "clamp(2rem, 4vw, 3rem)",
            height: "clamp(2rem, 4vw, 3rem)",
            color: "rgba(59,47,47,0.3)",
          }}
          strokeWidth={1}
        />
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#3B2F2F",
            lineHeight: 1,
          }}
        >
          {value}
        </div>
      </div>

      {/* Label below */}
      <div
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(59,47,47,0.5)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// Animated Stats Pair - shows 2 stats side by side
function AnimatedStatsPair({
  stats,
  isFirst,
  scrollYProgress,
}: {
  stats: typeof statsData;
  isFirst: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  // First pair: 0 to 0.5 (visible at start, fades out)
  // Second pair: 0.5 to 1 (fades in, stays visible)
  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.45, 0.5]
      : [0.5, 0.55, 0.65, 1],
    isFirst
      ? [1, 1, 0.5, 0]
      : [0, 0.5, 1, 1]
  );

  const blurValue = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.45, 0.5]
      : [0.5, 0.55, 0.65, 1],
    isFirst
      ? [0, 0, 6, 12]
      : [12, 6, 0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.5]
      : [0.5, 0.65, 1],
    isFirst
      ? [0, 0, -20]
      : [20, 0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.5]
      : [0.5, 0.65, 1],
    isFirst
      ? [1, 1, 0.95]
      : [0.95, 1, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        filter: useTransform(blurValue, (v) => `blur(${v}px)`),
      }}
      className="absolute inset-0 flex items-center justify-center gap-8 md:gap-12"
    >
      {stats.map((stat) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          Icon={stat.Icon}
        />
      ))}
    </motion.div>
  );
}

// Animated Philosophy Image - changes with scroll
function AnimatedPhilosophyImage({
  image,
  isFirst,
  scrollYProgress,
}: {
  image: typeof philosophyImages[0];
  isFirst: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  // Sync with stats animation timing
  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.45, 0.5]
      : [0.5, 0.55, 0.65, 1],
    isFirst
      ? [1, 1, 0.3, 0]
      : [0, 0.3, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst
      ? [0, 0.35, 0.5]
      : [0.5, 0.65, 1],
    isFirst
      ? [1, 1, 1.02]
      : [1.02, 1, 1]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, scale }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 90vw, 45vw"
      />
    </motion.div>
  );
}

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{
        background: "#FFF8F3",
        height: "200vh",
      }}
    >
      {/* Sticky container */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{
          height: "100vh",
        }}
      >
        {/* Visible background texture - soft organic blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large soft blob - bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "-5%",
              width: "45%",
              height: "50%",
              background: "radial-gradient(ellipse at center, rgba(225,200,185,0.5) 0%, rgba(225,200,185,0.2) 40%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
            }}
          />
          {/* Medium blob - top right */}
          <div
            style={{
              position: "absolute",
              top: "5%",
              right: "-5%",
              width: "35%",
              height: "40%",
              background: "radial-gradient(ellipse at center, rgba(235,215,200,0.45) 0%, rgba(235,215,200,0.15) 50%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          />
          {/* Small accent blob - center left */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "10%",
              width: "20%",
              height: "25%",
              background: "radial-gradient(ellipse at center, rgba(220,195,180,0.35) 0%, transparent 60%)",
              borderRadius: "50%",
              filter: "blur(30px)",
            }}
          />
          {/* Soft glow - bottom center */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "30%",
              width: "40%",
              height: "30%",
              background: "radial-gradient(ellipse at center bottom, rgba(240,225,215,0.6) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />
        </div>
        {/* "Our Philosophy" - centered at top */}
        <div
          className="absolute top-0 left-0 right-0 text-center z-10"
          style={{
            paddingTop: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3B2F2F",
            }}
          >
            Our Philosophy
          </h3>
        </div>

        {/* Main content area */}
        <div className="h-full flex items-center justify-center py-8 lg:py-12">
          <div
            className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 items-center"
            style={{
              padding: "clamp(1rem, 2.5vw, 2.5rem)",
              gap: "clamp(1.5rem, 3vw, 3rem)",
            }}
          >
            {/* Column 1: Stacked Polaroid-style frames */}
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              {/* Stacked photos container */}
              <div
                className="relative"
                style={{
                  width: "100%",
                  maxWidth: "clamp(320px, 38vw, 500px)",
                }}
              >
                {/* Back polaroid 3 (furthest back) */}
                <div
                  className="absolute"
                  style={{
                    width: "100%",
                    background: "#FAFAFA",
                    padding: "clamp(14px, 1.8vw, 22px)",
                    paddingBottom: "clamp(90px, 14vw, 130px)",
                    borderRadius: "3px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    transform: "rotate(6deg) translateX(3%) translateY(2%)",
                    zIndex: 1,
                  }}
                >
                  <div style={{ aspectRatio: "16/9", background: "rgba(220,210,200,0.5)" }} />
                </div>

                {/* Back polaroid 2 */}
                <div
                  className="absolute"
                  style={{
                    width: "100%",
                    background: "#FCFCFC",
                    padding: "clamp(14px, 1.8vw, 22px)",
                    paddingBottom: "clamp(90px, 14vw, 130px)",
                    borderRadius: "3px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    transform: "rotate(-4deg) translateX(-2%) translateY(1%)",
                    zIndex: 2,
                  }}
                >
                  <div style={{ aspectRatio: "16/9", background: "rgba(215,205,195,0.4)" }} />
                </div>

                {/* Back polaroid 1 (just behind main) */}
                <div
                  className="absolute"
                  style={{
                    width: "100%",
                    background: "#FEFEFE",
                    padding: "clamp(14px, 1.8vw, 22px)",
                    paddingBottom: "clamp(90px, 14vw, 130px)",
                    borderRadius: "3px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    transform: "rotate(2.5deg) translateX(1%)",
                    zIndex: 3,
                  }}
                >
                  <div style={{ aspectRatio: "16/9", background: "rgba(225,215,205,0.35)" }} />
                </div>

                {/* Main Polaroid frame (front) */}
                <div
                  className="relative"
                  style={{
                    width: "100%",
                    background: "#FFFFFF",
                    padding: "clamp(14px, 1.8vw, 22px)",
                    paddingBottom: "clamp(90px, 14vw, 130px)",
                    borderRadius: "3px",
                    boxShadow: `
                      0 2px 4px rgba(0,0,0,0.05),
                      0 8px 24px rgba(100,80,60,0.12),
                      0 24px 56px rgba(100,80,60,0.1)
                    `,
                    transform: "rotate(-1.5deg)",
                    zIndex: 4,
                  }}
                >
                  {/* Image container - animated images that change with stats */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{
                      aspectRatio: "16/9",
                    }}
                  >
                    {/* First image (blog-1) - synced with first stats pair */}
                    <AnimatedPhilosophyImage
                      image={philosophyImages[0]}
                      isFirst={true}
                      scrollYProgress={scrollYProgress}
                    />
                    {/* Second image (hero-male) - synced with second stats pair */}
                    <AnimatedPhilosophyImage
                      image={philosophyImages[1]}
                      isFirst={false}
                      scrollYProgress={scrollYProgress}
                    />
                  </div>

                  {/* Polaroid bottom text area - taller with branding */}
                  <div
                    className="absolute bottom-0 left-0 right-0 text-center flex flex-col items-center justify-center"
                    style={{
                      padding: "clamp(16px, 3vw, 28px)",
                      height: "clamp(90px, 14vw, 130px)",
                    }}
                  >
                    {/* Lumore branding */}
                    <div
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        color: "rgba(59,47,47,0.8)",
                        marginBottom: "clamp(6px, 1vw, 10px)",
                      }}
                    >
                      LUMORE
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                        fontStyle: "italic",
                        color: "rgba(59,47,47,0.6)",
                        marginBottom: "clamp(4px, 0.6vw, 6px)",
                      }}
                    >
                      Nurturing radiance since 2014
                    </p>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(0.5rem, 0.7vw, 0.65rem)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(59,47,47,0.35)",
                      }}
                    >
                      Est. Mumbai, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Text content + animated stats - all centered */}
            <div className="flex flex-col items-center justify-center order-1 lg:order-2 text-center">
              {/* Title - centered, larger */}
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  color: "#3B2F2F",
                  lineHeight: 1.15,
                  marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
                }}
              >
                Beauty That Begins <span style={{ fontStyle: "italic" }}>Within</span>
              </h2>

              {/* Paragraph - centered, larger */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                  fontWeight: 300,
                  color: "rgba(59,47,47,0.7)",
                  lineHeight: 1.9,
                  marginBottom: "clamp(2rem, 3vw, 2.5rem)",
                  maxWidth: "520px",
                }}
              >
                At Lumore, we believe that true radiance comes from nurturing your
                skin with the purest ingredients nature has to offer. Our formulations
                blend ancient botanical wisdom with cutting-edge science, creating
                products that work in harmony with your skin&apos;s natural processes.
              </p>

              {/* Horizontal divider line - centered */}
              <div
                style={{
                  width: "60px",
                  height: "1px",
                  background: "rgba(59,47,47,0.2)",
                  marginBottom: "clamp(0.75rem, 1vw, 1rem)",
                }}
              />

              {/* Animated stats area - 2 stats at a time */}
              <div
                className="relative"
                style={{
                  height: "clamp(80px, 12vh, 120px)",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                {/* First pair: stats 0 & 1 */}
                <AnimatedStatsPair
                  stats={statsData.slice(0, 2)}
                  isFirst={true}
                  scrollYProgress={scrollYProgress}
                />
                {/* Second pair: stats 2 & 3 */}
                <AnimatedStatsPair
                  stats={statsData.slice(2, 4)}
                  isFirst={false}
                  scrollYProgress={scrollYProgress}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom static quote - with subtle background layer */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            background: "linear-gradient(to top, rgba(235,225,215,0.4) 0%, rgba(235,225,215,0.15) 60%, transparent 100%)",
            paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
            paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          <div
            className="mx-auto text-center"
            style={{
              maxWidth: "800px",
              padding: "0 2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dancing)",
                fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                fontWeight: 500,
                color: "rgba(59,47,47,0.7)",
                lineHeight: 1.5,
                marginBottom: "1.25rem",
              }}
            >
              &ldquo;{quote.text}&rdquo;
            </p>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(59,47,47,0.45)",
              }}
            >
              — {quote.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
