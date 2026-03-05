import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isLoggedIn?: boolean;
  userRole?: string;
}

const Navbar = ({ isLoggedIn = false, userRole }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const getDashboardPath = () => {
    switch (userRole) {
      case "donor": return "/donor-dashboard";
      case "ngo": return "/ngo-dashboard";
      case "volunteer": return "/volunteer-dashboard";
      case "admin": return "/admin-dashboard";
      default: return "/";
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">FoodBridge</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/food-listings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Food Listings</Link>
          <Link to="/analytics" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Analytics</Link>
          {isLoggedIn ? (
            <>
              <Link to={getDashboardPath()} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link>
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Login</Button>
              <Button size="sm" onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/food-listings" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Food Listings</Link>
            <Link to="/analytics" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Analytics</Link>
            {isLoggedIn ? (
              <>
                <Link to={getDashboardPath()} className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                <Button variant="outline" size="sm" onClick={() => { setMobileOpen(false); navigate("/"); }}>Logout</Button>
              </>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1" onClick={() => { setMobileOpen(false); navigate("/login"); }}>Login</Button>
                <Button size="sm" className="flex-1" onClick={() => { setMobileOpen(false); navigate("/register"); }}>Register</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
