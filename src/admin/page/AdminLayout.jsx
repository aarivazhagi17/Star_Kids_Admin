import React from "react";
import {Outlet} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

 function AdminLayout() {
  return (
    <div>
      <AdminNavbar />

      <div>
      
        <div style={{ padding: "20px", width: "100%" }}>
        <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;