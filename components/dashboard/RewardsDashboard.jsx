import Image from "next/image";
import RangeBar from "./RangeBar";
import { rewardData } from "../common/Helper";

const RewardsDashboard = () => {
  const copyText = () => {
    const textToCopy = document.getElementById("textToCopy").innerText;
    // Try to use the modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        // .then(() => {
        //   alert("Text copied to clipboard!");
        // })
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
      // alert("Text copied to clipboard!");
    }
  };
  return (
    <>
      <div className="relative">
        <div className="w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
        <div className="lg:pt-[61px] lg:pb-36 sm:pb-12 pb-[66px] sm:pt-9 pt-6">
          <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
            <RangeBar />
            <div className="flex flex-wrap mt-9 lg:mt-14">
              {rewardData.length > 0 ? (
                <>
                  <div className="w-full lg:w-6/12 px-3">
                    <div className="bg-[#212148] z-10 flex items-center justify-between h-14 rounded-t-[16px] px-4 lg:px-9 relative">
                      <p className=" text-sm font-Montserrat tracking-[1.2px] leading-normal font-bold text-white">
                        EARNED REWARDS
                      </p>
                      <button className="text-[#040426] w-[119px] h-[31px] leading-normal tracking-[-0.28px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px]">
                        Redeem All
                      </button>
                    </div>
                    <div className="relative bg-[0px] h-[253px] custom_height flex flex-col justify-center items-center mt-[-13px] rounded-b-[16px]  earned_rewards_box">
                      <h3 className="font-Montserrat font-bold sm:text-xl text-[15px] leading-normal tracking-[1.7px] text-white">
                        NO REWARDS WON
                      </h3>
                      <p className="font-Montserrat text-lg leading-normal sm:max-w-full max-w-[179px] text-center text-[#9D9DBB] sm:pt-4 py-3 sm:pb-6">
                        To make an order, click the button below
                      </p>
                      <button className="other_proxies_btn_01">
                        Order Proxies
                      </button>

                      {/*  */}
                      <Image
                        width={196}
                        height={167}
                        src="/assets/images/svg/earned-rewards-bg-blur-image.svg"
                        alt="earned-rewards-bg-blur-image"
                        className="absolute top-0 left-0 mt-8 ms-6"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-3 min-h-[244px] mt-9 lg:mt-0">
                    <p className="bg-[#212148] rounded-t-[16px] h-14 leading-normal tracking-[1.2px] px-9 text-sm font-Montserrat font-bold text-white flex items-center">
                      REFER A FRIEND
                    </p>
                    <div className="rang_bar px-4 lg:px-9 lg:pt-[10px] pt-6 lg:pb-[62px] pb-12 rounded-b-[16px]">
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
                          src="/assets/images/webp/content_copy.webp"
                          alt="aboutimage"
                          className="cursor-pointer"
                          loading="lazy"
                        />
                      </div>
                      <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] leading-normal md:max-w-[588px] max-w-[460px] mt-4 lg:mt-5">
                        Share this code, and when someone signs up and purchases
                        proxies, you will get paid!
                      </p>
                      <div className=" mt-6 lg:mt-8 sm:flex justify-between items-center">
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
                </>
              ) : (
                <>
                  <div className="w-full lg:w-6/12 sm:px-3">
                    <div className="bg-[#212148] flex items-center justify-between rounded-t-[16px] px-4 lg:px-9 relative">
                      <p className=" text-sm font-Montserrat leading-normal tracking-[1.2px] font-bold lg:py-[22px] py-5 sm:px-6 text-white">
                        EARNED REWARDS
                      </p>
                      <button className="text-[#040426] w-[119px] h-[31px] hover:text-white leading-normal tracking[-0.28px] hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px] ">
                        Redeem All
                      </button>
                    </div>
                    <div className="flex w-full bg_redeem_all rounded-b-[16px]">
                      <div className="flex flex-col justify-center mt-[-13px]">
                        <div className="mb-7 mt-[45px] h-[167px] w-[5px] mx-8 bg-[#50EED7] rounded-[10px] bg-opacity-30 relative">
                          <div className="bg-white stroke-2 h-[15px] w-[15px] rounded-full absolute left-[-5px] top-[26px]"></div>
                          <div className="bg-white stroke-2 h-[15px] w-[15px] rounded-full absolute left-[-5px] top-[76px]"></div>
                          <div className="bg-white stroke-2 h-[15px] w-[15px] rounded-full absolute left-[-5px] top-[123px]"></div>
                        </div>
                      </div>
                      <div className="pt-[54px] ms-[-10px] ">
                        {rewardData.map((item, i) => {
                          return (
                            <div
                              className={`flex items-center gap-2 sm:gap-4 pe-4 ${
                                i === 0 ? "" : "pt-6"
                              }`}
                              key={i}
                            >
                              <div className="flex flex-wrap items-center w-full gap-2">
                                <Image
                                  height={22}
                                  width={22}
                                  src="/assets/images/webp/redeem.webp"
                                  alt="redeem free"
                                  loading="lazy"
                                />
                                <p className="font-Montserrat font-medium text-[14px] text-[#9D9DBB] leading-normal mb-0">
                                  {item.text}
                                </p>
                              </div>
                              <div>
                                <button className="text-[#040426] w-[65px] sm:w-[90px] h-[23px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center leading-normal tracking-[-0.26px] font-Montserrat font-bold text-xs sm:text-[11px] rounded-[6px]">
                                  Redeem
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 sm:px-3 min-h-[244px] mt-9 lg:mt-0">
                    <div className="flex items-center bg-[#212148] rounded-t-[16px] lg:py-[22px] py-5 px-6">
                      <p className=" leading-normal tracking-[1.2px] text-sm font-Montserrat font-bold text-white ">
                        REFER A FRIEND
                      </p>
                    </div>
                    <div className="rang_bar sm:px-6 px-4  sm:pt-6 pt-[26px] sm:pb-10 pb-5 rounded-b-[16px]">
                      <div className="bg-[#292956] h-[46px] rounded-[10px] flex justify-between items-center px-[18px]">
                        <div className=" flex">
                          <p className=" text-[#7777AD] font-Montserrat leading-normal tracking-[-0.28px] text-md font-semibold">
                            Discount Code
                          </p>
                          <p
                            id="textToCopy"
                            className=" text-white font-Montserrat text-md font-semibold ms-4 leading-normal tracking-[-0.28px]"
                          >
                            2729PAYJ1
                          </p>
                        </div>
                        <Image
                          onClick={copyText}
                          height={21}
                          width={21}
                          src="/assets/images/webp/content_copy.webp"
                          alt="about image"
                          className="cursor-pointer"
                          loading="lazy"
                        />
                      </div>
                      <p className=" font-Montserrat sm:text-[13px] text-[12px] md:text-lg font-medium leading-normal text-[#9D9DBB] md:max-w-[608px] max-w-[460px] sm:mt-5 mt-4">
                        Share this code, and when someone signs up and purchases
                        proxies, you will get paid!
                      </p>
                      <div className="sm:mt-8 mt-6 lg:mt-7 sm:flex justify-between items-center">
                        <div className="flex sm:flex-row flex-col">
                          <p className=" font-Montserrat font-bold text-white text-md leading-normal tracking-[1.4px]">
                            USED IN ORDER
                            <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                              4
                            </span>
                          </p>
                          <p className="sm:ps-9 font-Montserrat font-bold text-white text-md leading-normal tracking-[1.4px] sm:mt-3 mt-4 md:mt-0">
                            MONEY MADE
                            <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                              $10.94
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-end sm:justify-normal">
                          <button className="text-[#040426] w-[109px] h-[27px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center leading-normal tracking-[-0.26px] font-Montserrat font-bold text-[13px] rounded-[10px] mt-6 sm:mt-0">
                            Cash Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsDashboard;
