import React from "react";
import { useRouter } from "next/router";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import DashboardNav from "@/components/dashboard/DashboardNav";
import Dashboard1 from "@/components/dashboard/Dashboard1";
import ISPDashboard from "@/components/dashboard/ISPDashboard";
import RewardsDashboard from "@/components/dashboard/RewardsDashboard";

// import Dashboard2 from "@/components/dashboard/ISPDashboard";
import Dashboard3 from "@/components/dashboard/Dashboard3";
import Dashboard4 from "@/components/dashboard/Dashboard4";
// import Dashboard5 from "@/components/dashboard/RewardsDashboard";

const DashboardDataUsage = () => {
  // ROUTER CODE HERE
  const router = useRouter();
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          {router.query.type === "residential" ? (
            <Dashboard1 />
          ) : router.query.type === "isp-datacenter" ? (
            // <Dashboard2 />
            <ISPDashboard />
          ) : router.query.type === "rewards" ? (
            // <Dashboard5 />
            <RewardsDashboard />
          ) : (
            ""
          )}
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
export default DashboardDataUsage;
