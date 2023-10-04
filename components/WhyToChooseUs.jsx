import React from "react";
import { CardData } from "./common/Helper";
import Image from "next/image";
function WhyToChooseUs() {
  return (
    <>
      <div className=" w-full h-[50px] chooseBox opacity-10 mx-auto lg:block hidden"></div>
      <div className=" lg:pt-10 lg:pb-28 py-12 bg-[#141436] relative">
        <Image
          className=" absolute sm:bottom-[-66px] bottom-[-45px] sm:right-[55px] right-[24px] z-10 sm:w-[145px] w-[75px] sm:h-[126px] h-[66px]"
          height={126}
          width={145}
          src="/assets/images/svg/Abstract-02.svg"
          alt="Abstract"
        />
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 sm:py-0 py-2">
          <h2 className="font-Montserrat sm:text-6xl text-[35px] text-white font-bold leading-[121%] text-center tracking-[-0.64px]">
            Why to choose <span className="text-[#50EED7]">us</span>
          </h2>
          <div className="flex justify-center flex-wrap  lg:flex-nowrap lg:gap-9 sm:mt-8 mt-3">
            {CardData.map((CardData) => {
              return (
                <div
                  key={CardData.id}
                  className={` w-full mt-6 lg:mt-0 md:w-6/12 lg:w-4/12 ${CardData.border}`}
                >
                  <div className=" lg:max-w-[363px] hover:translate-y-[-10px] transition-all duration-200 ease-in-out max-w-[348px] mx-auto h-full md:p-[30px] p-[20px] rounded-[30px] border-[2px] border-[#50EED7] bg-[#204056]">
                    <div className=" flex gap-3 items-center">
                      <h5 className="font-bold leading-[140%] font-Montserrat text-2xl text-white">
                        {CardData.heading}
                      </h5>
                      <Image
                        height={32}
                        width={32}
                        src={CardData.whyToImg}
                        alt="about image"
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
