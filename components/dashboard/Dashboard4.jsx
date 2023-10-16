import { useState } from "react";
import Image from "next/image";
import RangeBar from "./RangeBar";
import DashboardNav from "./DashboardNav";
import { DashboardFooter } from "./DashboardFooter";

const Dashboard4 = () => {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // copy text
  const copyText = () => {
    const textToCopy = document.getElementById("textToCopy").innerText;

    // Try to use the modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Text copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    } else {
      // For older browsers, fallback to the execCommand method
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Text copied to clipboard!");
    }
  };
  return (
    <>
      <div className=" relative">
        <Image
          height={100}
          width={100}
          className=" absolute end-0 bottom-[40]  z-[-1]"
          src="/assets/images/webp/Mockup_bg_blur.webp"
          alt="Mockup_bg_blur"
        />
        <Image
          height={200}
          width={200}
          className=" absolute start-0 top-0  z-[-1]"
          src="/assets/images/webp/Mockup_top_blur.webp"
          alt="Mockup_bg_blur"
        />
        <div className=" lg:pt-[61px] pt-9 sm:pb-[52px] pb-[64px] lg:pb-36 2xl:pb-32 relative">
          <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
            <RangeBar />
            <div className=" flex flex-wrap mt-9 lg:mt-[50px]">
              <div className="w-full lg:w-6/12 px-3">
                <div className="bg-[#212148] flex items-center justify-between h-14 rounded-t-[16px] px-4 lg:px-9 relative">
                  <p className=" text-sm font-Montserrat trackiing-[1.2px] leading-normal font-bold text-white">
                    EARNED REWARDS
                  </p>
                  <button className="text-[#040426] w-[119px] h-[31px] leading-normal tracking-[-0.28px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px]">
                    Redeem All
                  </button>
                </div>
                <div className=" bg-[url('/assets/images/webp/Earned_Rewards.webp')] bg-no-repeat bg-cover bg-[0px] h-[233px]  flex flex-col justify-center items-center mt-[-13px] rounded-b-[16px]">
                  <h3 className="font-Montserrat font-bold text-xl leading-normal tracking-[1.7px] text-white">
                    NO REWARDS WON
                  </h3>
                  <p className="font-Montserrat text-lg leading-normal sm:max-w-full max-w-[179px] text-center text-[#9D9DBB] sm:pt-4 py-3 sm:pb-6">
                    To make an order, click the button below
                  </p>
                  <button className=" text-[#040426] w-[180px] h-[45px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold leading-normal tracking-[-0.32px] text-[16px] rounded-[10px]">
                    Order Proxies
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-3 min-h-[244px] mt-9 lg:mt-0">
                <p className="bg-[#212148] rounded-t-[16px] h-14 leading-normal tracking-[1.2px] px-9 text-sm font-Montserrat font-bold text-white flex items-center">
                  REFER A FRIEND
                </p>
                <div className="rang_bar px-4 lg:px-9 lg:pt-[10px] pt-6 sm:pb-[47px] pb-4 rounded-b-[16px]">
                  <div className="bg-[#292956] h-[46px] rounded-[10px] flex justify-between items-center px-[18px]">
                    <div className=" flex">
                      <p className=" text-[#7777AD] font-Montserrat tracking-[-0.28px] leading-normal text-md font-semibold">
                        Discount Code
                      </p>
                      <p
                        id="textToCopy"
                        className=" text-white font-Montserrat text-md tracking-[-0.28px] leading-normal font-semibold ms-4"
                      >
                        2729PAYJ1
                      </p>
                    </div>
                    <Image
                      onClick={copyText}
                      height={21}
                      width={21}
                      src="/assets/images/svg/content_copy.svg"
                      alt="aboutimage"
                      className="cursor-pointer"
                    />
                  </div>
                  <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] leading-normal md:max-w-[588px] max-w-[460px] mt-4 lg:mt-5">
                    Share this code, and when someone signs up and purchases
                    proxies, you will get paid!
                  </p>
                  <div className=" mt-6 lg:mt-7 sm:flex justify-between items-center">
                    <div className="flex sm:flex-row flex-col">
                      <p className=" font-Montserrat font-bold text-white text-md tracking-[1.4px] leading-normal">
                        USED IN ORDER
                        <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                          4
                        </span>
                      </p>
                      <p className="sm:ps-9 font-Montserrat font-bold text-white text-md tracking-[1.4px] leading-normal mt-[15px]  sm:mt-0">
                        MONEY MADE
                        <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                          $10.94
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-end sm:justify-normal">
                      <button className="text-[#040426] w-[109px] h-[27px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold tracking-[-0.26px] leading-normal text-[13px] rounded-[10px] mt-6 sm:mt-0">
                        Cash Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <dv className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
            <div className="hero_wave">
              <div className="hero_wave_height">
                <div className="grad_bg"></div>
              </div>
            </div>
          </dv>
        </div>
      </div>
    </>
  );
};

export default Dashboard4;
