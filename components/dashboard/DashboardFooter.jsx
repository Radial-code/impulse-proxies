import Link from "next/link";
import React from "react";

export const DashboardFooter = () => {
  return (
    <>
      <div className="2xl:w-full 2xl:px-24 py-5 px-6 mx-auto">
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
      </div>
    </>
  );
};
export default DashboardFooter;
