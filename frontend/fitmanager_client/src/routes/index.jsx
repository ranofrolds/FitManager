import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Workers } from "../pages/Workers";
import { Customers } from "../pages/Customers";
import ProtectedRoutes from "./ProtectedRoutes";
import LoggedRoutes from "./LoggedRoutes";
import { Maintenance } from "../pages/Maintenance";
import { Financial } from "../pages/Financial";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoggedRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/financial" element={<Financial />} />
        </Route>
      </Routes>
    </Router>
  );
};
