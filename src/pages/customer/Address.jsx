import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  MapPin,
  Plus,
  X,
} from "lucide-react";

function Address() {
  const [showForm, setShowForm] =
    useState(false);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back */}
          <NavLink
            to="/account"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft size={16} />
            back
          </NavLink>

          {/* Top */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Add Address */}
            <button
              onClick={() =>
                setShowForm(true)
              }
              className="bg-white rounded-xl border p-6 flex items-center justify-center gap-3 hover:shadow-md"
            >
              <Plus size={20} />
              <span className="font-medium">
                Add new address
              </span>
            </button>

            {/* Existing Address */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-5">
                Your Addresses
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div className="text-sm text-gray-700 leading-6">
                  <p className="font-semibold">
                    Pranay Shukla
                  </p>

                  <p>
                    123/B xyz Colony,
                    Kanpur
                  </p>

                  <p>
                    Uttar Pradesh
                    203210
                  </p>

                  <p>
                    India
                  </p>

                  <p className="mt-2">
                    Phone:
                    6307739829
                  </p>

                  <div className="mt-3 flex gap-4 text-sm">
                    <button className="text-indigo-600">
                      Edit
                    </button>

                    <button className="text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
              <div className="bg-white rounded-xl w-full max-w-xl p-6 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">
                    Edit your address
                  </h3>

                  <button
                    onClick={() =>
                      setShowForm(
                        false
                      )
                    }
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Form */}
                <div className="grid gap-4">
                  <input
                    placeholder="Country / Region"
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Full Name"
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Mobile Number"
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Pincode"
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Flat / House no."
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Area / Street / Sector"
                    className="border rounded-lg px-4 py-3"
                  />

                  <input
                    placeholder="Landmark"
                    className="border rounded-lg px-4 py-3"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      placeholder="Town / City"
                      className="border rounded-lg px-4 py-3"
                    />

                    <input
                      placeholder="State"
                      className="border rounded-lg px-4 py-3"
                    />
                  </div>

                  <button
                    onClick={() =>
                      setShowForm(
                        false
                      )
                    }
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mt-2"
                  >
                    Use this Address
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Address;