import React, { useState } from "react";
import Image from "next/image";
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
  // const [value, setValue] = useState(500);
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const [value, setValue] = useState(500);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // Calculate the percentage value
    const percentage = (newValue / 1000) * 100;
    // Apply the dynamic background color to the range input
    const rangeInput = document.querySelector(".range-input");
    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4FDCC7 0%, #4FDCC7 ${percentage}%, #3c3c6b ${percentage}%, #3c3c6b 100%)`;
    }
  };
  return (
    <>
      <div className=" relative">
        <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
        <div className="relative md:pl-16">
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
                <div className="rounded-2xl overflow-hidden mt-12 lg:block hidden GENERATE_PROXIES_box pb-[52px]">
                  <div className="bg-[#212148] ps-8 py-5">
                    <p className="mb-0 text-white text-md font-Montserrat leading-normal font-bold tracking-[1.4px]">
                      GENERATE PROXIES
                    </p>
                  </div>
                  <div className="pt-5 ps-8 pe-12">
                    <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                      Region
                    </p>
                    <div className="w-full relative">
                      <div
                        className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px]  px-5 py-3 ${
                          isPeriodDropdownOpen ? "bg-[#212148]" : ""
                        }`}
                        onClick={togglePeriodDropdown}
                      >
                        <div className="flex justify-between items-center">
                          <p
                            className={` text-white font-Montserrat font-normal text-[14] mb-0 ${
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
                            loading="lazy"
                          />
                        </div>
                        {isPeriodDropdownOpen && (
                          <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                            <p
                              className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  duration-300 ease-in-out text-start py-1 px-4 hover:bg-[#4FDCC7]  cursor-pointer"
                              onClick={() => handlePeriodSelect("USA")}
                            >
                              USA
                            </p>
                            <p
                              className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent duration-300 ease-in-out text-start mx-auto py-1 px-4  mt-2 hover:bg-[#4FDCC7] cursor-pointer"
                              onClick={() => handlePeriodSelect("Russia")}
                            >
                              Russia
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=" pt-5 pb-6  ps-8 pe-12">
                    <p className="text-white text-lg mb-[14px] font-semibold leading-normal font-Montserrat">
                      Proxy Type
                    </p>
                    <div className="w-full relative">
                      <div
                        className={`w-full bg-[#212148] cursor-pointer font-Montserrat font-medium rounded-[11px] px-5 py-3 ${
                          isProviderDropdownOpen ? "bg-[#212148]" : ""
                        }`}
                        onClick={toggleProviderDropdown}
                      >
                        <div className="flex justify-between items-center">
                          <p
                            className={` text-white font-Montserrat font-normal text-[14]  mb-0 ${
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
                            loading="lazy"
                          />
                        </div>
                        {isProviderDropdownOpen && (
                          <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px] py-4">
                            <p
                              className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent text-start py-1 px-4 cursor-pointer hover:bg-[#4FDCC7] duration-300 ease-in-out"
                              onClick={() =>
                                handleProviderSelect("Residential")
                              }
                            >
                              Residential
                            </p>
                            <p
                              className="text-[16px] font-Montserrat font-semibold text-white mb-0 w-full border border-transparent text-start mx-auto py-1 px-4 mt-3 cursor-pointer hover:bg-[#4FDCC7] duration-300 ease-in-out"
                              onClick={() => handleProviderSelect("Datacenter")}
                            >
                              Datacenter
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className=" mt-7">
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
                                className="custom-range w-full range-input"
                              />
                            </div>
                            <p className=" text-white font-Montserrat leading-normal text-sm pt-5 font-medium">
                              {value} Proxies
                            </p>
                          </div>
                          <p className="text-white w-[164px] ms-8 rounded-md font-Montserrat font-medium text-[13px] leading-normal border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[9px] ps-6">
                            {value}
                          </p>
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
                            className={`font-Montserrat text-white text-[14px] font-medium mb-0 ${
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
                            loading="lazy"
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
                            className={` font-Montserrat text-white text-[14px] font-medium mb-0 ${
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
                            loading="lazy"
                          />
                        </div>
                        {isProviderDropdownOpen && (
                          <div className="absolute start-0 z-10 bg-[#252550] border-white border-2 mt-4 w-full rounded-[10px]">
                            <p
                              className="text-[16px] font-Montserrat font-semibold text-white mx-auto mb-0 w-full border border-transparent  rounded-[10px] text-start py-1 px-4 cursor-pointer"
                              onClick={() =>
                                handleProviderSelect("Residential")
                              }
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

                    <div className=" mt-5">
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
                                className="custom-range w-full range-input"
                              />
                            </div>
                            <p className=" text-white font-Montserrat leading-normal text-sm pt-5 font-medium">
                              {value} Proxies
                            </p>
                          </div>
                          <p className=" text-white w-[164px] ms-8 rounded-md font-Montserrat font-medium text-[13px] leading-normal border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[9px] ps-6">
                            {value}
                          </p>
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
      </div>
    </>
  );
};

export default Dashboard1;
