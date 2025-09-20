import React from "react";
import img1 from "../assets/Rectangle 2112 (2).png";
import img2 from "../assets/Rectangle 2113 (2).png";
import img3 from "../assets/Rectangle 2114 (1).png";
import img4 from "../assets/Rectangle 2115 (1).png";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";
import musicImg from "../assets/Rectangle 2112 (1).png";
import podcastImg from "../assets/Rectangle 30.png";
import photographyStudioImg from "../assets/Rectangle 2112 (1).png";

const photographyImages = [img1, img2, img3, img4];
const otherStudios = [
  { name: "Art Studio", image: musicImg },
  { name: "Podcast Studio", image: podcastImg },
  { name: "Photography Studio", image: photographyStudioImg },
];

export default function Music() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Music Studio</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              src={photographyImages[0]}
              alt="Photography Studio"
              className="rounded-lg shadow-lg w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
              <li>Adjustable lighting rigs and studio flashes.</li>
              <li>Variety of backdrops, props, and styling equipment.</li>
              <li>Ideal for portraits, products, campaigns, and fashion shoots.</li>
              <li>Assistance from in-house photographers and stylists if requested.</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {photographyImages.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Photography ${idx}`}
              className="rounded-lg shadow-lg w-full h-48 md:h-60 object-cover"
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
            Schedule Session
          </button>
        </div>
      </section>
      <section className="mt-12 max-w-6xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Other Studios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherStudios.map((studio, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={studio.image}
                alt={studio.name}
                className="w-full h-48 md:h-60 object-cover"
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
      <Footer />
    </div>
  );
}
