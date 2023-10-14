import Dashboard1 from "@/components/dashborad/Dashboard1";
import Dashboard2 from "@/components/dashborad/Dashboard2";
import Dashboard3 from "@/components/dashborad/Dashboard3";
import Dashboard5 from "@/components/dashborad/Dashboard5";
import DashboardIspOrders from "@/components/dashborad/DashboardIspOrders";
import DashboardNav from "@/components/dashborad/DashboardNav";
import DashboardReedemAll from "@/components/dashborad/DashboardReedemAll";
import DashboardThree from "@/components/dashborad/DashboardThree";
import DashboardYourOrder from "@/components/dashborad/DashboardYourOrder";
import DashboardYourRewards from "@/components/dashborad/DashboardYourRewards";
const dashboard = () => {
  return (
    <div>
      <DashboardIspOrders />
      <DashboardYourOrder />
      <DashboardYourRewards />
      <DashboardReedemAll />
    </div>
  );
};

export default dashboard;
