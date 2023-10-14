import React from 'react'
import DashboardThree from './DashboardThree';
import DashboardNav from './DashboardNav';
import { DashbarFooter } from './DashbarFooter';

const DashboardYourRewards = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <DashboardThree />
        </div>
        <DashbarFooter/>
      </div>
    </>
  );
}

export default DashboardYourRewards