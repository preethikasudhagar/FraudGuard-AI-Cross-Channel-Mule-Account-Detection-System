export default function AlertTable({ alerts }) {
  return (
    <div className="card">
      <h3>Flagged Accounts</h3>
      <table width="100%">
        <thead>
          <tr>
            <th>Account</th>
            <th>Reason</th>
            <th>Risk</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((a, i) => (
            <tr key={i}>
              <td>{a.account}</td>
              <td>{a.reason}</td>
              <td style={{color:"red"}}>{a.risk}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}