import { Clock, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FoodDonation } from "@/services/api";

interface FoodCardProps {
  donation: FoodDonation;
  showRequestButton?: boolean;
  onRequest?: (id: string) => void;
}

const statusClass: Record<string, string> = {
  Available: "status-available",
  Requested: "status-requested",
  "Picked Up": "status-picked-up",
  Delivered: "status-delivered",
};

const FoodCard = ({ donation, showRequestButton, onRequest }: FoodCardProps) => {
  return (
    <div className="food-card">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <Package className="h-10 w-10 text-muted-foreground/40" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-heading font-semibold text-card-foreground">{donation.foodName}</h3>
          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass[donation.status] || ""}`}>
            {donation.status}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">by {donation.donorName}</p>
        <div className="space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Package className="h-3.5 w-3.5" /> {donation.quantity}</div>
          <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Expires: {donation.expiryTime}</div>
          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {donation.pickupLocation}</div>
        </div>
        {showRequestButton && donation.status === "Available" && (
          <Button size="sm" className="w-full mt-2" onClick={() => onRequest?.(donation.id)}>
            Request Food
          </Button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
