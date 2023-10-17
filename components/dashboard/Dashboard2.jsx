import React from "react";
import IspProxies from "./IspProxies";
import Image from "next/image";
import { Headings, IspOrdersData } from "../common/Helper";
const Dashboard2 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
        <div className="hero_wave">
          <div className="hero_wave_height">
            <div className="grad_bg"></div>
          </div>
        </div>
      </div>
      <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto mb-16">
        <p className="text-white font-Montserrat lg:block hidden font-bold tracking-[1.2px] mb-6 mt-10">
          ISP & DC ORDERS
        </p>

        {IspOrdersData.length > 0 ? (
          <>
            <div className="flex md:gap-12 gap-8 md:flex-row flex-col justify-between items-center pt-6 ">
              <div className="xl:w-9/12 lg:w-7/12 md:w-6/12 lg:max-h-[290px] max-h-[280px] bg_no_current_orders w-full overflow-x-scroll custom_scrollbar_y rounded-lg">
                <table className="rounded-xl overflow-hidden">
                  <thead className="bg-[#212148]">
                    <tr>
                      {Headings.map((heading, index) => (
                        <th
                          key={index}
                          className="xl:p-5 p-4 text-[#717198] mb-0 font-Montserrat text-sm font-bold tracking-[1.1px] whitespace-nowrap"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {console.log("data===>", IspOrdersData.length)}
                  <tbody className="bg-[#151536]">
                    {IspOrdersData.map((rowData, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="text-white font-Montserrat text-bold text-sm tracking-[-0.24px]"
                      >
                        {rowData.map((cellData, cellIndex) => (
                          <td className="xl:p-5 p-4" key={cellIndex}>
                            {cellData}
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* {IspOrdersData.length > 0 ? (
                    <>
                      {IspOrdersData.map((rowData, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="text-white font-Montserrat text-bold text-sm tracking-[-0.24px]"
                        >
                          {rowData.map((cellData, cellIndex) => (
                            <td className="xl:p-5 p-4" key={cellIndex}>
                              {cellData}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ) : (
                    <div className="flex justify-center items-center py-12 md:min-h-[280px] min-h-[243px] lg:min-h-full">
                      <div className="w-[413px]">
                        <p className="text-center sm:text-[17px] text-[15px] font-Montserrat text-white font-bold leading-normal md:tracking-[1.7px] mb-0">
                          NO CURRENT ORDERS
                        </p>
                        <p className="lg:pt-[10px] pt-1 text-[15px] text-center text-[#9D9DBB] font-Montserrat font-medium leading-normal mb-0">
                          To make an order, click the button below
                        </p>
                        <div className="flex justify-center">
                          <button className="lg:mt-6 mt-4 bg-white rounded-[10px] text-[#040426] py-3 px-9 font-Montserrat font-bold sm:text-base text-[14px] leading-normal md:tracking-[-0.32px] hover:bg-[#4FDCC7] hover:text-white transition-all">
                            Order Proxies
                          </button>
                        </div>
                      </div>
                    </div>
                  )} */}
                  </tbody>
                </table>
              </div>
              <div className="xl:w-3/12 lg:w-5/12 md:6/12 w-full md:mt-0 mt-9">
                <IspProxies />
              </div>
            </div>
            <div className="bg-[#191941] overflow-hidden flex flex-col your_order relative rounded-lg lg:p-8 p-6 lg:mt-12 mt-8 mb-[84px]">
              <div className="flex md:items-center justify-between">
                <div className="flex md:flex-row flex-col">
                  <p className="text-white font-Montserrat sm:text-md text-[12px] font-bold tracking-[1.4px]">
                    YOUR ORDER
                  </p>
                  <p className="text-[#505082] font-Montserrat text-md font-bold md:mt-0 mt-4 tracking-[1.4px] md:ms-4">
                    #48848191
                  </p>
                  <p className="text-[#505082] font-Montserrat sm:text-md text-[12px] font-bold md:mt-0 mt-4 md:hidden block tracking-[1.4px]">
                    500 PROXIES
                  </p>
                </div>
                <div className="flex sm:items-center md:flex-row flex-col-reverse pb-4">
                  <p className="text-[#505082] font-Montserrat text-md font-bold tracking-[1.4px] ms-4 md:block hidden">
                    500 PROXIES
                  </p>
                  <button className="md:px-[15px] px-[22px] py-[11px] bg-[#292956] rounded-md text-[#7777AD] font-Montserrat font-semibold sm:text-md text-[12px] tracking-[-0.28px] sm:mx-6 md:mt-0 mt-4 hover:bg-[#4FDCC7] hover:text-[#040426] ease-out duration-150 transition-all">
                    Download .txt
                  </button>
                  <button className="px-[14px] py-[11px] font-Montserrat bg-white font-bold tracking-[-0.28px] hover:bg-[#4FDCC7] text-[#040426] rounded-md ease-out md:text-[14px] text-[12px]  duration-150 transition-all">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap pt-5 flex-col items-center lg:h-[305px] custom_scrollbar_y_2 lg:overflow-scroll">
                <div className="flex justify-center">
                  <div className="your_order font-Montserrat xl:text-[15px] text-[12px] font-medium leading-normal  text-[#9D9DBB]">
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                    83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex md:gap-12 gap-8 md:flex-row flex-col justify-between items-center pt-6 ">
              <div className="xl:w-9/12 lg:w-7/12 md:w-6/12 w-full bg_no_current_orders rounded-2xl">
                <div className="bg-[#212148] rounded-t-[16px] lg:block hidden">
                  <div className="md:pt-[22px] md:pb-3 p-4 md:pl-6 md:pr-[28px]">
                    <ul className="flex md:gap-8 justify-between  gap-8 items-center overflow-x-auto custom_scrollbar">
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
                <div className="flex justify-center items-center py-12 md:min-h-[280px] min-h-[243px] lg:min-h-full">
                  <div className="w-[413px]">
                    <p className="text-center sm:text-[17px] text-[15px] font-Montserrat text-white font-bold leading-normal md:tracking-[1.7px] mb-0">
                      NO CURRENT ORDERS
                    </p>
                    <p className="lg:pt-[10px] pt-1 text-[15px] text-center text-[#9D9DBB] font-Montserrat font-medium leading-normal mb-0">
                      To make an order, click the button below
                    </p>
                    <div className="flex justify-center">
                      <button className="lg:mt-6 mt-4 bg-white rounded-[10px] text-[#040426] py-3 px-9 font-Montserrat font-bold sm:text-base text-[14px] leading-normal md:tracking-[-0.32px] hover:bg-[#4FDCC7] hover:text-white transition-all">
                        Order Proxies
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-3/12 lg:w-5/12 md:6/12 w-full">
                <IspProxies />
              </div>
            </div>
            <div className="md:mt-12 md:mb-[64px] lg:block hidden  mt-8 mb-12 bg_your_order rounded-2xl">
              <div className="flex justify-between  items-center md:gap-0 gap-8 lg:pt-8 md:pt-6 md:pb-6 p-4 md:px-8 overflow-x-auto custom_scrollbar">
                <p className="text-white font-Montserrat whitespace-nowrap font-bold leading-normal sm:text-[14px] text-sm tracking-[1.4px]">
                  YOUR ORDER
                </p>
                <div className="flex items-center md:gap-6 gap-4">
                  <button className="bg-[#292956] py-[9px] px-[15px] rounded-[10px] text-[#7777AD] font-Montserrat font-semibold text-[14px] leading-normal md:tracking-[-0.28px] whitespace-nowrap hover:bg-[#4Fdcc7] hover:text-[#040426] transition-all">
                    Download .txt
                  </button>
                  <button className="hover:bg-[#4FDCC7] py-[9px] px-[15px] whitespace-nowrap rounded-[10px] hover:text-[#040426] font-Montserrat font-semibold text-[14px] leading-normal md:tracking-[-0.28px] bg-white text-[#040426] transition-all">
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
            <div className="md:mt-12 lg:mb-[64px] mb-[72px] lg:hidden md:block hidden mt-8 bg_lg_your_order rounded-2xl">
              <div className="flex justify-between items-center p-6">
                <div className="flex items-center">
                  <p className="text-white text-[14px] font-Montserrat font-bold leading-normal tracking-[1.4px]">
                    YOUR ORDER
                  </p>
                  <p className="text-[14px] ps-4 font-Montserrat font-bold leading-normal tracking-[1.4px] text-[#505082]">
                    #48848191
                  </p>
                  <p className="text-[14px] ps-10 font-Montserrat font-bold leading-normal tracking-[1.4px] text-[#505082]">
                    500 PROXIES
                  </p>
                </div>
                <div className="flex items-center md:gap-6 gap-4">
                  <button className="bg-[#292956] py-[9px] px-[15px] rounded-[10px] text-[#7777AD] font-Montserrat font-semibold text-[14px]  leading-normal md:tracking-[-0.28px] whitespace-nowrap hover:bg-[#4FDCC7] hover:text-[#040426] transition-all">
                    Download .txt
                  </button>
                  <button className="hover:bg-[#4FDCC7] py-[9px] px-[15px] whitespace-nowrap rounded-[10px] hover:text-[#040426] font-Montserrat font-semibold text-[14px]  leading-normal md:tracking-[-0.28px] bg-white text-[#040426] transition-all">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
              <div className="flex justify-end items-end min-h-[616px] ">
                <div className="pt-[60px] pr-9 pb-[102px] ">
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
            <div className="md:mt-12 lg:mb-[64px] mb-[72px] block md:hidden mt-8 bg_sm_your_order min-h-[997px] rounded-2xl">
              <div className="flex justify-between items-center p-5">
                <div>
                  <p className="text-[14px] font-Montserrat font-bold leading-normal tracking-[1.4px] text-white">
                    YOUR ORDER
                  </p>
                  <p className="pt-4 text-[14px] font-Montserrat font-bold leading-normal tracking-[1.4px] text-[#505082]">
                    #48848191
                  </p>
                  <p className="pt-4 text-[14px] font-Montserrat font-bold leading-normal tracking-[1.4px] text-[#505082]">
                    500 PROXIES
                  </p>
                </div>
                <div className="flex flex-col-reverse">
                  <button className="bg-[#292956] py-[9px] mt-4  px-[15px] rounded-[10px] text-[#7777AD] font-Montserrat font-semibold text-[14px]  leading-normal md:tracking-[-0.28px] whitespace-nowrap hover:bg-[#4FDCC7] hover:text-[#040426] transition-all">
                    Download .txt
                  </button>
                  <button className="hover:bg-[#4FDCC7] py-[9px] px-[15px] whitespace-nowrap rounded-[10px] hover:text-[#040426] font-Montserrat font-semibold text-[14px] leading-normal md:tracking-[-0.28px] bg-white text-[#040426] transition-all">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Image
        height={300}
        width={300}
        className=" absolute right-0 bottom-0 z-[-2] hidden md:inline"
        alt="DashboardLine"
        src="/assets/images/svg/DashboardLine.svg"
      />
    </div>
  );
};

export default Dashboard2;
