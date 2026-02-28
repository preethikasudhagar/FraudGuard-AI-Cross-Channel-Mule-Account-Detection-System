import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FraudChart({ data }) {
  return (
    <div className="card" style={{height:300}}>
      <h3>Fraud Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="fraud" stroke="#3b82f6"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}