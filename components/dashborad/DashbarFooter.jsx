import Link from "next/link";
import React from "react";

export const DashbarFooter = () => {
  return (
    <>
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto my-5 xl:px-3 px-4">
        <div className="flex items-center justify-center sm:gap-[52px] gap-2">
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px]"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px]"
            href="#"
          >
            Refund Policy
          </Link>
          <Link
            className="text-white font-Montserrat font-bold lh_normal sm:text-lg text-[12px]"
            href="#"
          >
            Privacy
          </Link>
        </div>
        <p className="text-[#040426] font-Montserrat text-sm font-semibold mt-2 mb-0">
          © Landsgesell & Graca Costa Solutions GbR 2023, All Rights Reserved
        </p>
      </div>
    </>
  );
};
