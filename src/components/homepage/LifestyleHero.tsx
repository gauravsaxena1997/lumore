"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";

const heroImages = [
  {
    id: 1,
    src: "/assets/hero/hero-image-female.webp",
    alt: "Underwater split photography - Lumore skincare",
  },
  {
    id: 2,
    src: "/assets/hero/hero-image-male.webp",
    alt: "Urban coastal lifestyle - Lumore skincare",
  },
  {
    id: 3,
    src: "/assets/hero/hero-image-duo.webp",
    alt: "Convertible duo lifestyle - Lumore skincare",
  },
];

export default function LifestyleHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate only (no manual controls)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Auto-rotating Carousel (50%) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="relative h-full w-full"
              >
                <Image
                  src={heroImages[currentSlide].src}
                  alt={heroImages[currentSlide].alt}
                  fill
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Explore Options (50%) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Your Skin,
                <span className="block text-purple-600">Your Journey</span>
              </h2>
              <p className="text-lg text-gray-600">
                Personalized skincare solutions for every skin type, every
                concern, every stage of life.
              </p>
            </div>

            {/* Explore Options */}
            <div className="space-y-4">
              {/* Option 1 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Sparkles className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Find Your Routine
                      </h3>
                      <p className="text-sm text-gray-600">
                        Personalized recommendations for your skin type
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              {/* Option 2 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group bg-gradient-to-r from-pink-50 to-transparent border-l-4 border-pink-600 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-100 rounded-full p-3">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Best Sellers
                      </h3>
                      <p className="text-sm text-gray-600">
                        Discover our most-loved products
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              {/* Option 3 */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-600 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        New Releases
                      </h3>
                      <p className="text-sm text-gray-600">
                        Explore our latest innovations
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
