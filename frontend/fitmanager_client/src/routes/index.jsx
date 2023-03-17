import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login.jsx";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="../pages/LandingPage.js" element={<Login />} />
      </Routes>
    </Router>
  );
};
