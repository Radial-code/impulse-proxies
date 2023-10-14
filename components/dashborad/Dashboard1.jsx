import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import Image from "next/image";
import { DashbarFooter } from "./DashbarFooter";
import DataUsagesOne from "./DataUsagesOne";
import ResidentialBoxOne from "./ResidentialBoxOne";
import YourOrderOne from "./YourOrderOne";

const Dashboard1 = () => {
  const [minRange, setMinRange] = useState(25);
  const [maxRange, setMaxRange] = useState(100);
  const gap = 10;
  const handleInputChange = (e) => {
    const targetClassName = e.target.className;
    if (maxRange - minRange < gap) {
      if (targetClassName === "range-min") {
        setMinRange(maxRange - gap);
      } else {
        setMaxRange(minRange + gap);
      }
    }
  };
  const handleMinRangeChange = (e) => {
    setMinRange(parseInt(e.target.value));
  };
  const handleMaxRangeChange = (e) => {
    setMaxRange(parseInt(e.target.value));
  };
  const progressStyle = {
    left: `${(minRange / 100) * 100}%`,
    right: `${100 - (maxRange / 100) * 100}%`,
  };
  // dropdown 
    const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState("United States");
    const [isProviderDropdownOpen, setIsProviderDropdownOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState("Residential");
    const togglePeriodDropdown = () => {
      setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
    };
    const handlePeriodSelect = (period) => {
      setSelectedPeriod(period);
      setIsPeriodDropdownOpen(false);
    };
    const toggleProviderDropdown = () => {
      setIsProviderDropdownOpen(!isProviderDropdownOpen);
    };
    const handleProviderSelect = (provider) => {
      setSelectedProvider(provider);
      setIsProviderDropdownOpen(false);
  };
  // range bar 
  const [value, setValue] = useState(500);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="relative">
        <Image
          height={150}
          width={150}
          className=" absolute end-0 bottom-[80px] z-[-1]"
          src="/assets/images/webp/Mockup_bg_blur.webp"
          alt="Mockup_bg_blur"
        />
        <Image
          height={200}
          width={200}
          className=" absolute start-0 top-0  z-[-1]"
          src="/assets/images/webp/Mockup_top_blur.webp"
          alt="Mockup_bg_blur"
        />
        <DashboardNav />
        <div className="container lg:max-w-[1320px] mx-auto px_3 px_50 px-8 mb-16">
          <div className="flex flex-wrap lg:pt-[52px] pt-[32px]">
            <div className="lg:w-[58%] w-full">
              <div className="flex flex-wrap justify-between pb-2">
                <DataUsagesOne />
                <ResidentialBoxOne />
              </div>
              <div className="rounded-lg overflow-hidden mt-12 lg:block hidden">
                <div className="bg-[#212148] ps-8 py-4">
                  <p className="mb-0 text-white text-md font-Montserrat leading-normal font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <div className="bg-[#17173A] pt-5 ps-8 pe-12">
                  <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                    Region
                  </p>
                  <div className="max-w-[782px] relative">
                    <div
                      className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px]  px-5 py-3 ${
                        isPeriodDropdownOpen ? "bg-[#212148]" : ""
                      }`}
                      onClick={togglePeriodDropdown}
                    >
                      <div className="flex justify-between items-center">
                        <p
                          className={` mb-0 ${
                            isPeriodDropdownOpen ? "text-[#fff]" : ""
                          }`}
                        >
                          {selectedPeriod}
                        </p>
                        <Image
                          src="/assets/images/svg/Polygon.svg"
                          alt="down arrow icon"
                          height={13}
                          width={13}
                        />
                      </div>
                      {isPeriodDropdownOpen && (
                        <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] ">
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  rounded-[10px] text-start py-1 px-4 cursor-pointer"
                            onClick={() => handlePeriodSelect("USA")}
                          >
                            USA
                          </p>
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent rounded-[10px] text-start mx-auto py-1 px-4 cursor-pointer"
                            onClick={() => handlePeriodSelect("Russia")}
                          >
                            Russia
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-[#17173A] pt-4 pb-6  ps-8 pe-12">
                  <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                    Proxy Type
                  </p>
                  <div className="max-w-[782px] relative">
                    <div
                      className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
                        isProviderDropdownOpen ? "bg-[#212148]" : ""
                      }`}
                      onClick={toggleProviderDropdown}
                    >
                      <div className="flex justify-between items-center">
                        <p
                          className={` mb-0 ${
                            isProviderDropdownOpen ? "text-[#fff]" : ""
                          }`}
                        >
                          {selectedProvider}
                        </p>
                        <Image
                          src="/assets/images/svg/Polygon.svg"
                          alt="down arrow icon"
                          height={13}
                          width={13}
                        />
                      </div>
                      {isProviderDropdownOpen && (
                        <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px]">
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  rounded-[10px] text-start py-1 px-4 cursor-pointer"
                            onClick={() => handleProviderSelect("Residential")}
                          >
                            Residential
                          </p>
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent  rounded-[10px] text-start mx-auto py-1 px-4 cursor-pointer"
                            onClick={() => handleProviderSelect("Datacenter")}
                          >
                            Datacenter
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-white text-lg mb-4 font-semibold leading-normal font-Montserrat">
                      Amount
                    </p>
                    <div className="flex items-start mt-3 justify-between">
                      <div className="flex justify-between items-start w-full">
                        <div className="mb-0 w-full">
                          <div>
                            <div
                              className="fle x relative justify-center items-center hidden h-[20px] w-full mx-auto rounded"
                              style={{
                                width: ` ${
                                  value > 500
                                    ? `calc(${value}% - 4px)`
                                    : `calc(${value}% + 3px)`
                                }`,
                                display: ` ${value < 2 ? `none` : ``}`,
                              }}
                            ></div>
                            <input
                              type="range"
                              min="0"
                              max="1000"
                              value={value}
                              onChange={handleChange}
                              className="custom-range w-full"
                            />
                          </div>
                          <p className=" text-white font-Montserrat leading-normal text-sm pt-5 font-medium">
                            {value} Proxies
                          </p>
                        </div>
                        <p className="w-[164px] ms-8 rounded-md font-Montserrat font-medium text-[13px] leading-normal border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[9px] ps-6">
                          {value}
                        </p>
                      </div>
                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 border-cyan-green hover:bg-[#50EED7]  hover:border-transparent hover:text-[#040426] rounded-md cursor-pointer text-cyan-green transition-all duration-150 font-Montserrat text-md font-semibold lh_normal py-2 px-6 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] hover:bg-[#50EED7] text-lg font-bold tracking-[-0.3px] bg-white rounded-lg lh_normal py-[10px] transition-all duration-150 px-8 whitespace-nowrap">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[42%] w-full xl:ps-10 lg:ps-5 lg:pt-0 sm:pt-10 pt-5">
              <YourOrderOne />
              <div className="rounded-lg overflow-hidden lg:mt-12 mt-8 lg:hidden sm:block hidden">
                <div className="bg-[#212148] ps-8 py-4">
                  <p className="mb-0 text-white text-md font-Montserrat font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <div className="bg-[#17173A] pt-5 ps-8 pe-12">
                  <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                    Region
                  </p>
                  <div className="max-w-[782px] relative">
                    <div
                      className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px]  px-5 py-3 ${
                        isPeriodDropdownOpen ? "bg-[#212148]" : ""
                      }`}
                      onClick={togglePeriodDropdown}
                    >
                      <div className="flex justify-between items-center">
                        <p
                          className={` mb-0 ${
                            isPeriodDropdownOpen ? "text-[#fff]" : ""
                          }`}
                        >
                          {selectedPeriod}
                        </p>
                        <Image
                          src="/assets/images/svg/Polygon.svg"
                          alt="down arrow icon"
                          height={13}
                          width={13}
                        />
                      </div>
                      {isPeriodDropdownOpen && (
                        <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] ">
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  rounded-[10px] text-start py-1 px-4 cursor-pointer"
                            onClick={() => handlePeriodSelect("USA")}
                          >
                            USA
                          </p>
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent rounded-[10px] text-start mx-auto py-1 px-4 cursor-pointer"
                            onClick={() => handlePeriodSelect("Russia")}
                          >
                            Russia
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-[#17173A] lg:pt-5 pt-4 pb-6 ps-8 pe-12">
                  <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                    Proxy Type
                  </p>
                  <div className="max-w-[782px] relative">
                    <div
                      className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
                        isProviderDropdownOpen ? "bg-[#212148]" : ""
                      }`}
                      onClick={toggleProviderDropdown}
                    >
                      <div className="flex justify-between items-center">
                        <p
                          className={` mb-0 ${
                            isProviderDropdownOpen ? "text-[#fff]" : ""
                          }`}
                        >
                          {selectedProvider}
                        </p>
                        <Image
                          src="/assets/images/svg/Polygon.svg"
                          alt="down arrow icon"
                          height={13}
                          width={13}
                        />
                      </div>
                      {isProviderDropdownOpen && (
                        <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px]">
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  rounded-[10px] text-start py-1 px-4 cursor-pointer"
                            onClick={() => handleProviderSelect("Residential")}
                          >
                            Residential
                          </p>
                          <p
                            className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent  rounded-[10px] text-start mx-auto py-1 px-4 cursor-pointer"
                            onClick={() => handleProviderSelect("Datacenter")}
                          >
                            Datacenter
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-white text-lg mb-4 font-semibold leading-normal font-Montserrat">
                      Amount
                    </p>
                    <div className="flex items-start mt-3 justify-between">
                      <div className="flex justify-between items-start w-full">
                        <div className="mb-0 w-full">
                          <div>
                            <div
                              className=" relative justify-center items-center hidden h-[20px] w-full mx-auto rounded"
                              style={{
                                width: ` ${
                                  value > 500
                                    ? `calc(${value}% - 4px)`
                                    : `calc(${value}% + 3px)`
                                }`,
                                display: ` ${value < 2 ? `none` : ``}`,
                              }}
                            ></div>
                            <input
                              type="range"
                              min="0"
                              max="1000"
                              value={value}
                              onChange={handleChange}
                              className="custom-range w-full"
                            />
                          </div>
                          <p className=" text-white font-Montserrat leading-normal text-sm pt-5 font-medium">
                            500 Proxies
                          </p>
                        </div>
                        <p className="w-[164px] ms-8 rounded-md font-Montserrat font-medium text-[13px] leading-normal border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[9px] ps-6">
                          {value}
                        </p>
                      </div>
                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 hover:border-transparent hover:bg-[#50EED7] transition-all duration-150 border-cyan-green rounded-md cursor-pointer text-cyan-green hover:text-[#040426] font-Montserrat text-md font-semibold lh_normal py-2 px-6 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] hover:bg-[#50EED7] transition-all duration-150 text-lg font-bold tracking-[-0.3px] bg-white rounded-lg lh_normal py-[10px] px-8 whitespace-nowrap">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <DashbarFooter />
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
