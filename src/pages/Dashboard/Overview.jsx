import { FaBox, FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";

export const Overview = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 rounded-md shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back!    <span className="text-xs text-red-700">(under construction this page)</span> </h1>
          <p className="text-gray-500 mt-2">Here&apos;s a snapshot of your store&apos;s performance.</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <StatCard icon={<FaChartLine className="text-blue-500" />} title="Total Sales" value="$75,320" />
          <StatCard icon={<FaShoppingCart className="text-green-500" />} title="New Orders" value="352" />
          <StatCard icon={<FaBox className="text-yellow-500" />} title="Total Products" value="1,280" />
          <StatCard icon={<FaUsers className="text-purple-500" />} title="New Customers" value="89" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sales Analytics */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sales Analytics</h2>
            <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Sales chart placeholder (e.g., using Recharts or Chart.js)</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Add New Product</button>
              <button className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">View All Orders</button>
              <button className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Manage Inventory</button>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <OrderRow id="#12345" customer="John Doe" date="2023-10-27" amount="$250.00" status="Shipped" statusColor="green" />
                <OrderRow id="#12346" customer="Jane Smith" date="2023-10-26" amount="$150.75" status="Processing" statusColor="yellow" />
                <OrderRow id="#12347" customer="Mike Johnson" date="2023-10-25" amount="$500.50" status="Delivered" statusColor="blue" />
                <OrderRow id="#12348" customer="Emily Brown" date="2023-10-24" amount="$75.20" status="Cancelled" statusColor="red" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const OrderRow = ({ id, customer, date, amount, status, statusColor }) => (
  <tr className="border-b border-gray-100 hover:bg-gray-50">
    <td className="p-4 font-medium text-gray-800">{id}</td>
    <td className="p-4 text-gray-600">{customer}</td>
    <td className="p-4 text-gray-600">{date}</td>
    <td className="p-4 text-gray-800 font-semibold">{amount}</td>
    <td className="p-4">
      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${statusColor}-100 text-${statusColor}-800`}>
        {status}
      </span>
    </td>
  </tr>
);