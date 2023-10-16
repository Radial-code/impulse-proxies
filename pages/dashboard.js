import DashboardIspOrders from "@/components/dashboard/DashboardIspOrders";
import DashboardReedemAll from "@/components/dashboard/DashboardReedemAll";
import DashboardYourOrder from "@/components/dashboard/DashboardYourOrder";
import DashboardYourRewards from "@/components/dashboard/DashboardYourRewards";
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
