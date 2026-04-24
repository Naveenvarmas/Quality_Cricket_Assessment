import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import productsData from "../data/products";
import {
  Pencil,
  Trash2,
  Search,
  X,
} from "lucide-react";

function AdminProducts() {
  const [discount, setDiscount] =
    useState(0);

  const [showModal, setShowModal] =
    useState(false);

  const [products] = useState(
    productsData.slice(0, 12)
  );

  const finalPrice = (price) =>
    Math.round(
      price - (price * discount) / 100
    );

  return (
    <AdminLayout title="All Products">
      <div className="bg-white rounded-xl shadow p-5">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold">
            Products
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                setShowModal(true)
              }
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm"
            >
              Add Discount
            </button>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg pl-10 pr-4 py-2 w-full sm:w-56"
              />

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">
                  ID
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Final Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.map(
                (item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3">
                      #{item.id}
                    </td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-14 object-contain"
                      />
                    </td>

                    <td>
                      {item.name}
                    </td>

                    <td>
                      ${item.price}
                    </td>

                    <td className="text-green-600 font-medium">
                      {discount}%
                    </td>

                    <td className="font-semibold text-indigo-600">
                      ₹
                      {finalPrice(
                        item.price
                      )}
                    </td>

                    <td>
                      <button className="text-indigo-600">
                        <Pencil
                          size={16}
                        />
                      </button>
                    </td>

                    <td>
                      <button className="text-red-500">
                        <Trash2
                          size={16}
                        />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-semibold">
                Add Discount
              </h3>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                <X size={20} />
              </button>
            </div>

            <input
              type="number"
              placeholder="Enter %"
              value={discount}
              onChange={(e) =>
                setDiscount(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              onClick={() =>
                setShowModal(false)
              }
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mt-5"
            >
              Apply Discount
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminProducts;