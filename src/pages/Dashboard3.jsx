import React, { useState } from 'react';
import AccountSettings from '../components/ui/AccountSettings';
import UserSidebar from '../components/ui/UserSidebar';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const Dashboard3 = () => {
  const [activeItem, setActiveItem] = useState('settings');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
          </div>
        );
      case 'booking':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Booking History</h1>
            <p className="mt-4 text-gray-600">Your booking history will appear here.</p>
          </div>
        );
      case 'settings':
        return <AccountSettings />;
      case 'logout':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Logout</h1>
            <p className="mt-4 text-gray-600">Are you sure you want to log out?</p>
          </div>
        );
      default:
        return <AccountSettings />;
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <UserSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="flex-1 pl-8 pr-8">
        {renderContent()}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard3;