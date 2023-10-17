import React from "react";
import Dashboard5 from "./RewardsDashboard";
import { DashboardFooter } from "./DashboardFooter";
import DashboardNav from "./DashboardNav";

const DashboardReedemAll = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard5 />
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardReedemAll;
