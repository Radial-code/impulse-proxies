import Image from "next/image";
import RangeBar from "./RangeBar";
import DashboardNav from "./DashboardNav";
import { DashbarFooter } from "./DashbarFooter";

const Dashboard5 = () => {
  return (
    <>
      <div className="relative">
        <div className=" w-full absolute bottom-0 top-[300px] md:top-[100px] lg:top-[-39px] z-[-2] animation">
          <div className="hero_wave">
            <div className="hero_wave_height">
              <div className="grad_bg"></div>
            </div>
          </div>
        </div>
        <DashboardNav />
        <div className="lg:pt-14 lg:pb-36 pb-12 pt-9">
          <div className="container xl:max-w-[1358px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
            <RangeBar />
            <div className=" flex flex-wrap mt-9 lg:mt-12">
              <div className="w-full lg:w-6/12 px-3">
                <div className="bg-[#212148] flex items-center justify-between h-14 rounded-t-[16px] px-4 lg:px-9 relative">
                  <p className=" text-sm font-Montserrat font-bold text-white">
                    EARNED REWARDS
                  </p>
                  <button className="text-[#040426] w-[119px] h-[31px] hover:text-white leading-normal tracking[-0.28px] hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px] mt-6 sm:mt-0">
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
                  <div className="pt-[54px] ms-[-10px]">
                    <div className="flex items-center">
                      <Image
                        height={22}
                        width={22}
                        src="/assets/images/svg/redeem_free_gb.svg"
                        alt="redeem free"
                      />
                      <p className="ps-2 font-Montserrat font-medium text-[14px] text-[#9D9DBB] leading-normal mb-0">
                        You won 1 GB free!
                      </p>
                    </div>
                    <div className="pt-6 flex items-center">
                      <Image
                        height={22}
                        width={22}
                        src="/assets/images/svg/redeem_free_gb.svg"
                        alt="redeem free"
                      />
                      <p className="ps-2 font-Montserrat font-medium text-[14px] text-[#9D9DBB] leading-normal mb-0">
                        You won 5 GB free!
                      </p>
                    </div>
                    <div className="pt-6 flex items-center">
                      <Image
                        height={22}
                        width={22}
                        src="/assets/images/svg/redeem_free_gb.svg"
                        alt="redeem free"
                      />
                      <p className="ps-2 font-Montserrat font-medium text-[14px] text-[#9D9DBB] leading-normal mb-0">
                        You won 10 GB free!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-3 min-h-[244px] mt-9 lg:mt-0">
                <p className="bg-[#212148] rounded-t-[16px] h-14 px-9 text-sm font-Montserrat font-bold text-white flex items-center">
                  REFER A FRIEND
                </p>
                <div className="rang_bar px-4  pt-[22px] pb-10 rounded-b-[16px]">
                  <div className="bg-[#292956] h-[46px] rounded-[10px] flex justify-between items-center px-[18px]">
                    <div className=" flex">
                      <p className=" text-[#7777AD] font-Montserrat text-md font-semibold">
                        Discount Code
                      </p>
                      <p className=" text-white font-Montserrat text-md font-semibold ms-4">
                        2729PAYJ1
                      </p>
                    </div>
                    <Image
                      height={21}
                      width={21}
                      src="/assets/images/svg/content_copy.svg"
                      alt="about image"
                    />
                  </div>
                  <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] md:max-w-[618px] max-w-[460px] mt-4 lg:mt-5">
                    Share this code, and when someone signs up and purchases
                    proxies, you will get paid!
                  </p>
                  <div className=" mt-6 lg:mt-7 sm:flex justify-between items-center">
                    <div className="flex">
                      <p className=" font-Montserrat font-bold text-white text-md tracking-tighter-[10%]">
                        USED IN ORDER
                        <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                          4
                        </span>
                      </p>
                      <p className="ps-9 font-Montserrat font-bold text-white text-md tracking-tighter-[10%] mt-3 sm:mt-0">
                        MONEY MADE
                        <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                          $10.94
                        </span>
                      </p>
                    </div>
                    <button className="text-[#040426] w-[109px] h-[27px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[13px] rounded-[10px] mt-6 sm:mt-0">
                      Cash Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashbarFooter />
      </div>
    </>
  );
};

export default Dashboard5;
