import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function RiskPie({ data }) {
  return (
    <div className="card" style={{height:300}}>
      <h3>Risk Distribution</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}