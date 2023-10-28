// // import Image from "next/image";
// import { useState } from "react";

// const DashboardDropDown = () => {
//   // DASHBOARD DROPDOWN
//   const [selectedPeriod, setSelectedPeriod] = useState("Sign out");
//   const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
//   const togglePeriodDropdown = () => {
//     setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
//   };
//   const handlePeriodSelect = (period) => {
//     setSelectedPeriod(period);
//     setIsPeriodDropdownOpen(false);
//   };
//   return (
//     <>
//       <div className="w-full relative">
//         <div
//           className="bg-[#1D1D42] py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between ms-6 cursor-pointer"
//           onClick={togglePeriodDropdown}
//         >
//           <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
//             Welcome Back
//             <span className="text-white block">Jack#1983</span>
//           </p>
//           <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
//           {isPeriodDropdownOpen && (
//             <div className="absolute start-0 top-[70px] z-10 bg-[#252550] border-white border-2 w-full max-w-[226px] ms-6 rounded-[10px] px-2">
//               <div className="h-[68px] flex items-center justify-center">
//                 <button
//                   className="w-full bg-[#1D1D42] hover:bg-cyan-green py-4 px-5 rounded-[10px] lh_normal sign_out_button text-center"
//                   onClick={() => handlePeriodSelect("Sign out")}
//                 >
//                   {selectedPeriod}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardDropDown;

import { useState } from "react";

const DashboardDropDown = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Sign out");
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);

  const togglePeriodDropdown = () => {
    setIsPeriodDropdownOpen(!isPeriodDropdownOpen);
  };

  const handlePeriodSelect = (period) => {
    if (period === "Sign out") {
      // Simulate a sign-out action here, replace with your actual sign-out logic
      alert("Simulating sign-out action");
    } else {
      setSelectedPeriod(period);
    }
    setIsPeriodDropdownOpen(false);
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
          <div className="absolute start-0 top-[70px] z-10 bg-[#252550] border-white border-2 w-full max-w-[226px] ms-6 rounded-[10px] px-2">
            <div className="h-[68px] flex items-center justify-center">
              <button
                className="w-full bg-[#1D1D42] hover:bg-cyan-green py-4 px-5 rounded-[10px] lh_normal sign_out_button text-center"
                onClick={() => handlePeriodSelect("Sign out")}
              >
                {selectedPeriod}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDropDown;
