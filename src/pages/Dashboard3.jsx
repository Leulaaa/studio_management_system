import React, { useState } from 'react';
import AccountSettings from '../components/ui/AccountSettings';
import UserSidebar from '../components/ui/UserSidebar';
import Navbar2 from '../components/ui/navbar2';
import Footer from '../components/ui/Footer';
import { Dashboard } from '../page/dashboard';
import { Dashboard2 } from '../page/dashboard2';
import { Link } from 'react-router-dom';
import Button2 from '../components/ui/button2';
const Dashboard3 = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <Dashboard/>
          </div>
        );
      case 'booking':
        return (
          <div className="max-w-4xl mx-auto p-6">
           <Dashboard2/>
          </div>
        );
      case 'settings':
        return <AccountSettings />;
      case 'logout':
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Logout</h1>
            <p className="mt-4 text-gray-600">Are you sure you want to log out?</p><br />
             <button><Link to ='/login' className='ml-[80px] text-green-500'><Button2 >YES</Button2></Link></button>
          </div>
        );
      default:
        return (<> <Dashboard2/> <AccountSettings />
         </>) ;
    }
  };

  return (
    <>
    <Navbar2 />
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <UserSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="flex-1 pl-8 pr-8">
        {renderContent()}
        </div>
      </div><br /><br /><br />
    </div>
    <Footer />
    </>
  );
};

export default Dashboard3;