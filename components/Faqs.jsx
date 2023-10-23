import Image from "next/image";
import { useState } from "react";
import Ring from "./Ring";
import { accordianData } from "./common/Helper";
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
    <>
      <div
        id="Faqs"
        className="bg-[url('/assets/images/svg/FAQsbg.svg')] bg-no-repeat lg:bg-[100% 100%] bg-cover bg-center sm:pb-22 faq-main-div"
      >
        <div className="bg_top_bottom h-[40px] opacity-10 w-full max-w-[1000px] mx-auto absolute top-0 lg:top-[0px] lg:left-[22%]"></div>
        <div className="bg_top_bottom h-[40px] opacity-10 w-full max-w-[1000px] mx-auto absolute bottom-0 lg:bottom-[0px] lg:left-[22%]"></div>
        <div className="torus-footer absolute pointer-events-none faq-torus">
          <Torus />
        </div>
        <div className="torus-footer pointer-events-none absolute faq-ring">
          <Ring />
        </div>
        <Image
          height={223}
          width={223}
          className="pointer-events-none absolute faq-bottom-img"
          src="/assets/images/png/FaqBottom.png"
          alt="FaqBottomimage"
          priority="1"
        />
        <Image
          height={207}
          width={207}
          className="pointer-events-none absolute faq-right-img"
          src="/assets/images/png/FaqRight.png"
          alt="faqimage"
        />
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:pt-0 pt-3 sm:pb-0 pb-3  min-h-[490px] lg:min-h-[412px]">
          <p className="faq-main-heading">Frequently Asked Questions</p>
          {accordianData.map((data, index) => (
            <div
              key={index}
              className="accordian-main"
              open={openAccordion === index}
            >
              <div onClick={() => toggleAccordion(index)} className="py-1 flex">
                <h2 className="accordian-heading">{data.heading}</h2>
                <span>
                  {openAccordion === index ? (
                    <Image
                      src="/assets/images/png/minus.png"
                      alt="minus"
                      width={30}
                      height={26}
                      className="cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/assets/images/png/AccordianAdd.png"
                      alt="add"
                      width={30}
                      height={26}
                      className="cursor-pointer"
                    />
                  )}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-linear pt-0 pb-0 ${
                  openAccordion === index ? "sm:h-[80px] h-[110px]" : "h-[0px]"
                }`}
              >
                <p className="opacity-70 font-medium font-Montserrat leading-[178%] text-md max-w-[550px] pb-0 pt-2">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImpulseFAQ;
