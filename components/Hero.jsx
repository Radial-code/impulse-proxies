import React from "react";
import Header from "./Header";
import Lottie from "lottie-react";
import animationData from "../public/assets/images/lottie/data (2).json";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <Header />
      <div className=" relative">
        <div className="hero-section grad_b flex flex-col justify-center lg:py-8 xl:py-0 pt-[30px] sm:pb-[80px] pb-14">
          <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-6 h-full flex items-center">
            <div className="flex items-cent er justify-between h-full flex-wrap w-full lg:flex-nowrap lg:pt-[85px] lg:pb-[90px]">
              <div className=" min-h-[210px] md:min-h-[300px] md: lg:min-h-[384px] md:w-[56%] xl:w-7/12 lg:w-6/12 w-full z-10">
                <h1 className="hero-heading lg:text-8xl sm:text-[42px] text-[32px] text-white font-bold ">
                  Elevate your <span className="text-cyan-green">success </span>
                  with our Proxies
                </h1>
                <p className="mt-4 max-w-[400px] text-[15px] font-normal md:mb-0 mb-5 text-dark-gray leading-[150%]">
                  Step into the next generation of proxies which redefine what
                  market excellence truly means.
                </p>
                <div className="md:flex hidden sm:mb-0 mb-5 items-center mt-12 text-white">
                  <Link
                    aria-label="product"
                    href="/product"
                    className="hero-purchase-button flex items-center justify-center"
                  >
                    Purchase
                  </Link>
                  <button className="hero-explore-products-button ">
                    Explore Products
                  </button>
                </div>
              </div>

              <div
                className="hero-button-lottie-main sm:after:contents-[''] sm:after:h-[500px] sm:after:w-[450px]
                sm:after:absolute sm:after:opacity-30 sm:after:rounded-full sm:after:blur-[137px] sm:after:pointer-events-none sm:after:top-[-50%] bgHeroImg"
              >
                <div className="box_showdow absolute max-w-[456px] w-full h-[542px] blur-[140px] rounded-[36px] opacity-30 top-10 right-7 z-[-1] hidden lg:inline-block"></div>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="hero-lottie md:block hidden"
                />

                <Image
                  height={223}
                  width={223}
                  className="-mt-7 sm:mt-0 scale-[1.47] sm:scale-[1.3] w-[100vw] sm:w-full md:hidden block"
                  src="/assets/images/svg/hero-image-mobile-version.svg"
                  alt="hero-image"
                  priority="1"
                />
                <div className="md:hidden sm:flex sm:mb-0 items-center justify-center text-white text-center z-10">
                  <Link
                    aria-label="product"
                    href="/product"
                    className="hero-purchase-button transition-all max-w-[327px] sm:max-w-[300px] md:max-w-[197px] min-h-[55px] mt-6 sm:mt-10 mx-auto flex items-center justify-center"
                  >
                    Purchase
                  </Link>
                  <button className="hero-explore-products-button sm:ms-4 max-w-[327px] sm:max-w-[300px] md:max-w-[197px] min-h-[55px] text-2xl mt-4 sm:mt-10">
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
