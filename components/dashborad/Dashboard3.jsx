import React from "react";
import DashboardNav from "./DashboardNav";
import IspProxies from "./IspProxies";
import { DashbarFooter } from "./DashbarFooter";

const Dashboard3 = () => {
  return (
    <>
      <div className="relative">
        <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
        <DashboardNav />
        <div className="container xl:max-w-[1358px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <p className="md:pt-[52px] pt-8 font-Montserrat text-[12px] font-bold text-white leading-normal md:tracking-[1.2px]">
            ISP & DC ORDERS
          </p>
          <div className="flex md:gap-12 gap-8 lg:flex-row flex-col-reverse justify-between items-center pt-6 ">
            <div className="xl:w-9/12 lg:w-7/12 w-full bg_no_current_orders rounded-2xl">
              <div className="bg-[#212148] rounded-t-[16px]">
                <div className="md:pt-[22px] md:pb-3 p-4 md:pl-6 md:pr-[28px]">
                  <ul className="flex md:gap-8 justify-between gap-8 items-center overflow-x-auto custom_scrollbar">
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      DOWNLOAD LIST
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      ORDER ID
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      PROXY TYPE
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      PROXY USERNAME
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      QUANTITY
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      EXPIRY DATE
                    </li>
                    <li className="text-[11px] font-Montserrat font-bold leading-normal text-[#717198] md:tracking-[1.1px] cursor-pointer whitespace-nowrap pb-[9px]">
                      RENEW LIST
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center py-12">
                <div>
                  <p className="text-center sm:text-[17px] text-[15px] font-Montserrat text-white font-bold leading-normal md:tracking-[1.7px] mb-0">
                    NO CURRENT ORDERS
                  </p>
                  <p className="lg:pt-[10px] pt-1 text-[15px] text-center text-[#9D9DBB] font-Montserrat font-medium leading-normal mb-0">
                    To make an order, click the button below
                  </p>
                  <div className="flex justify-center">
                    <button className="lg:mt-6 mt-4 bg-white rounded-[10px] text-[#040426] py-3 px-8 font-Montserrat font-bold sm:text-base text-[14px] leading-normal md:tracking-[-0.32px] hover:bg-[#4FDCC7] hover:text-white transition-all">
                      Order Proxies
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-3/12 lg:w-5/12 w-full">
              <IspProxies />
            </div>
          </div>
          <div className="md:my-12 mt-8 mb-12 bg_your_order rounded-2xl">
            <div className="flex justify-between items-center md:gap-0 gap-8 lg:pt-8 md:pt-6 md:pb-6 p-4 md:px-8 overflow-x-auto custom_scrollbar">
              <p className="text-white font-Montserrat whitespace-nowrap font-bold leading-normal sm:text-[14px] text-sm tracking-[1.4px]">
                YOUR ORDER
              </p>
              <div className="flex items-center md:gap-6 gap-4">
                <button className="bg-[#292956] py-3 px-[14px] rounded-[10px] text-[#7777AD] font-Montserrat font-semibold sm:text-[14px] text-sm leading-normal md:tracking-[-0.28px] whitespace-nowrap hover:bg-white hover:text-[#040426] transition-all">
                  Download .txt
                </button>
                <button className="bg-[#292956] py-3 px-[14px] whitespace-nowrap rounded-[10px] text-[#7777AD] font-Montserrat font-semibold sm:text-[14px] text-sm leading-normal md:tracking-[-0.28px] hover:bg-white hover:text-[#040426] transition-all">
                  Copy to Clipboard
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center lg:pt-[52px] pt-8 lg:pb-[130px] pb-24 pb_64">
              <div>
                <p className="text-center sm:text-[17px] text-[15px] font-Montserrat text-white font-bold leading-normal md:tracking-[1.7px] mb-0">
                  NO CURRENT ORDERS
                </p>
                <p className="lg:pt-[10px] pt-1 text-[15px] text-center text-[#9D9DBB] font-Montserrat font-medium leading-normal mb-0">
                  To make an order, click the button below
                </p>
                <div className="flex justify-center">
                  <button className="lg:mt-6 mt-4 bg-white rounded-[10px] text-[#040426] py-3 px-8 font-Montserrat font-bold sm:text-base text-[14px] leading-normal md:tracking-[-0.32px] hover:bg-[#4FDCC7] hover:text-white transition-all">
                    Order Proxies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashbarFooter />
      </div>
    </>
  );
};

export default Dashboard3;
