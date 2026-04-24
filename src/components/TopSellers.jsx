import products from "../pages/data/Products";
import ProductCard from "./ProductCard";

function TopSellers() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Top Sellers
        </h2>

        {/* Mobile Scroll / Desktop Grid */}
        <div className="flex gap-5 overflow-x-auto lg:grid lg:grid-cols-5 lg:gap-6 scrollbar-hide pb-2">

          {products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="min-w-[180px] lg:min-w-0"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TopSellers;