import React from "react";
import DashboardNav from "./DashboardNav";
import IspProxies from "./IspProxies";
import { DashbarFooter } from "./DashbarFooter";
import Image from "next/image";
const Dashboard2 = () => {
  const headings = [
    "DOWNLOAD LIST",
    "ORDER ID",
    "PROXY TYPE",
    "PROXY USERNAME",
    "QUANTITY",
    "EXPIRY DATE",
    "RENEW LIST",
  ];
  const data = [
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
    ["1232312123", "Datacenter", "Proxy1", "500", "05/06/2024", "12", "54"],
  ];
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
        <div className="flex justify-between items-center md:flex-row flex-col lg:pt-0 pt-8">
          <div className="xl:w-[73%] 2xl:w-[60%] lg:w-[60%] md:w-[58%] lg:max-h-[290px] max-h-[280px] w-full overflow-x-scroll custom_scrollbar_y xl:max-w-[955px]  md:max-w-[427px] lg:max-w-[720px] rounded-lg">
            <table className="rounded-xl overflow-hidden">
              <thead className="bg-[#212148]">
                <tr>
                  {headings.map((heading, index) => (
                    <th
                      key={index}
                      className="xl:p-5 p-4 text-[#717198] mb-0 font-Montserrat text-sm font-bold tracking-[1.1px] whitespace-nowrap"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-[#151536]">
                {data.map((rowData, rowIndex) => (
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
              </tbody>
            </table>
          </div>
          <div className="xl:w-[25%] 2xl:w-[38%] lg:w-[36%] md:w-[40%] w-full md:mt-0 mt-9">
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
            {/* <div className="lg:w-4/12 md:w-6/12 w-full md:text-start text-center">
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
            </div>
            <div className="lg:w-4/12 md:w-6/12 w-full lg:text-center md:text-end text-center md:mt-0 mt-5">
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
            </div>
            <div className="lg:w-4/12 md:w-6/12 w-full lg:text-end md:text-start text-center lg:mt-0 sm:mt-10 mt-5">
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
              <p className="text-[#9D9DBB] font-medium font-Montserrat xl:text-lg text-[12px] mb-2">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
            </div> */}
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
