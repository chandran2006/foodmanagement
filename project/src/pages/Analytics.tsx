import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { mockStats } from "@/services/api";
import { Package, Users, Truck, Heart, BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Jan", donations: 120, meals: 2400 },
  { month: "Feb", donations: 150, meals: 3200 },
  { month: "Mar", donations: 180, meals: 3800 },
  { month: "Apr", donations: 200, meals: 4500 },
  { month: "May", donations: 230, meals: 5100 },
  { month: "Jun", donations: 260, meals: 5800 },
];

const pieData = [
  { name: "Delivered", value: 65, color: "hsl(145, 63%, 32%)" },
  { name: "In Transit", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "Requested", value: 12, color: "hsl(210, 80%, 52%)" },
  { name: "Available", value: 8, color: "hsl(150, 10%, 70%)" },
];

const Analytics = () => {
  const stats = [
    { label: "Total Donated", value: mockStats.totalDonations, icon: Package, trend: "12%" },
    { label: "Meals Served", value: mockStats.mealsServed, icon: Heart, trend: "15%" },
    { label: "Active NGOs", value: mockStats.activeNGOs, icon: Users, trend: "5%" },
    { label: "Delivery Rate", value: `${mockStats.deliverySuccessRate}%`, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="page-header">
          <h1 className="page-title">Analytics Dashboard</h1>
          <p className="page-subtitle">Track the impact of food redistribution</p>
        </div>

        <div className="dashboard-grid mb-8">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="stat-card">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" /> Monthly Donations
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(140,15%,90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="donations" fill="hsl(145, 63%, 32%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="stat-card">
            <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" /> Meals Served Trend
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(140,15%,90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="meals" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={{ fill: "hsl(38, 92%, 50%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="stat-card lg:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Donation Status Distribution</h3>
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
      </div>
    </div>
  );
};

export default Analytics;
