import React from "react";
import { CardData } from "./common/Helper";
import Image from "next/image";
function WhyToChooseUs() {
  return (
    <>
      <div className="w-full lg:h-[52px] h-[33px] chooseBox"></div>
      <div className=" lg:pt-16 lg:pb-20 py-12 bg-[#141436] relative">
        <Image
          className="absolute sm:bottom-[-66px] bottom-[-45px] sm:right-[55px] right-[24px] z-10 sm:w-[145px] w-[100px] sm:h-[126px] h-[100px] pointer-events-none arrowAnimation"
          height={126}
          width={145}
          src="/assets/images/svg/Abstract-02.svg"
          alt="Abstract"
        />
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:py-0 py-2">
          <h2 className="font-Montserrat sm:text-6xl text-[35px] text-white font-bold leading-[121%] text-center tracking-[-0.64px]">
            Why to choose <span className="text-cyan-green">us</span>
          </h2>
          <div className="flex justify-center flex-wrap 2xl:gap-0 lg:gap-5  lg:flex-nowrap sm:mt-12 mt-3">
            {CardData.map((CardData) => {
              return (
                <div
                  key={CardData.id}
                  className={` w-full mt-6 lg:mt-0 md:w-6/12  lg:w-4/12 ${CardData.border}`}
                >
                  <div className=" 2xl:max-w-[393px] lg:max-w-[380px] hover:translate-y-[-10px] transition-all duration-200 ease-in-out max-w-[348px] mx-auto h-full md:p-[30px] p-[20px] rounded-[30px] border-[2px] border-cyan-green bg-[#204056]">
                    <div className=" flex gap-3 items-center">
                      <h5 className="font-bold leading-[140%] font-Montserrat text-2xl text-white">
                        {CardData.heading}
                      </h5>
                      <Image
                        height={32}
                        width={32}
                        src={CardData.whyToImg}
                        alt="aboutimage"
                      />
                    </div>
                    <p className=" text-white text-md font-medium font-Montserrat opacity-70 lg:max-w-[235px] leading-[178%] mt-2">
                      {CardData.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyToChooseUs;
