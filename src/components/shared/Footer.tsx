"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer
      style={{
        background: "#FAFAFA",
      }}
    >
        <div
          className="mx-auto"
          style={{
            maxWidth: "1400px",
            padding: "clamp(3rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Shop Column */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5B8DB8",
                }}
              >
                Shop
              </h4>
              <ul className="space-y-3">
                {["All Products", "Cleanse", "Hydrate", "Treat", "Protect", "Bundles"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={handleLinkClick}
                      className="transition-colors hover:text-[#3B2F2F]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)",
                        fontWeight: 400,
                        color: "rgba(59,47,47,0.6)",
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5B8DB8",
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["FAQs", "Contact", "About Us", "Blog", "Ingredients"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={handleLinkClick}
                      className="transition-colors hover:text-[#3B2F2F]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)",
                        fontWeight: 400,
                        color: "rgba(59,47,47,0.6)",
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies Column */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5B8DB8",
                }}
              >
                Policies
              </h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refunds & Returns"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={handleLinkClick}
                      className="transition-colors hover:text-[#3B2F2F]"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)",
                        fontWeight: 400,
                        color: "rgba(59,47,47,0.6)",
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column - Spans 2 columns on large screens */}
            <div className="lg:col-span-2">
              <h4
                className="mb-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5B8DB8",
                }}
              >
                Become a Lumore Insider
              </h4>
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.8rem, 0.95vw, 0.875rem)",
                  fontWeight: 400,
                  color: "rgba(59,47,47,0.6)",
                  lineHeight: 1.6,
                  maxWidth: "320px",
                }}
              >
                Get first dibs on new drops, exclusive offers, and real skin science straight to your inbox.
              </p>

              {/* Email Input */}
              <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                  className="w-full outline-none transition-all focus:border-[#5B8DB8]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.85rem, 1vw, 0.9rem)",
                    fontWeight: 400,
                    color: "#3B2F2F",
                    padding: "clamp(0.875rem, 1.25vw, 1rem) clamp(1rem, 1.5vw, 1.25rem)",
                    paddingRight: "3.5rem",
                    background: "#FFFFFF",
                    border: "1px solid rgba(59,47,47,0.15)",
                    borderRadius: "100px",
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all hover:bg-[#3B2F2F] hover:text-white"
                  style={{
                    width: "clamp(2.25rem, 3vw, 2.5rem)",
                    height: "clamp(2.25rem, 3vw, 2.5rem)",
                    background: "rgba(59,47,47,0.05)",
                    color: "#3B2F2F",
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-12 pt-6"
            style={{
              borderTop: "1px solid rgba(59,47,47,0.1)",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 400,
                  color: "rgba(59,47,47,0.5)",
                }}
              >
                © 2026 Lumore. All rights reserved.
              </p>

              {/* Get in Touch */}
              <div className="text-center">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.65rem, 0.75vw, 0.7rem)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5B8DB8",
                    marginBottom: "0.25rem",
                  }}
                >
                  Get in Touch
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                    fontWeight: 400,
                    color: "rgba(59,47,47,0.6)",
                  }}
                >
                  For any queries, email us at{" "}
                  <button
                    onClick={handleLinkClick}
                    className="hover:text-[#3B2F2F] transition-colors"
                    style={{ color: "#3B2F2F", fontWeight: 500 }}
                  >
                    hello@lumore.co
                  </button>
                </p>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.7rem, 0.85vw, 0.75rem)",
                  fontWeight: 400,
                  color: "rgba(59,47,47,0.4)",
                }}
              >
                Made with ✨ in India
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
}
