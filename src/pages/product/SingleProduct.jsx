import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import products from "../data/Products";
import { useCart } from "../../context/CartContext";

function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Product Not Found
          </h2>
        </section>
        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Area */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Images */}
          <div className="flex gap-4">

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="thumb"
                    onClick={() => setMainImage(img)}
                    className="w-20 h-20 border rounded-lg p-2 cursor-pointer object-contain"
                  />
                )
              )}
            </div>

            {/* Main Image */}
            <div className="flex-1 border rounded-xl p-6 flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="max-h-[420px] object-contain"
              />
            </div>

          </div>

          {/* Details */}
          <div>

            <h1 className="text-3xl font-semibold leading-snug">
              {product.name}
            </h1>

            <p className="text-blue-600 mt-5 font-semibold">
              {Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                  100
              )}
              % off $ {product.price}
            </p>

            <div className="flex gap-3 mt-2 text-gray-500">
              <span className="line-through">
                ${product.oldPrice}
              </span>
              <span>M.R.P :</span>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Inclusive of all taxes
            </p>

            <hr className="my-6" />

            <div className="space-y-3 text-gray-700 leading-7 text-sm">
              <p>Premium quality cricket equipment.</p>
              <p>High durability and match-ready finish.</p>
              <p>Comfortable grip and professional design.</p>
              <p>Trusted by players across levels.</p>
              <p>Best value performance product.</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                Add To Cart
              </button>

              <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg">
                Buy Now
              </button>

            </div>

          </div>
        </div>

            <section className="mt-20">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
    <h2 className="text-2xl font-bold">
      Ratings & Reviews
    </h2>

    <button className="border px-6 py-2 rounded-lg hover:bg-gray-50">
      Rate Product
    </button>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Left */}
    <div>
      <h3 className="text-6xl font-light">
        {product.rating}
      </h3>

      <p className="text-gray-500 mt-2">
        1,245 Ratings & 850 Reviews
      </p>
    </div>

    {/* Bars */}
    <div className="space-y-3">
      {[90, 70, 45, 25, 10].map((width, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-sm w-8">
            {5 - i}★
          </span>

          <div className="w-full h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-green-500 rounded"
              style={{ width: `${width}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

  </div>

  {/* Review Cards */}
  <div className="space-y-8 mt-12">

    {[1, 2, 3].map((item) => (
      <div key={item} className="border-b pb-8">

        <span className="inline-block bg-green-600 text-white px-2 py-1 rounded text-xs">
          5 ★
        </span>

        <h4 className="font-semibold mt-3">
          Pranay Shukla
        </h4>

        <p className="text-gray-600 mt-2 leading-7">
          Excellent product quality. Great balance,
          premium finishing and worth the price.
        </p>

        <p className="text-sm text-gray-400 mt-3">
          Certified Buyer
        </p>

      </div>
    ))}

  </div>

</section>

        {/* Related */}
        <section className="mt-20">

          <h2 className="text-2xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {relatedProducts.map((item) => (
              <a
                key={item.id}
                href={`/product/${item.id}`}
                className="border rounded-xl p-4 text-center hover:shadow-md transition"
              >
                <div className="h-40 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-sm font-medium mt-3 min-h-[40px]">
                  {item.name}
                </h3>

                <p className="text-blue-600 font-bold mt-2">
                  ₹{item.price}
                </p>
              </a>
            ))}

          </div>

        </section>

      </section>

      <Footer />
    </>
  );
}

export default SingleProduct;