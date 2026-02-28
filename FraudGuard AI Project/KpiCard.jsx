import { motion } from "framer-motion";

export default function KpiCard({ title, value }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </motion.div>
  );
}