import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./theme.css";

export default function App() {
  return (
    <Router>
      <Sidebar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}