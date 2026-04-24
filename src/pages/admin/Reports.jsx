import AdminLayout from "../../layouts/AdminLayout";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Reports() {
  const salesData = [
    { month: "Jan", sales: 4200 },
    { month: "Feb", sales: 3800 },
    { month: "Mar", sales: 5100 },
    { month: "Apr", sales: 4600 },
    { month: "May", sales: 6200 },
    { month: "Jun", sales: 5400 },
  ];

  const pieData = [
    { name: "Bats", value: 45 },
    { name: "Gloves", value: 20 },
    { name: "Helmet", value: 18 },
    { name: "Kits", value: 17 },
  ];

  const colors = [
    "#4f46e5",
    "#22c55e",
    "#f97316",
    "#06b6d4",
  ];

  const cards = [
    {
      title: "Revenue",
      value: "$52,400",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "1,248",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      value: "860",
      icon: Users,
    },
    {
      title: "Products",
      value: "145",
      icon: Package,
    },
  ];

  return (
    <AdminLayout title="Reports">
      {/* Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {cards.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.value}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Icon size={22} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-5">
            Monthly Sales
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#4f46e5"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-5">
            Category Share
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label
                >
                  {pieData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={
                          colors[index]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-6 mt-8 overflow-x-auto">
        <h3 className="font-semibold mb-5">
          Recent Performance
        </h3>

        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="py-3">
                Product
              </th>
              <th>Sales</th>
              <th>Revenue</th>
              <th>Growth</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["MRF Bat", 140, "$12,000", "+14%"],
              ["SS Gloves", 96, "$4,200", "+9%"],
              ["Helmet", 84, "$5,800", "+11%"],
              ["Kit Bag", 60, "$3,100", "+6%"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3">
                  {row[0]}
                </td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td className="text-green-600 font-medium">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Reports;