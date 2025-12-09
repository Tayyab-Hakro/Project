import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import Derm_Icon from "../assets/DERM_AI.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FBF5ED]  px-4 md:px-10 py-4 flex items-center justify-between  top-0  z-50">
      
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img className="w-20 md:w-28 h-10 object-contain" src={Derm_Icon} />
      </div>

      {/* Hamburger (Mobile Only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-[4px] p-2 active:scale-90"
      >
        <span className="w-6 h-[3px] bg-black rounded"></span>
        <span className="w-6 h-[3px] bg-black rounded"></span>
        <span className="w-6 h-[3px] bg-black rounded"></span>
      </button>

      {/* Middle Menu (Desktop) */}
      <ul className="hidden md:flex w-[630px] justify-center items-center gap-8 lg:gap-12 text-gray-700 font-medium">
        <li className="text-[18px] lg:text-[20px] cursor-pointer">Explore</li>
        <li className="text-[18px] lg:text-[20px] cursor-pointer">Creator</li>
        <li className="text-[18px] lg:text-[20px] cursor-pointer">Community</li>
        <li className="text-[18px] lg:text-[20px] cursor-pointer">Feature</li>
      </ul>

      {/* Right Button (Desktop) */}
      <button className="hidden md:flex font-bold items-center gap-2 bg-[#EB9475] text-white px-8 lg:px-10 py-2 rounded-md">
        Get Start <img src={arrow} />
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#FBF5ED]   shadow-md flex flex-col items-start p-4 md:hidden gap-4 text-gray-700 font-medium rounded-b-xl transition-all duration-300">
          <a className="text-[16px]">Explore</a> 
          <a className="text-[16px]">Creator</a>
          <a className="text-[16px]">Community</a>
          <a className="text-[16px]">Feature</a>

          <button className="font-bold md:text-[10px] bg-[#EB9475] text-white px-5 py-2 mt-2 flex items-center gap-2 rounded-md">
            Get Start <img src={arrow} />
          </button>
        </div>
      )}
    </nav>
  );
}
