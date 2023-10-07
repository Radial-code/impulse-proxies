import Image from 'next/image';
import React from 'react'

const RangeBar = () => {
  return (
    <>
      <div className=" px-3">
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
    </>
  );
}

export default RangeBar

