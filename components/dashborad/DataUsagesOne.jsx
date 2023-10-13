import Image from 'next/image';
import React from 'react'

const DataUsagesOne = () => {
  return (
    <>
      <div className="sm:w-6/12 w-full xl:pe-6 pe-2 h-full">
        <div className="w-full h-full flex flex-col bgData databox_border relative p-8 pb-9 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="font-Montserrat mb-0 text-white font-bold text-md tracking-[1.4px] flex items-center">
              <Image
                width={18}
                height={18}
                src="./assets/images/svg/dataSmall.svg"
                className="me-3"
                alt="image"
              />
              DATA USAGE
            </p>
            <p className="text-sm font-Montserrat font-semibold tracking-[1.3px] text-[#D4D4F1]">
              4GB <span className="text-[#8282AB]">PLAN</span>
            </p>
          </div>
          <div className=" flex items-center justify-center mt-4 relative">
            <Image
              height={185}
              width={185}
              alt="image"
              src="./assets/images/svg/dataCircle.svg"
            />
            <div className="flex items-center justify-center flex-col absolute">
              <p className="text-white font-Montserrat font-bold tracking-[1.75px] text-[35px] mb-0">
                3.8
              </p>
              <p className=" whitespace-nowrap text-[#8282AB] font-Montserrat font-semibold tracking-[1.3px] text-md">
                GB LEFT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataUsagesOne;