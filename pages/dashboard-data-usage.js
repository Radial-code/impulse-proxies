import React from "react";
import { useRouter } from "next/router";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import DashboardNav from "@/components/dashboard/DashboardNav";
import Dashboard1 from "@/components/dashboard/Dashboard1";
import ISPDashboard from "@/components/dashboard/ISPDashboard";
import RewardsDashboard from "@/components/dashboard/RewardsDashboard";

const DashboardDataUsage = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative">
        <DashboardNav />
        <div className="md:pb-20">
          {router.query.type === "residential" ? (
            <Dashboard1 />
          ) : router.query.type === "isp-datacenter" ? (
            <ISPDashboard />
          ) : router.query.type === "rewards" ? (
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
