import React from "react";
import Dashboard4 from "./Dashboard4";
import DashboardNav from "./DashboardNav";
import { DashboardFooter } from "./DashboardFooter";

const DashboardYourRewards = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard4 />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardYourRewards;
