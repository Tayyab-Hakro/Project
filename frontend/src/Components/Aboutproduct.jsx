import React from 'react';
import productImg1 from "../assets/Productimg1.png";
import SignatureImage from "../assets/Signature.png";
import productImg2 from "../assets/ProductImg2.png";
import productImg3 from "../assets/ProductImg3.png";
import productImg4 from "../assets/Productimg4.png";


function Aboutproduct() {
  return (
    <div className="w-full h-full py-10">

      <div className="flex flex-col lg:flex-row justify-between gap-10 px-5 lg:px-16">

        {/* ------------------ PART ONE ------------------ */}
        <div className="w-[50%]  flex flex-col items-center " >

          {/* Box 1 */}
          <div className="w-full border  rounded-4xl  flex flex-col items-center ">
            
            <img
              src={productImg1}
              alt="Image"
              className='bg-[#f5f3f2]'
            />
<div className='mx-10  bg-[#f5f3f2] p-5'>
              <p className="font-semibold text-center flex ">Step 1</p>
              <p className='flex flex-col mt-5   '>
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
              </div>
            </div>

          {/* Box 2 */}
          <div className="w-full md:w-[70%] bg-[#EFEFEF] rounded-4xl p-5 flex flex-col items-center mt-10">

            <img
              src={productImg2}
              alt="Image"
              className="w-[70%] object-contain bg-transparent"
            />

            <div className="mt-3 text-center">
              <p className="font-semibold">Step 2</p>
              <p>
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="text-center mt-10 text-lg font-medium px-5">
            Beauty brands that choose Haut.AI see an average increase in shopping
            cart value of <span className="font-bold">34%</span>.
            <img src={SignatureImage} alt="signature" className="mx-auto mt-3 bg-transparent" />
          </div>
        </div>

        {/* ------------------ PART TWO ------------------ */}
        <div className="w-[50%] lg:w-1/2 flex flex-col items-center">

          <div className="text-3xl font-semibold leading-tight text-center lg:text-left">
            <span className="text-red-400">Personalize</span> every customer’s skincare recommendations
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-[70%] bg-[#EFEFEF] rounded-4xl p-5 flex flex-col items-center mt-10">

            <img
              src={productImg3}
              alt="Image"
              className="w-[70%] object-contain bg-transparent"
            />

            <div className="mt-3 text-center">
              <p className="font-semibold">Step 3</p>
              <p>
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="w-full md:w-[90%] overflow-hidden rounded-4xl p-5 flex flex-col items-center mt-10">

            <img
              src={productImg4}
              alt="Image"
              className="w-[70%] object-contain bg-transparent"
            />

            <div className="mt-3 text-center">
              <p className="font-semibold">Step 4</p>
              <p>
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Aboutproduct;
