import { MapPin, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PickupRequest } from "@/services/api";

interface DonationCardProps {
  request: PickupRequest;
  showAcceptButton?: boolean;
  showCompleteButton?: boolean;
  onAccept?: (id: string) => void;
  onComplete?: (id: string) => void;
}

const DonationCard = ({ request, showAcceptButton, showCompleteButton, onAccept, onComplete }: DonationCardProps) => {
  const statusColor: Record<string, string> = {
    Pending: "status-requested",
    Accepted: "status-available",
    "In Transit": "status-picked-up",
    Delivered: "status-delivered",
  };

  return (
    <div className="stat-card space-y-3">
      <div className="flex items-start justify-between">
        <h3 className="font-heading font-semibold">{request.foodName}</h3>
        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[request.status] || ""}`}>
          {request.status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{request.quantity}</p>
      <div className="space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2"><User className="h-3.5 w-3.5" /> Donor: {request.donorName}</div>
        <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Pickup: {request.pickupLocation}</div>
        <div className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" /> Deliver to: {request.deliveryLocation}</div>
      </div>
      <div className="flex gap-2">
        {showAcceptButton && request.status === "Pending" && (
          <Button size="sm" className="flex-1" onClick={() => onAccept?.(request.id)}>Accept Pickup</Button>
        )}
        {showCompleteButton && request.status === "In Transit" && (
          <Button size="sm" variant="outline" className="flex-1" onClick={() => onComplete?.(request.id)}>Mark Delivered</Button>
        )}
      </div>
    </div>
  );
};

export default DonationCard;
