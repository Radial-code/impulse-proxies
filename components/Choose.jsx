import React from "react";
import Current from "./Current";
import WhyToChooseUs from "./WhyToChooseUs";

const Choose = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute blur-[150px] opacity-20 chooseBox h-[500px] w-full top-0 pointer-events-none"></div>
        <Current />
        {/* <WhyToChooseUs />  */}
      </div>
    </>
  );
};

export default Choose;
