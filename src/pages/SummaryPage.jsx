import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";

// Payment logos
import telebirr from "../assets/g1396.png";
import amole from "../assets/download.png";
import cbe from "../assets/1200x630wa 1.png";
import ebirr from "../assets/image 17.png";

export default function Summary() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    studioName = "Studio Booking",
    selectedSlot = {},
    equipments = [],
    selectedStaff = [],
    totalEquip = 0,
  } = location.state || {};

  const [phone, setPhone] = useState("");

  const staffFee = selectedStaff.length * 1000;
  const studioFee = 3000;
  const total = totalEquip + staffFee + studioFee;

  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar /><br /><br /><br />

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
            <h2 className="text-lg font-semibold">{studioName}</h2>
            <p className="text-sm">Yobek Building, Addis Ababa</p>
          </div>

          <h3 className="text-center font-semibold text-lg mb-4">
            Booking Details
          </h3>

          <div className="text-sm text-gray-700 space-y-4">
            {/* DATE & TIME */}
            <div>
              <p className="font-medium">Date & Time</p>
              <p>
                {selectedSlot.date ? formatDate(selectedSlot.date) : "Not selected"},{" "}
                {selectedSlot.start && selectedSlot.end
                  ? `${formatTime(selectedSlot.start)} - ${formatTime(selectedSlot.end)}`
                  : "No time selected"}
              </p>
            </div>

            {/* EQUIPMENT */}
            <div>
              <p className="font-medium">Selected Equipment</p>
              {equipments.filter((eq) => eq.count > 0).length > 0 ? (
                equipments
                  .filter((eq) => eq.count > 0)
                  .map((eq) => (
                    <div key={eq.id} className="flex justify-between border-b py-1">
                      <span>{eq.name}</span>
                      <span>Qty: {eq.count}</span>
                    </div>
                  ))
              ) : (
                <p>No equipment selected</p>
              )}
            </div>

            {/* STAFF */}
            <div>
              <p className="font-medium">Selected Staff</p>
              {selectedStaff.length > 0 ? (
                selectedStaff.map((staff, index) => (
                  <div key={index} className="flex justify-between border-b py-1">
                    <span>{staff}</span>
                    <span>{selectedSlot.start && selectedSlot.end ? "For session" : ""}</span>
                  </div>
                ))
              ) : (
                <p>No staff selected</p>
              )}
            </div>

            {/* FEES */}
            <div className="border-t pt-3 space-y-1">
              <div className="flex justify-between">
                <span>Equipment Fee</span>
                <span>Birr {totalEquip}</span>
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

          {/* PAYMENT METHODS */}
          <div className="mt-6">
            <h4 className="text-center font-medium mb-3">
              Select Payment Method
            </h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[{ name: "Telebirr", logo: telebirr }, { name: "Amole", logo: amole }, { name: "CBE", logo: cbe }, { name: "E-birr", logo: ebirr }].map((method) => (
                <div
                  key={method.name}
                  className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="w-10 h-10 mx-auto mb-2"
                  />
                  <p>{method.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PHONE INPUT */}
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-center">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="🇪🇹 +251 912345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* PAY BUTTON */}
          <button
            className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
            onClick={() => {
              alert("Payment functionality coming soon!");
            }}
          >
            PAY
          </button>
        </div>
      </div>

      <br /><br />
      <Footer />
    </div>
  );
}
