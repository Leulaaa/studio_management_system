import React, { useState } from 'react';
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
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-gray-900">
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
                <Icon size={20} className="transition-colors duration-200" />
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

const StatsCard = ({ title, value, details }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2 mb-2">{value}</p>
      {details.map((detail, index) => (
        <div key={index} className="flex justify-between items-center text-gray-500 text-sm">
          <span>{detail.label}</span>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
};

const Chart = ({ type }) => {
  const linePoints = [
    { x: 40, y: 160, label: 'Jan' },
    { x: 120, y: 120, label: 'Feb' },
    { x: 200, y: 85, label: 'Mar' },
    { x: 280, y: 55, label: 'Apr' },
    { x: 360, y: 35, label: 'May' },
  ];

  const barPoints = [
    { x: 50, y: 120, height: 60, label: 'Jan' },
    { x: 105, y: 110, height: 70, label: 'Feb' },
    { x: 160, y: 100, height: 80, label: 'Mar' },
    { x: 215, y: 80, height: 100, label: 'Apr' },
    { x: 270, y: 60, height: 120, label: 'May' },
    { x: 325, y: 40, height: 140, label: 'Jun' },
  ];

  const renderLineChart = () => {
    const pathData = linePoints.map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      const prev = linePoints[index - 1];
      return `Q ${(prev.x + point.x) / 2} ${prev.y}, ${point.x} ${point.y}`;
    }).join(' ');

    const areaPathData = `${pathData} L ${linePoints[linePoints.length - 1].x} 180 L ${linePoints[0].x} 180 Z`;

    return (
      <div className="relative p-4 bg-white rounded-lg shadow-lg">
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />
          <path d={areaPathData} fill="url(#lineGradient)" />
          <path d={pathData} stroke="#A855F7" strokeWidth="3" fill="none" />
        </svg>
      </div>
    );
  };

  const renderDonutChart = () => (
    <div className="relative h-64 flex items-center justify-center bg-white rounded-lg shadow-lg">
      <div className="w-48 h-48 relative">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="20" strokeDasharray="125.6 251.2" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="62.8 314" strokeDashoffset="-125.6" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="62.8 314" strokeDashoffset="-188.4" />
        </svg>
      </div>
    </div>
  );

  const renderBarChart = () => (
    <div className="relative p-4 bg-white rounded-lg shadow-lg">
      <svg className="w-full h-64" viewBox="0 0 400 200">
        {barPoints.map((point, index) => (
          <rect key={index} x={point.x} y={point.y} width="35" height={point.height} fill="#3B82F6" rx="4" />
        ))}
      </svg>
    </div>
  );

  switch(type) {
    case 'line': return renderLineChart();
    case 'donut': return renderDonutChart();
    case 'bar': return renderBarChart();
    default: return <div className="h-64 bg-gray-100 rounded-lg shadow-inner"></div>;
  }
};

const SuperAdminHomepage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const stats = [
    {
      title: 'Total Studios',
      value: '2,548',
      details: [
        { label: 'Active', value: '2,300' },
        { label: 'Suspended', value: '150' },
        { label: 'Pending', value: '98' }
      ]
    },
    {
      title: 'Platform Revenue',
      value: '$5.2M',
      details: [
        { label: 'Daily', value: '$15K' },
        { label: 'Monthly', value: '$500K' }
      ]
    },
    {
      title: 'Total Users',
      value: '250,500',
      details: [
        { label: 'Active', value: '248K' },
        { label: 'Suspended', value: '2.5K' }
      ]
    },
    {
      title: 'Total Bookings',
      value: '1,250',
      details: [
        { label: 'This Week', value: '350' },
        { label: 'This Month', value: '1,250' }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex-1 overflow-auto">
        <div className="relative p-8 min-h-screen">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-gray-600">Here's what's happening with your platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Bookings Growth (Last 6 Months)</h3>
              <Chart type="line" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
              <Chart type="donut" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Revenue Trends (Last 6 Months)</h3>
            <Chart type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminHomepage;
