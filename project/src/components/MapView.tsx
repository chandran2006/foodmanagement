import { MapPin } from "lucide-react";

const MapView = () => (
  <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-muted/50">
    <div className="text-center">
      <MapPin className="mx-auto h-10 w-10 text-muted-foreground/40" />
      <p className="mt-2 text-sm text-muted-foreground">Map integration coming soon</p>
    </div>
  </div>
);

export default MapView;
