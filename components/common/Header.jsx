import React, { useState } from "react";
import { Logo } from "./Icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const handldeOverlayActive = () => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("active-nav-overlay");
  };
  const pathname = useLocation().pathname;
  return (
    <>
      <nav className="nav_bg position-relative z_index_custom w-100">
        <div className="d-none d-lg-block">
          <div className="container custom_container py-3 position-relative">
            <div className=" d-flex justify-content-between align-items-center">
              <NavLink exact to="/">
                <Logo className="w-100" />
              </NavLink>
              <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 gap-4">
                <li className="list-unstyled">
                  <NavLink
                    to="/"
                    activeclassName="active"
                    className="py-0 my-0 ff_segoe_ui fw-normal font_md opacity_07 nav_hover position-relative  transition_03  text-decoration-none"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink
                    to="/investment"
                    activeclassName="active"
                    className="py-0 my-0 ff_segoe_ui fw-normal font_md text-wh ite opacity_07 nav_hover position-relative  transition_03 text-decoration-none"
                  >
                    Investment
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink
                    to="/news"
                    activeclassName="active"
                    className="py-0 my-0 ff_segoe_ui fw-normal font_md text-wh ite opacity_07 nav_hover position-relative  transition_03 text-decoration-none"
                  >
                    News
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start d-none d-lg-flex gap-2">
                <Link
                  className="common_btn fw-medium ff_gt_walsheim_pro text-white font_md"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
                <Link to="/login">
                  <button className="login_btn fw-medium ff_gt_walsheim_pro text-white font_md">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <div className="container">
            <div className="py-2 d-flex justify-content-between align-items-center position-relative ">
              <NavLink
                className="ff_ubuntu fs_xxxlg text-whit5 ps-lg-5 ps-xl-1"
                exact
                to="/"
              >
                <Logo className="w-100" />
              </NavLink>
              <div
                id="nav-icon1"
                className={`hamburger-menu z_index_one`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={`navbar-overlay`}>
            <ul className="h-100 list-unstyled d-flex flex-column justify-content-center gap-md-4 align-items-center m-0">
              <li onClick={() => handldeOverlayActive()} className="pt-5">
                <NavLink
                  exact
                  to="/"
                  activeclassName="active"
                  className="ff_segoe_ui nav_items fw-normal text-white opacity_07 nav_hover position-relative transition_03 text-decoration-none"
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => handldeOverlayActive()} className="">
                <NavLink
                  to="/investment"
                  activeclassName="active"
                  className="ff_segoe_ui  nav_items  fw-normal text-white opacity_07 nav_hover position-relative transition_03 text-decoration-none"
                >
                  Investment
                </NavLink>
              </li>
              <li onClick={() => handldeOverlayActive()} className="">
                <NavLink
                  to="/news"
                  activeclassName="active"
                  className="ff_segoe_ui nav_items fw-normal text-white opacity_07 nav_hover position-relative transition_03 text-decoration-none"
                >
                  News
                </NavLink>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <Link
                  to="/sign-up"
                  className="d-inline-block common_btn fw-medium ff_gt_walsheim_pro text-white nav_items"
                >
                  Sign Up
                </Link>
              </li>

              <li onClick={() => handldeOverlayActive()}>
                <Link to="/login">
                  <button className="login_btn fw-medium ff_gt_walsheim_pro text-white nav_items">
                    Log In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
