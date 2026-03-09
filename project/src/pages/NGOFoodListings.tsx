import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import FoodCard from "@/components/FoodCard";
import { mockDonations } from "@/services/api";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { toast } from "sonner";

const NGOFoodListings = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [donations, setDonations] = useState(mockDonations);

  const handleRequest = (id: string) => {
    setDonations(prev => prev.map(d => d.id === id ? { ...d, status: "Requested" as const } : d));
    toast.success("Food requested successfully!");
  };

  const filtered = donations.filter(d => {
    const matchesSearch = d.foodName.toLowerCase().includes(search.toLowerCase()) || d.pickupLocation.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout role="ngo">
      <div className="page-header">
        <h1 className="page-title">Food Listings</h1>
        <p className="page-subtitle">Browse and request available food donations</p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search food or location..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Requested">Requested</SelectItem>
            <SelectItem value="Picked Up">Picked Up</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(d => <FoodCard key={d.id} donation={d} showRequestButton onRequest={handleRequest} />)}
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No food donations found.</p>
      )}
    </DashboardLayout>
  );
};

export default NGOFoodListings;