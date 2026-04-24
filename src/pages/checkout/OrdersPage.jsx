import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import products from "../data/Products";

function Orders() {
  const orderItems = [
    {
      id: "1256-3526-9865",
      name: "MRF Legend VK 18 SR Cricket Adult Kit Bag",
      price: 90,
      oldPrice: 180,
      image: products[7]?.image,
      shipTo: "Pranay Shukla",
    },
    {
      id: "1256-3526-9866",
      name: "MRF Legend VK 18 SR Cricket Adult Kit Bag",
      price: 90,
      oldPrice: 180,
      image: products[7]?.image,
      shipTo: "Pranay Shukla",
    },
    {
      id: "1256-3526-9867",
      name: "MRF Legend VK 18 SR Cricket Adult Kit Bag",
      price: 90,
      oldPrice: 180,
      image: products[7]?.image,
      shipTo: "Pranay Shukla",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-center md:text-left">
              Your Cart
            </h2>

            <select className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm outline-none w-fit">
              <option>Past 3 months</option>
              <option>Past 6 months</option>
              <option>All Orders</option>
            </select>
          </div>

          {/* Orders */}
          <div className="space-y-5">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded"
              >
                {/* Top Row */}
                <div className="bg-gray-100 border-b px-5 py-3 text-xs text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <span>
                    Order #{item.id}
                  </span>

                  <span>
                    Ship to : {item.shipTo}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col md:flex-row md:items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="text-blue-700 text-sm font-medium">
                      {item.name}
                    </h3>

                    <p className="text-green-600 text-sm mt-1">
                      65% off
                    </p>

                    <div className="flex items-center gap-3 mt-1 text-sm">
                      <span className="font-semibold">
                        ${item.price}.00
                      </span>

                      <span className="line-through text-gray-400">
                        MRP: ${item.oldPrice}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Inclusive of all taxes
                    </p>
                  </div>

                  <Link
                    to={`/product/1`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded text-sm text-center"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended */}
          <div className="mt-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h3 className="text-2xl font-semibold">
                Recommended based on your purchase
              </h3>

              <Link
                to="/products"
                className="bg-indigo-600 text-white px-5 py-2 rounded text-sm w-fit"
              >
                Continue shopping
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.slice(0, 5).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white p-4 rounded border hover:shadow-md transition text-center"
                >
                  <div className="h-36 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <h4 className="text-xs mt-3 leading-5 min-h-[42px]">
                    {product.name}
                  </h4>

                  <p className="text-green-600 text-xs mt-1">
                    65% off | Deal of the Day
                  </p>

                  <div className="mt-2 text-sm">
                    <span className="font-semibold text-blue-600">
                      ${product.price}
                    </span>

                    <span className="text-gray-400 line-through ml-2 text-xs">
                      ${product.oldPrice}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Orders;