import AdminLayout from "../../layouts/AdminLayout";
import {
  Eye,
  Download,
  Search,
} from "lucide-react";

function AdminOrders() {
  const orders = Array.from(
    { length: 16 },
    (_, i) => ({
      id: "#12564",
      date: "12/01/2022",
      customer: "Pranay Shukla",
      product: "MRF Cricket Bat",
      qty: "01",
      amount: "$90.00",
      payment: "Cash on delivery",
      status:
        i % 3 === 0
          ? "Pending"
          : "Complete",
    })
  );

  return (
    <AdminLayout title="Orders">
      <div className="bg-white rounded-xl shadow p-5">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold">
            All Orders
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
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

            {/* Sort */}
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>
                Sort by: Newest
              </option>
              <option>
                Pending
              </option>
              <option>
                Complete
              </option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">
                  Order No
                </th>
                <th>Date</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Paid Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Invoice</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3">
                    {item.id}
                  </td>

                  <td>
                    {item.date}
                  </td>

                  <td>
                    {item.customer}
                  </td>

                  <td>
                    {item.product}
                  </td>

                  <td>
                    {item.qty}
                  </td>

                  <td>
                    {item.amount}
                  </td>

                  <td>
                    {item.payment}
                  </td>

                  <td>
                    <span
                      className={
                        item.status ===
                        "Complete"
                          ? "text-green-600 font-medium"
                          : "text-red-500 font-medium"
                      }
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="text-indigo-600 hover:text-indigo-800">
                      <Download
                        size={16}
                      />
                    </button>
                  </td>

                  <td>
                    <button className="text-gray-600 hover:text-black">
                      <Eye
                        size={16}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminOrders;