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
        <div className="w-[50%] flex flex-col items-center">

          {/* BOX 1 (MASTER STYLE) */}
          <div className="w-full border rounded-4xl flex flex-col items-center bg-[#f5f3f2]">
            <img src={productImg1} className="w-full object-contain bg-[#f5f3f2]" />
            <div className="mx-10 p-5 text-center">
              <p className="font-semibold">Step 1</p>
              <p className="mt-5">
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

          {/* BOX 2 — SAME AS BOX 1 */}
          <div className="w-full border rounded-4xl flex flex-col items-center bg-[#f5f3f2] mt-10">
            <img src={productImg2} className="w-full object-contain bg-[#f5f3f2]" />
            <div className="mx-10 p-5 text-center">
              <p className="font-semibold">Step 2</p>
              <p className="mt-5">
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

          <div className="text-center mt-10 text-lg font-medium px-5">
            Beauty brands that choose Haut.AI see an average increase in shopping
            cart value of <span className="font-bold">34%</span>.
            <img src={SignatureImage} alt="signature" className="mx-auto mt-3" />
          </div>
        </div>

        {/* ------------------ PART TWO ------------------ */}
        <div className="w-[50%] lg:w-1/2 flex flex-col items-center">

          <div className="text-3xl w-[40%] font-semibold leading-tight ml-90 border text-center lg:text-right">
            <span className="text-red-400">Personalize</span> every customer’s skincare recommendations
          </div>

          {/* BOX 3 — SAME AS BOX 1 */}
          <div className="w-full border rounded-4xl flex flex-col items-center bg-[#f5f3f2] mt-10">
            <img src={productImg3} className="w-full object-contain bg-[#f5f3f2]" />
            <div className="mx-10 p-5 text-center">
              <p className="font-semibold">Step 3</p>
              <p className="mt-5">
                Install Derm.AI's Skin Analysis app on your e-commerce website,
                or offer an in-store experience.
              </p>
            </div>
          </div>

          {/* BOX 4 — SAME AS BOX 1 */}
          <div className="w-full border rounded-4xl flex flex-col items-center bg-[#f5f3f2] mt-10">
            <img src={productImg4} className="w-full object-contain bg-[#f5f3f2]" />
            <div className="mx-10 p-5 text-center">
              <p className="font-semibold">Step 4</p>
              <p className="mt-5">
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
