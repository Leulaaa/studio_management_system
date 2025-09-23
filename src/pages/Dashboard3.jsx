import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountSettings from "../components/ui/AccountSettings";
import UserSidebar from "../components/ui/UserSidebar";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";
import { Dashboard } from "../page/dashboard";
import { Dashboard2 } from "../page/dashboard2";
import Button2 from "../components/ui/button2";

const Dashboard3 = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [userReloadFlag, setUserReloadFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  // Callback to tell child (AccountSettings) to reload user, and then we toggle flag to force re-render
  const reloadUser = () => {
    setUserReloadFlag(prev => !prev);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <Dashboard key={userReloadFlag} />
            {/* Using key prop with userReloadFlag will force Dashboard to remount when userReloadFlag changes */}
          </div>
        );
      case "booking":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <Dashboard2 />
          </div>
        );
      case "settings":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <AccountSettings onProfileUpdate={reloadUser} />
          </div>
        );
      case "logout":
        return (
          <div className="max-w-4xl mx-auto p-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Logout</h1>
            <p className="mt-4 text-gray-600">Are you sure you want to log out?</p>
            <br />
            <button onClick={handleLogout}>
              <Button2>YES</Button2>
            </button>
          </div>
        );
      default:
        return (
          <div className="max-w-4xl mx-auto p-6">
            <Dashboard key={userReloadFlag} />
          </div>
        );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-8">
        <Navbar /><br /><br /><br />
        <div className="flex">
          <div className="flex-shrink-0">
            <UserSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
          </div>
          <div className="flex-1 pl-8 pr-8">{renderContent()}</div>
        </div>
        <br /><br /><br />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard3;
