import { useEffect, useState } from "react";
import API from "../api";
import KpiCard from "../components/KpiCard";
import FraudChart from "../components/FraudChart";
import RiskPie from "../components/RiskPie";
import NetworkGraph from "../components/NetworkGraph";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/dashboard").then(res => setStats(res.data));
  }, []);

  const chartData = [
    { time: "10AM", fraud: 2 },
    { time: "11AM", fraud: 5 },
    { time: "12PM", fraud: 3 },
  ];

  const riskData = [
    { name: "Safe", value: 400 },
    { name: "Medium", value: 70 },
    { name: "High", value: 30 },
  ];

  const graphData = {
    nodes: [
      { id: "A1", risk: "high" },
      { id: "A2", risk: "medium" },
      { id: "A3", risk: "safe" },
    ],
    links: [
      { source: "A1", target: "A2" },
      { source: "A2", target: "A3" },
    ],
  };

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
        <KpiCard title="Transactions" value={stats.total_transactions}/>
        <KpiCard title="Accounts" value={stats.total_accounts}/>
        <KpiCard title="Flagged" value={stats.flagged_accounts}/>
      </div>

      <FraudChart data={chartData}/>
      <RiskPie data={riskData}/>
      <NetworkGraph graphData={graphData}/>
    </div>
  );
}