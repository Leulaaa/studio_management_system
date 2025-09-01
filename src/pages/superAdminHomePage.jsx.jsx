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
import StatsCard from '../components/ui/StatsCard';

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

const Chart = ({ type }) => {
  const linePoints = [
    { x: 40, y: 160, label: 'Jan', value: 160 },
    { x: 120, y: 120, label: 'Feb', value: 120 },
    { x: 200, y: 85, label: 'Mar', value: 85 },
    { x: 280, y: 55, label: 'Apr', value: 55 },
    { x: 360, y: 35, label: 'May', value: 35 },
  ];

  const barPoints = [
    { x: 50, y: 120, height: 60, label: 'Jan', value: 60 },
    { x: 105, y: 110, height: 70, label: 'Feb', value: 70 },
    { x: 160, y: 100, height: 80, label: 'Mar', value: 80 },
    { x: 215, y: 80, height: 100, label: 'Apr', value: 100 },
    { x: 270, y: 60, height: 120, label: 'May', value: 120 },
    { x: 325, y: 40, height: 140, label: 'Jun', value: 140 },
  ];

  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);

  const renderLineChart = () => {
    const pathData = linePoints.map((point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      const prev = linePoints[index - 1];
      return `Q ${(prev.x + point.x) / 2} ${prev.y}, ${point.x} ${point.y}`;
    }).join(' ');

    const areaPathData = `${pathData} L ${linePoints[linePoints.length - 1].x} 180 L ${linePoints[0].x} 180 Z`;

    return (
      <div className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <svg className="w-full h-64" viewBox="0 0 400 200">
          {/* Axes */}
          <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />

          {/* Y-axis labels */}
          {[0, 50, 100, 150, 200].map((val, idx) => (
            <text key={idx} x="30" y={180 - val * 180 / 200} className="text-xs" textAnchor="end">{val}</text>
          ))}

          {/* X-axis labels */}
          {linePoints.map((point, idx) => (
            <text key={idx} x={point.x} y="195" className="text-xs" textAnchor="middle">{point.label}</text>
          ))}

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Area under line */}
          <path d={areaPathData} fill="url(#lineGradient)" />

          {/* Line */}
          <path d={pathData} stroke="#A855F7" strokeWidth="3" fill="none" />

          {/* Points with hover and tooltip */}
          {linePoints.map((point, i) => (
            <g key={i}>
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredPoint === i ? 8 : 5}
                fill={hoveredPoint === i ? '#A855F7' : '#FFFFFF'}
                stroke="#A855F7"
                strokeWidth={hoveredPoint === i ? 3 : 2}
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
              {hoveredPoint === i && (
                <text x={point.x} y={point.y - 10} textAnchor="middle" className="text-xs font-bold fill-purple-700">{point.value}</text>
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  };

  const renderBarChart = () => (
    <div className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <svg className="w-full h-64" viewBox="0 0 400 200">
        {/* Axes */}
        <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />

        {/* Y-axis labels */}
        {[0, 50, 100, 150, 200].map((val, idx) => (
          <text key={idx} x="30" y={180 - val * 180 / 200} className="text-xs" textAnchor="end">{val}</text>
        ))}

        {/* X-axis labels */}
        {barPoints.map((point, idx) => (
          <text key={idx} x={point.x + 17.5} y="195" className="text-xs" textAnchor="middle">{point.label}</text>
        ))}

        <defs>
          {barPoints.map((_, idx) => (
            <linearGradient key={idx} id={`barGradient${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          ))}
        </defs>

        {/* Bars with hover and tooltip */}
        {barPoints.map((point, idx) => (
          <g key={idx}>
            <rect
              x={point.x}
              y={point.y}
              width="35"
              height={point.height}
              fill={`url(#barGradient${idx})`}
              rx="4"
              className={`transition-transform duration-300 cursor-pointer ${hoveredBar === idx ? 'scale-y-110' : ''}`}
              onMouseEnter={() => setHoveredBar(idx)}
              onMouseLeave={() => setHoveredBar(null)}
            />
            {hoveredBar === idx && (
              <text x={point.x + 17.5} y={point.y - 5} textAnchor="middle" className="text-xs font-bold fill-purple-700">{point.value}</text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );

  const renderDonutChart = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="20" strokeDasharray="125.6 251.2" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="62.8 314" strokeDashoffset="-125.6" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="62.8 314" strokeDashoffset="-188.4" />
        </svg>
      </div>
      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
          <span>Booking Fees</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <span>Subscription Fees</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span>Service Fees</span>
        </div>
      </div>
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
