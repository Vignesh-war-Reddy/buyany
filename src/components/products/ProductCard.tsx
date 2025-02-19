
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price * 83); // Approximate USD to INR conversion
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group animate-fadeIn"
    >
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-shop-900 font-medium group-hover:text-shop-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-shop-600">{formatPrice(product.price)}</p>
        <p className="text-shop-500 text-sm">{product.subcategory}</p>
      </div>
    </Link>
  );
}
