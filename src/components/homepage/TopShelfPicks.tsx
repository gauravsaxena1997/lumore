import { products } from "@/lib/constants";
import ProductCard from "@/components/shared/ProductCard";

export default function TopShelfPicks() {
  // Show first 6 products
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="top-shelf-picks">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Top Shelf Picks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our most-loved products, curated for your skin's unique needs.
            Backed by science, loved by thousands.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3} // First 3 products load immediately
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
