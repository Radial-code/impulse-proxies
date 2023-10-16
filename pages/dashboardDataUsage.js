import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import Dashboard1 from "@/components/dashboard/Dashboard1";
import DashboardNav from "@/components/dashboard/DashboardNav";
import React from "react";
const dashboardDataUsage = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard1 />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
export default dashboardDataUsage;
