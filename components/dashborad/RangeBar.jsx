import Image from "next/image";
import React, { useState } from "react";

const RangeBar = () => {
  const [minRange, setMinRange] = useState(25);
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
      <div className=" px-3">
        <p className=" text-sm font-Montserrat font-bold text-white bg-[#212148] h-14 flex items-center ps-4 lg:ps-9 rounded-t-[16px]">
          YOUR REWARDS TRACKER
        </p>
        <div className="rang_bar rounded-b-[16px] px-4 md:px-6 pt-5 pb-8 mt-[-2px]">
          <p className=" text-sm font-Montserrat font-bold text-white md:max-w-[330px] text-center lg:text-end">
            3 GB TO GO!
          </p>

          <div className="flex relative justify-center items-center lg:h-20 h-[30px] mx-auto rounded">
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
              <span className="range-max-wrapper">
                <input
                  className="range-max"
                  type="range"
                  min="0"
                  max="100"
                  value={maxRange}
                  onChange={handleMaxRangeChange}
                  onInput={handleInputChange}
                />
              </span>
            </div>
          </div>
          <div className=" flex justify-between">
            <p className=" text-sm font-Montserrat font-bold text-white lg:mt-[-14px]">
              0 GB
            </p>
            <div className=" text-center">
              <p className="text-sm font-Montserrat line relative font-bold text-white lg:mt-[-14px] tracking-widest">
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
          <div className=" mt-5">
            <p className=" text-sm font-Montserrat font-bold text-white">
              HOW IT WORKS
            </p>
            <p className=" font-Montserrat text-[13px] md:text-lg font-medium text-[#9D9DBB] lg:max-w-[500px] max-w-[613px] xl:max-w-[1125px] mt-2">
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
