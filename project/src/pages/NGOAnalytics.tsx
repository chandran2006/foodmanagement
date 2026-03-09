import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { mockStats } from "@/services/api";
import { Package, Users, Truck, Heart, BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Jan", requests: 45, received: 38 },
  { month: "Feb", requests: 52, received: 48 },
  { month: "Mar", requests: 61, received: 55 },
  { month: "Apr", requests: 58, received: 52 },
  { month: "May", requests: 67, received: 61 },
  { month: "Jun", requests: 73, received: 68 },
];

const pieData = [
  { name: "Received", value: 68, color: "hsl(145, 63%, 32%)" },
  { name: "In Transit", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "Requested", value: 12, color: "hsl(210, 80%, 52%)" },
  { name: "Cancelled", value: 5, color: "hsl(150, 10%, 70%)" },
];

const NGOAnalytics = () => {
  const stats = [
    { label: "Total Requests", value: 156, icon: Package, trend: "8%" },
    { label: "Meals Received", value: mockStats.mealsServed, icon: Heart, trend: "12%" },
    { label: "Active Volunteers", value: 24, icon: Users, trend: "3%" },
    { label: "Success Rate", value: "89%", icon: TrendingUp },
  ];

  return (
    <DashboardLayout role="ngo">
      <div className="page-header">
        <h1 className="page-title">NGO Analytics</h1>
        <p className="page-subtitle">Track your food requests and impact</p>
      </div>

      <div className="dashboard-grid mb-8">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="stat-card">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" /> Monthly Requests
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(140,15%,90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="requests" fill="hsl(145, 63%, 32%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="stat-card">
          <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" /> Food Received Trend
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(140,15%,90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="received" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={{ fill: "hsl(38, 92%, 50%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="stat-card lg:col-span-2">
          <h3 className="font-heading font-semibold mb-4">Request Status Distribution</h3>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-8">
            <ResponsiveContainer width={280} height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {pieData.map(d => (
                <div key={d.name} className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span>{d.name}: {d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NGOAnalytics;