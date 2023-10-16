import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { DashboardTweeter, RewardGift, WhiteDiscord } from "../common/Icons";
import { useRouter } from "next/router";
const DashboardMobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)");
    function handleScreenSizeChange(event) {
      if (event.matches) {
        if (activeNavOverlay) {
          document.body.classList.add("overflow-y-hidden");
        } else {
          document.body.classList.remove("overflow-y-hidden");
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }
    // Attach the event listener and run it once to check the initial screen size
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, [activeNavOverlay]);
  const [open, setOpen] = useState();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  // ROUTER CODE HERE
  const router = useRouter();
  console.log("router.query.typerouter.query.type", router.query.type);
  const shouldDisplayContent = router.pathname === "/dashboard-data-usage";
  return (
    <>
      <div
        className={`fixed items-start lg:hidden bg-[#040426] lg:z-[-1] top-0 h-full flex flex-col pb-4 pt-24 transition-all duration-200 ease-in z-[100] w-[300px] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className="2xl:w-full w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
          <div className="flex flex-col gap-9 xl:gap-5 lg:items-start items-center w-full">
            <div
              className="bg-[#1D1D42] max-w-[327px] w-full py-4 sm:mt-16 mt-8 px-4 rounded-[10px] flex items-center justify-between"
              onClick={() => setActiveNavOverlay(false)}
            >
              <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
                Welcome Back
                <span className="text-white block">Jack#1983</span>
              </p>
              <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
            </div>
            <Link
              onClick={() => setActiveNavOverlay(false)}
              href="/dashboard-data-usage?type=residential"
              className={`text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0 ${
                router.query.type === "residential" ? "text-white" : ""
              }`}
            >
              Residential
            </Link>
            <Link
              onClick={() => setActiveNavOverlay(false)}
              href="/dashboard-data-usage?type=isp-datacenter"
              className={`text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0 ${
                router.query.type === "isp-datacenter" ? "text-white" : ""
              }`}
            >
              ISP & Datacenter
            </Link>
            <Link
              onClick={() => setActiveNavOverlay(false)}
              href="/dashboard-data-usage?type=rewards"
              className={`text-[#5E5E80] active:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full relative after:bg-white overflow-hidden after:start-[50%] active:after:start-0 after:bottom-0 flex items-center gap-2 ${
                router.query.type === "rewards" ? "text-white" : ""
              }`}
            >
              <span className="mb-1">
                {/* <RewardGift /> */}
                <svg
                  className={`hover_color_change ${
                    router.query.type === "rewards" ? "rewards-active" : ""
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
            <div className="flex items-center">
              <Link href="https://discord.com/">
                <WhiteDiscord />
              </Link>
              <Link
                href="https://twitter.com/"
                className="ms-5 hover:translate-y-[-5px] transition-all ease-in-out duration-200"
              >
                <DashboardTweeter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute lg:hidden top-0 left-0 w-full h-full bg-[#000000a6] lg:bg-transparent backdrop-sepia-[12px z-50 ${
          activeNavOverlay
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveNavOverlay(false)}
      ></div>
    </>
  );
};

export default DashboardMobileNav;
