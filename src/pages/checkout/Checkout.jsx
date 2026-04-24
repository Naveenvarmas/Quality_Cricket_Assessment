import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import cardImg from "../../assets/images/cards.png";

function Checkout() {
  const { cart } = useCart();

  const firstItem = cart[0];

  const [qty, setQty] = useState(1);
  const [showAddress, setShowAddress] = useState(false);
  const [payment, setPayment] = useState("cod");

  const price = firstItem ? Number(firstItem.price) * qty : 0;
  const shipping = 0;
  const total = price + shipping;

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Checkout
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-5">
              {/* STEP 1 ADDRESS */}
              <div className="bg-white rounded shadow-sm p-5">
                <div className="flex justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="text-blue-600 font-bold">
                      1
                    </span>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Delivery Address
                      </h3>

                      <p className="text-sm text-gray-600 mt-2 leading-6">
                        Pranay Shukla, 123/B xyz Colony,
                        Kanpur, Uttar Pradesh 203210
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setShowAddress(true)
                    }
                    className="text-blue-600 text-sm font-medium"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* STEP 2 ORDER SUMMARY */}
              <div className="bg-white rounded shadow-sm p-5">
                <div className="flex gap-4">
                  <span className="text-blue-600 font-bold">
                    2
                  </span>

                  <div className="w-full">
                    <h3 className="font-semibold text-gray-800 mb-5">
                      Order Summary
                    </h3>

                    {firstItem ? (
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={firstItem.image}
                          alt={firstItem.name}
                          className="w-28 h-28 object-contain border rounded p-2"
                        />

                        <div className="flex-1">
                          <h4 className="font-medium">
                            {firstItem.name}
                          </h4>

                          <p className="text-sm text-gray-500 mt-2">
                            Seller: Quality Cricket
                          </p>

                          <div className="mt-2 flex items-center gap-3">
                            <span className="font-semibold text-blue-600">
                              ${firstItem.price}
                            </span>

                            <span className="line-through text-sm text-gray-400">
                              $
                              {firstItem.oldPrice}
                            </span>

                            <span className="text-sm text-green-600">
                              65% off
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mt-4">
                            <button
                              onClick={() =>
                                setQty(
                                  Math.max(
                                    1,
                                    qty - 1
                                  )
                                )
                              }
                              className="w-7 h-7 border rounded"
                            >
                              -
                            </button>

                            <span className="w-8 text-center">
                              {qty}
                            </span>

                            <button
                              onClick={() =>
                                setQty(qty + 1)
                              }
                              className="w-7 h-7 border rounded"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-sm text-gray-500">
                          Delivery in 2 days
                        </div>
                      </div>
                    ) : (
                      <p>No product in cart.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* STEP 3 EMAIL */}
              <div className="bg-white rounded shadow-sm p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="text-blue-600 font-bold">
                      3
                    </span>

                    <p className="text-sm text-gray-700">
                      Order confirmation email will
                      be sent to{" "}
                      <span className="font-medium">
                        pranayshukla@gmail.com
                      </span>
                    </p>
                  </div>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded">
                    Continue
                  </button>
                </div>
              </div>

              {/* STEP 4 GIFT CARD */}
              <div className="bg-white rounded shadow-sm p-5">
                <div className="flex gap-4">
                  <span className="text-blue-600 font-bold">
                    4
                  </span>

                  <div className="w-full">
                    <h3 className="font-semibold mb-4">
                      Add Gift Card
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        placeholder="enter code"
                        className="border px-4 py-2 rounded w-full"
                      />

                      <button className="bg-indigo-600 text-white px-6 py-2 rounded">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 5 PAYMENT */}
<div className="bg-white rounded shadow-sm p-5">
  <div className="flex gap-4">
    <span className="text-blue-600 font-bold text-lg">
      5
    </span>

    <div className="w-full">
      <h3 className="font-semibold text-gray-400 mb-6 text-xl">
        Payment Options
      </h3>

      <div className="space-y-6 text-sm">

        {/* CARD OPTION */}
        <label className="block cursor-pointer">
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="payment"
              checked={payment === "card"}
              onChange={() =>
                setPayment("card")
              }
              className="mt-1"
            />

            <div className="w-full">
              <p className="text-gray-700 text-base">
                Pay with Debit/Credit/ATM cards
              </p>

              <img
                src={cardImg}
                alt="cards"
                className="h-16 sm:h-20 mt-4 border rounded px-3 py-2 bg-white object-contain"
              />
            </div>
          </div>
        </label>

        {/* NET BANKING */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            checked={payment === "net"}
            onChange={() =>
              setPayment("net")
            }
          />

          <span className="text-gray-700 text-base">
            Net Banking
          </span>
        </label>

        {/* COD */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            checked={payment === "cod"}
            onChange={() =>
              setPayment("cod")
            }
          />

          <span className="text-gray-700 text-base">
            Cash On Delivery / Pay on Delivery
          </span>
        </label>

      </div>

      <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-3 rounded font-medium">
        Continue
      </button>
    </div>
  </div>
</div>
</div>

            {/* RIGHT SIDE */}
            <div>
              <div className="bg-white rounded shadow-sm p-5 sticky top-5">
                <h3 className="font-semibold text-gray-700 border-b pb-3">
                  Price Details
                </h3>

                <div className="space-y-4 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span>
                      Price ({qty} item)
                    </span>
                    <span>${price}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>
                      Delivery Charges
                    </span>
                    <span className="text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                    <span>Total Payable</span>
                    <span>${total}</span>
                  </div>

                  <p className="text-green-600 text-sm">
                    Your Total Saving on this
                    order $100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDRESS MODAL */}
        {showAddress && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-5">
                Edit your address
              </h3>

              <div className="space-y-3">
                <input
                  placeholder="Country/Region"
                  className="border w-full px-4 py-2 rounded"
                />
                <input
                  placeholder="Full Name"
                  className="border w-full px-4 py-2 rounded"
                />
                <input
                  placeholder="Mobile Number"
                  className="border w-full px-4 py-2 rounded"
                />
                <input
                  placeholder="Pincode"
                  className="border w-full px-4 py-2 rounded"
                />
                <textarea
                  rows="3"
                  placeholder="Address"
                  className="border w-full px-4 py-2 rounded"
                ></textarea>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() =>
                    setShowAddress(false)
                  }
                  className="flex-1 border py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={() =>
                    setShowAddress(false)
                  }
                  className="flex-1 bg-indigo-600 text-white py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      

      <Footer />
    </>
  );
}

export default Checkout;