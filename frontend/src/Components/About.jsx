import React from 'react'
import VideoFile from '../assets/3.mp4'
import item1 from "../assets/Item.png"
import item2 from "../assets/Item1.png"

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
<div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 w-full">

  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 space-y-4">
    <p className="text-2xl font-semibold">AI Skin Anal</p>

    <p className="text-gray-700 leading-relaxed">
      Delivering personalized skincare experiences that deeply resonate with consumers.
      Clinically precise, AI-powered skin analysis trained on 3M+ data points for 98%
      accuracy across diverse skin types guides users through an engaging customer journey
      while evaluating 20+ skin-health and beauty metrics to boost conversions.
    </p>

    <p className="text-gray-800 font-medium">This is the page</p>

    <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
      Try Demo
    </button>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2 flex justify-center">
  <div>
    <img src={item1}  alt=''/>
    <img src={item2}  alt=''/>

  </div>
  </div>

</div>

    </>
  )
}

export default About
