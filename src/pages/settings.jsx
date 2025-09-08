import React, { useState, useEffect } from "react";
import { User, Bell, Save, Lock } from "lucide-react";

export const Settings = () => {
  const [settings, setSettings] = useState({
    name: "Abebe Kebede",
    email: "abebe@studio.com",
    phone: "+1 (555) 123-4567",
    emailNotifications: true,
    smsNotifications: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // Load saved settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("studioSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Save settings to localStorage
  const handleSave = () => {
    localStorage.setItem("studioSettings", JSON.stringify(settings));
    alert("✅ Settings saved!");
  };

  const handlePasswordUpdate = () => {
    if (passwords.new !== passwords.confirm) {
      alert("❌ New password and confirmation do not match!");
      return;
    }
    // Here you can add your password update logic (API call etc.)
    alert("✅ Password updated successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
        <button
          onClick={handleSave}
          className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md transition-transform transform hover:scale-105"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
          </div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <Bell className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Notifications
            </h2>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition">
              <span className="font-medium">Email Notifications</span>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) =>
                  handleChange("emailNotifications", e.target.checked)
                }
                className="w-5 h-5 accent-green-600"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition">
              <span className="font-medium">SMS Notifications</span>
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) =>
                  handleChange("smsNotifications", e.target.checked)
                }
                className="w-5 h-5 accent-green-600"
              />
            </div>
          </div>
        </div>

        {/* Password Reset Card */}
<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer md:col-span-2">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-3 bg-purple-100 rounded-full">
      <Lock className="w-6 h-6 text-purple-600" />
    </div>
    <h2 className="text-xl font-semibold text-gray-800">
      Reset Password
    </h2>
  </div>
  <div className="space-y-5">
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Current Password
      </label>
      <input
        type="password"
        value={passwords.current}
        onChange={(e) => handlePasswordChange("current", e.target.value)}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">
        New Password
      </label>
      <input
        type="password"
        value={passwords.new}
        onChange={(e) => handlePasswordChange("new", e.target.value)}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">
        Confirm New Password
      </label>
      <input
        type="password"
        value={passwords.confirm}
        onChange={(e) => handlePasswordChange("confirm", e.target.value)}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>

    {/* Update Button aligned right and small */}
    <div className="flex justify-end">
      <button
        onClick={handlePasswordUpdate}
        className="bg-black hover:bg-gray-900 text-white px-4 py-1 rounded-md font-semibold text-md shadow-sm transition-transform transform hover:scale-105"
      >
        Update password
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};
