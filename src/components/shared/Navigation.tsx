"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm" role="navigation">
      {/* Skip to Content Link - for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLinkClick}
            className="text-2xl font-bold text-purple-600 cursor-pointer"
            aria-label="Lumore home"
          >
            Lumore
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
            >
              Categories
            </button>
            <button
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
            >
              Blog
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search products"
              aria-expanded={isSearchOpen}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={handleLinkClick}
              aria-label="Shopping cart"
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4" role="search">
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <button
              onClick={handleLinkClick}
              className="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Products
            </button>
            <button
              onClick={handleLinkClick}
              className="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Categories
            </button>
            <button
              onClick={handleLinkClick}
              className="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              About
            </button>
            <button
              onClick={handleLinkClick}
              className="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Blog
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
