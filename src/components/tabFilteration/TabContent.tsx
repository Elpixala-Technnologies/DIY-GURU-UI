import React from "react";
import AdminDashboard from "./AdminDashboard";
import ReportAndAnalytics from "./ReportAndAnalytics";

export default function TabContent({ activeTab }: any) {
  return (
    <>
      {activeTab?.label === "Dashboard" && <AdminDashboard tab={activeTab} />}
      {activeTab?.label === "Users" && <ReportAndAnalytics tab={activeTab} />}
      {activeTab?.label === "Courses" && <ReportAndAnalytics tab={activeTab} />}
      {activeTab?.label === "Report & Analytics" && <ReportAndAnalytics tab={activeTab} />}
      {activeTab?.label === "Communication" && <ReportAndAnalytics tab={activeTab} />}
      {activeTab?.label === "Help & Support" && <ReportAndAnalytics tab={activeTab} />}
    </>
  );
}
