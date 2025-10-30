import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Web pages
import Home from "../pages/WebHome";

//common pages
import ScrollToTop from "../components/common/ScrolltoTop";

//Pages
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignupPage";

//layouts
import AdminLayout from "../layouts/AdminLayout";

//adminpages
import Dashboard from "../components/admin/Dashboard";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />


        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
              <AdminLayout />
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
