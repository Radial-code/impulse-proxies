import React from "react";
import Image from "next/image";
const OurProxies = () => {
  return (
    <div
      id="proxies"
      className="pt-[52px] lg:pt-[105px] pb-20 md:pb-[106px] lg:pb-[153px]  bg-[#040426] relative"
    >
      <div className=" h-10 opacity-10 w-full max-w-[800px] mx-auto absolute top-3 lg:top-[21px] lg:left-[27%]"></div>
      <div className="box_showdow rounded-[40px] opacity-20 blur-[150px] absolute w-full max-w-[1190px] h-[200px] bottom-0 pointer-events-none"></div>
      <Image
        width={144}
        height={122}
        className="absolute bottom-[-58px] md:bottom-[-13%]  lg:bottom-[-20%] xl:bottom-[-42%] 2xl:bottom-[-45%] w-full rocket_img pointer-events-none"
        src="/assets/images/png/Desktop.png"
        alt="Group_bg"
      />
      <div className="container xl:max-w-[1220px] flex flex-col 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
        <h2 className=" font-Montserrat text-6xl text-white font-bold leading-[121%] lg:text-start mb-4 mx-auto lg:mx-0">
          Our <span className="text-cyan-green">Proxies</span>
        </h2>
        <p className=" font-semibold text-2xl font-TT_Interfaces text-dark-gray max-w-[380px] lg:mx-0 text-center lg:text-start mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex justify-center lg:justify-start flex-wrap  lg:flex-nowrap lg:gap-9 2xl:gap-9  mt-[53px] md:mt-8 lg:mt-10  ">
          <div className=" md:w-6/12 hover:border-cyan-green hover:shadow-2xl duration-300 ease-in-out lg:w-4/12 border-[2px] border-[#505062] rounded-[20px] px-8 py-7 2xl:max-w-[400px] max-w-[348px]">
            <h5 className="font-bold  font-Montserrat text-2xl text-white">
              <span className="text-cyan-green"> ISP </span>Proxies
            </h5>
            <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] 2xl:max-w-[315px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="md:w-6/12 hover:border-cyan-green hover:shadow-2xl duration-300 ease-in-out lg:w-4/12 border-[2px] border-[#505062] rounded-[20px] px-8 py-7 2xl:max-w-[400px] max-w-[348px] mt-6 md:mt-0 md:ms-7 lg:ms-0">
            <h5 className="font-bold  font-Montserrat text-2xl text-white">
              <span className="text-cyan-green"> Datacenter </span> Proxies
            </h5>
            <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] 2xl:max-w-[315px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="md:w-6/12 hover:border-cyan-green hover:shadow-2xl duration-300 ease-in-out lg:w-4/12 border-[2px] border-[#505062] rounded-[20px] px-8 py-7 2xl:max-w-[400px] max-w-[348px] mt-6 lg:mt-0">
            <h5 className="font-bold  font-Montserrat text-2xl text-white">
              <span className="text-cyan-green"> Residential </span> Proxies
            </h5>
            <p className=" font-medium text-md font-Montserrat text-white opacity-70 max-w-[316px] 2xl:max-w-[315px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <div className=" flex justify-center  lg:justify-center relative">
          <button className=" max-w-[197px] w-full min-h-[55px] border-[2px] border-cyan-green bg-[#163D51] rounded-[100px] font-Montserrat font-semibold text-2xl text-white mt-10 hover:bg-transparent transition-all duration-300">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProxies;
