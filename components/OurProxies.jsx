import React from "react";
import Image from "next/image";
const OurProxies = () => {
  return (
    <div className=" pt-10 pb-28 bg-[#040426] relative">
      <div className=" w-full max-w-[800px] h-8 our_proxies_box opacity-10 mx-auto lg:block hidden"></div>
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative pt-3 pb-28">
        <Image
          width={144}
          height={122}
          className="absolute bottom-[-65%]"
          src="/assets/images/svg/Group_bg.svg"
          alte="Group_bg"
        />
        <h2 className=" font-Montserrat sm:text-6xl text-[30px] text-white font-bold leading-[121%] mx-auto text-start mb-4">
          Our <span className="text-[#50EED7]">Proxies</span>
        </h2>
        <p className=" font-semibold text-2xl  text-[#9898A3] max-w-[380px] lg:mx-0 text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex justify-center flex-wrap  lg:flex-nowrap lg:gap-9 sm:mt-8 mt-6 max-w-[1200px]">
          <div className="flex  flex-wrap  lg:flex-nowrap lg:gap-9 mt-8">
            <div className="hover:translate-y-[-10px] transition-all duration-200 ease-in-out border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> ISP </span>Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="hover:translate-y-[-10px] transition-all duration-200 ease-in-out border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto mt-6 md:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Datacenter </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="hover:translate-y-[-10px] transition-all duration-200 ease-in-out border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto mt-6 lg:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Residential </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold sm:text-2xl text-[17px] text-white mt-10 hover:bg-transparent transition-all">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProxies;
