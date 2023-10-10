import React from "react";
import { CardData } from "./common/Helper";
import Image from "next/image";
function WhyToChooseUs() {
  return (
    <>
      <div className=" lg:pt-16 lg:pb-20 md:pt-8 md:pb-[53px] py-[52px] bg-[#141436] relative mt-14">
        <Image
          className="absolute sm:bottom-[-66px] bottom-[-45px] sm:right-[55px] right-[24px] z-20 sm:w-[145px] w-[100px] sm:h-[126px] h-[100px] pointer-events-none arrowAnimation"
          height={126}
          width={145}
          src="/assets/images/png/AbstractTrangle-02.png"
          alt="Abstract"
        />
        <Image
          height={140}
          width={140}
          className="absolute sm:bottom-[-66px] bottom-[-45px] sm:right-[55px] right-[24px] z-[4] sm:w-[140px] h-[100px] animate-spin sm:h-[140px] w-[100px]"
          alt="AbstractCircle"
          src="/assets/images/png/AbstractCircle-02.png"
        />
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:py-0 py-2">
          <h2 className="font-Montserrat lg:text-[32px] md:text-[28px] text-[20px] text-white font-bold leading-[110%] text-center">
            Why To Choose <span className="text-cyan-green">Us</span>
          </h2>
          <div className="flex justify-center flex-wrap 2xl:gap-0 lg:gap-5 lg:flex-nowrap lg:mt-12 md:mt-6 mt-2">
            {CardData.map((CardData) => {
              return (
                <div
                  key={CardData.id}
                  className={` w-full mt-6 lg:mt-0 md:w-6/12  lg:w-4/12 ${CardData.border}`}
                >
                  <div className=" 2xl:max-w-[393px] lg:max-w-[380px] hover:translate-y-[-10px] transition-all duration-200 ease-in-out max-w-[348px] mx-auto h-full md:px-[24px] md:pt-[18px] md:pb-[38px] px-6 pt-6 pb-[30px] rounded-[30px] border-[2px] border-cyan-green bg-[#204056]">
                    <div className=" flex gap-3 items-center">
                      <h5 className="font-bold leading-[75px] font-Montserrat md:text-2xl text-[17px] text-white">
                        {CardData.heading}
                      </h5>
                      <Image
                        height={32}
                        width={32}
                        src={CardData.whyToImg}
                        alt="aboutimage"
                      />
                    </div>
                    <p className=" text-white md:text-md text-[12px] font-medium font-Montserrat opacity-70 lg:max-w-[235px] leading-[25px] ">
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
