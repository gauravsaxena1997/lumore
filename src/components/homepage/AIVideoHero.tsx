"use client";

import { Sparkles, TrendingUp, Users, Award } from "lucide-react";

export default function AIVideoHero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 items-center">
          {/* Left: AI Video Placeholder (30%) */}
          <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl shadow-2xl overflow-hidden">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <Sparkles className="h-16 w-16 text-purple-600 mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                AI Video
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Discover the science of radiant skin
              </p>
              <div className="text-xs text-gray-500">Coming Soon</div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-dashed border-purple-300 rounded-3xl animate-pulse" />
          </div>

          {/* Right: Content with Fade Effect (70%) */}
          <div className="relative">
            {/* Fade effect overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none" />

            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Science Meets
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Radiance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Discover premium skincare formulated with cutting-edge science
                  and natural ingredients for visibly healthier skin.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 max-w-3xl">
                {/* Metric 1 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">See Results</div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              {/* Additional Data Points */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                  ✓ Dermatologist Tested
                </div>
                <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium">
                  ✓ Cruelty Free
                </div>
                <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                  ✓ Clean Ingredients
                </div>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                  ✓ Clinically Proven
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
