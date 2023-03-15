import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Growth = React.lazy(() => import("pages/Growth"));
const Tracking = React.lazy(() => import("pages/Tracking"));
const Chart = React.lazy(() => import("pages/Chart"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Humidity = React.lazy(() => import("pages/Humidity"));
const Light = React.lazy(() => import("pages/Light"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Logininvalid = React.lazy(() => import("pages/Logininvalid"));
const Login = React.lazy(() => import("pages/Login"));
const Resetpw = React.lazy(() => import("pages/Resetpw"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Resetpw />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logininvalid" element={<Logininvalid />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/light" element={<Light />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
