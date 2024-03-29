import Image from "next/image";
import { useState } from "react";
import Ring from "./Ring";
import { accordianData } from "./common/Helper";
import Torus from "./common/Torus";

const ImpulseFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

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
        className="sm:bg-[url('/assets/images/webp/FAQsbg-line.webp')] bg-no-repeat bg-[100% 100%] bg-center sm:pb-22 faq-main-div"
      >
        <Image
          className="absolute left-1/2 sm:left-[58%] -translate-x-1/2 top-[85px] sm:top-[111px] w-[264px] sm:w-[357px]"
          width={353}
          height={400}
          src="/assets/images/svg/FAQsbg-sm.svg"
          alt="bg-img"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bg_faq_blur rounded-[40px] backdrop-blur-[151px] opacity-20 w-full max-w-[1190px] top-[-365px] h-[600px]"></div>
        {/* <div className="bg_top_bottom h-[40px] opacity-10 w-full max-w-[1000px] mx-auto absolute top-0 lg:top-[0px] lg:left-[22%] "></div> */}
        {/* <div className="bg_top_bottom h-[40px] opacity-10 w-full max-w-[1000px] mx-auto absolute bottom-0 lg:bottom-[0px] lg:left-[22%]"></div> */}
        <div className="absolute pointer-events-none faq-torus hidden sm:block">
          <Torus />
        </div>
        <div className="absolute pointer-events-none faq-torus sm:hidden">
          <Image
            width={237}
            height={257}
            src="/assets/images/svg/ring-image-faq-section-2.svg"
            alt="ring-image-02"
          />
        </div>
        <div className="pointer-events-none absolute faq-ring hidden sm:block">
          <Ring />
        </div>
        <div className="pointer-events-none absolute faq-ring sm:hidden">
          <Image
            width={237}
            height={257}
            src="/assets/images/svg/ring-image-faq-section.svg"
            alt="ring-image-01"
          />
        </div>
        <Image
          height={223}
          width={223}
          className="pointer-events-none absolute faq-bottom-img"
          src="/assets/images/png/faq_right.png"
          alt="FaqBottomimage"
        />
        <Image
          height={223}
          width={223}
          className="pointer-events-none absolute faq-right-img"
          src="/assets/images/png/faq_right.png"
          alt="faqimage"
        />
        <div className="relative container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-6 sm:pt-0 pt-3 sm:pb-0 pb-3 min-h-[490px] lg:min-h-[412px]">
          <Image
            height={500}
            width={500}
            className="pointer-events-none w-full h-[45px]   absolute  faq_strips_image"
            src="/assets/images/svg/strips-image.svg"
            alt="strips-image"
          />

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
                      src="/assets/images/webp/minus.webp"
                      alt="minus"
                      width={30}
                      height={26}
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      src="/assets/images/webp/AccordianAdd.webp"
                      alt="add"
                      width={30}
                      height={26}
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  )}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-linear pt-0 pb-0 ${
                  openAccordion === index ? "sm:h-[65px] h-[100px]" : "h-[0px]"
                }`}
              >
                <p className="font-normal font-Montserrat leading-[155%] sm:leading-[150%] text-white opacity-70 sm:text-dark-gray text-sm sm:text-[16px] pb-0 pt-2">
                  {data.para}
                </p>
              </div>
            </div>
          ))}

          <Image
            height={500}
            width={500}
            className="pointer-events-none w-full h-[45px]   absolute faq_strips_image faq-strips_bottom_image"
            src="/assets/images/svg/strips-image.svg"
            alt="strips-image"
          />
        </div>
      </div>
    </>
  );
};

export default ImpulseFAQ;
