import Image from "next/image";
import { useState } from "react";
import Ring from "./Ring";
import { AccordianData } from "./common/Helper";
import Torus from "./common/Torus";

const ImpulseFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };
  return (
    <div
      id="Faqs"
      className="bg-[url('/assets/images/png/FAQbg.png')] bg-no-repeat bg-cover bg-center md:pt-28 sm:pt-20 pt-12 md:pb-44 sm:pb-22 pb-16 overflow-hidden relative"
    >
      <div className="torus-footer absolute pointer-events-none bottom-[-10px] xl:w-[223px]  xl:h-[223px]  lg:w-[123px] lg:h-[123px] start-0 sm:w-[93px] md:w-[173px] md:h-[173px] w-[73px]  sm:h-[93px] h-[100px]">
        <Torus />
      </div>
      <div className="torus-footer pointer-events-none  absolute lg:top-[-3%] sm:top-[-2%] top-[-3%] end-[-7px] lg:end-0 sm:end-[2%] lg:h-[207px] lg:w-[207px] sm:w-[120px] w-[100px]  sm:h-[175px] h-[100px]">
        <Ring />
      </div>
      <Image
        height={223}
        width={223}
        className="pointer-events-none absolute bottom-[-10px] xl:w-[203px]  xl:h-[223px]  lg:w-[123px] lg:h-[123px] start-0 sm:w-[93px] md:w-[103px] md:h-[103px] w-[73px]  sm:h-[93px] h-[60px]"
        src="/assets/images/svg/FaqBottom.svg"
        alt="FaqBottomimage"
        priority="1"
      />
      <Image
        height={207}
        width={207}
        className="pointer-events-none  absolute lg:top-[-15%] sm:top-[-10%] top-[-2%] end-[-10px] lg:end-0 sm:end-[-1%] lg:h-[207px] lg:w-[207px] sm:w-[120px] w-[73px]  sm:h-[175px] h-[60px]"
        src="/assets/images/svg/FaqRight.svg"
        alt="faqimage"
      />
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:pt-0 pt-3 sm:pb-0 pb-3">
        <p className="text-center lg:text-6xl text-[28px] text-white font-Montserrat font-bold leading-[121%] tracking-[-0.74px] sm:mb-12 mb-7">
          Frequently Asked Questions
        </p>
        {AccordianData.map((data, index) => (
          <div
            key={data.id}
            className="mt-5 border-[2px] transition-opacity ease-in duration-300 border-cyan-green bg-[#50EED733] rounded-2xl px-4 py-3 overflow-hidden w-full max-w-[655px] lg:max-w-[894px] mx-auto"
            open={openAccordion === index}
          >
            <div onClick={() => toggleAccordion(index)} className="py-1 flex">
              <h2 className="w-full flex justify-between cursor-pointer items-center text-white focus:outline-none font-Montserrat  md:text-[18px] text-[16px] font-bold leading-[130%] mb-0 text-start">
                {data.heading}
              </h2>
              <span>
                {openAccordion === index ? (
                  <Image
                    src="/assets/images/svg/minus.svg"
                    alt="minus"
                    width={30}
                    height={26}
                    className=" cursor-pointer"
                  />
                ) : (
                  <Image
                    src="/assets/images/svg/AccordianAdd.svg"
                    alt="add"
                    width={30}
                    height={26}
                    className=" cursor-pointer"
                  />
                )}
              </span>
            </div>
            <div
              className={`transition-all duration-300 ease-linear pt-0 pb-0 ${
                openAccordion === index ? "sm:h-[80px] h-[110px]" : "h-[0px]"
              }`}
            >
              <p className=" text-white opacity-70 font-medium font-Montserrat leading-[178%] text-md max-w-[550px] pb-0 pt-2">
                {data.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpulseFAQ;
