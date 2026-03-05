import { Link, useLocation } from "react-router-dom";
import { Leaf, Home, Upload, List, Truck, BarChart3, Users, Settings, Package } from "lucide-react";
import type { UserRole } from "@/services/api";

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems: Record<UserRole, { label: string; path: string; icon: React.ElementType }[]> = {
  donor: [
    { label: "Dashboard", path: "/donor-dashboard", icon: Home },
    { label: "Upload Food", path: "/upload-food", icon: Upload },
    { label: "My Donations", path: "/food-listings", icon: List },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
  ],
  ngo: [
    { label: "Dashboard", path: "/ngo-dashboard", icon: Home },
    { label: "Food Listings", path: "/food-listings", icon: Package },
    { label: "Pickup Requests", path: "/pickup-requests", icon: Truck },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
  ],
  volunteer: [
    { label: "Dashboard", path: "/volunteer-dashboard", icon: Home },
    { label: "Pickup Requests", path: "/pickup-requests", icon: Truck },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
  ],
  admin: [
    { label: "Dashboard", path: "/admin-dashboard", icon: Home },
    { label: "All Users", path: "/admin-dashboard", icon: Users },
    { label: "All Donations", path: "/food-listings", icon: List },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
    { label: "Settings", path: "/admin-dashboard", icon: Settings },
  ],
};

const DashboardSidebar = ({ role, isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const items = menuItems[role];

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Leaf className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold text-sidebar-foreground">FoodBridge</span>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-sidebar-foreground/50 capitalize">{role} Account</p>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
