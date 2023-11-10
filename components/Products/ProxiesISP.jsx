import React, { useState } from "react";
import Image from "next/image";
import ProductsRangbar from "./ProductsRangbar";
import ProviderDropdown from "../common/ProviderDropdown";

const ProxiesISP = () => {
  // const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  // const [selectedPeriod, setSelectedPeriod] = useState("Germany");
  const toggleProviderDropdown = () => {
    setIsProviderDropdownOpen(!isProviderDropdownOpen);
  };
  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setIsProviderDropdownOpen(false);
  };

  const [isProviderDropdownOpen, setIsProviderDropdownOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("Daily");
  // const togglePeriodDropdown = () => {
  //   setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
  // };
  // const handlePeriodSelect = (period) => {
  //   setSelectedPeriod(period);
  //   setIsPeriodDropdownOpen(false);
  // };

  const [activeTab, setActiveTab] = useState("ISP");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="relative max-w-[700px] mx-auto mt-0">
        <h2 className=" sm:text-[45px] text-2xl text-center sm:pb-10 sm:pt-7 py-7 text-white leading-[68px   ]">
          Buy your
          <span className="text-[#50EED7] mx-1 sm:mx-2">favorite</span>proxies
        </h2>
        <div className=" bg_color_rgb border-2 border-[#50EED7] rounded-[20px] sm:pt-7 sm:pb-[50px] py-7 sm:pr-11 sm:pl-16 pl-5 pr-5">
          <p className="text-center font-Montserrat font-semibold text-[17px] mb-0 leading-normal sm:pb-4 pb-2 text-white">
            ISP PROXIES
          </p>
          <p className="mx-auto bg-white h-[1px] w-[110px]"></p>
          <p className="pt-3 max-w-[435px] text-center mx-auto sm:leading-[30px] sm:text-[17px] text-sm text-[#B6B6B6] font-semibold">
            “Your one-stop solution for guaranteed success, backed by the best
            internet services providers available on the market.”
          </p>

          <ProviderDropdown />

          {/* 1. */}
          {/* <div className="flex justify-between sm:flex-row flex-col items-center gap-5 pt-6">
            <div className="sm:w-3/6 w-full">
              <p className="text-[10px] font-Montserrat font-semibold text-white mb-0">
                PROVIDER
              </p>
              <div className="w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2">
                <p className="text-[14px] font-Montserrat font-semibold text-white">
                  Telecom
                </p>
              </div>
            </div>
            <div className="sm:w-3/6 w-full relative z-[10]">
              <p className="text-white text-[10px] font-Montserrat font-semibold leading-normal mb-0">
                REGION
              </p>
              <div
                className={`w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2 ${
                  isPeriodDropdownOpen ? "bg-[#133147]" : ""
                }`}
                onClick={togglePeriodDropdown}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-[14px] font-Montserrat font-semibold text-white mb-0 ${
                      isPeriodDropdownOpen ? "text-[#50EED7]" : ""
                    }`}
                  >
                    {selectedPeriod}
                  </p>
                  <Image
                    src="/assets/images/webp/down-arrow.webp"
                    alt="down arrow icon"
                    height={13}
                    width={13}
                  />
                </div>
                {isPeriodDropdownOpen && (
                  <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-2 w-full rounded-[10px] p-1">
                    <p
                      className="text-[14px] font-Montserrat font-semibold text-white mx-auto mb-1 w-full border border-transparent hover:border-white rounded-[10px] text-center py-1 px-4 cursor-pointer transition-all duration-200 ease-in-out"
                      onClick={() => handlePeriodSelect("Germany")}
                    >
                      Germany
                    </p>
                    <p
                      className="text-[14] font-Montserrat font-semibold text-white mb-1 w-full border border-transparent hover:border-white rounded-[10px] text-center mx-auto py-1 px-4 cursor-pointer transition-all duration-200 ease-in-out"
                      onClick={() => handlePeriodSelect("United Kingdom")}
                    >
                      United Kingdom
                    </p>
                    <p
                      className="text-[14] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent hover:border-white rounded-[10px] text-center mx-auto py-1 px-4 cursor-pointer transition-all duration-200 ease-in-out"
                      onClick={() => handlePeriodSelect("Netherlands")}
                    >
                      Netherlands
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div> */}

          <div className="pt-5 relative">
            <p className="text-white text-[10px] font-Montserrat font-semibold leading-normal mb-0">
              PERIOD LENGTH
            </p>
            <div
              className={`w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2 ${
                isProviderDropdownOpen ? "bg-[#133147]" : ""
              }`}
              onClick={toggleProviderDropdown}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-[14px] font-Montserrat font-semibold text-white mb-0 ${
                    isProviderDropdownOpen ? "text-[#50EED7]" : ""
                  }`}
                >
                  {selectedProvider}
                </p>
                <Image
                  src="/assets/images/webp/down-arrow.webp"
                  alt="down arrow icon"
                  height={13}
                  width={13}
                />
              </div>
              {isProviderDropdownOpen && (
                <div className="absolute bg-[#252550] border-white start-0 border-2 w-full mt-2 z-10 rounded-[10px] p-1">
                  <p
                    className="custom-dropdown-option-001 mb-1"
                    onClick={() => handleProviderSelect("Daily")}
                  >
                    Daily
                  </p>
                  <p
                    className="custom-dropdown-option-001 mb-1"
                    onClick={() => handleProviderSelect("Weekly")}
                  >
                    Weekly
                  </p>
                  <p
                    className="custom-dropdown-option-001 mb-0"
                    onClick={() => handleProviderSelect("Monthly")}
                  >
                    Monthly
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="sm:pt-7 pt-5">
            <p className="text-white text-base font-Montserrat font-semibold leading-normal mb-0">
              Amount
            </p>
          </div>

          <ProductsRangbar />
          <div className="sm:pt-[26px] pt-5 flex justify-between items-end">
            <div>
              <p className="text-white text-[15px] font-Montserrat font-semibold leading-normal mb-0">
                Total Due
              </p>
              <p className="sm:pt-3 pt-2 text-white font-Montserrat font-medium text-[22px]">
                $13.92
                <span className="text-[13px] font-normal">/month</span>
              </p>
            </div>
            <button className="bg-white hover:bg-[#4FDCC7] hover:text-white transition-all duration-500 rounded-[10000px] text-[#040426] font-Montserrat font-semibold text-[15px] sm:px-[43px] px-5 py-[10px]">
              Checkout
            </button>
          </div>
        </div>
        <div className="absolute hidden md:block start-[-80px] top-[60px]">
          <Image
            src="/assets/images/webp/proxies_box_top_img.webp"
            alt="proxies box top image"
            height={123}
            width={145}
          />
        </div>
        <div className="absolute hidden md:block end-[-40px] bottom-[-40px]">
          <Image
            src="/assets/images/webp/proxies_box_bottom_img.webp"
            alt="proxies box bottom image"
            height={114}
            width={74}
          />
        </div>
      </div>
    </>
  );
};

export default ProxiesISP;
