import React from "react";
import { ImpulseTweeter } from "./common/Icons";
import Link from "next/link";
import { AboutBox } from "./common/Helper";
import Image from "next/image";
const ImpulseAbout = () => {
  return (
    <div className="bg-[#141436] pt-24 relative z-10">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative">
        <Image
          src="/assets/images/svg/aboutTop.svg"
          alt="aboutTop"
          width={144}
          height={122}
          className="absolute lg:top-[-35%] top-[-24%] text-3xl"
        />
        <p className=" font-Montserrat text-6xl text-white font-bold leading-[121%]">
          About <span className="text-[#50EED7]">Us</span>
        </p>
        <p className="font-TT_Interfaces text-[#9898A3] leading-[157%] font-semibold text-2xl max-w-[380px] pt-2 tracking-[-0.74px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex lg:flex-nowrap justify-center flex-wrap lg:gap-6 pb-24 lg:mt-10">
          {AboutBox.map((about) => {
            return (
              <div
                key={about.id}
                className={`lg:w-6/12 sm:w-10/12 w-full  rounded-[20px] p-[2px] inline-block lg:mt-0 mt-5 ${about.border}`}
              >
                <div className="block rounded-[20px] w-full bg-[#080D2D] sm:ps-8 ps-4 pb-6 sm:pt-9 pt-4 sm:pe-6 pe-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Image
                        height={81}
                        width={81}
                        src={about.aboutImg}
                        alt="about image"
                      />
                      <div className="ps-5 flex">
                        <div>
                          <p className="mb-0 text-white font-Montserrat leading-[204%] tracking-[-0.44px] text-3xl font-bold">
                            About
                            <span className="text-[#50EED7] ms-1">
                              {about.impulse}
                            </span>
                          </p>
                          <p className="sm:mb-6 text-white font-Montserrat font-medium leading-[178%] text-md opacity-70 sm:max-w-[247px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex hidden flex-col items-center  justify-between sm:pt-2">
                      <span className="">
                        <Link href="https://twitter.com/">
                          <ImpulseTweeter />
                        </Link>
                      </span>
                      <div className=" flex items-center justify-end sm:pt-2 pt-3">
                        <Image
                          height={27}
                          width={27}
                          src="/assets/images/svg/AboutLogo.svg"
                        />
                        <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-lg ps-[10px]">
                          IMPULSE
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:hidden items-center  justify-between sm:pt-2">
                    <span className="">
                      <Link href="https://twitter.com/">
                        <ImpulseTweeter />
                      </Link>
                    </span>
                    <div className=" flex items-center justify-end sm:pt-2 pt-3">
                      <Image
                        height={27}
                        width={27}
                        src="/assets/images/svg/AboutLogo.svg"
                      />
                      <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-lg ps-[10px]">
                        IMPULSE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImpulseAbout;
