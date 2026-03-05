import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const UploadFood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodName: "", quantity: "", preparedTime: "", expiryTime: "", pickupLocation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Food donation uploaded successfully!");
    navigate("/donor-dashboard");
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <DashboardLayout role="donor">
      <div className="page-header">
        <h1 className="page-title">Upload Food Donation</h1>
        <p className="page-subtitle">Provide details about your surplus food</p>
      </div>

      <div className="stat-card max-w-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="foodName">Food Name</Label>
              <Input id="foodName" placeholder="e.g. Biryani" value={formData.foodName} onChange={e => update("foodName", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" placeholder="e.g. 50 plates" value={formData.quantity} onChange={e => update("quantity", e.target.value)} required />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="preparedTime">Prepared Time</Label>
              <Input id="preparedTime" type="time" value={formData.preparedTime} onChange={e => update("preparedTime", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryTime">Expiry Time</Label>
              <Input id="expiryTime" type="time" value={formData.expiryTime} onChange={e => update("expiryTime", e.target.value)} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pickupLocation">Pickup Location</Label>
            <Textarea id="pickupLocation" placeholder="Full address for pickup" value={formData.pickupLocation} onChange={e => update("pickupLocation", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Food Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
          <div className="flex gap-3">
            <Button type="submit">Upload Donation</Button>
            <Button type="button" variant="outline" onClick={() => navigate("/donor-dashboard")}>Cancel</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default UploadFood;
