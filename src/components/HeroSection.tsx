'use client';

import Image from 'next/image';
import { useState } from 'react';

export type HeroVariant = 'female' | 'male';

interface HeroSectionProps {
  variant?: HeroVariant;
}

const heroContent = {
  female: {
    headline: 'Wake Up Glowing',
    subline: 'Simple morning rituals for naturally radiant skin',
    cta: 'Discover Your Glow',
    ctaAlt: 'Shop Morning Essentials',
    imagePath: '/images/hero/female-morning-glow.jpg',
    productVideo: '/videos/dew-drops-float.mp4',
    productImage: '/images/products/dew-drops.png',
  },
  male: {
    headline: 'Skin That Keeps Up',
    subline: 'Built for your life. Designed for results.',
    cta: 'Shop Daily Essentials',
    ctaAlt: 'Find Your Routine',
    imagePath: '/images/hero/male-confident-start.jpg',
    productVideo: '/videos/solar-veil-float.mp4',
    productImage: '/images/products/solar-veil.png',
  },
};

export default function HeroSection({ variant = 'female' }: HeroSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const content = heroContent[variant];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50">
      {/* Split Hero Layout */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">

        {/* Left Side - Floating Product Animation */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8">

          {/* Ambient Particles Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-float-slow absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-purple-200/20 blur-3xl" />
            <div className="animate-float-medium absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-pink-200/20 blur-3xl" />
            <div className="animate-float-fast absolute bottom-1/4 left-1/3 h-36 w-36 rounded-full bg-blue-200/20 blur-3xl" />
          </div>

          {/* Product Video/Image Container */}
          <div className="relative z-10 max-w-md">
            {/* Video element for floating product animation */}
            <video
              className={`w-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              poster={content.productImage}
            >
              <source src={content.productVideo} type="video/mp4" />
            </video>

            {/* Fallback image if video doesn't load */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={content.productImage}
                  alt="Product"
                  width={400}
                  height={600}
                  className="animate-float-slow object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Lifestyle Image with Text Overlay */}
        <div className="relative flex items-center justify-start bg-white">

          {/* Background Lifestyle Image */}
          <div className="absolute inset-0">
            <Image
              src={content.imagePath}
              alt="Hero lifestyle image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Text Overlay Content */}
          <div className="relative z-10 max-w-xl px-8 py-16 lg:px-16">

            {/* Headline */}
            <h1 className="font-serif text-5xl font-semibold leading-tight text-white drop-shadow-lg lg:text-6xl xl:text-7xl">
              {content.headline}
            </h1>

            {/* Subline */}
            <p className="mt-6 text-lg leading-relaxed text-white/90 drop-shadow-md lg:text-xl">
              {content.subline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA */}
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">{content.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              {/* Secondary CTA */}
              <button className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white">
                {content.ctaAlt}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-zinc-400">Scroll</span>
          <svg
            className="h-6 w-6 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
