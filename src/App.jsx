import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "./admin/page/AdminLogin";
import AdminLayout from "./admin/page/AdminLayout";
import ProtectedRoute from "./admin/page/ProtectedRoute";
import Admission from "./admin/page/Admission";

export default function App() {
  return (
    <div>
      <Routes>

  <Route path="/" element={<AdminLogin />} />

  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Admission />} />
  </Route>

</Routes>
    </div>
  );
}