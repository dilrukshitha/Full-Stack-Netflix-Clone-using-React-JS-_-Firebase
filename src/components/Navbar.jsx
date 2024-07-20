import React, { useState } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import caret_up from "../assets/caret_up.svg";
import setting_icon from "../assets/setting_icon.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userControlOpen, setUserControlOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleUserControl = (e) => {
    e.preventDefault();
    setUserControlOpen(!userControlOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 text-slate-200 text-xs xsm:text-sm sm:text-base font-poppins flex justify-between items-center max-w-[1280px] mx-auto p-4 sm:p-8">
      <div className="relative flex justify-start items-center pr-8">
        <div className="w-20 xsm:w-24 sm:w-32 pr-3 xsm:pr-5 sm:pr-8">
          <img src={logo} alt="Logo" />
        </div>
        <div className="xl:hidden flex items-center">
          {menuOpen ? (
            <div className="flex justify-start items-center">
              <img
                src={caret_up}
                alt=""
                className="hover:scale-110 w-2 sm:w-[0.625rem]"
              />
              <div className="relative">
                <button onClick={toggleMenu} className="nav-link">
                  Close
                </button>
                <div className="absolute  w-20 xsm:w-32 sm:w-56 bg-slate-800 p-0.5 flex flex-col items-start content-start xl:hidden">
                  <a className="nav-link" href="">
                    Home
                  </a>
                  <a className="nav-link py-1 sm:py-2" href="">
                    TV Shows
                  </a>
                  <a className="nav-link py-1 sm:py-2" href="">
                    Movies
                  </a>
                  <a className="nav-link py-1 sm:py-2" href="">
                    New & Popular
                  </a>
                  <a className="nav-link py-1 sm:py-2" href="">
                    My List
                  </a>
                  <a className="nav-link py-1 sm:py-2" href="">
                    Browse by Languages
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-start items-center">
              <img
                src={caret_icon}
                alt=""
                className="hover:scale-110 w-2 sm:w-[0.625rem]"
              />
              <button onClick={toggleMenu} className="nav-link">
                Menu
              </button>
            </div>
          )}
        </div>
        <div className="hidden xl:flex justify-start items-center">
          <a className="nav-link" href="">
            Home
          </a>
          <a className="nav-link" href="">
            TV Shows
          </a>
          <a className="nav-link" href="">
            Movies
          </a>
          <a className="nav-link" href="">
            New & Popular
          </a>
          <a className="nav-link" href="">
            My List
          </a>
          <a className="nav-link" href="">
            Browse by Languages
          </a>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <a className="nav-link" href="">
          <img src={search_icon} alt="Search" className="w-3 sm:w-4" />
        </a>
        <a className="nav-link" href="">
          Children
        </a>
        <a className="nav-link" href="">
          <img src={bell_icon} alt="Notifications" className="w-3 sm:w-4" />
        </a>
        <div className="relative">
          <a className="block nav-link" href="">
            <img src={profile_img} onClick={toggleUserControl} alt="Profile" className="w-4 sm:w-6 py-1 sm:py-2" />
          </a>
          {userControlOpen ? (<div className="absolute w-max bg-slate-800 right-0 top-full flex flex-col justify-start items-end">
            <a
              href=""
              className="flex justify-end items-center hover:scale-110 py-1 sm:py-2 pl-1 xsm:pl-2 sm:pl-4"
            >
              <img src={setting_icon} alt="" className="w-3 sm:w-4" />
              <p className="nav-link">Settings</p>
            </a>
            <a href="" className="nav-link py-1 sm:py-2">
              Log Out
            </a>
          </div>) : null}
        </div>
      </div>
    </nav>
  );
}
