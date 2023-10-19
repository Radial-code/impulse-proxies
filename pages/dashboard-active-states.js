import React from "react";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import DashboardNav from "@/components/dashboard/DashboardNav";
import ISPDashboardOtherState from "@/components/ISPDashboardOtherState";

const dashboardactivestates = () => {
  return (
    <>
      <div className="h-screen overflow-hidden relative">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y md:pb-20">
          <ISPDashboardOtherState />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
export default dashboardactivestates;
