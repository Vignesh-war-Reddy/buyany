
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality audio experience with noise cancellation",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Minimalist Watch",
    description: "Elegant timepiece with premium materials",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
  },
  {
    id: "3",
    name: "Premium Backpack",
    description: "Durable and stylish backpack for everyday use",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Bags",
  },
];

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Home",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-shop-100">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white space-y-6 animate-fadeIn">
          <h1 className="text-5xl font-bold">Premium Shopping Experience</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover curated products that blend style with functionality
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-shop-900 hover:bg-shop-100"
          >
            <Link to="/products">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-shop-900">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products" className="text-shop-600 hover:text-shop-900">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-shop-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shop-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/categories/${category.name.toLowerCase()}`}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
