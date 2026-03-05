import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import FoodCard from "@/components/FoodCard";
import StatCard from "@/components/StatCard";
import { mockDonations } from "@/services/api";
import { Package, Handshake, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const NGODashboard = () => {
  const [donations, setDonations] = useState(mockDonations);

  const handleRequest = (id: string) => {
    setDonations(prev => prev.map(d => d.id === id ? { ...d, status: "Requested" as const } : d));
    toast.success("Food requested successfully!");
  };

  const stats = [
    { label: "Available Food", value: donations.filter(d => d.status === "Available").length, icon: Package },
    { label: "Requested", value: donations.filter(d => d.status === "Requested").length, icon: Handshake },
    { label: "Picked Up", value: donations.filter(d => d.status === "Picked Up").length, icon: Clock },
    { label: "Delivered", value: donations.filter(d => d.status === "Delivered").length, icon: CheckCircle },
  ];

  return (
    <DashboardLayout role="ngo">
      <div className="page-header">
        <h1 className="page-title">NGO Dashboard</h1>
        <p className="page-subtitle">Browse and request available food donations</p>
      </div>

      <div className="dashboard-grid mb-8">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <h2 className="font-heading text-lg font-semibold mb-4">Available Food</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {donations.map(d => (
          <FoodCard key={d.id} donation={d} showRequestButton onRequest={handleRequest} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default NGODashboard;
