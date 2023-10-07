import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import Image from "next/image";
import Link from "next/link";
import { DashbarFooter } from "./DashbarFooter";

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
        <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>

        <DashboardNav />
        <div className="container lg:max-w-[1320px] mx-auto lg:px-3 px-8 mb-16">
          <div className="flex flex-wrap">
            {/* big box */}
            <div className="lg:w-7/12 w-full">
              <div className="flex flex-wrap justify-between pb-2">
                {/* data box */}
                <div className="sm:w-6/12 w-full xl:pe-6 pe-2 h-full">
                  <div className="w-full h-full flex flex-col bgData border border-[#1F4E60] p-8 pb-9 rounded-xl">
                    <div className="flex items-center justify-between">
                      <p className="font-Montserrat mb-0 text-white font-bold text-md tracking-[1.4px] flex items-center">
                        <Image
                          width={18}
                          height={18}
                          src="./assets/images/svg/dataSmall.svg"
                          className="me-3"
                          alt="image"
                        />
                        DATA USAGE
                      </p>
                      <p className="text-sm font-Montserrat font-semibold tracking-[1.3px] text-[#D4D4F1]">
                        4GB <span className="text-[#8282AB]">PLAN</span>
                      </p>
                    </div>
                    <div className=" flex items-center justify-center mt-4 relative">
                      <Image
                        height={185}
                        width={185}
                        alt="image"
                        src="./assets/images/svg/dataCircle.svg"
                      />
                      <div className="flex items-center justify-center flex-col absolute">
                        <p className="text-white font-Montserrat font-bold tracking-[1.75px] text-[35px] mb-0">
                          3.8
                        </p>
                        <p className=" whitespace-nowrap text-[#8282AB] font-Montserrat font-semibold tracking-[1.3px] text-md">
                          GB LEFT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gb box */}
                <div className="sm:w-6/12 w-full xl:ps-7 sm:ps-2 sm:mt-0 mt-10">
                  {/* btn */}
                  <div className="w-full bg-cyan-green py-3.5 px-4 rounded-lg mb-3.5">
                    <p className=" font-Montserrat text-sm text-[#050628] font-bold">
                      RESIDENTIAL
                    </p>
                  </div>
                  {/* gb */}
                  <div className="w-full bg-[#4FDCC7] rounded-lg p-4">
                    <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
                      <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl font-bold text-[#268375] mb-0 group-hover:text-black">
                        1 GB
                      </p>
                      <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
                        $9.99
                      </p>
                    </div>
                    <div className="bg-[#7BF3E1] w-full my-3 rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
                      <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl font-bold text-[#268375] mb-0 group-hover:text-black">
                        1 GB
                      </p>
                      <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
                        $9.99
                      </p>
                    </div>
                    <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
                      <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl font-bold text-[#268375] mb-0 group-hover:text-black">
                        1 GB
                      </p>
                      <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
                        $9.99
                      </p>
                    </div>
                    <div className="w-full flex justify-end mt-6">
                      <Link
                        href="#"
                        className="text-[#050628] text-end group text-sm font-bold tracking-[1.1px] font-Montserrat flex items-center mn-0"
                      >
                        CONTINUE
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="ms-2 group-hover:translate-x-2 transition-all ease-in-out duration-150"
                        >
                          <mask
                            id="mask0_856_772"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="14"
                            height="14"
                          >
                            <rect
                              x="14"
                              y="14"
                              width="14"
                              height="14"
                              transform="rotate(180 14 14)"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_856_772)">
                            <path
                              d="M4.66667 1.16732L10.5 7.00065L4.66667 12.834L3.63125 11.7986L8.42917 7.00065L3.63125 2.20273L4.66667 1.16732Z"
                              fill="#050628"
                            />
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* genrate box */}
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
                  {/* dropdown */}
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
                  {/* dropdown */}
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
              <div className="bg-[#1E1E43] p-4 rounded-lg lg:h-full">
                <div className="flex sm:items-center items-start justify-between">
                  <div className="flex flex-col">
                    <p className="text-white font-sans text-sm font-bold tracking-[1.1px] mb-0">
                      YOUR ORDER
                    </p>
                    <p className=" font-Montserrat text-[#505082] text-sm text-bold tracking-[1.2px]">
                      #48848191
                    </p>
                  </div>
                  <div className="flex sm:flex-row flex-col">
                    <button className="text-[#7777AD] bg-[#292956] rounded-md font-Montserrat text-md font-semibold tracking-[-0.28px] px-3.5 py-3">
                      Download.txt
                    </button>
                    <button className="text-[#040426] sm:mt-0 mt-3 bg-white rounded-md font-Montserrat text-md font-bold tracking-[-0.28px] px-3.5 py-3 sm:ms-4">
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-6">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#9D9DBB] font-Montserrat sm:text-xl text-[12px] font-medium mt-[6px]">
                  83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
                </p>
                <p className="text-[#505082] font-Montserrat text-sm text-end  tracking-[1.2px] font-bold pe-24 pt-6">
                  500 PROXIES
                </p>
              </div>
              {/* genrate box */}
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
                  {/* dropdown */}
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
                  {/* dropdown */}
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
