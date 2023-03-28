import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Workers } from "../pages/Workers";
import { Customers } from "../pages/Customers";
import ProtectedRoutes from "./ProtectedRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/workers" element={<Workers />} />
        </Route>
      </Routes>
    </Router>
  );
};
