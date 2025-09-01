import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { Navigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const SellerStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); 
  const [role, isRoleLoading] = useRole();

  const [chartData, setChartData] = useState([]);
  const [totals, setTotals] = useState({ totalOrder: 0, totalRevenue: 0 });

  useEffect(() => {
    if (!isRoleLoading && role !== "seller") return;
    if (!user?.email) return;

    const fetchStats = async () => {
      try {
        const res = await axiosSecure.get(`/order/seller/${user.email}`);
        const orders = res.data;

        // Filter paid orders only
        const paidOrders = orders.filter((o) => o.status === "paid");

        // Aggregate data by date
        const aggData = paidOrders.reduce((acc, order) => {
          const date = new Date(order.createdAt).toISOString().split("T")[0];
          if (!acc[date]) acc[date] = { date, revenue: 0, order: 0 };
          acc[date].revenue += order.price;
          acc[date].order += 1;
          return acc;
        }, {});

        const finalData = Object.values(aggData).sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        setChartData(finalData);

        const totalRevenue = finalData.reduce((sum, d) => sum + d.revenue, 0);
        const totalOrder = finalData.reduce((sum, d) => sum + d.order, 0);
        setTotals({ totalRevenue, totalOrder });
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000); 
    return () => clearInterval(interval);
  }, [axiosSecure, user, role, isRoleLoading]);

  if (isRoleLoading) return <p>Loading...</p>;
  if (role !== "seller") return <Navigate to="/" replace />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Seller <span className="text-green-600">Statistics</span>
      </h2>

      <div className="flex justify-around mb-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Total Orders</h3>
          <p className="text-2xl">{totals.totalOrder}</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Total Revenue ($)</h3>
          <p className="text-2xl">{totals.totalRevenue}</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Revenue & Orders Over Time
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="right" dataKey="order" fill="#3B82F6" name="Orders" />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              name="Revenue ($)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SellerStatistics;
