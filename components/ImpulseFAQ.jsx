import React, { useState } from "react";
import { Accordian } from "./common/Helper";
import Image from "next/image";

const ImpulseFAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === openAccordionIndex) {
      // Clicked on an open accordion, so close it
      setOpenAccordionIndex(null);
    } else {
      // Clicked on a closed accordion, so open it
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div
      id="Faqs"
      className=" bg-[url('/assets/images/png/FAQbg.png')] bg-no-repeat bg-cover bg-center  md:pt-28 sm:pt-20 pt-12 md:pb-44 sm:pb-22 pb-16  relative overflow-hidden"
    >
      <Image
        height={223}
        width={223}
        className="absolute bottom-[-10px] xl:w-[223px]  xl:h-[223px]  lg:w-[123px] lg:h-[123px] start-0 sm:w-[93px] md:w-[103px] md:h-[103px] w-[73px]  sm:h-[93px] h-[60px]"
        src="/assets/images/svg/FaqBottom.svg"
        alt="about image"
      />
      <Image
        height={207}
        width={207}
        className="absolute lg:top-[-15%] sm:top-[-10%] top-[-2%] end-[-10px] lg:end-0 sm:end-[-1%] lg:h-[207px] lg:w-[207px] sm:w-[120px] w-[73px]  sm:h-[175px] h-[60px]"
        src="/assets/images/svg/FaqRight.svg"
        alt="about image"
      />
      <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:pt-0 pt-3 sm:pb-0 pb-3">
        <p className="text-center lg:text-6xl md:text-[35px] text-[25px] text-white font-Montserrat font-bold leading-[121%] tracking-[-0.74px] sm:mb-12 mb-7">
          Frequently Asked Questions
        </p>

        {/* ... (your other code remains the same) */}
        <div className="w-full max-w-[694px] mx-auto">
          {Accordian.map((data, index) => {
            const isOpen = index === openAccordionIndex;
            return (
              <div
                key={data.id}
                className="mt-5 border-[2px] transition-opacity ease-in duration-300 border-cyan-green bg-[#50EED733] rounded-2xl px-4 py-4"
              >
                <div className="flex w-full justify-between">
                  <button
                    className="w-full flex justify-between items-center text-white focus:outline-none font-Montserrat md:text-2xl sm:text-[17px] text-[15px] font-bold leading-[130%] mb-0 text-start"
                    onClick={() => toggleAccordion(index)}
                  >
                    {data.heading}
                    <span>
                      {isOpen ? (
                        <Image
                          src="/assets/images/svg/minus.svg"
                          alt="aboutTop"
                          width={30}
                          height={26}
                        />
                      ) : (
                        <Image
                          src="/assets/images/svg/AccordianAdd.svg"
                          alt="aboutTop"
                          width={30}
                          height={26}
                        />
                      )}
                    </span>
                  </button>
                </div>
                {isOpen && (
                  <p className="text-white opacity-70 font-medium font-Montserrat leading-[178%] text-md max-w-[550px] pt-3 pb-2">
                    {data.para}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImpulseFAQ;
