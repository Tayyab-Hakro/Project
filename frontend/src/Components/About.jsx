import React from 'react'
import VideoFile from '../assets/3.mp4'
import item1 from "../assets/Item.png"
import item2 from "../assets/Item1.png"
import cardimg from '../assets/image (1).png'
import cardimg2 from '../assets/image (2).png'
import cardicon1 from '../assets/Vector (1).png'
import cardicon2 from '../assets/Vector (2).png'

function About() {
  return (
    <>
      <div className='w-full   full mt-20 relative bg-[]'>
        <div className="absolute w-[95%] sm:w-[90%] md:w-[80%] h-min-screen 
                        -top-10 md:-top-16 lg:-top-20 
                        right-0 md:right-20 lg:right-40 
                        flex justify-center">

          <img
            src={item1}
            alt="Top Icon"
            className="absolute left-1/4 -translate-x-1/2 
                       -top-14 sm:-top-16 md:-top-20
                       w-10 sm:w-14 md:w-20"
          />

          <img
            className="absolute left-[60%] 
                       -top-10 sm:-top-12 md:-top-6 
                       w-12 sm:w-16 md:w-40"
            src={item2}
            alt=""
          />

          <video
            src={VideoFile }
            alt="Skin Analysis"
            autoPlay
            className="w-[90%] sm:w-[95%] md:w-[100%]"
          />
        </div>
      </div>
     <div className=' w-full h-full flex justify-center items-center gap-6 mt-[55rem] '>

  </div>


<div className="flex flex-col justify-start mt-[120px]  md:flex-row justify-between items-center gap-6 md:gap-10 w-full">

  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 space-y-4 ">
<p className="font-['font-plusJakarta text-xl']font-normal italic text-[29px] leading-[150%] tracking-normal">
  AI Skin Anal
</p>


   <p className="text-gray-700 font-['font-plusJakarta text-xl'] font-normal text-[24px] leading-[270%] tracking-normal ">
  Delivering personalized skincare experiences that deeply resonate with consumers.
  Clinically precise, AI-powered skin analysis trained on 3M+ data points for 98%
  accuracy across diverse skin types guides users through an engaging customer journey
  while evaluating 20+ skin-health and beauty metrics to boost conversions.
</p>


<button className="bg-[#EB9475] text-white w-[190px] h-[60px] rounded-[8px] px-[50px] flex items-center justify-center gap-[10px]">
  Try Demo
</button>

  </div>

  {/* RIGHT SIDE */}
<div className="w-full md:w-1/2 flex justify-center  relative">

  {/* CARD ONE */}
 <div className="relative left-[150px] bottom-[46px]  w-[380px] h-[500px] rotate-[10deg] bg-white rounded-xl shadow-lg flex justify-center items-start">
    <div className="rotate-[-5deg] flex flex-col justify-center items-center relative top-4">

      <img src={cardimg2} alt="" />

      <div className="w-18 h-18 bg-[#EB9475] rounded-full flex justify-center items-center absolute bottom-20 left-30">
        <img src={cardicon2} alt="" />
      </div>

      <div className="flex flex-col justify-start items-start">
        <h1 className="rotate-[5deg] mt-[12px] font-plusJakarta font-medium text-[20px] leading-[170%] text-[#0A0A0A]">
          Style Variations
        </h1>

        <p className="rotate-[5deg] font-plusJakarta font-normal text-[16px] leading-[290%] text-[#0A0A0AB2]">
          Transform a single idea into limitless
        </p>
      </div>

    </div>
  </div>

  {/* CARD TWO */}
  <div className="absolute top-[60px] left-[120px] w-[380px] h-[550px] rotate-[-10deg] bg-white rounded-xl shadow-lg flex justify-center items-start">

    <div className="rotate-[12deg] flex flex-col justify-center items-center relative top-4 left-[-8px]  ">

      <img src={cardimg} alt="" />

      <div className="w-18 h-18 bg-[#EB9475] rounded-full flex justify-center items-center absolute bottom-[130px] left-50">
        <img src={cardicon1} alt="" />
      </div>

      <div className="flex flex-col justify-center items-start">
        <h1 className="rotate-[-12deg] mx-auto text-center font-plusJakarta font-medium text-[20px] leading-[170%] text-[#0A0A0A]">
         Facial Recognition System
        </h1>

        <p className="rotate-[-12deg] mx-auto text-center ml-[77px] font-plusJakarta font-normal text-[16px] leading-[190%] text-[#0A0A0AB2]">
        A secure AI-powered system that identifies individuals by analyzing unique facial features with high accuracy.
        </p>
      </div>

    </div>
  </div>

</div>



</div>

    </>
  )
}

export default About