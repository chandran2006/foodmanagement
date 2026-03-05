import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import DonationCard from "@/components/DonationCard";
import StatCard from "@/components/StatCard";
import MapView from "@/components/MapView";
import { mockPickupRequests } from "@/services/api";
import { Truck, Package, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const VolunteerDashboard = () => {
  const [requests, setRequests] = useState(mockPickupRequests);

  const handleAccept = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "In Transit" as const } : r));
    toast.success("Pickup accepted!");
  };

  const handleComplete = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "Delivered" as const } : r));
    toast.success("Delivery marked as completed!");
  };

  const stats = [
    { label: "Pending Pickups", value: requests.filter(r => r.status === "Pending").length, icon: Clock },
    { label: "In Transit", value: requests.filter(r => r.status === "In Transit").length, icon: Truck },
    { label: "Delivered", value: requests.filter(r => r.status === "Delivered").length, icon: CheckCircle },
    { label: "Total Requests", value: requests.length, icon: Package },
  ];

  return (
    <DashboardLayout role="volunteer">
      <div className="page-header">
        <h1 className="page-title">Volunteer Dashboard</h1>
        <p className="page-subtitle">Manage food pickups and deliveries</p>
      </div>

      <div className="dashboard-grid mb-8">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="mb-8">
        <h2 className="font-heading text-lg font-semibold mb-4">Delivery Map</h2>
        <MapView />
      </div>

      <h2 className="font-heading text-lg font-semibold mb-4">Pickup Requests</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map(r => (
          <DonationCard key={r.id} request={r} showAcceptButton showCompleteButton onAccept={handleAccept} onComplete={handleComplete} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;
