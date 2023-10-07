import Link from "next/link";
import React from "react";

export const DashbarFooter = () => {
  return (
    <>
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
        <div className="flex items-center justify-center sm:gap-[52px] gap-2">
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-0 after:bottom-0"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-0 after:bottom-0"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-0 after:bottom-0"
            href="#"
          >
            Refund Policy
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-0 after:bottom-0"
            href="#"
          >
            Privacy
          </Link>
        </div>
        <p className="text-[#8888B1] text-center font-Montserrat text-sm font-semibold mt-6 mb-0">
          © Landsgesell & Graca Costa Solutions GbR 2023, All Rights Reserved
        </p>
      </div>
    </>
  );
};
