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
  return (
    <>
      <div className="relative">
        <Image
          height={150}
          width={150}
          className=" absolute end-0 bottom-[80px] z-[-1]"
          src="/assets/images/png/Mockup_bg_blur.png"
          alt="Mockup_bg_blur"
        />
        <Image
          height={200}
          width={200}
          className=" absolute start-0 top-0  z-[-1]"
          src="/assets/images/png/Mockup_top_blur.png"
          alt="Mockup_bg_blur"
        />
        <DashboardNav />
        <div className="container lg:max-w-[1320px] mx-auto lg:px-3 px-8 mb-16">
          <div className="flex flex-wrap">
            <div className="lg:w-7/12 w-full">
              <div className="flex flex-wrap justify-between pb-2">
                <DataUsagesOne />
                <ResidentialBoxOne/>
              </div>
              <div className="rounded-lg overflow-hidden mt-12 lg:block hidden">
                <div className="bg-[#212148] ps-8 py-4">
                  <p className="mb-0 text-white text-md font-Montserrat font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <div className="bg-[#17173A] pt-5  ps-8 pe-12">
                  <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                    Region
                  </p>
                  <div className="bg-[#212148] px-4 py-3.5 rounded-lg">
                    <select
                      name="countery"
                      id="countery"
                      className="w-full border-0 outline-none focus-visible:outline-none cursor-pointer bg-[#212148]"
                    >
                      <option value="United States">United States</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                </div>
                <div className="bg-[#17173A] pt-5 pb-6  ps-8 pe-12">
                  <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                    Proxy Type
                  </p>
                  <div className="bg-[#212148] px-4 py-3.5 rounded-lg">
                    <select
                      name="countery"
                      id="countery"
                      className="w-full border-0 outline-none focus-visible:outline-none cursor-pointer bg-[#212148]"
                    >
                      <option value="United States">Residential</option>
                      <option value="india">option</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                      Amount
                    </p>
                    <div class="flex items-start mt-3 justify-between">
                      <div className="flex justify-between items-start w-full">
                        <div className="mb-0 pt-3 w-full">
                          <div className="flex relative justify-center items-center h-[20px] w-full mx-auto rounded">
                            <div className="range-slider">
                              <div
                                className="progress"
                                style={progressStyle}
                              ></div>
                              <span className="range-min-wrapper">
                                <input
                                  className="range-min"
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={minRange}
                                  onChange={handleMinRangeChange}
                                  onInput={handleInputChange}
                                />
                              </span>
                              <span className="range-max-wrapper">
                                <input
                                  className="range-max"
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={maxRange}
                                  onChange={handleMaxRangeChange}
                                  onInput={handleInputChange}
                                />
                              </span>
                            </div>
                          </div>
                          <p className=" text-white font-Montserrat text-sm pt-5 font-medium">
                            500 Proxies
                          </p>
                        </div>
                        <p className="w-[164px] ms-8 rounded-md border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[10px] ps-6">
                          500
                        </p>
                      </div>
                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 border-cyan-green rounded-md text-cyan-green font-Montserrat text-md font-semibold lh_normal py-3 px-8 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] text-lg font-bold tracking-[-0.3px] bg-white rounded-lg  lh_normal py-3 px-8 whitespace-nowrap">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 w-full xl:ps-10 lg:ps-5 lg:pt-0 sm:pt-10 pt-5">
              <YourOrderOne/>
              <div className="rounded-lg overflow-hidden sm:mt-12 mt-7 lg:hidden sm:block hidden">
                <div className="bg-[#212148] ps-8 py-4">
                  <p className="mb-0 text-white text-md font-Montserrat font-bold tracking-[1.4px]">
                    GENERATE PROXIES
                  </p>
                </div>
                <div className="bg-[#17173A] pt-5  ps-8 pe-12">
                  <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                    Region
                  </p>
                  <div className="bg-[#212148] px-4 py-3.5 rounded-lg">
                    <select
                      name="countery"
                      id="countery"
                      className="w-full border-0 outline-none focus-visible:outline-none cursor-pointer bg-[#212148]"
                    >
                      <option value="United States">United States</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                </div>
                <div className="bg-[#17173A] pt-5 pb-6  ps-8 pe-12">
                  <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                    Proxy Type
                  </p>
                  <div className="bg-[#212148] px-4 py-3.5 rounded-lg">
                    <select
                      name="countery"
                      id="countery"
                      className="w-full border-0 outline-none focus-visible:outline-none cursor-pointer bg-[#212148]"
                    >
                      <option value="United States">Residential</option>
                      <option value="india">option</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <p className="text-white text-lg mb-4 font-semibold font-Montserrat">
                      Amount
                    </p>
                    <div class="flex items-start mt-3 justify-between">
                      <div className="flex items-start">
                        <div className="mb-0 pt-3 w-full">
                          <div className="flex relative justify-center items-center h-[20px] w-full mx-auto rounded">
                            <div className="range-slider">
                              <div
                                className="progress"
                                style={progressStyle}
                              ></div>
                              <span className="range-min-wrapper">
                                <input
                                  className="range-min"
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={minRange}
                                  onChange={handleMinRangeChange}
                                  onInput={handleInputChange}
                                />
                              </span>
                              <span className="range-max-wrapper">
                                <input
                                  className="range-max"
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={maxRange}
                                  onChange={handleMaxRangeChange}
                                  onInput={handleInputChange}
                                />
                              </span>
                            </div>
                          </div>
                          <p className=" text-white font-Montserrat text-sm pt-5 font-medium">
                            500 Proxies
                          </p>
                        </div>
                        <p className="w-[164px] ms-8 rounded-md border-[1px_solid_rgba(255, 255, 255, 0.05)] bg-[#252550] py-[10px] ps-6">
                          500
                        </p>
                      </div>
                      <div className="flex flex-col ms-5">
                        <button className="border mb-4 border-cyan-green rounded-md text-cyan-green font-Montserrat text-md font-semibold lh_normal py-3 px-8 whitespace-nowrap">
                          Max Qty.
                        </button>
                        <button className=" font-Montserrat text-[#040426] text-lg font-bold tracking-[-0.3px] bg-white rounded-lg  lh_normal py-3 px-8 whitespace-nowrap">
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
