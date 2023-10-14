import React from 'react'
import Dashboard5 from './Dashboard5';
import { DashbarFooter } from './DashbarFooter';
import DashboardNav from './DashboardNav';

const DashboardReedemAll = () => {
  return (
    <>
      <div className="h-screen">
        <DashboardNav />
        <div className="dashboard_height overflow-y-auto custom_scrollbar_y">
          <Dashboard5 />
        </div>
        <DashbarFooter />
      </div>
    </>
  );
}

export default DashboardReedemAll;