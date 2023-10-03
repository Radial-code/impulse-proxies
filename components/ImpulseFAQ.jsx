import React, { useState } from "react";
import { Accordian } from "./common/Helper";
import Image from "next/image";
const ImpulseFAQ = () => {
  const [openAccordions, setOpenAccordions] = useState(
    Accordian.map(() => false)
  );
  const toggleAccordion = (index) => {
    const newOpenAccordions = [...openAccordions];
    newOpenAccordions[index] = !newOpenAccordions[index];
    setOpenAccordions(newOpenAccordions);
  };
  return (
    <div className="faqBg bg-no-repeat bg-cover bg-center pt-28 pb-44">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <p className="text-center text-6xl text-white font-Montserrat font-bold leading-[121%] tracking-[-0.74px] mb-12">
          Frequently Asked Questions
        </p>
        {/* accordion */}
        <div className="w-full max-w-[694px] mx-auto">
          {Accordian.map((data, index) => {
            const isOpen = openAccordions[index];
            return (
              <div
                key={data.id}
                className="mt-5 border-[2px] transition-opacity ease-in duration-300 border-[#50EED7] bg-[#50EED733] rounded-2xl px-4 py-4"
              >
                <div className="flex w-full justify-between">
                  <button
                    className="w-full flex justify-between items-center text-white focus:outline-none font-Montserrat text-2xl font-bold leading-[130%] mb-0"
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
