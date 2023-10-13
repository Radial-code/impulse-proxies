import Link from "next/link";
import React, { useState } from "react";

const IspProxies = () => {
  const [activeTab, setActiveTab] = useState("ISP");
  const handleTabClick = (tab) => {
      setActiveTab(tab);
      
  };
  const tabContent = {
    ISP: (
      <div className="w-full bg-[#4FDCC7] rounded-lg p-4 mt-3">
        <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all min-h-[44px] ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="bg-[#7BF3E1] w-full my-3 rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="w-full rounded-lg ps-6 py-2 flex items-center bg-white group transition-all min-h-[44px] ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="w-full flex justify-end md:mt-6 mt-4">
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
    ),
    DC: (
      <div className="w-full bg-[#4FDCC7] rounded-lg p-4 mt-3">
        <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="bg-[#7BF3E1] w-full my-3 rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
          <p className=" font-Montserrat transition-all ease-in-out duration-150 sm:text-2xl text-[15px] font-bold text-[#268375] mb-0 group-hover:text-black">
            1 GB
          </p>
          <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
            $9.99
          </p>
        </div>
        <div className="w-full flex justify-end md:mt-6 mt-4">
          <Link
            href="#"
            className="text-[#050628] text-end group text-sm font-bold tracking-[1.1px] leading-normal font-Montserrat flex items-center mn-0"
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
          }  py-[12px] pl-10 pr-10 text-white font-Montserrat font-bold text-[11px]
          leading-normal whitespace-nowrap md:tracking-[1.1px]`}
        >
          ISP PROXIES
        </button>
        <button
          onClick={() => handleTabClick("DC")}
          className={`${
            activeTab === "DC"
              ? "bg-[#50EED7] rounded-[10px] !text-[#050628]"
              : "border-transparent"
          }   py-[12px] pl-9 pr-9 text-white font-Montserrat font-bold text-[11px]
          leading-normal whitespace-nowrap md:tracking-[1.1px]`}
        >
          DC PROXIES
        </button>
      </div>
      {tabContent[activeTab]}
    </>
  );
};

export default IspProxies;
