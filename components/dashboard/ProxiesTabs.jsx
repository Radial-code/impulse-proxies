import Link from "next/link";
import React, { useState } from "react";

const ProxiesTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="w-full bg-[#4FDCC7] rounded-[16px] p-[14px]">
        <div
          className={`${
            activeTab === 1 ? "bg-white " : ""
          } rounded-lg w-full cursor-pointer ps-6 py-2 flex bg-[#7BF3E1] mb-3 items-center transition-all ease-in-out duration-150`}
          onClick={() => handleTabClick(1)}
        >
          <p
            className={` font-Montserrat transition-all ease-in-out duration-150 text-2xl leading-normal font-bold text-[#268375] mb-0 group-hover:text-black active:group-hover:text-black ${
              activeTab === 1 ? "text-black" : ""
            }`}
          >
            1 GB
          </p>
          <p
            className={`text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat leading-normal text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86] ${
              activeTab === 1 ? "text-black" : ""
            }`}
          >
            $9.99
          </p>
        </div>
        <div
          className={`${
            activeTab === 2 ? "bg-white " : ""
          } rounded-lg w-full cursor-pointer bg-[#7BF3E1] my-3 ps-6 py-2 flex items-center transition-all ease-in-out duration-150`}
          onClick={() => handleTabClick(2)}
        >
          <p
            className={` font-Montserrat transition-all ease-in-out duration-150 text-2xl leading-normal font-bold text-[#268375] mb-0 group-hover:text-black active:group-hover:text-black ${
              activeTab === 2 ? "text-black" : ""
            }`}
          >
            1 GB
          </p>
          <p
            className={`text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat leading-normal text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86] ${
              activeTab === 2 ? "text-black" : ""
            }`}
          >
            $9.99
          </p>
        </div>
        <div
          className={`${
            activeTab === 3 ? "bg-white" : ""
          } rounded-lg w-full cursor-pointer ps-6 py-2 bg-[#7BF3E1] mt-3 flex items-center transition-all ease-in-out duration-150`}
          onClick={() => handleTabClick(3)}
        >
          <p
            className={` font-Montserrat transition-all ease-in-out duration-150 text-2xl leading-normal font-bold text-[#268375] mb-0 group-hover:text-black active:group-hover:text-black ${
              activeTab === 3 ? "text-black" : ""
            }`}
          >
            1 GB
          </p>
          <p
            className={`text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat leading-normal text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86] ${
              activeTab === 3 ? "text-black" : ""
            }`}
          >
            $9.99
          </p>
        </div>
        <div className="w-full flex justify-end mt-6">
          <Link
            href="#"
            aria-label="CONTINUE"
            className="text-[#050628] text-end group text-sm font-bold leading-normal tracking-[1.1px] font-Montserrat flex items-center mn-0"
          >
            CONTINUE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="ms-4 group-hover:translate-x-2 transition-all ease-in-out duration-150"
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
    </>
  );
};

export default ProxiesTabs;
