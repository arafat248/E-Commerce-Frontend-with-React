import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { products, categories, testimonials, brands } from "../data/products";
import { FiArrowRight, FiStar } from "react-icons/fi";

const Home = () => {
  const featured = products.slice(0, 4);
  const flashSale = products.filter((p) => p.discount > 30).slice(0, 4);

  return (
    <div className="animate-fade-in">
      <section className="py-20 text-white bg-gradient-to-r from-primary to-accent">
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl md:flex-row">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Summer Sale 2025
            </h1>
            <p className="mb-6 text-lg">
              Up to 70% off on selected items. Shop now!
            </p>
            <Button variant="secondary" size="lg" asLink to="/products">
              Shop Now <FiArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/id/3/600/400"
              alt="hero"
              className="shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <div
                key={cat}
                className="p-6 text-center transition-colors bg-gray-100 cursor-pointer hover:bg-secondary hover:text-white rounded-xl"
              >
                <div className="mb-2 text-4xl">🛒</div>
                <span className="font-semibold">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-light">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-white bg-gradient-to-r from-red-500 to-pink-500">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="flex items-center gap-2 mb-8 text-3xl font-bold">
            ⚡ Flash Sale{" "}
            <span className="px-3 py-1 text-sm text-black bg-yellow-300 rounded-full animate-pulse-slow">
              Ends soon
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {flashSale.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-white bg-gray-900">
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-bold">
              Premium Quality, Affordable Prices
            </h2>
            <p className="mb-6">
              Join millions of happy customers. Free shipping on orders over
              $50.
            </p>
            <Button variant="secondary" asLink to="/products">
              Explore
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/id/20/600/400"
              alt="promo"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 shadow-sm bg-gray-50 rounded-xl">
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} />
                  ))}
                </div>
                <p className="mb-4 italic">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Brand Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-2xl font-bold text-gray-400 transition-colors hover:text-accent"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center text-white bg-primary">
        <div className="max-w-xl px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-6">
            Get exclusive offers and new arrivals directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-gray-800 rounded-l-full focus:outline-none"
            />
            <Button variant="secondary" className="rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
