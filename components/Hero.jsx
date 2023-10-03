import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-screen">
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
            </div>
            <div className="w-9/12">
              <Image
                height={1097}
                width={1190}
                src="/assets/images/png/hero-image.png"
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
