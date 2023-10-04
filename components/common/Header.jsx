import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Don't forget to import useState
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#040426] lg:py-6 py-5 border-b-[1px] border-[#222F4A] flex-grow-0">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
          <div className="flex items-center justify-between">
            {/* Use Next.js Link for client-side navigation */}
            <Link
              href="/"
              className="text-white text-xl font-semibold flex items-center"
            >
              <Image
                height={67}
                width={67}
                src="/assets/images/svg/FooterLogo.svg"
                alt="about image"
              />
              <div className="ms-3">
                <p className="mb-0 text-3xl text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                  IMPULSE
                </p>
                <p className="text-xl text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                  PROXIES
                </p>
              </div>
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white p-2 focus:outline-none"
              >
                {isOpen ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                  >
                    <path
                      d="M7.39062 12.7656H35.6094M7.39062 21.5H35.6094M7.39062 30.2344H35.6094"
                      stroke="white"
                      stroke-width="3.30769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:flex gap-12 items-center">
              <div className="relative group inline-block text-left">
                {/* Dropdown button */}
                <button className="text-white font-semibold tracking-[-0.38px] flex items-center leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200">
                  Products
                  <Image
                    width={15}
                    height={10}
                    className="ms-2"
                    src="/assets/images/svg/productArrow.svg"
                  />
                </button>

                {/* Dropdown menu */}
                <div className="top-[17px] py-3 overflow-hidden absolute right-0 mt-2 w-28 bg-[#040426] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
                  <ul>
                    {/* Dropdown menu items */}
                    <li>
                      <Link
                        href="#"
                        className="block hover:opacity-70 transition-all ease-in-out duration-200 px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                      >
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 text-white font-semibold tracking-[-0.38px] my-4 leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                      >
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
                      >
                        Item 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-white font-semibold tracking-[-0.38px]  font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200"
              >
                Pricing
              </Link>
            </div>
            <button className="text-white font-Montserrat text-2xl font-bold border-[#50EED7] border-[2px] rounded-full bg-[#163A4F] py-4 px-16 lg:block hidden hover:bg-transparent transition-all">
              Dashboard
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-10 top-0 pb-3 space-y-1 flex flex-col items-start min-h-screen fixed bg-[#040426] w-full z-50 start-0">
              <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 flex flex-col items-start">
                <div className="flex items-center justify-between w-full">
                  {/* Use Next.js Link for client-side navigation */}
                  <Link
                    href="/"
                    className="text-white text-xl font-semibold flex items-center"
                  >
                    <Image
                      height={67}
                      width={67}
                      src="/assets/images/svg/FooterLogo.svg"
                      alt="about image"
                    />
                    <div className="ms-3 sm:block hidden">
                      <p className="mb-0 text-3xl text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                        IMPULSE
                      </p>
                      <p className="text-xl text-[#22EDCF] font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                        PROXIES
                      </p>
                    </div>
                  </Link>

                  {/* Hamburger menu for mobile */}
                  <div className="lg:hidden">
                    <button
                      onClick={toggleNavbar}
                      className="text-white p-2 focus:outline-none"
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                        >
                          <path
                            d="M35.0749 10.9441C34.8976 10.7664 34.687 10.6255 34.4551 10.5293C34.2233 10.4331 33.9747 10.3836 33.7237 10.3836C33.4727 10.3836 33.2241 10.4331 32.9922 10.5293C32.7604 10.6255 32.5498 10.7664 32.3724 10.9441L22.9999 20.2974L13.6274 10.9249C13.45 10.7475 13.2393 10.6067 13.0075 10.5107C12.7756 10.4147 12.5271 10.3652 12.2762 10.3652C12.0252 10.3652 11.7767 10.4147 11.5449 10.5107C11.3131 10.6067 11.1024 10.7475 10.9249 10.9249C10.7475 11.1024 10.6067 11.3131 10.5107 11.5449C10.4147 11.7767 10.3652 12.0252 10.3652 12.2762C10.3652 12.5271 10.4147 12.7756 10.5107 13.0075C10.6067 13.2393 10.7475 13.45 10.9249 13.6274L20.2974 22.9999L10.9249 32.3724C10.7475 32.5499 10.6067 32.7606 10.5107 32.9924C10.4147 33.2242 10.3652 33.4727 10.3652 33.7237C10.3652 33.9746 10.4147 34.2231 10.5107 34.455C10.6067 34.6868 10.7475 34.8975 10.9249 35.0749C11.1024 35.2524 11.3131 35.3931 11.5449 35.4892C11.7767 35.5852 12.0252 35.6346 12.2762 35.6346C12.5271 35.6346 12.7756 35.5852 13.0075 35.4892C13.2393 35.3931 13.45 35.2524 13.6274 35.0749L22.9999 25.7024L32.3724 35.0749C32.5499 35.2524 32.7606 35.3931 32.9924 35.4892C33.2242 35.5852 33.4727 35.6346 33.7237 35.6346C33.9746 35.6346 34.2231 35.5852 34.455 35.4892C34.6868 35.3931 34.8975 35.2524 35.0749 35.0749C35.2524 34.8975 35.3931 34.6868 35.4892 34.455C35.5852 34.2231 35.6346 33.9746 35.6346 33.7237C35.6346 33.4727 35.5852 33.2242 35.4892 32.9924C35.3931 32.7606 35.2524 32.5499 35.0749 32.3724L25.7024 22.9999L35.0749 13.6274C35.8033 12.8991 35.8033 11.6724 35.0749 10.9441Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                </div>
                <div className="relative group inline-block text-left mt-16">
                  {/* Dropdown button */}
                  <button className="text-white font-semibold tracking-[-0.38px] flex items-center leading-[150%] font-Montserrat text-2xl hover:opacity-70 transition-all ease-in-out duration-200">
                    Products
                    <Image
                      width={15}
                      height={10}
                      className="ms-2"
                      src="/assets/images/svg/productArrow.svg"
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div className="top-[17px] py-3 overflow-hidden absolute right-0 mt-2 w-28 bg-[#040426] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
                    <ul>
                      {/* Dropdown menu items */}
                      <li>
                        <Link
                          href="#"
                          className="hover:opacity-70 transition-all ease-in-out duration-200 block px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                        >
                          Item 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block hover:opacity-70 transition-all ease-in-out duration-200 px-4 text-white font-semibold tracking-[-0.38px] my-4 leading-[150%] font-Montserrat text-2xl"
                        >
                          Item 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block hover:opacity-70 transition-all ease-in-out duration-200 px-4 text-white font-semibold tracking-[-0.38px] leading-[150%] font-Montserrat text-2xl"
                        >
                          Item 3
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-white hover:opacity-70 transition-all ease-in-out duration-200 font-semibold tracking-[-0.38px]  font-Montserrat text-2xl pt-9"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="text-white hover:opacity-70 transition-all ease-in-out duration-200 font-semibold tracking-[-0.38px]  font-Montserrat text-2xl py-9"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-white hover:opacity-70 transition-all ease-in-out duration-200 font-semibold tracking-[-0.38px]  font-Montserrat text-2xl"
                >
                  Pricing
                </Link>
                <button className="text-white font-Montserrat text-2xl font-bold border-[#50EED7] border-[2px] rounded-full bg-[#163A4F] py-4 px-16 mt-9 hover:bg-transparent transition-all">
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
