import React from "react";
import Image from "next/image";
const OurProxies = () => {
  return (
    <div className="  bg-[#050527] relative Our_Proxies_b g_img">
      <div className=" w-full max-w-[800px] h-8 our_proxies_box opacity-10 mx-auto mt-6"></div>
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative pt-3 pb-28">
        <Image 
         width={144}
          height={122}
        className=" w-full absolute bottom-[-65%]"
         src="/assets/images/svg/Group_bg.svg"
         alte="Group_bg"
         />
        <h2 className=" font-Montserrat text-6xl text-white font-bold leading-[121%] text-center mx-auto lg:text-start">
          Our <span className="text-[#50EED7]">Proxies</span>
        </h2>
        <p className=" font-semibold text-2xl font-TT_Interfaces text-[#9898A3] max-w-[380px] text-center mx-auto lg:mx-0 lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod{" "}
        </p>
        <div className="flex justify-center flex-wrap  lg:flex-nowrap lg:gap-9 mt-8 max-w-[1200px]">
          <div className="flex  flex-wrap  lg:flex-nowrap lg:gap-9 mt-8">
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> ISP </span>Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto mt-6 md:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Datacenter </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className=" border-[2px] border-[#505062] rounded-[20px] px-8 py-7 max-w-[348px] mx-auto mt-6 lg:mt-0">
              <h5 className="font-bold  font-Montserrat text-2xl text-white">
                <span className="text-[#50EED7]"> Residential </span> Proxies
              </h5>
              <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center max-w-[1200px]">
          <button className=" max-w-[197px] w-full min-h-[55px] border-[2px] border-[#50EED7] bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white mt-10">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProxies;
