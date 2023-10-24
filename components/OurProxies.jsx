import React from "react";
import Image from "next/image";
import { ourData } from "./common/Helper";
const OurProxies = () => {
  return (
    <>
      <div
        id="proxies"
        className="pt-[52px] lg:pt-[87px] 2xl:pt-28 pb-[130px] md:pb-[170px] lg:pb-[155px] xl:pb-[108px] 2xl:pb-48 bg-[#040426] relative"
      >
        <Image
          width={144}
          height={220}
          className="proxies-graph-img rocket_img"
          src="/assets/images/svg/Racketimage.svg"
          alt="Group_bg"
          loading="lazy"
        />
        <Image
          width={144}
          height={220}
          className="proxies-rocket-img rocket_img rocketAnimation"
          src="/assets/images/svg/rocket.svg"
          alt="Group_bg"
        />
        <Image
          width={21}
          height={33}
          className="proxies-rocketfire-img rocket_img fireAnimation"
          src="/assets/images/svg/rocketfire.svg"
          alt="Group_bg"
        />

        <div className="proxies_box h-10 opacity-10 w-full max-w-[1000px] mx-auto absolute top-0 lg:top-[0px] lg:left-[22%]"></div>
        <div className="box_showdow rounded-[40px] opacity-20 blur-[150px] absolute w-full max-w-[1190px] h-[200px] bottom-0 pointer-events-none"></div>
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 text-white">
          <h2 className="proxies-heading">
            Our <span className="text-cyan-green ">Proxies</span>
          </h2>
          <p className="proxies-para">
            Unveil a world of unparalleled proxy options, perfectly crafted for
            every requirement.
          </p>

          <div className="proxies-map-div flex-wrap">
            {ourData.map((obj, i) => {
              return (
                <div key={i} className={`proxies-map-key-div ${obj.border}`}>
                  <div>
                    <h3 className="font-bold font-Montserrat text-2xl">
                      <span className="text-cyan-green">{obj.heading_2}</span>
                      {obj.heading}
                    </h3>
                    <p className=" font-medium text-md font-Montserrat opacity-70 mt-2">
                      {obj.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex justify-center lg:justify-center relative">
            <button className="proxies-try-now-button">Try Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProxies;
