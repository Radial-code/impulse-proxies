import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from 'next-auth/react'
import {
  DashboardTweeter,
  HeaderCrossIcons,
  ToggleIcon,
  WhiteDiscord,
} from "../common/Icons";
import Image from "next/image";
import DashboardMobileNav from "./DashboardMobileNav";
import DashboardDropDown from "./DashboardDropDown";
const DashboardNav = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);
  const { data: session } = useSession()
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
      setIsToggleIconVisible(false);
    } else {
      document.body.classList.remove("overflow-y-hidden");
      setIsToggleIconVisible(true);
    }
  }, [activeNavOverlay]);
  // ROUTER CODE HERE
  const router = useRouter();
  console.log("router.query.typerouter.query.type", router.query.type);
  const shouldDisplayContent = router.pathname === "/dashboard-data-usage";
  return (
    <>
      <DashboardMobileNav
        activeNavOverlay={activeNavOverlay}
        add
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="dark-blue xl:py-6 lg:py-5 py-3 flex-grow-0">
        <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
          <div className="flex-1 flex items-center justify-between  lg:items-center">
            <div className="flex-1 flex items-center lg:justify-between lg:ms-0 ms-12 justify-center">
              <div className="flex-shrink-0 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold flex items-center relative z-[1]"
                >
                  <Image
                    height={62}
                    loading="lazy"
                    width={65}
                    src="/assets/images/svg/logo.svg"
                    alt="logoImg"
                    className="lg:w-[67px] lg:h-[67px] md:w-[45px] md:h-[55px] w-[30px] h-[37px]"
                  />
                  <div className="ms-4">
                    <p className="mb-0 lg:text-[17px] sm:text-[15px] text-[10px] text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                      IMPULSE
                    </p>
                    <p className="lg:text-[14px] sm:text-[12px] text-[8px] text-cyan-green font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                      PROXIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex lg:gap-9 items-center">
                  <Link
                    href="/dashboard-data-usage?type=residential"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 ${
                      router.query.type === "residential"
                        ? "text-white after:transition-all after:ease-in-out after:duration-200 after:w-full after:!start-[0px]"
                        : ""
                    }`}
                  >
                    Residential
                  </Link>
                  <Link
                    href="/dashboard-data-usage?type=isp-datacenter"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 ${
                      router.query.type === "isp-datacenter"
                        ? "text-white after:transition-all after:ease-in-out after:duration-200 after:w-full after:!start-[0px]"
                        : ""
                    }`}
                  >
                    ISP & Datacenter
                  </Link>
                  <Link
                    href="/dashboard-data-usage?type=rewards"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 flex items-center gap-2 svg_fill ${
                      router.query.type === "rewards"
                        ? "text-white after:transition-all after:ease-in-out after:duration-200 after:w-full after:!start-[0px]"
                        : ""
                    }`}
                  >
                    <span className="mb-1">
                      <svg
                        className={`hover_color_change ${
                          router.query.type === "rewards"
                            ? "rewards-active"
                            : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <mask
                          id="mask0_899_742"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                        >
                          <rect width="22" height="22" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_899_742)">
                          <path
                            d="M3.66732 15.584V17.4173H18.334V15.584H3.66732ZM3.66732 5.50065H5.68398C5.6076 5.36315 5.55794 5.21801 5.53503 5.06523C5.51211 4.91246 5.50065 4.75204 5.50065 4.58398C5.50065 3.8201 5.76801 3.17079 6.30273 2.63607C6.83746 2.10135 7.48676 1.83398 8.25065 1.83398C8.70898 1.83398 9.13294 1.95239 9.52253 2.18919C9.91211 2.426 10.252 2.7201 10.5423 3.07148L11.0007 3.66732L11.459 3.07148C11.734 2.70482 12.0701 2.4069 12.4673 2.17773C12.8645 1.94857 13.2923 1.83398 13.7507 1.83398C14.5145 1.83398 15.1638 2.10135 15.6986 2.63607C16.2333 3.17079 16.5007 3.8201 16.5007 4.58398C16.5007 4.75204 16.4892 4.91246 16.4663 5.06523C16.4434 5.21801 16.3937 5.36315 16.3173 5.50065H18.334C18.8382 5.50065 19.2697 5.68016 19.6288 6.03919C19.9878 6.39822 20.1673 6.82982 20.1673 7.33398V17.4173C20.1673 17.9215 19.9878 18.3531 19.6288 18.7121C19.2697 19.0711 18.8382 19.2507 18.334 19.2507H3.66732C3.16315 19.2507 2.73155 19.0711 2.37253 18.7121C2.0135 18.3531 1.83398 17.9215 1.83398 17.4173V7.33398C1.83398 6.82982 2.0135 6.39822 2.37253 6.03919C2.73155 5.68016 3.16315 5.50065 3.66732 5.50065ZM3.66732 12.834H18.334V7.33398H13.659L15.584 9.94648L14.1173 11.0007L11.0007 6.78398L7.88398 11.0007L6.41732 9.94648L8.29648 7.33398H3.66732V12.834ZM8.25065 5.50065C8.51037 5.50065 8.72808 5.4128 8.90378 5.23711C9.07947 5.06141 9.16732 4.84371 9.16732 4.58398C9.16732 4.32426 9.07947 4.10655 8.90378 3.93086C8.72808 3.75516 8.51037 3.66732 8.25065 3.66732C7.99093 3.66732 7.77322 3.75516 7.59753 3.93086C7.42183 4.10655 7.33398 4.32426 7.33398 4.58398C7.33398 4.84371 7.42183 5.06141 7.59753 5.23711C7.77322 5.4128 7.99093 5.50065 8.25065 5.50065ZM13.7507 5.50065C14.0104 5.50065 14.2281 5.4128 14.4038 5.23711C14.5795 5.06141 14.6673 4.84371 14.6673 4.58398C14.6673 4.32426 14.5795 4.10655 14.4038 3.93086C14.2281 3.75516 14.0104 3.66732 13.7507 3.66732C13.4909 3.66732 13.2732 3.75516 13.0975 3.93086C12.9218 4.10655 12.834 4.32426 12.834 4.58398C12.834 4.84371 12.9218 5.06141 13.0975 5.23711C13.2732 5.4128 13.4909 5.50065 13.7507 5.50065Z"
                            fill="#5E5E80"
                          />
                        </g>
                      </svg>
                    </span>
                    Rewards
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                {shouldDisplayContent ? (
                  <div style={{ display: "block" }}>
                    <div className="hidden lg:flex items-center">
                      <Link href="https://discord.com/" target="blank">
                        <WhiteDiscord />
                      </Link>
                      <Link
                        href="https://twitter.com/"
                        target="blank"
                        className="ms-5 hover:translate-y-[-5px] transition-all ease-in-out duration-200"
                      >
                        <DashboardTweeter />
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <DashboardDropDown />
              </div>
            </div>
            <div className="flex items-center lg:hidden ">
              <div className="relative z-[200] w-7 h-7">
                <button
                  onClick={() => setActiveNavOverlay(!activeNavOverlay)}
                  type="button"
                  className={` inline-flex items-center justify-center rounded-md ${
                    isToggleIconVisible ? "w-[30px]" : "w-[46px]"
                  } `}
                  aria-label="toggle-button"
                >
                  {" "}
                  {isToggleIconVisible ? <HeaderCrossIcons /> : <ToggleIcon />}
                </button>
              </div>
              <div className="bg-[#202046] h-[65px] w-[65px] rounded-[10px] flex items-center justify-center ms-4">
                {session?.user?.data?.avatar ?
                <Image
                  className="rounded-full "
                  loading="lazy"
                  height={37}
                  width={37}
                  src={session?.user?.data?.avatar}
                  alt="avatar"
                />
                : <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
