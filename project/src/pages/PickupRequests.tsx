import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import DonationCard from "@/components/DonationCard";
import { mockPickupRequests } from "@/services/api";
import { toast } from "sonner";
import type { UserRole } from "@/services/api";

const PickupRequests = () => {
  const [requests, setRequests] = useState(mockPickupRequests);
  const userRole = (localStorage.getItem('userRole') as UserRole) || 'volunteer';

  const handleAccept = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "In Transit" as const } : r));
    toast.success("Pickup accepted!");
  };

  const handleComplete = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "Delivered" as const } : r));
    toast.success("Delivery completed!");
  };

  return (
    <DashboardLayout role={userRole}>
      <div className="page-header">
        <h1 className="page-title">Pickup Requests</h1>
        <p className="page-subtitle">Manage food pickup and delivery requests</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map(r => (
          <DonationCard key={r.id} request={r} showAcceptButton showCompleteButton onAccept={handleAccept} onComplete={handleComplete} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default PickupRequests;
