import React from "react";

import AcneImg from "../assets/Group (1).png";
import Oliyness from "../assets/Group (2).png";
import Wrinkles from "../assets/Group (3).png";
import Hyperpigmentation from "../assets/Group (4).png";
import SunDamage from "../assets/Group (5).png";
import Redness from "../assets/Group (6).png";
import UnevenTone from "../assets/Group (7).png";
import DarkCircles from "../assets/Group (8).png";
import Dullness from "../assets/Group (9).png";

function Services() {
  const items = [
    { icon: AcneImg, title: "Acne", desc: "Instantly explore visual directions, moods, and compositions—powered by intelligent ideation." },
    { icon: Oliyness, title: "Oilyness", desc: "Co-create layouts, interfaces, and design systems with AI that understands your creative intent." },
    { icon: Wrinkles, title: "Wrinkles", desc: "Generate images, copy, and creative assets at scale while maintaining consistent quality." },

    { icon: Hyperpigmentation, title: "Pigmentation", desc: "Transform ideas into engaging posts and visuals optimized for every platform." },
    { icon: SunDamage, title: "Sun Damage", desc: "AI-guided motion workflows to enhance video concepts and transitions." },
    { icon: Redness, title: "Redness", desc: "AI-driven suggestions to refine tone, visuals, and creative storytelling." },

    { icon: UnevenTone, title: "Uneven Tone", desc: "Improve tone balance with intelligent analysis and clarity enhancements." },
    { icon: DarkCircles, title: "Dark Circles", desc: "Smart detection of under-eye darkness with tailored improvement paths." },
    { icon: Dullness, title: "Dullness", desc: "Reveal glow levels and get suggestions to improve overall radiance." },
  ];

  return (
    <div className="w-full min-h-screen mt-[500px] py-16 flex justify-center">
      <div className="w-[90%] max-w-7xl">

        {/* 💠 TOP TEXT CENTERED */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Skin Genius Analyzes 9 Skin Attributes
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-5xl mx-auto">
            Skin Genius analyzes 8 core skin attributes with AI-powered precision, including texture,
            pores, tone, hydration, and early aging signs. It delivers clear, clinically aligned insights
            to help users understand their true skin health instantly.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="mb-4">
                <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Services;
