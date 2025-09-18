
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import img5 from "../assets/Group 32.png";
import img6 from "../assets/Download our app (1).png";
import img7 from "../assets/Download our app.png";
import telebirr from "../assets/g1396.png";
import amole from "../assets/download.png";
import cbe from "../assets/1200x630wa 1.png";
import ebirr from "../assets/image 17.png";

export default function Summary() {
  const location = useLocation();
  const navigate = useNavigate();


  const { date, startTime, endTime, equipments, selectedStaff, totalEquip } =
    location.state || {};

  
  const staffFee = selectedStaff.length * 1000; 
  const studioFee = 3000; 
  const total = (totalEquip || 0) + staffFee + studioFee;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
  
      <div className="p-4">
        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-black"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

    
      <div className="flex-grow flex justify-center">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
    
          <div className="bg-black text-white text-center py-3 rounded-xl mb-6">
            <h2 className="text-lg font-semibold">Podcast Studio</h2>
            <p className="text-sm">Yobek Building, Addis Ababa</p>
          </div>


          <h3 className="text-center font-semibold text-lg mb-4">
            Booking Details
          </h3>

          <div className="text-sm text-gray-700 space-y-3">
        
            <div>
              <p className="font-medium">Date & Time</p>
              <p>
                {date || "Not selected"},{" "}
                {startTime && endTime
                  ? `${startTime} - ${endTime}`
                  : "No time selected"}
              </p>
            </div>

      
            <div>
              <p className="font-medium">Selected Equipment</p>
              {equipments && equipments.length > 0 ? (
                equipments
                  .filter((eq) => eq.count > 0)
                  .map((eq) => (
                    <div
                      key={eq.id}
                      className="flex justify-between border-b py-1"
                    >
                      <span>{eq.name}</span>
                      <span>Qty: {eq.count}</span>
                    </div>
                  ))
              ) : (
                <p>No equipment selected</p>
              )}
            </div>
            <div>
              <p className="font-medium">Selected Staff</p>
              {selectedStaff && selectedStaff.length > 0 ? (
                selectedStaff.map((staff, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b py-1"
                  >
                    <span>{staff}</span>
                    <span>{startTime && endTime ? "For session" : ""}</span>
                  </div>
                ))
              ) : (
                <p>No staff selected</p>
              )}
            </div>

      
            <div className="border-t pt-3 space-y-1">
              <div className="flex justify-between">
                <span>Equipment Fee</span>
                <span>Birr {totalEquip || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Staff Fee</span>
                <span>Birr {staffFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Studio Fee</span>
                <span>Birr {studioFee}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>Birr {total}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-center font-medium mb-3">
              Select Payment Method
            </h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                <img
                  src={telebirr}
                  alt="Telebirr"
                  className="w-10 h-10 mx-auto mb-2"
                />
                <p>Telebirr</p>
              </div>

              <div className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                <img
                  src={amole}
                  alt="Amole"
                  className="w-10 h-10 mx-auto mb-2"
                />
                <p>Amole</p>
              </div>

              <div className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                <img
                  src={cbe}
                  alt="CBE"
                  className="w-10 h-10 mx-auto mb-2"
                />
                <p>CBE</p>
              </div>

              <div className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
                <img
                  src={ebirr}
                  alt="E-birr"
                  className="w-10 h-10 mx-auto mb-2"
                />
                <p>E-birr</p>
              </div>
            </div>
          </div>

          
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-center">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="🇪🇹 +251 912345678"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>


          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
            PAY
          </button>
        </div>
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
