import React, { useState } from "react";
import DcProxies from "./DcProxies";
import ResidentialProxies from "./ResidentialProxies";
import ImpulseFooter from "../ImpulseFooter";
import Header from "../Header";
import ProxiesISP from "./ProxiesISP";
const Proxies = () => {
  const [activeTab, setActiveTab] = useState("ISP");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const tabContent = {
    ISP: <ProxiesISP />,
    DC: <DcProxies />,
    Residential: <ResidentialProxies />,
  };
  return (
    <>
      <div className=" relative">
        <Header />
        <div className="bg-[#040426]  relative pb-36 ">
          <div className="custom_container mx-auto px-4 relative z-10">
            <div className="sm:pt-16 pt-10">
              <div className="max-w-[600px] overflow-x-auto mx-auto bg-[#0C1C37] rounded-2xl border-2 border-[#2E8587] border-solid flex justify-between items-center ">
                <p
                  onClick={() => handleTabClick("ISP")}
                  className={`${
                    activeTab === "ISP"
                      ? "bg-[#133147] border-[#50EED7]"
                      : "border-transparent"
                  } sm:px-9 px-[10px] py-[10px] whitespace-nowrap text-center cursor-pointer  text-white sm:text-[19px] text-base sm:py-4 border-2 rounded-[14px] transition-all duration-300`}
                >
                  ISP Proxies
                </p>
                <span className="bg-white h-5 w-[1px]"></span>
                <p
                  onClick={() => handleTabClick("DC")}
                  className={`${
                    activeTab === "DC"
                      ? "bg-[#133147] border-[#50EED7]"
                      : "border-transparent"
                  } sm:px-9 font-interfacesBold whitespace-nowrap text-center cursor-pointer text-white sm:text-[19px] text-base px-[10px] py-[10px] sm:py-4 border-2 rounded-[14px] transition-all duration-300`}
                >
                  DC Proxies
                </p>
                <span className="bg-white h-5 w-[1px]"></span>
                <p
                  onClick={() => handleTabClick("Residential")}
                  className={`${
                    activeTab === "Residential"
                      ? "bg-[#133147] border-[#50EED7]"
                      : "border-transparent"
                  } sm:px-9 whitespace-nowrap font-interfacesBold text-center cursor-pointer text-white sm:text-[19px] text-base px-[10px] py-[10px] sm:py-4 border-2 rounded-[14px] transition-all duration-300`}
                >
                  Residential Proxies
                </p>
              </div>
              {tabContent[activeTab]}
            </div>
          </div>
          <div className=" w-full absolute bottom-0 top-[300px] hidden md:block md:top-[100px] lg:top-[10px] animation">
            <div className="hero_wave">
              <div className="hero_wave_height">
                <div className="grad_bg"></div>
              </div>
            </div>
          </div>
        </div>
      
        <ImpulseFooter />
      </div>
    </>
  );
};

export default Proxies;
