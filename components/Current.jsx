import React, { useState, useRef } from "react";
import { findDOMNode } from "react-dom";

import { currentData } from "./common/Helper";
import Link from "next/link";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Current = () => {
  const [viewCount, setViewCount] = useState(false);

  const visibilitySensorRefs = currentData.map(() => useRef());

  function onVisibilityChange(index, isVisible) {
    if (isVisible) {
      setViewCount(true);
    }
  }

  return (
    <>
      <div className="bg_current current-main after:absolute after:w-full after:contents-['']">
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <div className="flex flex-wrap justify-around">
            {currentData.map((data, i) => {
              return (
                <div
                  key={data.id}
                  className="md:w-3/12 sm:w-4/12 w-full min-h-[296] sm:min-h-[89px]"
                >
                  <p className="text-white text-center font-bold leading-[110%] lg:text-7xl md:text-[40px] text-[32px] sm:mt-0 mt-8 ">
                    <VisibilitySensor
                      ref={visibilitySensorRefs[i]}
                      onChange={(isVisible) => onVisibilityChange(i, isVisible)}
                      offset={{
                        top: 10,
                      }}
                      delayedCallon
                    >
                      <CountUp
                        start={0}
                        end={
                          i === 0
                            ? viewCount
                              ? 3234199
                              : 0
                            : i === 1
                            ? viewCount
                              ? 1500
                              : 0
                            : i === 2
                            ? viewCount
                              ? 20434
                              : 0
                            : ""
                        }
                        duration={2}
                      />
                    </VisibilitySensor>
                    {data.number}
                  </p>
                  <p className="text-center text-[#9898A3] pt-[6px] lg:text-2xl text-[17px] font-semibold leading-[150%] text-opacity-80 ">
                    {data.current}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="bg-[#2D3752] w-full h-[1px] border-0 sm:mt-6 mt-8 sm:mb-6 mb-[9px] " />
          <p className="opacity-40 tracking-[1.5px] font-bold lh_normal text-xs text-center text-white">
            TRUSTED BY OUR PARTNERS
          </p>
          <div className="flex items-center justify-center sm:mt-6 mt-[10px] gap-8">
            <Link aria-label="NIcon" href="#" target="_blank">
              <Image
                height={73}
                width={54}
                src="/assets/images/webp/N_icon_current.webp"
                alt="N icon"
                loading="lazy"
                className="lg:w-[73px] lg:h-[54px] md:w-[65px] md:h-[46px] w-[44px] h-[31px] !cursor-pointer"
              />
            </Link>
            <Link aria-label="MangoIcon" href="#" target="_blank">
              <Image
                loading="lazy"
                height={66}
                width={66}
                src="/assets/images/webp/mango_icon_current.webp"
                alt="mango icon"
                className="lg:w-[60px] lg:h-[62px] md:w-[53px] md:h-[52px] w-[36px] h-[37px] !cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
