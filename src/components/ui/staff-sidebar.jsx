import React from 'react';
import { Home, Calendar, Camera, Settings } from 'lucide-react';

export const StaffSidebar = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'equipment', label: 'Equipment', icon: Camera },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div
      className="w-64 flex flex-col h-full"
      style={{ backgroundColor: '#868686' }}
    >
      <div className="p-6 border-b border-gray-500 text-white">
        <h2 className="text-xl font-semibold">Staff</h2>
      </div>

      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                isActive
                  ? 'bg-black text-white border-r-2 border-purple-500-500'
                  : 'text-black hover:bg-black hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};