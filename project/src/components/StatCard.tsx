interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
}

const StatCard = ({ label, value, icon: Icon, trend }: StatCardProps) => (
  <div className="stat-card animate-fade-in">
    <div className="flex items-center justify-between">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      {trend && <span className="text-xs font-medium text-primary">+{trend}</span>}
    </div>
    <div className="mt-3">
      <p className="font-heading text-2xl font-bold">{value.toLocaleString()}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default StatCard;
