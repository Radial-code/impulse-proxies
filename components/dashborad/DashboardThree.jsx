import { useState } from "react";
import Image from "next/image";

const DashboardThree = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className=" py-8">
      <div className="container xl:max-w-[1220px] flex flex-col 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
        <div className=" p-0">
          <p className=" text-sm font-Montserrat font-bold text-white bg-[#212148] h-14 flex items-center ps-4 lg:ps-9 rounded-t-[16px]">
            YOUR REWARDS TRACKER
          </p>
          <div className="rang_bar rounded-b-[16px] px-4 md:px-6 pt-5 pb-9 lg:ps-12 lg:pe-[62px] mt-[-2px]">
            <p className=" text-sm font-Montserrat font-bold text-white md:max-w-[330px] text-center md:text-end">
              3 GB TO GO!
            </p>
            <Image
              height={100}
              width={100}
              className=" lg:max-w-[1100px] w-full"
              src="/assets/images/svg/Group 176.svg"
              alt="about image"
            />
            <div className=" flex justify-between max-w-[1100px]">
              <p className=" text-sm font-Montserrat font-bold text-white lg:mt-[-14px]">
                0 GB
              </p>
              <div className=" text-center">
                <p className=" text-sm font-Montserrat font-bold text-white lg:mt-[-14px] tracking-widest">
                  5 GB
                </p>
                <Image
                  height={22}
                  width={22}
                  className=" text-center ms-1"
                  src="/assets/images/svg/redeem.svg"
                  alt="about image"
                />
              </div>
              <div className=" text-center">
                <p className=" text-sm font-Montserrat font-bold text-white lg:mt-[-14px] tracking-widest">
                  10 GB
                </p>
                <Image
                  height={22}
                  width={22}
                  className="text-center inline-block"
                  src="/assets/images/svg/redeem.svg"
                  alt="about image"
                />
              </div>
            </div>
            <div className=" mt-5">
              <p className=" text-sm font-Montserrat font-bold text-white">
                HOW IT WORKS
              </p>
              <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] max-w-[500px] lg:max-w-[950px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap mt-9 lg:mt-7">
          <div className="w-full lg:w-6/12 px-3">
            <div className="bg-[#212148] flex items-center justify-between h-14 rounded-t-[16px] px-4 lg:px-9 relative">
              <p className=" text-sm font-Montserrat font-bold text-white">
                EARNED REWARDS
              </p>
              <button className="text-[#040426] w-[119px] h-[31px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px]">
                Redeem All
              </button>
            </div>
            <div className=" bg-[url('/assets/images/png/Earned_Rewards.png')] bg-no-repeat bg-cover h-60  flex flex-col justify-center items-center mt-[-13px] rounded-b-[16px]">
              <h3 className="font-Montserrat font-bold text-xl text-white">
                NO REWARDS WON
              </h3>
              <p className="font-Montserrat text-lg text-[#9D9DBB] pt-4 pb-6">
                To make an order, click the button below
              </p>
              <button className=" text-[#040426] w-[180px] h-[45px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[14px] rounded-[10px]">
                Order Proxies
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3 min-h-[244px] mt-9 lg:mt-0">
            <p className="bg-[#212148] rounded-t-[16px] h-14 px-9 text-sm font-Montserrat font-bold text-white flex items-center">
              REFER A FRIEND
            </p>
            <div className="rang_bar px-4 lg:px-9 pt-7 pb-8 rounded-b-[16px]">
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
              <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] md:max-w-[540px] max-w-[460px] mt-4 lg:mt-5">
                Share this code, and when someone signs up and purchases
                proxies, you will get paid!
              </p>
              <div className=" mt-6 lg:mt-7 sm:flex justify-between items-center">
                <p className=" font-Montserrat font-bold text-white text-md tracking-tighter-[10%]">
                  USED IN ORDER
                  <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                    4
                  </span>
                </p>
                <p className=" font-Montserrat font-bold text-white text-md tracking-tighter-[10%] mt-3 sm:mt-0">
                  MONEY MADE
                  <span className="font-Montserrat font-medium text-lg text-[#9D9DBB] ms-3">
                    $10.94
                  </span>
                </p>
                <button className="text-[#040426] w-[109px] h-[27px] hover:text-white hover:bg-[#040426] duration-300 ease-in-out bg-white flex justify-center items-center font-Montserrat font-bold text-[13px] rounded-[10px] mt-6 sm:mt-0">
                  Cash Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardThree;
