import { useState } from "react";
import { SignOutIcon } from "../Icon";
import Image from "next/image";

const DashboardDropDown = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Sign Out");
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);

  const togglePeriodDropdown = () => {
    setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
  };

  const handlePeriodSelect = (period) => {
    if (period === "Sign Out") {
      // Simulate a sign-out action here, replace with your actual sign-out logic
      alert("Simulating Sign Out action");
    } else {
      setSelectedPeriod(period);
    }
    setIsPeriodDropdownOpen(false);
    console.log("handlePeriodSelect called");
  };

  return (
    <div className="relative">
      <div
        className="bg-[#1D1D42] py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between cursor-pointer ms-6"
        onClick={togglePeriodDropdown}
      >
        <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
          Welcome Back
          <span className="text-white block">Jack#1983</span>
        </p>
        <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
        {isPeriodDropdownOpen && (
          //  px-2 border-white border-2
          <div className="absolute start-0 top-[70px] z-10 bg-[#252550] w-full max-w-[226px] ms-6 rounded-[10px]">
            {/* <div className="h-[68px] flex items-center justify-center"> */}
            {/* hover:bg-cyan-green  */}
            <button
              className="group transition-all duration-300 ease-in-out w-full bg-[#1D1D42] lh_normal sign_out_button text-center flex items-center gap-1"
              onClick={() => handlePeriodSelect("Sign Out")}
            >
              <Image
                className="group-hover:translate-x-[2px] w-5 h-5 transition-all duration-300 ease-in-out"
                loading="lazy"
                height={19.5}
                width={19.5}
                src="/assets/images/svg/logout.svg"
                alt="logout"
              />
              {selectedPeriod}
            </button>
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDropDown;
