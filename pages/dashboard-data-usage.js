import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import Dashboard1 from "@/components/dashboard/Dashboard1";
import DashboardNav from "@/components/dashboard/DashboardNav";
import React from "react";
import Dashboard2 from "@/components/dashboard/Dashboard2";
import Dashboard3 from "@/components/dashboard/Dashboard3";
import Dashboard4 from "@/components/dashboard/Dashboard4";
import Dashboard5 from "@/components/dashboard/Dashboard5";
import { useRouter } from "next/router";

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
            <Dashboard2 />
            // <Dashboard3/>
          ) : router.query.type === "rewards" ? (
            <Dashboard5 />
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
