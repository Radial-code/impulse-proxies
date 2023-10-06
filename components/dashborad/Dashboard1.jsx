import React from "react";
import DashboardNav from "./DashboardNav";
import Image from "next/image";
import Link from "next/link";

const Dashboard1 = () => {
  return (
    <>
      <DashboardNav />
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
        <div className="flex flex-wrap">
          {/* big box */}
          <div className="w-7/12">
            <div className="flex flex-wrap justify-between">
              {/* data box */}
              <div className="w-6/12 xl:pe-6 pe-2 h-full">
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
              <div className="w-6/12 xl:ps-7 ps-2">
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
            <div className="rounded-lg overflow-hidden">
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
                <select
                  name="countery"
                  id="countery"
                  className="w-full bg-[#212148] px-4 py-3.5"
                >
                  <option value="United States">United States</option>
                  <option value="india">India</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-5/12 ps-10">
            <div className="bg-[#1E1E43] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-white font-sans text-sm font-bold tracking-[1.1px] mb-0">
                    YOUR ORDER
                  </p>
                  <p className=" font-Montserrat text-[#505082] text-sm text-bold tracking-[1.2px]">
                    #48848191
                  </p>
                </div>
                <button className="text-[#7777AD] bg-[#292956] rounded-md font-Montserrat text-md font-semibold tracking-[-0.28px] px-3.5 py-3">
                  Download.txt
                </button>
                <button className="text-[#040426] bg-white rounded-md font-Montserrat text-md font-bold tracking-[-0.28px] px-3.5 py-3">
                  Copy to Clipboard
                </button>
              </div>
              <p className="text-[#9D9DBB] font-Montserrat text-xl font-medium mt-6">
                83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;