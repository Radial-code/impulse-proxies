import Image from "next/image";
import { useState } from "react";

const DashboardDropDown = () => {
  // dropdown
  const [selectedPeriod, setSelectedPeriod] = useState("United States");
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  const togglePeriodDropdown = () => {
    setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
  };
  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setIsPeriodDropdownOpen(false);
  };
  return (
    <>
      <div className="w-full relative">
        <div
          className="bg-[#1D1D42] py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between ms-6"
          onClick={togglePeriodDropdown}
        >
          <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
            Welcome Back
            <span className="text-white block">Jack#1983</span>
          </p>
          <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
          {isPeriodDropdownOpen && (
            <div className="absolute start-0 top-[70px] z-10 bg-[#252550] border-white border-2 w-full max-w-[226px] ms-6 rounded-[10px]">
              <div className=" h-[68px] flex items-center justify-center">
                <div
                  className="w-full bg-[#1D1D42] hover:bg-cyan-green transition-all duration-200 ease-in-out py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between"
                  onClick={() => handlePeriodSelect("USA")}
                >
                  <p className="text-md text-white font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
                    Sign out
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardDropDown;
