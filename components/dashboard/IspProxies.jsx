import React, { useState } from "react";
import ProxiesTabs from "./ProxiesTabs";
const IspProxies = () => {
  const [activeTab, setActiveTab] = useState("ISP");
  const handleTabClick = (tab) => {
      setActiveTab(tab);
      
  };
  const tabContent = {
    ISP: (
      <div className="mt-3">
        <ProxiesTabs />
      </div>
    ),
    DC: (
      <div className="mt-3">
        <ProxiesTabs />
      </div>
    ),
  };
  return (
    <>
      <div className="bg-[#50EED7] bg-opacity-30 rounded-[10px] flex items-center justify-between xl:overflow-x-auto custom_scrollbar overflow-hidden">
        <button
          onClick={() => handleTabClick("ISP")}
          className={`${
            activeTab === "ISP"
              ? "bg-[#50EED7] rounded-[10px] !text-[#050628]"
              : "border-transparent"
          }  py-[12px] pl-10 pr-10 w-6/12 text-white font-Montserrat font-bold text-[11px]
          leading-normal whitespace-nowrap md:tracking-[1.1px]`}
        >
          ISP PROXIES
        </button>
        <button
          onClick={() => handleTabClick("DC")}
          className={`${
            activeTab === "DC"
              ? "bg-[#50EED7] w-6/12 rounded-[10px] !text-[#050628] text-center mx-auto"
              : "border-transparent"
          }   py-[12px] pl-9 pr-9 text-white font-Montserrat font-bold text-[11px]
          leading-normal whitespace-nowrap md:tracking-[1.1px] mx-auto`}
        >
          DC PROXIES
        </button>
      </div>
      {tabContent[activeTab]}
    </>
  );
};

export default IspProxies;
