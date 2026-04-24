import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-8">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border rounded-xl p-4"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-600 mt-1">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="text-red-600 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>

            {/* Bottom Summary */}
            <div className="mt-10 border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <h3 className="text-xl font-semibold">
                Total: ${subtotal}
              </h3>

              <NavLink
                to="/checkout"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center"
              >
                Proceed to Checkout
              </NavLink>
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;