import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Shopify
          </Link>
          <div className="flex-1 hidden max-w-md mx-4 md:flex">
            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <FiSearch className="absolute text-gray-400 left-3 top-3" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full px-1.5 py-0.5">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/wishlist" className="relative">
              <FiHeart className="text-2xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full px-1.5 py-0.5">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/profile">
              <FiUser className="text-2xl" />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="pb-4 space-y-2 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border rounded-full"
              />
              <FiSearch className="absolute text-gray-400 left-3 top-3" />
            </div>
            <Link to="/products" className="block px-2 py-1 hover:bg-gray-100">
              Products
            </Link>
            <Link to="/about" className="block px-2 py-1 hover:bg-gray-100">
              About
            </Link>
            <Link to="/contact" className="block px-2 py-1 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
