
import React from "react";
import img1 from "../assets/Rectangle 2112.png";
import img2 from "../assets/Rectangle 2114.png";
import img3 from "../assets/Rectangle 2113 (1).png";
import img4 from "../assets/Rectangle 31.png";
import img5 from "../assets/Group 32.png";
import img6 from "../assets/Download our app (1).png";
import img7 from "../assets/Download our app.png";

import { useNavigate } from "react-router-dom";

import musicImg from "../assets/Rectangle 2112 (1).png";
import podcastImg from "../assets/Rectangle 30.png";
import photographyStudioImg from "../assets/Rectangle 29.png";
const photographyImages = [img1, img2, img3, img4];
const otherStudios = [
  { name: "Art Studio", image: musicImg, path: "/artstudio" },
  { name: "Podcast Studio", image: podcastImg, path: "/podcaststudio" },
  { name: "Music Studio", image: photographyStudioImg, path: "/musicstudio" },
];




export default function Photographystudio() {
   const navigate = useNavigate();

  return (
    <div className="">
  
      <section className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Photography Studio</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              src={photographyImages[0]}
              alt="Photography Studio"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Adjustable lighting rigs and studio flashes.</li>
              <li>Variety of backdrops, props, and styling equipment.</li>
              <li>Ideal for portraits, products, campaigns, and fashion shoots.</li>
              <li>Assistance from in-house photographers and stylists if requested.</li>
            </ul>
           
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {photographyImages.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Photography ${idx}`}
              className="rounded-lg shadow-lg w-full h-60 object-cover"
            />
          ))}
        </div>
      </section>
        <button
        onClick={() => navigate("/booking/Photography Studio")}
        className="mt-4 px-6 py-2 bg-black object-center ml-[500px] text-white rounded-lg hover:bg-gray-800 transition"
      >
        Schedule Session
      </button>

      
     <section className="mt-12 max-w-6xl mx-auto p-6">
  <h2 className="text-2xl font-bold mb-6">Other Studios</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {otherStudios.map((studio, idx) => (
      <div
        key={idx}
        className="relative rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate(studio.path)} 
      >
        <img
          src={studio.image}
          alt={studio.name}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
          <span className="text-white text-lg font-semibold">
            {studio.name}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

      <div className="bg-black mt-24 pt-16 px-6 md:px-11">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-40">

    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <img className="w-32 md:w-40 mb-6 ml-20" src={img5} alt="logo" />
      <p className="text-gray-400 leading-relaxed max-w-xs text-center  mx-auto">
        Sagittis enim nullam pulvinar tellus sitegestas. Vestibulum sed libero
        sed at sed nisl sodales phasellus et.
      </p>
    </div>

    
    <div className="flex flex-col items-center md:items-start">
      <p className="text-white font-bold pb-4">Download our app</p>
      <img className="w-36 md:w-40 mb-4" src={img6} alt="app store" />
      <img className="w-36 md:w-40 mb-4" src={img7} alt="play store" />
    </div>
  </div>
</div>

<div className="bg-black text-white text-center py-4">
  <p>© 2025 I Studio Management System</p>
</div>

    </div>
  );
}
