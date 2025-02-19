
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Category } from "@/types/product";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality audio experience with noise cancellation",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    subcategory: "Wireless Audio",
  },
  {
    id: "2",
    name: "Minimalist Watch",
    description: "Elegant timepiece with premium materials",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    subcategory: "Analog Watches",
  },
  {
    id: "3",
    name: "Premium Backpack",
    description: "Durable and stylish backpack for everyday use",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Bags",
    subcategory: "Travel Bags",
  },
];

const categories: Category[] = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    subcategories: [
      { name: "Smartphones", description: "Latest mobile devices" },
      { name: "Laptops", description: "Powerful computing devices" },
      { name: "Audio", description: "High-quality sound equipment" },
      { name: "Cameras", description: "Professional photography gear" },
      { name: "Gaming", description: "Gaming consoles and accessories" },
    ],
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    subcategories: [
      { name: "Men's Clothing", description: "Stylish menswear" },
      { name: "Women's Clothing", description: "Trendy womenswear" },
      { name: "Accessories", description: "Fashion accessories" },
      { name: "Footwear", description: "Shoes and boots" },
      { name: "Jewelry", description: "Fine jewelry collection" },
    ],
  },
  {
    name: "Home",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    subcategories: [
      { name: "Furniture", description: "Modern home furniture" },
      { name: "Decor", description: "Home decoration items" },
      { name: "Kitchen", description: "Kitchen appliances and tools" },
      { name: "Bedding", description: "Comfortable bedding items" },
      { name: "Lighting", description: "Home lighting solutions" },
    ],
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
              <div key={category.name} className="space-y-4">
                <Link
                  to={`/categories/${category.name.toLowerCase()}`}
                  className="relative aspect-square rounded-lg overflow-hidden group block"
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
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-shop-900 mb-2">Subcategories</h4>
                  <ul className="space-y-2">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.name}>
                        <Link
                          to={`/categories/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`}
                          className="text-shop-600 hover:text-shop-900 transition-colors flex justify-between items-center"
                        >
                          <span>{subcategory.name}</span>
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
