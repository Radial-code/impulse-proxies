import React from 'react'
import Link from "next/link";

const ResidentialBoxOne = () => {
  return (
    <>
      <div className="sm:w-6/12 w-full xl:ps-7 sm:ps-2 sm:mt-0 mt-10">
        <div className="w-full bg-cyan-green py-[14px] px-4 rounded-lg mb-[14px]">
          <p className=" font-Montserrat text-sm text-[#050628] tracking-[1.1px] leading-normal font-bold">
            RESIDENTIAL
          </p>
        </div>
        <div className="w-full bg-[#4FDCC7] rounded-lg p-[14px]">
          <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
            <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl leading-normal font-bold text-[#268375] mb-0 group-hover:text-black">
              1 GB
            </p>
            <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat leading-normal text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
              $9.99
            </p>
          </div>
          <div className="bg-[#7BF3E1] w-full my-[10px] rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
            <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl font-bold leading-normal text-[#268375] mb-0 group-hover:text-black">
              1 GB
            </p>
            <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat leading-normal text-sm font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
              $9.99
            </p>
          </div>
          <div className="bg-[#7BF3E1] w-full rounded-lg ps-6 py-2 flex items-center hover:bg-white group transition-all ease-in-out duration-150">
            <p className=" font-Montserrat transition-all ease-in-out duration-150 text-2xl font-bold leading-normal text-[#268375] mb-0 group-hover:text-black">
              1 GB
            </p>
            <p className="text-[#35A091] transition-all ease-in-out duration-150 font-Montserrat text-sm leading-normal font-semibold ms-3 mb-0 group-hover:text-[#7F7F86]">
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
    </>
  );
}

export default ResidentialBoxOne;