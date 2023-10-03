import React from "react";
import { CurrentData } from "./common/Helper";
import Link from "next/link";
import { Discord, Ques, Slack, Spotify } from "./common/Icons";

const Current = () => {
  return (
    <>
      <div className="currentBg border-[1px] border-[#1F374F] py-7 ms-[-10px] me-[-10px]">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
          <div className="flex flex-wrap justify-around sm:gap-0 gap-4">
            {CurrentData.map((data) => {
              return (
                <div key={data.id} className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full">
                  <p className="text-white text-center font-TT_interfaces font-bold leading-[136%] tracking-[-1px] text-7xl">
                    {data.number}
                  </p>
                  <p className="text-center text-[#9898A3] text-2xl font-semibold leading-[157%] font-TT_interfaces">
                    {data.current}
                  </p>
                </div> 
              );
            })}
          </div>
          <hr className="bg-[#2D3752] w-full h-[1px] border-0 mt-6 mb-7" />
          <p className="opacity-40 tracking-[1.5px] font-bold lh_normal text-xs font-Montserrat text-center">
            TRUSTED BY OUR PARTNERS
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link href="https://slack.com/">
              <Slack />
            </Link>
            <Link href="https://slack.com/" className="ms-7">
              <Ques />
            </Link>
            <Link href="https://discord.com/" className="ms-7">
              <Discord />
            </Link>
            <Link href="https://open.spotify.com/" className="ms-7">
              <Spotify />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
