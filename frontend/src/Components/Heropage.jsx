import React from "react";
import HomeIcon1 from "../assets/HomeIcon1.png";
import Icon from "../assets/Icon.png";


export default function Heropage() {
  return (
    <>
    <div className=" bg-[#FBF5ED] flex justify-center text-center p-6 md:p-10">
        {/* Part 1 */}
     
      <div className="w-full max-w-7xl">
        
        {/* Top Title */}
        <h1 className="text-[16px] md:text-[20px] mt-20 font-medium tracking-wide">
          POWERED BY REVERA INNOVATIONS
        </h1>

        {/* Main Heading */}
        <p className="text-[40px] md:text-[70px]  mt-10 font-extrabold  leading-[1]">
          SKIN GENIUS
        </p>

        {/* Flex Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-3">

          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img className="w-14 md:w-16" src={HomeIcon1} alt="Analysis Icon" />
            <p className="text-[18px] md:text-[22px] font-medium leading-tight">
              Image <br /> Analyse
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center md:w-1/2">
            <p className="text-[32px] mt-10 text-[#EB9475] md:text-[70px] font-bold">SKIN ANALYSIS</p>

            <p className="text-[16px] md:text-[20px] leading-relaxed mt">
              AI-driven tools to accelerate your design process, transform ideas
              into visuals, and create stunning digital experiences effortlessly.
            </p>

            <button className="mt-12 font-bold bg-[#EB9475] text-white px-8 py-3 rounded-md hover:bg-[#d37f63] transition">
              Request A Demo
            </button>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center">
            <img className="w-20 md:w-16" src={Icon} alt="Face Icon" />
            <p className="text-[26px] md:text-[20px] font-bold mt-2">3,200+</p>
            <p className="text-[16px] md:text-[20px] font-medium">Faces Analyzed</p>
          </div>

        </div>



      </div>

    </div>
    
  </>
  );
}
