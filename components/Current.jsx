import React from "react";
import { CurrentData } from "./common/Helper";
import Link from "next/link";
import Image from "next/image";
const Current = () => {
  return (
    <>
      <div className=" bg_current z-10  relative after:contents-[''] after:absolute after:w-full border-[1px] border-[#1F374F] sm:pb-6 sm:pt-14 py-11 ms-[-10px] me-[-10px] border-b-0">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <div className="flex flex-wrap justify-around">
            {CurrentData.map((data) => {
              return (
                <div key={data.id} className="md:w-3/12 sm:w-4/12 w-6/12 ">
                  <p className="text-white text-center font-bold leading-[136%] tracking-[-1px] lg:text-7xl md:text-[38px] text-[30px] sm:mt-0 mt-5 ">
                    {data.number}
                  </p>
                  <p className="text-center text-dark-gray lg:text-2xl text-[15px] font-semibold leading-[157%] ">
                    {data.current}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="bg-[#2D3752] w-full h-[1px] border-0 mt-6 mb-7 " />
          <p className="opacity-40 tracking-[1.5px] font-bold lh_normal text-xs font-Montserrat text-center text-white">
            TRUSTED BY OUR PARTNERS
          </p>
          <div className="flex items-center justify-center mt-6 gap-8">
            <Link href="" target="_blank">
              <Image
                height={66}
                width={66}
                src="/assets/images/svg/N_icon_current.svg"
                alt="N icon"
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                height={66}
                width={66}
                src="/assets/images/svg/mango_icon_current.svg"
                alt="N icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
