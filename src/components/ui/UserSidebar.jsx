import React from 'react';
import { User, Calendar, Settings, LogOut } from 'lucide-react';

const UserSidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'booking', label: 'Booking History', icon: Calendar },
    { id: 'settings', label: 'Setting', icon: Settings },
    { id: 'logout', label: 'Log-out', icon: LogOut },
    
  ];

  return (
    <div className="w-64 bg-white shadow-lg border border-gray-200 rounded-lg mt-8 ml-8">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-black hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;