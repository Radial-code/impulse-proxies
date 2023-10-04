import React from "react";
import Image from "next/image";
const OurProxies = () => {
  return (
    <div className="pt-[52px] lg:pt-[105px] pb-20 md:pb-[106px] lg:pb-[153px]  bg-[#040426] relative">
      <div className="our_proxies_box h-10 opacity-10 w-full max-w-[800px] mx-auto absolute top-3 lg:top-[21px] lg:left-[27%]"></div>
      <div className="box_showdow absolute w-full max-w-[1190px] h-[200px] bottom-0"></div>
      <Image
        width={144}
        height={122}
        className="absolute bottom-[-58px] md:bottom-[-13%]  lg:bottom-[-20%] xl:bottom-[-42%] 2xl:bottom-[-45%] w-full"
        src="/assets/images/svg/rocket-bg-img.svg"
        alte="Group_bg" 
      />
      <div className="container xl:max-w-[1140px] flex flex-col 2xl:max-w-[1320px] mx-auto px-3">
        <h2 className=" font-Montserrat text-6xl text-white font-bold leading-[121%]text-start mb-4 mx-auto md:mx-0">
          Our <span className="text-[#50EED7]">Proxies</span>
        </h2>
        <p className=" font-semibold text-2xl font-TT_Interfaces text-[#9898A3] max-w-[380px] lg:mx-0 text-center md:text-start mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex justify-center md:justify-start 2xl:justify-between flex-wrap  lg:flex-nowrap lg:gap-9  mt-[53px] md:mt-8 lg:mt-10  ">
         
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] lg:mx-auto">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> ISP </span>Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px]  md:mx-6 lg:mx-0 mt-6 md:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Datacenter </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] lg:mx-auto mt-6 lg:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Residential </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
  
        </div>
        <div className=" flex justify-center md:justify-start lg:justify-center relative">
          <button className=" max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white mt-10">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProxies;
