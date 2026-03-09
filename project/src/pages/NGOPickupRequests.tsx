import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import DonationCard from "@/components/DonationCard";
import { mockPickupRequests } from "@/services/api";
import { toast } from "sonner";

const NGOPickupRequests = () => {
  const [requests, setRequests] = useState(mockPickupRequests);

  const handleCancel = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "Available" as const } : r));
    toast.success("Request cancelled!");
  };

  return (
    <DashboardLayout role="ngo">
      <div className="page-header">
        <h1 className="page-title">Pickup Requests</h1>
        <p className="page-subtitle">Track your food pickup requests</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map(r => (
          <DonationCard key={r.id} request={r} showCancelButton onCancel={handleCancel} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default NGOPickupRequests;