
import { useParams } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";

// Mock data for all products
const allProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality audio experience with noise cancellation. Features Bluetooth 5.0, 30-hour battery life, and premium sound quality for an immersive listening experience.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    subcategory: "Wireless Audio",
  },
  {
    id: "2",
    name: "Minimalist Watch",
    description: "Elegant timepiece with premium materials. Made with genuine leather strap, sapphire crystal glass, and Japanese movement for precise timekeeping.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    subcategory: "Analog Watches",
  },
  {
    id: "3",
    name: "Premium Backpack",
    description: "Durable and stylish backpack for everyday use. Water-resistant material, multiple compartments, and padded laptop sleeve make it perfect for daily commute.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Bags",
    subcategory: "Travel Bags",
  },
  // Additional products in Electronics category
  {
    id: "4",
    name: "Noise-Cancelling Earbuds",
    description: "True wireless earbuds with active noise cancellation",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    subcategory: "Wireless Audio",
  },
  {
    id: "5",
    name: "Premium Over-Ear Headphones",
    description: "Studio-quality over-ear headphones for professionals",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    subcategory: "Wireless Audio",
  },
  // Additional products in Watches category
  {
    id: "6",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking features",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    subcategory: "Smart Watches",
  },
  {
    id: "7",
    name: "Classic Chronograph",
    description: "Sophisticated chronograph watch with metal bracelet",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    subcategory: "Analog Watches",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-shop-900">Product not found</h1>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price * 83);
  };

  // Get similar products (same category or subcategory)
  const similarProducts = allProducts
    .filter((p) => p.id !== product.id && 
      (p.category === product.category || p.subcategory === product.subcategory))
    .slice(0, 12);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-shop-900 mb-2">{product.name}</h1>
              <p className="text-xl font-semibold text-shop-600">
                {formatPrice(product.price)}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-shop-900 mb-2">Description</h2>
              <p className="text-shop-600">{product.description}</p>
            </div>

            <div>
              <p className="text-shop-500">Category: {product.category}</p>
              <p className="text-shop-500">Subcategory: {product.subcategory}</p>
            </div>

            <Button size="lg" className="w-full md:w-auto">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-shop-900 mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
