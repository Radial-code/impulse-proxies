import React from "react";
import Dashboard2 from "./ISPDashboard";
import DashboardNav from "./DashboardNav";
import { DashboardFooter } from "./DashboardFooter";

const DashboardIspOrders = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard2 />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardIspOrders;
