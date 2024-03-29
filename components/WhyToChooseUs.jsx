import React from "react";
import { cardData } from "./common/Helper";
import Image from "next/image";
function WhyToChooseUs() {
  return (
    <>
      <div className="pt-[69px] lg:pb-[77px] md:pb-[53px] pb-12 bg-[#141436] relative">
      <div class="proxies_box h-10 opacity-10 w-full max-w-[1200px] mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
        <Image
          className="whychooseus-abstract-img arrowAnimation"
          height={126}
          width={145}
          src="/assets/images/png/triangle.png"
          alt="Abstract"
          loading="lazy"
        />
        <Image
          src="/assets/images/webp/Abstract01.webp"
          alt="aboutTop"
          width={99}
          height={50}
          className="spin_about_img_2 whychooseus-abstract-img2"
        />
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-6 sm:py-0 py-2">
          <h2 className="whychooseus-heading">
            Why To Choose <span className="text-cyan-green">Us</span>
          </h2>
          <div className="flex justify-center flex-wrap 2xl:gap-0 lg:gap-5 lg:flex-nowrap lg:mt-[52px] md:mt-[13px] mt-2 min-h-[504px] md:min-h-[210px]">
            {cardData.map((obj, i) => {
              return (
                <div
                  key={i}
                  className={`w-full mt-6 lg:mt-0 md:w-6/12  :w-4/12 ${obj.border}`}
                >
                  <div className="whychooseus-map-heading-para-div">
                    <div className={`flex gap-3 sm:items-center ${obj.align}`}>
                      <h3 className="font-bold lg:leading-[75px] sm:leading-[52px] leading-[140%] font-Montserrat md:text-2xl lg:text-[17px] xl:text-2xl text-[17px]">
                        {obj.heading}
                      </h3>
                      <Image
                        height={32}
                        width={32}
                        src={obj.whyToImg}
                        alt="aboutimage"
                        loading="lazy"
                      />
                    </div>
                    <p className=" md:text-md text-[12px] mt-4 sm:mt-0 font-medium font-Montserrat sm:max-w-[244px] opacity-70 leading-[25px] ">
                      {obj.para}
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
