import React from "react";
import Dashboard3 from "./Dashboard3";
import DashboardNav from "./DashboardNav";
import { DashboardFooter } from "./DashboardFooter";

const DashboardYourOrder = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard3 />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardYourOrder;
