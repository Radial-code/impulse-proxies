import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-screen header_bg_img">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 h-full">
          <Header />
          <div className="flex items-center justify-between h-full">
            <div className="w-5/12">
              <h1 className="text-8xl tracking-[-2%] text-white leading-[118%]">
                Elevate your
                <span className="text-cyan-green mx-2">success</span>with our
                Proxies
              </h1>
              <p className="mt-4 text-2xl font-normal font-Montserrat text-dark-gray leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="">
                <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white mt-10">
            Purchase
          </button>
             <button className=" hover:bg-transparent transition-all max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white mt-10">
            Explore Products
          </button>
              </div>
            </div>
            <div className="w-9/12">
              <Image
                height={1097}
                width={1190}
                src="/assets/images/webp/hero-img.webp"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
