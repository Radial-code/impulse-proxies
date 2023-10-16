import Image from "next/image";
import React, { useState } from "react";

const RangeBar = () => {
  const [minRange, setMinRange] = useState(22);
  const [maxRange, setMaxRange] = useState(100);
  const gap = 10;
  const handleInputChange = (e) => {
    const targetClassName = e.target.className;

    if (maxRange - minRange < gap) {
      if (targetClassName === "range-min") {
        setMinRange(maxRange - gap);
      } else {
        setMaxRange(minRange + gap);
      }
    }
  };
  const handleMinRangeChange = (e) => {
    setMinRange(parseInt(e.target.value));
  };

  const handleMaxRangeChange = (e) => {
    setMaxRange(parseInt(e.target.value));
  };

  const progressStyle = {
    left: `${(minRange / 100) * 100}%`,
    right: `${100 - (maxRange / 100) * 100}%`,
  };

  return (
    <>
      <div className="px-3">
        <div className="bg-[#212148] flex items-center  rounded-t-[16px]">
          <p className="text-sm font-Montserrat font-bold text-white leading-normal tracking-[1.2px] sm:ps-6 ps-4 lg:py-6 py-[22px] ">
            YOUR REWARDS TRACKER
          </p>
        </div>
        <div className="rang_bar rounded-b-[16px] px-4 md:px-6 sm:pt-7 pt-6 sm:pb-8 pb-4 mt-[-2px]">
          <p className=" text-sm font-Montserrat font-bold text-white md:max-w-[330px] leading-normal tracking-[1.2px] text-center lg:text-end">
            3 GB TO GO!
          </p>

          <div className="flex relative justify-center items-center lg:h-[60px] sm:h-[30px] h-[40px] mx-auto rounded">
            <div className="range-slider">
              <div className="progress" style={progressStyle}></div>
              <span className="range-min-wrapper">
                <input
                  className="range-min"
                  type="range"
                  min="0"
                  max="100"
                  value={minRange}
                  onChange={handleMinRangeChange}
                  onInput={handleInputChange}
                />
              </span>
            
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-Montserrat font-bold   text-white lg:mt-[-14px]">
              0 GB
            </p>
            <div className=" text-center">
              <p className="text-sm font-Montserrat line relative font-bold text-white leading-normal tracking-[1.2px] lg:mt-[-14px]">
                5 GB
              </p>
              <Image
                height={22}
                width={22}
                className=" text-center ms-1"
                src="/assets/images/svg/redeem.svg"
                alt="aboutimage"
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
                alt="aboutimage"
              />
            </div>
          </div>
          <div className="lg:mt-5 sm:mt-4 mt-[30px]">
            <p className="text-sm font-Montserrat font-bold leading-normal tracking-[1.2px] text-white">
              HOW IT WORKS
            </p>
            <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] lg:max-w-[500px] max-w-[613px] xl:max-w-[1125px] leading-[22px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeBar;
