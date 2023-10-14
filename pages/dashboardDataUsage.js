import { DashbarFooter } from "@/components/dashborad/DashbarFooter";
import Dashboard1 from "@/components/dashborad/Dashboard1";
import DashboardNav from "@/components/dashborad/DashboardNav";
import React from "react";
const dashboardDataUsage = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard1 />
        </div>
        <DashbarFooter />
      </div>
    </>
  );
};
export default dashboardDataUsage;
