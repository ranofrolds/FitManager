import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="../pages/Login" element={<Login />} />
        <Route path="../pages/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};
