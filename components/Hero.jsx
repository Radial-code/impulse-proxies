import React from "react";
import Header from "./Header";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <Header />
      <div className=" relative">
        <div className=" hero-section grad_b g flex flex-col justify-center py-8">
          <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 h-full flex-1 flex items-center">
            <div className="flex items-center justify-between h-full flex-wrap lg:flex-nowrap">
              <div className="md:w-6/12 xl:w-6/12 lg:w-6/12 w-full">
                <h1 className="lg:text-[55px] xl:text-8xl 2xl:text-[70px] md:text-[38px] text-[35px] tracking-[-2%] text-white leading-[118%] max-w-[300px] md:max-w-[400px] lg:max-w-[100%] sm:w-full">
                  Elevate your{" "}
                  <span className="text-cyan-green me-2">success </span>
                  with our Proxies
                </h1>
                <p className="mt-4  text-[15px] font-normal md:mb-0 mb-5 text-dark-gray leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <div className="md:flex hidden sm:mb-0 mb-5 items-center lg:mt-10 mt-5">
                  <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-cyan-green bg-[#163D51] rounded-[100px] font-Montserrat font-semibold md:text-lg lg:text-2xl text-white">
                    Purchase
                  </button>
                  <button className="ms-4 hover:bg-[#163D51] transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-white bg-transparent hover:border-cyan-green rounded-[100px] font-Montserrat font-semibold md:text-lg lg:text-2xl text-white">
                    Explore Products
                  </button>
                </div>
              </div>
              <div className=" md:w-6/12 xl:w-7/12 lg:w-6/12 w-full flex lg:flex-row flex-col justify-center md:justify-end relative after:contents-[''] after:h-[500px] after:w-[450px] after:absolute bgHeroImg after:opacity-30 after:rounded-full after:blur-[137px] after:pointer-events-none after:top-[-50%]">
                <div className="box_showdow absolute max-w-[456px] w-full h-[542px] blur-[140px] rounded-[36px] opacity-30 top-10 right-7 z-[-1] hidden lg:inline-block"></div>
                <Image
                  width={500}
                  height={900}
                  src="/assets/images/svg/heroImg.svg"
                  alt="hero-image"
                  className="pointer-events-none relative z-50 2xl:h-[500px] sm:max-w-[400px] md:max-w-[370px] lg:max-w-[500px] mx-auto xl:h-[500px] xl:max-w-[600px] xl:w-full"
                />
                <div className="md:hidden sm:flex sm:mb-0 mb-5 items-center justify-center text-center">
                  <button className=" hover:bg-transparent transition-all max-w-[300px] w-full sm:max-w-[197px]  min-h-[55px] border-[2px] border-cyan-green bg-[#163D51] rounded-[100px] font-Montserrat font-semibold sm:text-2xl text-[15px] text-white mt-10">
                    Purchase
                  </button>
                  <button className="sm:ms-4 hover:bg-[#163D51] transition-all max-w-[300px] w-full sm:max-w-[197px]  min-h-[55px] border-[2px] border-white bg-transparent hover:border-cyan-green rounded-[100px] font-Montserrat font-semibold sm:text-2xl text-[15px] text-white mt-4 sm:mt-10">
                    Explore Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full absolute bottom-0 top-[300px] hidden md:block md:top-[100px] lg:top-[100px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
