import React, { useState, useEffect } from "react";

const Preloader = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // }, []);

  // useEffect(() => {
  //   if (isLoading) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isLoading]);

  return (
    <>
      {/* <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#16FDEC]"></div>
      </div> */}
    </>
  );
};

export default Preloader;
