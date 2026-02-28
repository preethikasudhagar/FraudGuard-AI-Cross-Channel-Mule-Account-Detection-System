import ForceGraph2D from "react-force-graph";

export default function NetworkGraph({ graphData }) {
  return (
    <div className="card" style={{height:500}}>
      <h3>Fraud Network Graph</h3>
      <ForceGraph2D
        graphData={graphData}
        nodeAutoColorBy="risk"
        nodeCanvasObject={(node, ctx, globalScale) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
          ctx.fillStyle = node.risk === "high" ? "red" :
                          node.risk === "medium" ? "yellow" : "green";
          ctx.fill();
        }}
      />
    </div>
  );
}