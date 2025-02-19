
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-shop-900 hover:text-shop-700 transition-colors"
            >
              SHOP
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-shop-600 hover:text-shop-900 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="text-shop-600 hover:text-shop-900 transition-colors"
            >
              Categories
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-shop-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
            <Link
              to="/products"
              className="block px-3 py-2 text-shop-600 hover:text-shop-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 text-shop-600 hover:text-shop-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                console.log("Cart clicked");
                setIsMenuOpen(false);
              }}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
