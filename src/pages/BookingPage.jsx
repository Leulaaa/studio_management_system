import React, { useState, useEffect, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";

export default function BookingPage() {
  const { studio } = useParams();
  const studioName = decodeURIComponent(studio || "Studio Booking");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(60);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const [equipments, setEquipments] = useState([
    { id: 1, name: "Shure SM7B Microphones", count: 0, price: 200, max: 4 },
    { id: 2, name: "Rodecaster Pro Mixer", count: 0, price: 500, max: 2 },
    { id: 3, name: "Headphones", count: 0, price: 100, max: 6 },
    { id: 4, name: "DSLR Camera + Tripod", count: 0, price: 300, max: 3 },
  ]);

  const [staff, setStaff] = useState({
    audio: false,
    photo: false,
    video: false,
  });

  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  const slotsRef = useRef(null);
  const navigate = useNavigate();

  const handleChangeCount = (id, type) => {
    setEquipments((prev) =>
      prev.map((eq) => {
        if (eq.id === id) {
          if (type === "inc" && eq.count < eq.max) {
            return { ...eq, count: eq.count + 1 };
          } else if (type === "dec" && eq.count > 0) {
            return { ...eq, count: eq.count - 1 };
          }
        }
        return eq;
      })
    );
  };

  const handleCheckAvailability = async () => {
    if (!startDate || !endDate || !duration) {
      alert("Please fill out all fields.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be before start date.");
      return;
    }

    const isSundaySelected =
      new Date(startDate).getDay() === 0 || new Date(endDate).getDay() === 0;

    if (isSundaySelected) {
      alert("Bookings on Sundays are not allowed. Please select Monday to Saturday.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to check availability.");
      return;
    }

    setLoading(true);
    setAvailableSlots([]);
    setSelectedSlotIndex(null);

    const studioId = "356fd27b-fdec-459c-ad96-3b08c8970ce7";
    const url = `http://localhost:9000/api/studios/${studioId}/availability?start_date=${startDate}&end_date=${endDate}&duration=${duration}`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Fetch error:", text);
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const availableDays = data?.data?.availability || [];

      const openSlots = [];

      availableDays.forEach((day) => {
        const dayOfWeek = new Date(day.date).getDay(); // 0 = Sunday

        if (day.is_open && dayOfWeek !== 0) {
          day.available_slots.forEach((slot) => {
            if (slot.available) {
              const start = new Date(slot.start_time);
              const end = new Date(slot.end_time);
              const startHour = start.getHours();
              const endHour = end.getHours();

              const isWithinWorkingHours =
                startHour >= 14 &&
                endHour <= 23 &&
                !(startHour < 19 && endHour > 18); // Avoid 18:00–19:00

              if (isWithinWorkingHours) {
                openSlots.push({
                  date: day.date,
                  start: slot.start_time,
                  end: slot.end_time,
                });
              }
            }
          });
        }
      });

      setAvailableSlots(openSlots);
    } catch (error) {
      console.error("Error checking availability:", error);
      alert("Failed to check availability. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelect = (index) => {
    setSelectedSlotIndex(index);
    if (slotsRef.current) {
      const selectedItem = slotsRef.current.querySelectorAll("li")[index];
      selectedItem?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    if (selectedSlotIndex === null) {
      alert("Please select a schedule slot.");
      return;
    }

    const selectedStaff = Object.entries(staff)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const totalEquip = equipments.reduce(
      (sum, eq) => sum + eq.count * eq.price,
      0
    );

    const selectedSlot = availableSlots[selectedSlotIndex];

    navigate("/summary", {
      state: {
        studioName,
        startDate,
        endDate,
        duration,
        equipments,
        selectedStaff,
        totalEquip,
        selectedSlot,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Navbar /><br /><br /><br />
      <div className="flex-grow flex justify-center mt-8 px-4">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
          <div className="bg-black text-white text-center py-3 rounded-xl mb-6">
            <h2 className="text-xl font-bold">{studioName}</h2>
            <p className="text-gray-300">Yobek Building, Addis Ababa</p>
          </div>

          <div className="px-6 md:px-12 py-6">
            <form onSubmit={handleConfirm} className="space-y-8">
              {/* DATE RANGE + DURATION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-medium mb-2">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate || new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Duration (minutes)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min={30}
                    step={30}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
              </div>

              {/* CHECK AVAILABILITY */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleCheckAvailability}
                  disabled={loading}
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 disabled:opacity-50"
                >
                  {loading ? "Checking..." : "Check Availability"}
                </button>
              </div>

              {/* SELECTED DATES DISPLAY */}
              {startDate && endDate && (
                <div className="text-center mb-4 text-gray-700">
                  <p>
                    <strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()} &nbsp; | &nbsp;
                    <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
                  </p>
                </div>
              )}

              {/* AVAILABLE SLOTS */}
              {availableSlots.length > 0 && (
                <div
                  ref={slotsRef}
                  className="max-h-72 overflow-y-auto rounded-md p-3"
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="text-lg font-semibold mb-4">Available Slots</h3>
                  <ul className="space-y-3">
                    {availableSlots.map((slot, index) => {
                      const isSelected = index === selectedSlotIndex;
                      const isDisabled = selectedSlotIndex !== null && !isSelected;

                      return (
                        <li
                          key={index}
                          onClick={() => !isDisabled && handleSlotSelect(index)}
                          className={`rounded-md px-4 py-3
                            ${isSelected ? "bg-black text-white cursor-default" : "bg-gray-50 hover:bg-gray-200"}
                            ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                          `}
                        >
                          <p>
                            <strong>Date:</strong> {new Date(slot.date).toLocaleDateString()}
                          </p>
                          <p>
                            <strong>Time:</strong>{" "}
                            {new Date(slot.start).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}{" "}
                            -{" "}
                            {new Date(slot.end).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* SHOW SELECTED SLOT */}
              {selectedSlotIndex !== null && (
                <div className="mt-6 text-center">
                  <label className="block text-sm font-medium mb-2">Selected Schedule</label>
                  <input
                    type="text"
                    readOnly
                    className="border border-gray-300 rounded-md px-3 py-2 text-center bg-gray-100 w-full md:w-1/2 mx-auto"
                    value={`📅 ${new Date(
                      availableSlots[selectedSlotIndex].date
                    ).toLocaleDateString()} 🕒 ${new Date(
                      availableSlots[selectedSlotIndex].start
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} - ${new Date(availableSlots[selectedSlotIndex].end).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`}
                  />
                </div>
              )}

              {/* NO SLOTS MESSAGE */}
              {availableSlots.length === 0 && !loading && startDate && endDate && (
                <p className="text-center text-sm text-gray-500">
                  No available slots for the selected dates.
                </p>
              )}

              {/* EQUIPMENT SECTION */}
              <div>
                <label className="block font-medium mb-4">Select Equipment</label>
                <div className="space-y-4">
                  {equipments.map((eq) => (
                    <div
                      key={eq.id}
                      className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div>
                        <p className="font-medium">{eq.name}</p>
                        <p className="text-sm text-gray-500">{eq.price} birr</p>
                        <p className="text-xs text-gray-400">Max: {eq.max}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleChangeCount(eq.id, "dec")}
                          disabled={eq.count === 0}
                          className={`p-2 rounded-full border border-gray-400 hover:bg-gray-200 ${
                            eq.count === 0 ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="w-6 text-center">{eq.count}</span>
                        <button
                          type="button"
                          onClick={() => handleChangeCount(eq.id, "inc")}
                          disabled={eq.count === eq.max}
                          className={`p-2 rounded-full border border-gray-400 hover:bg-gray-200 ${
                            eq.count === eq.max ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAFF SECTION */}
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
                    />
                    Audio Technician
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={staff.photo}
                      onChange={(e) =>
                        setStaff({ ...staff, photo: e.target.checked })
                      }
                    />
                    Photographer
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={staff.video}
                      onChange={(e) =>
                        setStaff({ ...staff, video: e.target.checked })
                      }
                    />
                    Videographer
                  </label>
                </div>
              </div>

              {/* CONFIRM BUTTON */}
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
        </div>
      </div><br /><br />
      <Footer />
    </div>
  );
}
