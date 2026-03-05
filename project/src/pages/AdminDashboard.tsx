import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { mockStats, mockUsers, mockDonations } from "@/services/api";
import { Package, Users, Truck, Heart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Donations", value: mockStats.totalDonations, icon: Package, trend: "12%" },
    { label: "Total NGOs", value: mockStats.totalNGOs, icon: Users, trend: "5%" },
    { label: "Total Volunteers", value: mockStats.totalVolunteers, icon: Truck, trend: "8%" },
    { label: "Meals Served", value: mockStats.mealsServed, icon: Heart, trend: "15%" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="page-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-subtitle">System overview and management</p>
      </div>

      <div className="dashboard-grid mb-8">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">All Users</TabsTrigger>
          <TabsTrigger value="donations">All Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <div className="stat-card overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map(u => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.phone}</TableCell>
                    <TableCell><Badge variant="secondary" className="capitalize">{u.role}</Badge></TableCell>
                    <TableCell>{u.joinedDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="donations">
          <div className="stat-card overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Food</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDonations.map(d => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium">{d.foodName}</TableCell>
                    <TableCell>{d.quantity}</TableCell>
                    <TableCell>{d.donorName}</TableCell>
                    <TableCell>{d.pickupLocation}</TableCell>
                    <TableCell><Badge variant="secondary">{d.status}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AdminDashboard;
