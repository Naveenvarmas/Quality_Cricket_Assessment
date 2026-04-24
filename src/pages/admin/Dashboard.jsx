import AdminLayout from "../../layouts/AdminLayout";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const chartData = [
  { day: "01 Jan", blue: 1000, orange: 2200, green: 1500 },
  { day: "02 Jan", blue: 1400, orange: 1800, green: 2100 },
  { day: "03 Jan", blue: 1000, orange: 1600, green: 1700 },
  { day: "04 Jan", blue: 2000, orange: 3200, green: 2600 },
  { day: "05 Jan", blue: 3600, orange: 4400, green: 3300 },
  { day: "06 Jan", blue: 5400, orange: 4800, green: 3100 },
  { day: "07 Jan", blue: 4800, orange: 4200, green: 3700 },
  { day: "08 Jan", blue: 5400, orange: 3900, green: 4900 },
  { day: "09 Jan", blue: 5100, orange: 4200, green: 4600 },
  { day: "10 Jan", blue: 4300, orange: 5100, green: 4900 },
  { day: "11 Jan", blue: 3300, orange: 5400, green: 4200 },
];


  const stats = [
    {
      title: "Total Earning",
      value: "$540,549",
      color: "bg-pink-500",
    },
    {
      title: "Total Sales",
      value: "1,205,238",
      color: "bg-blue-500",
    },
    {
      title: "Total Profit",
      value: "205,256,935",
      color: "bg-sky-400",
    },
    {
      title: "Total Orders",
      value: "48,430,039",
      color: "bg-cyan-500",
    },
    {
      title: "Total Purchase",
      value: "48,430,039",
      color: "bg-orange-400",
    },
  ];

  const orders = Array.from({ length: 6 }).map(
    (_, i) => ({
      id: "#12564",
      date: "12/01/2022",
      customer: "Pranay Shukla",
      product: "MRF Cricket Bat",
      qty: "01",
      amount: "$90.00",
      payment: "Cash on delivery",
      status:
        i % 2 === 0
          ? "Complete"
          : "Pending",
    })
  );

  return (
    <AdminLayout title="Dashboard">
      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white rounded-xl p-5 shadow`}
          >
            <p className="text-sm opacity-90">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold mt-2">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Chart + Summary */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-5">
            Sales Reports
          </h3>

          <div className="h-72">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={chartData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="blue"
        stroke="#3b82f6"
        strokeWidth={3}
      />

      <Line
        type="monotone"
        dataKey="orange"
        stroke="#f97316"
        strokeWidth={3}
      />

      <Line
        type="monotone"
        dataKey="green"
        stroke="#22c55e"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
        </div>

        {/* Side Numbers */}
        <div className="bg-white rounded-xl p-6 shadow space-y-8">
          <div>
            <h3 className="text-4xl font-bold">
              $1,205,238
            </h3>

            <p className="text-gray-500 mt-2">
              Total Sale{" "}
              <span className="text-green-600 font-medium">
                56% ↗
              </span>
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-4xl font-bold">
              $3,205
            </h3>

            <p className="text-gray-500 mt-2">
              Today Total Sale{" "}
              <span className="text-green-600 font-medium">
                1.2% ↗
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl p-6 shadow overflow-x-auto">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold">
            All Orders
          </h3>

          <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
            See More
          </button>
        </div>

        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">
                Order No
              </th>
              <th>Date</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Paid</th>
              <th>Payment</th>
              <th>Status</th>
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
                <td>{item.date}</td>
                <td>
                  {item.customer}
                </td>
                <td>{item.product}</td>
                <td>{item.qty}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;