import { Product, Testimonial, Bundle, BlogPost } from "@/types";

// Product Data
export const products: Product[] = [
  {
    id: 1,
    name: "solar veil",
    slug: "solar-veil",
    description: "SPF 50 Sunscreen",
    price: 3200, // ₹3,200 - Premium sunscreen (50ml) similar to La Roche-Posay, Clinique
    rating: 4.9,
    reviewCount: 1247,
    image: "/assets/products/01-solar-veil.webp",
    imageTransparent: "/assets/products/01-solar-veil-transparent.webp",
    gradient: "from-orange-200 to-orange-50",
    category: "Protect",
    ingredients: ["Vitamin C", "Niacinamide", "Zinc Oxide"],
    benefits: ["SPF 50 Protection", "Brightening", "Lightweight"],
    size: "50ml",
    color: "#FFE5CC",
  },
  {
    id: 2,
    name: "dew drops",
    slug: "dew-drops",
    description: "Hydrating Serum",
    price: 3500, // ₹3,500 - Premium serum (30ml) similar to Estée Lauder, Kiehl's
    rating: 4.8,
    reviewCount: 1893,
    image: "/assets/products/02-dew-drops.webp",
    imageTransparent: "/assets/products/02-dew-drops-transparent.webp",
    gradient: "from-blue-200 to-blue-50",
    category: "Hydrate",
    ingredients: ["Hyaluronic Acid", "Peptides", "Vitamin B5"],
    benefits: ["Deep Hydration", "Plumping", "Glow Boost"],
    size: "30ml",
    color: "#B8D4E8",
  },
  {
    id: 3,
    name: "lumiskin",
    slug: "lumiskin",
    description: "Brightening Cream",
    price: 3800, // ₹3,800 - Premium brightening cream (50ml) similar to Clinique, Origins
    rating: 4.9,
    reviewCount: 1567,
    image: "/assets/products/03-lumiskin.webp",
    imageTransparent: "/assets/products/03-lumiskin-transparent.webp",
    gradient: "from-green-200 to-green-50",
    category: "Treat",
    ingredients: ["Vitamin C", "Kojic Acid", "Licorice Root"],
    benefits: ["Even Skin Tone", "Reduces Dark Spots", "Radiance"],
    size: "50ml",
    color: "#C5D8BE",
  },
  {
    id: 4,
    name: "reset mist",
    slug: "reset-mist",
    description: "Refreshing Toner",
    price: 2400, // ₹2,400 - Premium toner mist (100ml) similar to Caudalie, Fresh
    rating: 4.7,
    reviewCount: 2103,
    image: "/assets/products/04-reset-mist.webp",
    imageTransparent: "/assets/products/04-reset-mist-transparent.webp",
    gradient: "from-purple-200 to-purple-50",
    category: "Cleanse",
    ingredients: ["Rose Water", "Niacinamide", "Aloe Vera"],
    benefits: ["Refreshing", "Balances pH", "Hydrating"],
    size: "100ml",
    color: "#D8CEE8",
  },
  {
    id: 5,
    name: "melt away",
    slug: "melt-away",
    description: "Cleansing Balm",
    price: 2900, // ₹2,900 - Premium cleansing balm (100g) similar to Clinique Take The Day Off, The Body Shop
    rating: 4.8,
    reviewCount: 1456,
    image: "/assets/products/05-melt-away.webp",
    imageTransparent: "/assets/products/05-melt-away-transparent.webp",
    gradient: "from-pink-200 to-pink-50",
    category: "Cleanse",
    ingredients: ["Jojoba Oil", "Vitamin E", "Chamomile"],
    benefits: ["Deep Cleanse", "Removes Makeup", "Gentle"],
    size: "100g",
    color: "#F5D4C8",
  },
  {
    id: 6,
    name: "kiss proof",
    slug: "kiss-proof",
    description: "Lip Treatment",
    price: 1800, // ₹1,800 - Premium lip treatment (10ml) similar to Fresh, Kiehl's
    rating: 4.6,
    reviewCount: 982,
    image: "/assets/products/06-kiss-proof.webp",
    imageTransparent: "/assets/products/06-kiss-proof.webp",
    gradient: "from-amber-200 to-amber-50",
    category: "Comfort",
    ingredients: ["Shea Butter", "Vitamin E", "Hyaluronic Acid"],
    benefits: ["Hydrating", "Plumping", "Long-lasting"],
    size: "10ml",
    color: "#F0DCC8",
  },
  {
    id: 7,
    name: "under cover",
    slug: "under-cover",
    description: "Eye Cream",
    price: 4000, // ₹4,000 - Premium eye cream (15ml) similar to Kiehl's, Estée Lauder
    rating: 4.9,
    reviewCount: 1234,
    image: "/assets/products/07-under-cover.webp",
    imageTransparent: "/assets/products/07-under-cover.webp",
    gradient: "from-teal-200 to-teal-50",
    category: "Treat",
    ingredients: ["Caffeine", "Peptides", "Vitamin K"],
    benefits: ["Reduces Puffiness", "Dark Circles", "Firming"],
    size: "15ml",
    color: "#D4E8DD",
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maya Chen",
    product: "Dew Drops Serum",
    review: "This serum transformed my dry skin into glowing, plump perfection!",
    rating: 5,
    image: "/assets/testimonials/testimonial-1.webp",
    skinType: "Dry",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    product: "Solar Veil SPF 50",
    review: "Finally, a sunscreen that doesn't leave a white cast! Love it.",
    rating: 5,
    image: "/assets/testimonials/testimonial-2.webp",
    skinType: "Combination",
  },
  {
    id: 3,
    name: "Emma Thompson",
    product: "Lumiskin Brightening Cream",
    review: "Dark spots fading after just 3 weeks. This is magic in a jar!",
    rating: 5,
    image: "/assets/testimonials/testimonial-3.webp",
    skinType: "Oily",
  },
  {
    id: 4,
    name: "Olivia Martinez",
    product: "Reset Mist",
    review: "So refreshing! I keep this on my desk for a midday glow boost.",
    rating: 5,
    image: "/assets/testimonials/testimonial-4.webp",
    skinType: "Normal",
  },
  {
    id: 5,
    name: "Isabella Kim",
    product: "Melt Away Cleansing Balm",
    review: "Removes makeup effortlessly without stripping my skin. Obsessed!",
    rating: 5,
    image: "/assets/testimonials/testimonial-5.webp",
    skinType: "Sensitive",
  },
  {
    id: 6,
    name: "Ava Johnson",
    product: "Under Cover Eye Cream",
    review: "My dark circles are noticeably lighter. Worth every penny!",
    rating: 5,
    image: "/assets/testimonials/testimonial-6.webp",
    skinType: "Dry",
  },
  {
    id: 7,
    name: "Mia Williams",
    product: "Kiss Proof Lip Treatment",
    review: "My lips have never felt softer. This is my new holy grail!",
    rating: 5,
    image: "/assets/testimonials/testimonial-7.webp",
    skinType: "Normal",
  },
];

// Bundles/Combos
export const bundles: Bundle[] = [
  {
    id: 1,
    name: "Morning Ritual",
    description: "Complete AM skincare routine",
    products: [2, 3, 1], // Dew Drops, Lumiskin, Solar Veil (₹3,500 + ₹3,800 + ₹3,200 = ₹10,500)
    price: 8999, // ₹8,999 (Save ₹1,501)
    savings: 1501,
    image: "/assets/combos/morning-ritual.webp",
  },
  {
    id: 2,
    name: "Evening Ritual",
    description: "Complete PM skincare routine",
    products: [5, 2, 7], // Melt Away, Dew Drops, Under Cover (₹2,900 + ₹3,500 + ₹4,000 = ₹10,400)
    price: 8799, // ₹8,799 (Save ₹1,601)
    savings: 1601,
    image: "/assets/combos/evening-ritual.webp",
  },
  {
    id: 3,
    name: "Hydration Power Duo",
    description: "Ultimate hydration boost",
    products: [2, 4], // Dew Drops, Reset Mist (₹3,500 + ₹2,400 = ₹5,900)
    price: 4999, // ₹4,999 (Save ₹901)
    savings: 901,
    image: "/assets/combos/hydration-power-duo.webp",
  },
  {
    id: 4,
    name: "Daily Defense Duo",
    description: "Protect and brighten",
    products: [1, 3], // Solar Veil, Lumiskin (₹3,200 + ₹3,800 = ₹7,000)
    price: 5999, // ₹5,999 (Save ₹1,001)
    savings: 1001,
    image: "/assets/combos/daily-defense-duo.webp",
  },
  {
    id: 5,
    name: "Fresh Start Duo",
    description: "Clean slate essentials",
    products: [5, 4], // Melt Away, Reset Mist (₹2,900 + ₹2,400 = ₹5,300)
    price: 4499, // ₹4,499 (Save ₹801)
    savings: 801,
    image: "/assets/combos/fresh-start-duo.webp",
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Science Behind Hyaluronic Acid",
    excerpt: "Discover why this molecule can hold 1000x its weight in water...",
    image: "/assets/blog/blog-1.webp",
    date: "2026-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Morning vs. Evening Skincare: What's the Difference?",
    excerpt: "Learn how to optimize your routine for maximum results...",
    image: "/assets/blog/blog-2.webp",
    date: "2026-01-10",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "SPF Myths Debunked: What You Really Need to Know",
    excerpt: "Separating fact from fiction when it comes to sun protection...",
    image: "/assets/blog/blog-3.webp",
    date: "2026-01-05",
    readTime: "6 min read",
  },
];

// Brand Colors
export const brandColors = {
  primary: "#E5D4F7", // Iridescent lilac
  secondary: "#B8D4E8", // Ocean blue
  accent: "#D4E8DD", // Soft mint
  neutral: "#FAFAFA", // Pearl white
  // Product colors
  solarVeil: "#FFE5CC",
  dewDrops: "#B8D4E8",
  lumiskin: "#C5D8BE",
  resetMist: "#D8CEE8",
  meltAway: "#F5D4C8",
  kissProof: "#F0DCC8",
  underCover: "#D4E8DD",
};
