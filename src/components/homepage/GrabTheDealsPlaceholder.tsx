"use client";

export default function GrabTheDealsPlaceholder() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        background: "#FFFFFF",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div className="text-center px-4">
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(59,47,47,0.4)",
          }}
        >
          Grab the Deals Section — Coming Soon
        </p>
      </div>
    </section>
  );
}
