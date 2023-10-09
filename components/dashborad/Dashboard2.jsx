import React from "react";
import DashboardNav from "./DashboardNav";
import IspProxies from "./IspProxies";
import { DashbarFooter } from "./DashbarFooter";

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
    <div className="relative">
      <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
        <div className="hero_wave">
          <div className="hero_wave_height">
            <div className="grad_bg"></div>
          </div>
        </div>
      </div>
      <DashboardNav />
      <div className="container lg:max-w-[1320px] w-full mx-auto lg:px-3 px-8 mb-10">
        <p className="text-white font-Montserrat font-bold tracking-[1.2px] mb-4 mt-10">
          ISP & DC ORDERS
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="xl:w-9/12 lg:w-6/12 w-full max-h-[290px] overflow-scroll xl:pe-10 max-w-[700px] xl:max-w-full rounded-lg">
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
          <div className="xl:w-3/12 lg:w-6/12 w-full lg:mt-0 mt-5 xl:ps-0 lg:ps-5">
            <IspProxies />
          </div>
        </div>
        {/* box */}
        <div className="bg-[#191941] overflow-hidden rounded-lg p-8 sm:mt-12 mt-5">
          <div className="flex sm:flex-row flex-col md:items-center sm:items-start items-center justify-between">
            <div className="flex items-center lg:flex-row flex-col">
              <p className="text-white font-Montserrat text-md font-bold tracking-[1.4px]">
                YOUR ORDER
              </p>
              <p className="text-[#505082] font-Montserrat text-md font-bold tracking-[1.4px] ms-4">
                #48848191
              </p>
            </div>
            <div className="flex items-center md:flex-row flex-col-reverse">
              <p className="text-[#505082] font-Montserrat text-md font-bold tracking-[1.4px] ms-4 md:block hidden">
                500 PROXIES
              </p>
              <button className="p-[11px_14px] bg-[#292956] rounded-md text-[#7777AD] font-Montserrat font-semibold text-md tracking-[-0.28px] mx-6 md:mt-0 mt-4 hover:bg-white hover:text-[#040426] ease-out duration-150 transition-all">
                Download .txt
              </button>
              <button className="p-[10px_13px] bg-white font-bold tracking-[-0.28px] hover:bg-[#292956] hover:text-white text-[#040426] rounded-md ease-out duration-150 transition-all">
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div className="flex flex-wrap pt-9 items-center overflow-scroll">
            <div className="lg:w-4/12 md:w-6/12 w-full md:text-start text-center">
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
            </div>
          </div>
        </div>
      </div>
      <DashbarFooter />
    </div>
  );
};

export default Dashboard2;
