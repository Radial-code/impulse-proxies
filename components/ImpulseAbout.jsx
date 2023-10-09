import React from "react";
import { ImpulseTweeter } from "./common/Icons";
import Link from "next/link";
import { AboutBox } from "./common/Helper";
import Image from "next/image";
const ImpulseAbout = () => {
  return (
    <div id="AboutUs" className="bg-[#141436] sm:pt-24 pt-11 z-10 relative">
      <Image
        src="/assets/images/svg/Abstract-01.svg"
        alt="aboutTop"
        width={144}
        height={122}
        className="pointer-events-none  absolute left-0 lg:left-28 lg:top-[-10%] sm:top-[-8%] top-[-9%] text-3xl sm:w-[144px] w-[100px] sm:h-[122px] h-[100px] aboutTop"
      />
      <div className="container xl:max-w-[1220px] flex flex-col 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 relative">
        <p className=" font-Montserrat sm:text-6xl text-[30px] text-white font-bold leading-[121%] text-center lg:text-start">
          About <span className="text-cyan-green">Us</span>
        </p>
        <p className=" text-dark-gray leading-[157%] font-semibold sm:text-2xl text-[18px] max-w-[380px] sm:pt-2 pt-4 tracking-[-0.74px] sm:pb-0 pb-3 text-center lg:text-start mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex lg:flex-nowrap justify-center flex-wrap lg:gap-6 sm:pb-24 pb-12 sm:mb-0 mb-3 lg:mt-10">
          {AboutBox.map((about) => {
            return (
              <div
                key={about.id}
                className={`lg:w-6/12 hover:translate-y-[-10%] duration-200 ease-in-out sm:w-10/12 w-full  rounded-[20px] p-[2px] inline-block lg:mt-0 mt-4 ${about.border}`}
              >
                <div className="block rounded-[20px] w-full bg-[#080D2D] sm:ps-8 ps-4 pb-7 sm:pt-[24px] pt-4 sm:pe-6 pe-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Image
                        height={81}
                        width={81}
                        src={about.aboutImg}
                        alt="about img"
                        className=" sm:h-[81px] sm:w-[81px] w-[61px] h-[61px]"
                      />
                      <div className="ps-5 flex">
                        <div>
                          <p className="mb-0 text-white font-Montserrat leading-[204%] tracking-[-0.44px] sm:text-3xl text-[20px] font-bold">
                            About
                            <span className="text-cyan-green ms-1">
                              {about.impulse}
                            </span>
                          </p>
                          <p className="sm:mb-6 text-white font-Montserrat font-medium leading-[178%] sm:text-md text-[12px] opacity-70 sm:max-w-[247px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex hidden flex-col items-center  justify-between sm:pt-2">
                      <span>
                        <Link
                          href="https://twitter.com/"
                          target="blank"
                          className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
                        >
                          <ImpulseTweeter />
                        </Link>
                      </span>
                      <div className=" flex items-center justify-end sm:pt-2 pt-3">
                        <Image
                          height={27}
                          width={27}
                          alt="img"
                          src="/assets/images/svg/AboutLogo.svg"
                        />
                        <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-lg ps-[10px]">
                          IMPULSE
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:hidden items-center  justify-between sm:pt-2">
                    <span>
                      <Link
                        href="https://twitter.com/"
                        target="blank"
                        className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
                      >
                        <ImpulseTweeter />
                      </Link>
                    </span>
                    <div className=" flex items-center justify-end sm:pt-2 pt-3">
                      <Image
                        height={27}
                        width={27}
                        alt="images"
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
