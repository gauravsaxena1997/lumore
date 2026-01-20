"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-purple-600 text-white py-2 px-4 text-center relative">
      <p className="text-sm">
        <span className="font-semibold">Free shipping</span> on orders over ₹6,000
        | <span className="font-semibold">15% off</span> your first order with
        code <span className="font-mono bg-purple-700 px-2 py-0.5 rounded">GLOW15</span>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-purple-700 rounded-full p-1 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
