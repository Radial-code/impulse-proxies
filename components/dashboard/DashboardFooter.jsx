import Link from "next/link";
import React from "react";

export const DashboardFooter = () => {
  return (
    <>
      <div className="absolute w-full bottom-0 pt-5 bg-[#040426]">
        <div className="2xl:w-full 2xl:px-24 pt-5 px-6 mx-auto">
          <div className="flex items-center sm:justify-center justify-between sm:px-0 px-2 sm:gap-[52px] gap-2">
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
          <div className="bg-blue sm:py-4 lg:py-5 py-2">
            <p className="text-outline text-center sm:text-[12px] text-[10px]">
              © Landsgesell & Graca Costa Solutions GbR 2023, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardFooter;
