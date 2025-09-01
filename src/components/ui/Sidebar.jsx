import React from 'react';
import { 
  Menu, 
  Home, 
  Building2, 
  UserCheck, 
  Users, 
  BarChart3, 
  Settings 
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Building2, label: 'Studios', active: false },
    { icon: UserCheck, label: 'Admin Management', active: false },
    { icon: Users, label: 'Users', active: false },
    { icon: BarChart3, label: 'Report & Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className={`bg-white h-screen shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Super Admin
          </h1>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`mb-1 rounded-lg transition-all duration-200 cursor-pointer ${
                item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <div className={`flex items-center p-3 ${isCollapsed ? 'justify-center' : ''}`}>
                <Icon 
                  size={20} 
                  className="transition-colors duration-200"
                />
                {!isCollapsed && (
                  <span className="ml-3 font-medium transition-colors duration-200">
                    {item.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;