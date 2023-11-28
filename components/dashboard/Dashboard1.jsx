import React, { useEffect, useState } from "react";
import Image from "next/image";
import DataUsagesOne from "./DataUsagesOne";
import ResidentialBoxOne from "./ResidentialBoxOne";
import YourOrderOne from "./YourOrderOne";
import CommonDashboardDropdown from "./CommonDashboardDropdown";
import DashboardRangeBar from "../Products/DashboardRangeBar";

const Dashboard1 = () => {
  // DROPDOWN
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  const [isProviderDropdownOpen, setIsProviderDropdownOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("Residential");
  const [rangeValue, setRangeValue] = useState(1);
  const togglePeriodDropdown = () => {
    setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
  };
  const toggleProviderDropdown = () => {
    setIsProviderDropdownOpen(!isProviderDropdownOpen);
  };
  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setIsProviderDropdownOpen(false);
  };
  useEffect(() => {
    const value = localStorage.getItem("lastname");
    console.log(value, "value");
    setRangeValue(value);
  }, []);
  console.log(rangeValue, "rangeValue");
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-full absolute bottom-[40px] overflow-hidden top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
        <Image
          height={150}
          width={150}
          className=" absolute end-0 bottom-[80px] z-[-1]"
          src="/assets/images/webp/Mockup_bg_blur.webp"
          alt="Mockup_bg_blur"
          loading="lazy"
        />
        <Image
          height={200}
          width={200}
          className=" absolute start-0 top-0  z-[-1]"
          src="/assets/images/webp/Mockup_top_blur.webp"
          alt="Mockup_bg_blur"
          loading="lazy"
        />

        <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:pt-[52px] pt-[32px] gap-5 xl:gap-12">
            <div className="w-full">
              <div className="flex flex-wrap justify-center md:justify-between pb-2">
                <DataUsagesOne />
                <ResidentialBoxOne />
              </div>

              <div className="rounded-2xl overflow-hidden mt-12 lg:block hidden GENERATE_PROXIES_box pb-[52px] w-full">
                <div className="ps-8 py-[22px] genrateSpace">
                  <p className="mb-0 text-white text-md font-Montserrat leading-normal font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <CommonDashboardDropdown />
                <div className="ps-8 pe-12">
                  <div className="mt-7">
                    <p className="text-white text-lg mb-4 font-semibold leading-normal font-Montserrat">
                      Amount
                    </p>

                    <div className="flex items-start mt-3 justify-between">
                      <div className="w-full">
                        <DashboardRangeBar identifier="first" />
                      </div>

                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 border-cyan-green hover:bg-[#50EED7]  hover:border-transparent hover:text-[#040426] rounded-md cursor-pointer text-cyan-green transition-all duration-300 font-Montserrat text-md font-semibold lh_normal h-[38px] px-6 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] hover:bg-[#50EED7] text-lg font-bold tracking-[-0.3px] bg-white rounded-lg lh_normal h-[38px] transition-all duration-300 px-8 whitespace-nowrap">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[702px] 2xl:w-[642px] lg:pt-0 sm:pt-10 pt-5">
              <YourOrderOne />
              <div className="rounded-lg overflow-hidden lg:mt-12 mt-8 lg:hidden sm:block hidden  GENERATE_PROXIES_box">
                <div className="bg-[#212148] ps-8 py-4">
                  <p className="mb-0 text-white text-md font-Montserrat font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <CommonDashboardDropdown />

                <div className="lg:pt-5 pt-4 pb-6 ps-8 pe-12">
                  <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                    Proxy Type
                  </p>
                  <div className="max-w-[782px] relative">
                    <div
                      className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 leading-normal ${
                        isProviderDropdownOpen ? "bg-[#212148]" : ""
                      }`}
                      onClick={toggleProviderDropdown}
                    >
                      <div className="flex justify-between items-center">
                        <p
                          className={` font-Montserrat text-white text-[14px] font-medium mb-0 ${
                            isProviderDropdownOpen ? "text-[#fff]" : ""
                          }`}
                        >
                          {selectedProvider}
                        </p>
                        <Image
                          src="/assets/images/webp/Polygon.webp"
                          alt="down arrow icon"
                          height={13}
                          width={13}
                          loading="lazy"
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
                      <div className="w-full">
                        <DashboardRangeBar identifier="second" />
                      </div>
                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 border-cyan-green hover:bg-[#50EED7]  hover:border-transparent hover:text-[#040426] rounded-md cursor-pointer text-cyan-green transition-all duration-300 font-Montserrat text-md font-semibold lh_normal h-[38px] px-6 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] hover:bg-[#50EED7] text-lg font-bold tracking-[-0.3px] bg-white rounded-lg lh_normal h-[38px] transition-all duration-300 px-8 whitespace-nowrap">
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
        <div className="mb-8"></div>
      </div>
    </>
  );
};

export default Dashboard1;
