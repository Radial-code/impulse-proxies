import React, { useState } from "react";
import ProxiesTabs from "./ProxiesTabs";

const ResidentialBoxOne = () => {

  return (
    <>
      <div className="sm:w-[50%] w-full  sm:mt-0 mt-10 ">
        <div className="w-full bg-cyan-green py-[14px] px-4 rounded-lg mb-[14px]">
          <p className=" font-Montserrat text-sm text-[#050628] tracking-[1.1px] leading-normal font-bold text-center">
            RESIDENTIAL
          </p>
        </div>
       <ProxiesTabs/>
      </div>
    </>
  );
};

export default ResidentialBoxOne;
