
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-shop-900">Shop</h3>
            <p className="text-shop-600 max-w-xs">
              Premium shopping experience with curated products for the
              discerning customer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-shop-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-shop-600 hover:text-shop-900 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-shop-600 hover:text-shop-900 transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-shop-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-shop-600 hover:text-shop-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-shop-600 hover:text-shop-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-shop-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-shop-600 hover:text-shop-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-shop-600 hover:text-shop-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-shop-600">
            © {new Date().getFullYear()} Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
