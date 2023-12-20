import Image from "next/image";
import React, { useEffect, useState } from "react";
import { channelService } from "../common/services";
import RadialBar from "../RadialBar";

const DataUsagesOne = () => {
  const [channelData, setChannelData] = useState({});
  const [loader, setLoader] = useState(true);
  const [channel, setChannel] = useState(false);

  useEffect(() => {
    getData();
    // call APi at every 2 min
    setInterval(()=>{
      getData();
    },2*60*1000)


  }, []);

  const getData = () =>{
    channelService.getChannelData().then((response)=>{
      if (response.data.status == 200) {
        setLoader(false);
        setChannel(true)
        setChannelData((prev) => response.data.data);
      }else{
        console.log(response.data.message);
      }
    }).catch((e)=>{
      setLoader(false);
      setChannel(false)
      console.log(e.message)
    })
  }

  return (
    <>
      <div className=" sm:w-6/12 w-full h-full sm:pr-5">
       
      <div className="after:absolute after:inset-0 after:rounded-xl gradient_border relative p-[1px]"> 
       <div className="w-full h-full flex flex-col bgData max-h-[295px] databox_border relative py-8 xl:px-11 px-[20px] rounded-xl ">
          <div className="flex items-center justify-between">
            <p className="font-Montserrat mb-0 text-white font-bold text-md tracking-[1.4px] flex items-center">
              <Image
                width={18}
                height={18}
                src="/assets/images/webp/dataSmall.webp"
                className="me-3"
                alt="image"
                loading="lazy"
              />
              DATA USAGE
            </p>
            <p className="text-sm font-Montserrat font-semibold leading-normal tracking-[1.3px] text-[#D4D4F1]">
               {channelData.totalLimit || 0 } GB <span className="text-[#8282AB]">PLAN</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
            { channel && ( <RadialBar channelData={channelData} />)}
        </div>
      </div>
    </div>
    </>
  );
};

export default DataUsagesOne;
