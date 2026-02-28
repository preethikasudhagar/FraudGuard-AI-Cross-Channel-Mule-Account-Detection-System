import { LayoutDashboard, Upload, ShieldAlert } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>FraudGuard AI</h2>
      <a href="/"><LayoutDashboard size={18}/> Dashboard</a>
      <a href="/upload"><Upload size={18}/> Upload</a>
      <a href="/alerts"><ShieldAlert size={18}/> Alerts</a>
    </div>
  );
}