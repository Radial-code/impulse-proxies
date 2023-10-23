import React from "react";
import Header from "./Header";
import Lottie from "lottie-react";
import animationData from "../public/assets/images/lottie/data (2).json";
const Hero = () => {
  return (
    <>
      <Header />
      <div className=" relative">
        <div className=" hero-section grad_b flex flex-col justify-center lg:py-8 xl:py-0 pt-[30px] sm:pb-[80px] pb-14">
          <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 h-full flex items-center">
            <div className="flex items-center justify-between h-full flex-wrap w-full lg:flex-nowrap lg:pt-[70px] lg:pb-[90px]">
              <div className=" min-h-[210px] md:min-h-[300px] md: lg:min-h-[384px] md:w-[56%] xl:w-7/12 lg:w-6/12 w-full">
                <h1 className="hero-heading lg:text-8xl sm:text-[42px] text-[32px] text-white font-bold ">
                  Elevate your <span className="text-cyan-green">success </span>
                  with our Proxies
                </h1>
                <p className="mt-4 max-w-[400px] text-[15px] font-normal md:mb-0 mb-5 text-dark-gray leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <div className="md:flex hidden sm:mb-0 mb-5 items-center mt-12 text-white">
                  <button className="hero-purchase-button ">Purchase</button>
                  <button className="hero-explore-products-button ">
                    Explore Products
                  </button>
                </div>
              </div>

              <div
                className="hero-button-lottie-main after:contents-[''] after:h-[500px] after:w-[450px]
                   after:absolute after:opacity-30 after:rounded-full after:blur-[137px] after:pointer-events-none after:top-[-50%] bgHeroImg"
              >
                <div className="box_showdow absolute max-w-[456px] w-full h-[542px] blur-[140px] rounded-[36px] opacity-30 top-10 right-7 z-[-1] hidden lg:inline-block"></div>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="hero-lottie"
                />
                <div className="md:hidden sm:flex sm:mb-0 items-center justify-center text-white text-center">
                  <button className="hero-purchase-button transition-all max-w-[300px] sm:max-w-[197px] min-h-[55px] mt-10">
                    Purchase
                  </button>
                  <button className="hero-explore-products-button sm:ms-4 max-w-[300px] sm:max-w-[197px] min-h-[55px] sm:text-2xl text-[15px] mt-4 sm:mt-10">
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
