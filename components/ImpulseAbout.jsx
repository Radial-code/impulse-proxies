import React from "react";
import Link from "next/link";
import { AboutBox } from "./common/Helper";
import Image from "next/image";
const ImpulseAbout = () => {
  return (
    <div
      id="AboutUs"
      className="bg-[#141436] select_none sm:pt-14 pt-11 z-10 relative"
    >
      <div className=" w-16 p-0">
        <Image
          src="/assets/images/png/glass.png"
          alt="aboutTop"
          width={144}
          height={72}
          className="pointer-events-none spin_about_img absolute left-0 lg:left-28 lg:top-[-10%] sm:top-[-8%] top-[-9%] text-3xl sm:w-[144px] w-[100px] sm:h-[122px] h-[100px] aboutTop"
        />
        <Image
          src="/assets/images/png/Abstract01.png"
          alt="aboutTop"
          width={99}
          height={50}
          className="pointer-events-none spin_about_img_2 absolute left-0 lg:left-28 lg:top-[-10%] sm:top-[-8%] top-[-9%] text-3xl sm:w-[144px] w-[100px] sm:h-[122px] h-[100px] aboutTop"
        />
      </div>
      <div className="container xl:max-w-[1220px] flex flex-col 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 relative">
        <h2 className=" font-Montserrat lg:text-6xl text-[28px] text-white font-bold leading-[121%] text-center lg:text-start">
          About <span className="text-cyan-green">Us</span>
        </h2>
        <p className=" text-dark-gray leading-[157%] font-normal md:font-semibold lg:text-2xl text-[15px] text-center lg:max-w-[260px] sm:pt-2 pt-4 tracking-[-0.74px] sm:pb-0 pb-3 md:text-center lg:text-start lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
        </p>
        <div className="flex lg:flex-nowrap justify-center flex-wrap lg:gap-6 sm:pb-24 pb-12 sm:mb-0 mb-3 lg:mt-10">
          {AboutBox.map((about) => {
            return (
              <div
                key={about.id}
                className={`lg:w-6/12 hover:translate-y-[-4%] duration-200 ease-in-out sm:w-10/12 w-full  rounded-[20px] p-[2px] inline-block lg:mt-0 mt-4 relative ${about.border}`}
              >
                <div className="block rounded-[20px] w-full bg-[#080D2D] sm:ps-8 ps-4 pb-7 sm:pt-6 pt-4 sm:pe-6 pe-4">
                  <div className="sm:flex items-start justify-between">
                    <div className=" flex gap-6">
                      <Image
                        height={81}
                        width={81}
                        src={about.aboutImg}
                        alt="aboutimg"
                        priority="1"
                        className=" sm:h-[81px] sm:w-[81px] w-[61px] h-[61px]"
                      />
                      <div>
                        <h4 className="mb-0 text-white font-Montserrat leading-[204%] tracking-[-0.44px] md:text-3xl text-[17px] font-bold">
                          About
                          <span className="text-cyan-green ms-1">
                            {about.impulse}
                          </span>
                        </h4>
                        <p className="sm:mb-7 text-[#9898A3] font-Montserrat font-medium leading-[178%] text-md max-w-[300px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                      </div>
                    </div>
                    <div className=" hidden sm:flex items-center justify-end md:mt-2">
                      <Image
                        height={27}
                        width={27}
                        alt="img"
                        src="/assets/images/svg/AboutLogo.svg"
                      />
                      <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-lg ps-[10px]">
                        IMPULSE
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-4 items-center justify-between sm:justify-end mt-2">
                    <div className=" flex sm:hidden items-center justify-end">
                      <Image
                        height={27}
                        width={27}
                        alt="img"
                        src="/assets/images/svg/AboutLogo.svg"
                      />
                      <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-[14px] ps-[10px]">
                        IMPULSE
                      </p>
                    </div>
                    <div className=" flex gap-4">
                      <Link
                        href="https://discord.com/"
                        target="_blank"
                        className=" flex items-center justify-end gap-2"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1133_1128)">
                            <path
                              d="M20.4863 4.39624C18.9439 3.68851 17.2899 3.16708 15.5605 2.86844C15.529 2.86268 15.4975 2.87708 15.4813 2.90589C15.2686 3.28424 15.033 3.77782 14.868 4.16577C13.0079 3.88729 11.1574 3.88729 9.33546 4.16577C9.17044 3.76918 8.92625 3.28424 8.71258 2.90589C8.69636 2.87804 8.66489 2.86364 8.63341 2.86844C6.90498 3.16612 5.25095 3.68755 3.70758 4.39624C3.69422 4.402 3.68278 4.4116 3.67515 4.42408C0.537837 9.11119 -0.321608 13.6831 0.100007 18.1983C0.101914 18.2204 0.114315 18.2415 0.131485 18.2549C2.2014 19.775 4.20646 20.6979 6.17431 21.3096C6.20579 21.3192 6.23917 21.3076 6.2592 21.2817C6.7247 20.646 7.13963 19.9757 7.49543 19.2709C7.51642 19.2296 7.49638 19.1806 7.45346 19.1643C6.79528 18.9146 6.16859 18.6102 5.56573 18.2645C5.51804 18.2367 5.51422 18.1685 5.5581 18.1359C5.68497 18.0408 5.81183 17.9419 5.93298 17.842C5.95492 17.8238 5.98544 17.8199 6.0112 17.8314C9.9717 19.6396 14.2594 19.6396 18.1732 17.8314C18.1989 17.819 18.2294 17.8228 18.2523 17.841C18.3735 17.9409 18.5003 18.0408 18.6282 18.1359C18.672 18.1685 18.6692 18.2367 18.6215 18.2645C18.0186 18.6169 17.3919 18.9146 16.7328 19.1633C16.6899 19.1797 16.6708 19.2296 16.6918 19.2709C17.0552 19.9748 17.4701 20.645 17.9271 21.2808C17.9461 21.3076 17.9805 21.3192 18.0119 21.3096C19.9893 20.6979 21.9944 19.775 24.0643 18.2549C24.0824 18.2415 24.0939 18.2213 24.0958 18.1992C24.6004 12.9792 23.2507 8.44476 20.5178 4.42505C20.5111 4.4116 20.4997 4.402 20.4863 4.39624ZM8.08684 15.449C6.89449 15.449 5.91199 14.3543 5.91199 13.0099C5.91199 11.6655 6.87541 10.5708 8.08684 10.5708C9.3078 10.5708 10.2808 11.6751 10.2617 13.0099C10.2617 14.3543 9.29826 15.449 8.08684 15.449ZM16.128 15.449C14.9357 15.449 13.9532 14.3543 13.9532 13.0099C13.9532 11.6655 14.9166 10.5708 16.128 10.5708C17.349 10.5708 18.322 11.6751 18.3029 13.0099C18.3029 14.3543 17.349 15.449 16.128 15.449Z"
                              fill="#16FDEC"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1133_1128">
                              <rect width="24.2" height="24.2" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className=" font-Montserrat text-[14px] sm:text-lg font-bold text-white">
                          Discord
                        </span>
                      </Link>
                      <Link
                        target="_blank"
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2FOpulentM71934"
                        className=" flex items-center justify-end gap-2 "
                      >
                        <svg
                          className=""
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.96 2.49905C20.1876 2.83768 19.3607 3.07064 18.4892 3.1763C19.3784 2.64277 20.0583 1.79883 20.3825 0.793457C19.5484 1.27908 18.6257 1.63083 17.6446 1.82968C16.8623 0.992301 15.7441 0.465332 14.5031 0.465332C12.1242 0.465332 10.1962 2.39274 10.1962 4.76836C10.1962 5.11027 10.2375 5.43839 10.309 5.74946C6.7305 5.58211 3.55819 3.86274 1.43653 1.2653C1.06378 1.89793 0.851812 2.63293 0.851812 3.43289C0.851812 4.9298 1.61372 6.2423 2.76544 7.01405C2.06128 6.99371 1.39847 6.7988 0.817687 6.47789V6.52974C0.817687 8.61727 2.30081 10.3576 4.26956 10.754C3.91059 10.8492 3.52734 10.9043 3.13819 10.9043C2.86191 10.9043 2.59809 10.8774 2.33494 10.8288C2.88881 12.5377 4.47431 13.782 6.36431 13.8194C4.89497 14.9711 3.03253 15.6575 1.02572 15.6575C0.683812 15.6575 0.342562 15.6411 0 15.5998C1.91428 16.8204 4.17375 17.5344 6.61434 17.5344C14.5333 17.5344 18.8606 10.9752 18.8606 5.29468C18.8606 5.11355 18.8606 4.92914 18.8468 4.74408C19.6914 4.1423 20.4225 3.37974 21 2.51546L20.96 2.49905Z"
                            fill="#16FDEC"
                          />
                        </svg>
                        <span className=" font-Montserrat text-[14px] sm:text-lg font-bold text-white">
                          Twitter
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ImpulseAbout;
