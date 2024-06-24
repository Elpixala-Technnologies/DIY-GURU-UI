import React from "react";
import AdminDashboard from "./AdminDashboard";

export default function TabContent({ activeTab }: any) {
  return (
    <>
      {activeTab?.label === "Dashboard" && <AdminDashboard tab={activeTab} />}
    </>
  );
}
