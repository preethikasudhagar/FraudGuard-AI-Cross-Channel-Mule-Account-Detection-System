import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/dashboard")
      .then(res => setData(res.data));
  }, []);

  return (
    <div style={{padding:30}}>
      <h2>FraudGuard AI Dashboard</h2>
      <div className="card">
        Transactions: {data.total_transactions}
      </div>
      <div className="card">
        Accounts: {data.total_accounts}
      </div>
      <div className="card">
        Flagged: {data.flagged_accounts}
      </div>
    </div>
  );
}