import { useState } from "react";
import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import type { UserRole } from "@/services/api";

interface DashboardLayoutProps {
  role: UserRole;
  children: React.ReactNode;
}

const DashboardLayout = ({ role, children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role={role} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center border-b border-border bg-background/80 px-4 backdrop-blur-md lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <span className="ml-3 font-heading text-sm font-semibold capitalize">{role} Dashboard</span>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
