import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="hero-section bg-[url('/assets/images/png/Hero_bg_img.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center py-8">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 h-full flex-1 flex items-center">
          <div className="flex items-center justify-between h-full flex-wrap lg:flex-nowrap">
            <div className="xl:w-6/12 lg:w-6/12 w-full">
              <h1 className="lg:text-[55px] xl:text-8xl 2xl:text-[70px] md:text-[45px] text-[35px] tracking-[-2%] text-white leading-[118%] max-w-[300px] md:max-w-[400px] sm:w-full">
                Elevate your <span className="text-cyan-green me-2 lg:ms-0 sm:ms-2">
                    success </span>
                  with our Proxies
                  
              </h1>
              <p className="mt-4 sm:text-2xl text-[15px] font-normal md:mb-0 mb-5 text-dark-gray leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="lg:flex hidden sm:mb-0 mb-5 items-center lg:mt-10 mt-5">
                <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-cyan-green bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white">
                  Purchase
                </button>
                <button className="ms-4 hover:bg-[#163D51] transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-white bg-transparent hover:border-cyan-green rounded-[100px] font-Montserrat font-semibold text-2xl text-white">
                  Explore Products
                </button>
              </div>
            </div>
            <div className="xl:w-7/12 lg:w-6/12 w-full flex lg:flex-row flex-col justify-center md:justify-end relative after:contents-[''] after:h-[500px] after:w-[450px] after:absolute bgHeroImg after:opacity-30 after:rounded-full after:blur-[137px] after:pointer-events-none after:top-[-50%]">
              <Image
                width={500}
                height={900}
                src="/assets/images/png/heroImg.png"
                alt="hero-image"
                className="relative z-10 2xl:h-[500px] sm:max-w-[400px] md:max-w-[400px] mx-auto xl:h-[500px] xl:max-w-[650px]"
              />
              <div className="lg:hidden sm:flex sm:mb-0 mb-5 items-center justify-center text-center">
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
    </>
  );
};

export default Hero;
