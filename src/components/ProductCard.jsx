import { Link } from "react-router-dom";
import { useCart } from "../Context/useCart";
import { useWishlist } from "../Context/WishlistContext";
import { useToast } from "../Context/useToast";
import { FiHeart, FiShoppingCart, FiEye, FiStar } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const isFav = wishlist.some((item) => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    showToast("Added to cart!", "success");
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    showToast(isFav ? "Removed from wishlist" : "Added to wishlist", "info");
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-xl group">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-56 transition-transform group-hover:scale-105"
          />
        </Link>
        {product.discount && (
          <span className="absolute px-2 py-1 text-xs font-bold text-white rounded top-2 left-2 bg-secondary">
            -{product.discount}%
          </span>
        )}
        <button
          onClick={handleWishlist}
          className="absolute p-2 transition bg-white rounded-full shadow top-2 right-2 hover:bg-gray-100"
        >
          <FiHeart
            className={isFav ? "text-red-500 fill-red-500" : "text-gray-600"}
          />
        </button>
        <button className="absolute p-2 transition bg-white rounded-full shadow opacity-0 bottom-2 right-2 hover:bg-gray-100 group-hover:opacity-100">
          <FiEye className="text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mb-2 text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <FiStar
              key={i}
              className={
                i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-none"
              }
            />
          ))}
          <span className="ml-1 text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-accent">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1 px-3 py-2 text-white transition rounded-lg bg-secondary hover:bg-opacity-90"
          >
            <FiShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
