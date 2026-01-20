"use client";

import { useState } from "react";
import { ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50"
    >
      <div
        className="mx-auto max-w-[1600px]"
        style={{ padding: "0 clamp(1rem, 4vw, 4rem)" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ height: "clamp(4rem, 8vh, 5rem)" }}
        >

          {/* Logo */}
          <motion.button
            onClick={handleLinkClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-light tracking-[0.3em] text-neutral-900 hover:text-neutral-600 transition-colors"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
          >
            LUMORE
          </motion.button>

          {/* Center Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center"
            style={{ gap: "clamp(2rem, 3vw, 3rem)" }}
          >
            {["Home", "About", "Gallery", "Features"].map((item, index) => (
              <button
                key={item}
                onClick={handleLinkClick}
                className="tracking-wider uppercase text-neutral-600 hover:text-neutral-900 transition-colors font-light"
                style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center"
            style={{ gap: "clamp(0.75rem, 1.5vw, 1.5rem)" }}
          >
            {/* Social Icons */}
            <div
              className="hidden md:flex items-center"
              style={{ gap: "clamp(0.5rem, 1vw, 1rem)" }}
            >
              <button
                onClick={handleLinkClick}
                className="rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
                style={{ width: "clamp(2.25rem, 3vw, 2.5rem)", height: "clamp(2.25rem, 3vw, 2.5rem)" }}
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button
                onClick={handleLinkClick}
                className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={handleLinkClick}
                className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Cart */}
            <button
              onClick={handleLinkClick}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>

            {/* Explore Now Button */}
            <button
              onClick={handleLinkClick}
              className="hidden lg:block bg-neutral-900 hover:bg-neutral-800 text-white rounded-full tracking-wider uppercase font-light transition-all"
              style={{
                padding: "clamp(0.65rem, 1vw, 0.75rem) clamp(1.25rem, 2vw, 1.5rem)",
                fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)"
              }}
            >
              Explore Now
            </button>
          </motion.div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-neutral-200/50"
            >
              <div className="py-6">
                <input
                  type="search"
                  placeholder="Search for products, ingredients, or collections..."
                  className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 text-lg font-light"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
