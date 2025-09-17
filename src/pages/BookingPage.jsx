
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img5 from "../assets/Group 32.png";
import img6 from "../assets/Download our app (1).png";
import img7 from "../assets/Download our app.png";
import { useParams } from "react-router-dom";


export default function BookingPage() {
  const { studio } = useParams();
  const studioName = studio || "Podcast Studio";
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [equipments, setEquipments] = useState([
    { id: 1, name: "Shure SM7B Microphones", count: 0, price: 200 },
    { id: 2, name: "Rodecaster Pro Mixer", count: 0, price: 500 },
    { id: 3, name: "Headphones", count: 0, price: 100 },
    { id: 4, name: "DSLR Camera + Tripod", count: 0, price: 300 },
  ]);
  const [staff, setStaff] = useState({
    audio: false,
    photo: false,
    video: false,
  });

  const navigate = useNavigate();

  const handleChangeCount = (id, type) => {
    setEquipments((prev) =>
      prev.map((eq) =>
        eq.id === id
          ? {
              ...eq,
              count: type === "inc" ? eq.count + 1 : Math.max(0, eq.count - 1),
            }
          : eq
      )
    );
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const selectedStaff = Object.entries(staff)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const totalEquip = equipments.reduce(
      (sum, eq) => sum + eq.count * eq.price,
      0
    );

    navigate("/summary", {
      state: { date, startTime, endTime, equipments, selectedStaff, totalEquip },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      
      <div className="bg-black text-white text-center py-4 mx-72  rounded-b-2xl">
        <h2 className="text-xl font-bold">{studioName}</h2>
        <p className="text-gray-300">Yobek Building, Addis Ababa</p>
      </div>

      
      <div className="flex-1 px-6 md:px-20 py-10">
        <form
          onSubmit={handleConfirm}
          className="max-w-2xl mx-auto space-y-8"
        >
        
          <div>
            <label className="block font-medium mb-2">Select Date & Time</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

        
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

      
          <div>
            <label className="block font-medium mb-4">Select Equipments</label>
            <div className="space-y-4">
              {equipments.map((eq) => (
                <div
                  key={eq.id}
                  className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-3"
                >
                  <span>{eq.name}</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleChangeCount(eq.id, "dec")}
                      className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-6 text-center">{eq.count}</span>
                    <button
                      type="button"
                      onClick={() => handleChangeCount(eq.id, "inc")}
                      className="p-2 rounded-full border border-gray-400 hover:bg-gray-200"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <label className="block font-medium mb-4">Select Staff</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={staff.audio}
                  onChange={(e) =>
                    setStaff({ ...staff, audio: e.target.checked })
                  }
                />{" "}
                Audio Technician
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={staff.photo}
                  onChange={(e) =>
                    setStaff({ ...staff, photo: e.target.checked })
                  }
                />{" "}
                Photographer
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={staff.video}
                  onChange={(e) =>
                    setStaff({ ...staff, video: e.target.checked })
                  }
                />{" "}
                Videographer
              </label>
            </div>
          </div>


          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800"
            >
              CONFIRM DETAILS
            </button>
          </div>
        </form>
      </div>

  
      <div className="bg-black text-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img className="w-24 mb-4" src={img5} alt="logo" />
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Sagittis enim nullam pulvinar tellus sit egestas. Vestibulum sed
            libero sed at sed nisl sodales phasellus et.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold mb-3">Download our app</p>
          <img className="w-36 mb-3" src={img6} alt="app store" />
          <img className="w-36" src={img7} alt="play store" />
        </div>
      </div>

      <div className="bg-black text-center text-gray-400 py-4 text-sm">
        © Copyright 2025 | Studio Management System
      </div>
    </div>
  );
}
