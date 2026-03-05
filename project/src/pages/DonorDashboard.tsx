import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import FoodCard from "@/components/FoodCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { mockDonations } from "@/services/api";
import { Package, Clock, CheckCircle, Plus } from "lucide-react";

const DonorDashboard = () => {
  const [donations] = useState(mockDonations.slice(0, 4));

  const stats = [
    { label: "Total Donations", value: donations.length, icon: Package },
    { label: "Available", value: donations.filter(d => d.status === "Available").length, icon: Clock },
    { label: "Delivered", value: donations.filter(d => d.status === "Delivered").length, icon: CheckCircle },
    { label: "Requested", value: donations.filter(d => d.status === "Requested").length, icon: Package },
  ];

  return (
    <DashboardLayout role="donor">
      <div className="page-header flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="page-title">Donor Dashboard</h1>
          <p className="page-subtitle">Manage your food donations</p>
        </div>
        <Button asChild>
          <Link to="/upload-food"><Plus className="mr-2 h-4 w-4" /> Add Food Donation</Link>
        </Button>
      </div>

      <div className="dashboard-grid mb-8">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <h2 className="font-heading text-lg font-semibold mb-4">Recent Donations</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {donations.map(d => <FoodCard key={d.id} donation={d} />)}
      </div>
    </DashboardLayout>
  );
};

export default DonorDashboard;
