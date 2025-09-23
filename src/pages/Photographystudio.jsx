import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import img1 from "../assets/Rectangle 2112.png";
import img2 from "../assets/Rectangle 2114.png";
import img3 from "../assets/Rectangle 2113 (1).png";
import img4 from "../assets/Rectangle 31.png";

import musicImg from "../assets/Rectangle 2112 (1).png";
import podcastImg from "../assets/Rectangle 30.png";
import photographyStudioImg from "../assets/Rectangle 29.png";

import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";

const photographyImages = [img1, img2, img3, img4];

const otherStudios = [
  { name: "Art Studio", image: musicImg, path: "/artstudio" },
  { name: "Podcast Studio", image: podcastImg, path: "/podcaststudio" },
  { name: "Music Studio", image: photographyStudioImg, path: "/musicstudio" },
];

export default function Photographystudio() {
  const [studios, setStudios] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("equipments");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const navigate = useNavigate();

  const renderList = () => {
    if (activeTab === "equipments") return equipments;
    if (activeTab === "staffs") return staffs;
  };

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const studioRes = await axios.get("http://localhost:9000/api/studios");
        const equipRes = await axios.get("http://localhost:9000/api/equipments");
        const staffRes = await axios.get("http://localhost:9000/api/staffs");

        const studioData = studioRes.data.data[3]; // Adjust index accordingly
        const studioEquip = equipRes.data.data[3];
        const studioStaff = staffRes.data.data[2];

        setStudios([studioData]);
        setEquipments([studioEquip.name]);
        setStaffs([studioStaff.role_title]);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load studio data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudios();
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <br /><br /><br />

      <section className="max-w-6xl mx-auto p-6">
        {loading && <p>Loading studios...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {studios.length > 0 && (
          <h1 className="text-3xl font-bold mb-6">{studios[0].name}</h1>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              src={photographyImages[0]}
              alt="Photography Studio"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "equipments"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("equipments")}
              >
                Equipments
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "staffs"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("staffs")}
              >
                Staffs
              </button>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {renderList().map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="mt-6 bg-black text-white px-4 py-2 rounded-lg text-center font-semibold">
              {studios.length > 0 && (
                <h1 className="text-l">{studios[0].hourly_rate} birr/hr</h1>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {photographyImages.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Photography Studio ${idx}`}
              className="rounded-lg shadow-lg w-full h-60 object-cover"
            />
          ))}
        </div>
      </section>

      {/* ✅ Book Now Button with Login Check */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            const token = localStorage.getItem("token");
            if (token) {
              navigate("/booking/Photography Studio");
            } else {
              setShowLoginPrompt(true);
            }
          }}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Book Now
        </button>
      </div>

      {/* ✅ Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Please Sign In</h2>
            <p className="text-gray-600">
              You need to be logged in to book a studio.
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Sign Up
              </button>
            </div>

            <button
              onClick={() => setShowLoginPrompt(false)}
              className="text-sm text-blue-500 hover:underline mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ✅ Other Studios Section */}
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

      <br />
      <br />
      <Footer />
    </div>
  );
}
