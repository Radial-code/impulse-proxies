import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="hero-section header_bg_img flex flex-col justify-center">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 h-full flex-1 flex items-center">
          <div className="flex items-center justify-between h-full flex-wrap lg:flex-nowrap">
            <div className="xl:w-5/12 md:w-6/12 w-full">
              <h1 className="lg:text-[55px] xl:text-8xl md:text-[45px] text-[35px] tracking-[-2%] text-white leading-[118%]">
                Elevate your
                <span className="lg:block lg:whitespace-nowrap">
                  <span className="text-cyan-green mx-2">success</span>with our
                </span>
                Proxies
              </h1>
              <p className="mt-4 sm:text-2xl text-[15px] font-normal md:mb-0 mb-5 text-dark-gray leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="md:flex hidden sm:mb-0 mb-5 items-center lg:mt-10 mt-5">
                <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white">
                  Purchase
                </button>
                <button className="ms-4 hover:bg-[#163D51] transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-white bg-transparent hover:border-[#50EED7] rounded-[100px] font-Montserrat font-semibold text-2xl text-white">
                  Explore Products
                </button>
              </div>
            </div>
            <div className="xl:w-9/12 md:w-6/12 w-full flex md:flex-row flex-col justify-center md:justify-end relative after:contents-[''] after:h-[500px] after:w-[450px] after:absolute bgHeroImg after:opacity-30 after:rounded-full after:blur-[137px] after:pointer-events-none after:top-[-50%]">
              <Image
                width={500}
                height={900}
                src="/assets/images/png/heroImg.png"
                alt="hero-image"
                className="relative z-10"
              />
              <div className="md:hidden flex sm:mb-0 mb-5 items-center justify-center">
                <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold sm:text-2xl text-[15px] text-white mt-10">
                  Purchase
                </button>
                <button className="ms-4 hover:bg-[#163D51] transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-white bg-transparent hover:border-[#50EED7] rounded-[100px] font-Montserrat font-semibold sm:text-2xl text-[15px] text-white mt-10">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
