"use client";

import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

export default function Home() {
  // Dummy chart data
  const usersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users",
        data: [200, 400, 650, 900, 1200],
        backgroundColor: "rgba(99, 102, 241, 0.6)", // Indigo
      },
    ],
  };

  const flightsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Flights",
        data: [5, 12, 8, 20],
        borderColor: "rgba(34,197,94,1)", // Green
        backgroundColor: "rgba(34,197,94,0.3)",
      },
    ],
  };

  const quotationsData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        data: [320, 150, 70],
        backgroundColor: ["#4f46e5", "#f59e0b", "#ef4444"], // Indigo, Yellow, Red
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Bar */}
      <header className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            N
          </div>
        </div>
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Calculator Usage</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Flights Created</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">25</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,250</p>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Users Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Users Growth</h2>
          <Bar data={usersData} />
        </div>

        {/* Flights Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Flights Per Week</h2>
          <Line data={flightsData} />
        </div>

        {/* Quotations Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quotations Status</h2>
          <Doughnut data={quotationsData} />
        </div>
      </section>

      {/* Settings & Activity */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Settings */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-800">Settings</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li>✅ Profile updated</li>
            <li>⚙️ Notifications enabled</li>
            <li>🔒 Security check passed</li>
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between text-sm text-gray-600">
              <span>New user registered</span>
              <span>2 min ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Quotation created</span>
              <span>10 min ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-600">
              <span>Flight added</span>
              <span>1 hr ago</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
