import React, { useState } from "react";
import Image from "next/image";
import ProductsRangbar from "./ProductsRangbar";
import ProviderDropdown from "../common/ProviderDropdown";
import PaymentDialog from "../common/paymentDialog";

const ProxiesISP = () => {
  const toggleProviderDropdown = () => {
    setIsProviderDropdownOpen(!isProviderDropdownOpen);
  };
  const handlePeriodSelect = (provider) => {
    setSelectedPeriod(provider);
    setIsProviderDropdownOpen(false);
  };

  const [isProviderDropdownOpen, setIsProviderDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");
  const [provider, setProvider] = useState("");
  const [region, setRegion] = useState("");
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [subscriptionPayload, setSubscriptionPayload] = useState({});
 
  const handleOpen = () => setOpen(!open);

  const onProviderChange = (data) => {
    setProvider(data);
  }

  const onRegionChange = (data) => {
    setRegion(data);
  }

  const onAmountChange = (data) => {
    setAmount(data);
  }

  const checkout = () => {
    const payload = {
      plan: "ISP",
      priceId: process.env.NEXT_PUBLIC_STRIPE_ISP_PLAN,
      planData: {
        provider,
        region,
        period: selectedPeriod,
        amount
      }
    }
    setSubscriptionPayload(payload);
    handleOpen();
  }


  return (
    <>
      <div className="relative max-w-[700px] mx-auto mt-0">
        <h2 className=" sm:text-[45px] text-2xl text-center sm:pb-10 sm:pt-7 py-7 text-white leading-[68px   ]">
          Buy your
          <span className="text-[#50EED7] mx-1 sm:mx-2">favorite</span>proxies
        </h2>
        <div className=" bg_color_rgb border-2 border-[#50EED7] rounded-[20px] sm:pt-7 sm:pb-[50px] py-7 sm:pr-11 sm:pl-16 pl-5 pr-5">
          <p className="text-center font-Montserrat font-semibold text-[17px] mb-0 leading-normal sm:pb-4 pb-2 text-white">
            ISP PROXIES
          </p>
          <p className="mx-auto bg-white h-[1px] w-[110px]"></p>
          <p className="pt-3 max-w-[435px] text-center mx-auto sm:leading-[30px] sm:text-[17px] text-sm text-[#B6B6B6] font-semibold">
            “Your one-stop solution for guaranteed success, backed by the best
            internet services providers available on the market.”
          </p>

          <ProviderDropdown onProviderChange={onProviderChange} onRegionChange={onRegionChange} />

          <div className="pt-5 relative">
            <p className="text-white text-[10px] font-Montserrat font-semibold leading-normal mb-0">
              PERIOD LENGTH
            </p>
            <div
              className={`w-full border-2 cursor-pointer border-white rounded-[10000px] sm:mt-[10px] mt-2 px-5 py-2 ${
                isProviderDropdownOpen ? "bg-[#133147]" : ""
              }`}
              onClick={toggleProviderDropdown}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-[14px] font-Montserrat font-semibold text-white mb-0 ${
                    isProviderDropdownOpen ? "text-[#50EED7]" : ""
                  }`}
                >
                  {selectedPeriod}
                </p>
                <Image
                  src="/assets/images/webp/down-arrow.webp"
                  alt="down arrow icon"
                  height={13}
                  width={13}
                />
              </div>
              {isProviderDropdownOpen && (
                <div className="absolute bg-[#252550] border-white start-0 border-2 w-full mt-2 z-10 rounded-[10px] p-1">
                  <p
                    className="custom-dropdown-option-001 mb-1"
                    onClick={() => handlePeriodSelect("Daily")}
                  >
                    Daily
                  </p>
                  <p
                    className="custom-dropdown-option-001 mb-1"
                    onClick={() => handlePeriodSelect("Weekly")}
                  >
                    Weekly
                  </p>
                  <p
                    className="custom-dropdown-option-001 mb-0"
                    onClick={() => handlePeriodSelect("Monthly")}
                  >
                    Monthly
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="sm:pt-7 pt-5">
            <p className="text-white text-base font-Montserrat font-semibold leading-normal mb-0">
              Amount
            </p>
          </div>

          <ProductsRangbar onValueChange={onAmountChange} />
          <div className="sm:pt-[26px] pt-5 flex justify-between items-end">
            <div>
              <p className="text-white text-[15px] font-Montserrat font-semibold leading-normal mb-0">
                Total Due
              </p>
              <p className="sm:pt-3 pt-2 text-white font-Montserrat font-medium text-[22px]">
                $13.92
                <span className="text-[13px] font-normal">/month</span>
              </p>
            </div>
            <button className="bg-white hover:bg-[#4FDCC7] hover:text-white transition-all duration-500 rounded-[10000px] text-[#040426] font-Montserrat font-semibold text-[15px] sm:px-[43px] px-5 py-[10px]" onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
        <div className="absolute block w-[58px] h-[49px] sm:w-[98px] sm:h-[83px] md:h-auto md:w-auto start-[-20px] sm:start-[-34px] top-[60px] sm:top-[96px] md:start-[-80px] md:top-[60px]">
          <Image
            src="/assets/images/webp/proxies_box_top_img.webp"
            alt="proxies box top image"
            height={123}
            width={145}
          />
        </div>
        <div className="absolute w-[44px] h-[69px] sm:h-[113px] end-[-10px] sm:w-[73px] sm:end-[-24px] md:w-auto md:h-auto md:end-[-40px] bottom-[-40px]">
          <Image
            src="/assets/images/webp/proxies_box_bottom_img.webp"
            alt="proxies box bottom image"
            height={114}
            width={74}
          />
        </div>
      </div>
      <PaymentDialog open={open} handleOpen={handleOpen}  payload={subscriptionPayload}/>
    </>
  );
};

export default ProxiesISP;
