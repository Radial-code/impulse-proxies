import React from "react";
import DashboardNav from "./DashboardNav";

const Dashboard3 = () => {
  return (
    <>
      <DashboardNav />
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
        <p className="pt-[52px] font-Montserrat text-[12px] font-bold text-white leading-normal tracking-[1.2px]">
          ISP & DC ORDERS
        </p>
        <div className="flex justify-between items-center pt-6">
          <div className="w-3/4 bg_no_current_orders rounded-2xl">
            <div className="bg-[#212148]">
              <div className="pt-6 pb-[21px] pl-6 pr-[28px]">
                <ul className="flex justify-between items-center">
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    DOWNLOAD LIST
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    ORDER ID
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    PROXY TYPE
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    PROXY USERNAME
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    QUANTITY
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    DOWNLOAD LIST
                  </li>
                  <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] tracking-[1.1px]">
                    DOWNLOAD LIST
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center py-[52px]">
              <div>
                <p className="text-center text-[17px] font-Montserrat text-white font-bold leading-normal tracking-[1.7px]">
                  NO CURRENT ORDERS
                </p>
                <p className="pt-[10px] text-15 text-center text-[#9D9DBB] font-Montserrat font-medium leading-normal">
                  To make an order, click the button below
                </p>
                <button>Order Proxies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard3;
