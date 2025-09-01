import React, { useState, useEffect } from 'react';
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
    <div className={`bg-white dark:bg-gray-950 h-screen shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Super Admin
          </h1>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
        >
          <Menu size={20} className="text-gray-600 dark:text-gray-400" />
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
                  ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400'
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

const StatsCard = ({ title, value, details }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wide">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-2">{value}</p>
      {details.map((detail, index) => (
        <div key={index} className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
          <span>{detail.label}</span>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
};

const Chart = ({ type, isDarkMode }) => {
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

  const [lineLength, setLineLength] = useState(0);
  const textColor = isDarkMode ? '#A0A0A0' : '#808080';

  useEffect(() => {
    const path = document.querySelector('.animated-line');
    if (path) {
      setLineLength(path.getTotalLength());
      setTimeout(() => setLineLength(0), 100);
    }
  }, [type]);

  const renderLineChart = () => {
    const pathData = linePoints.map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      } else {
        const prevPoint = linePoints[index - 1];
        return `Q ${(prevPoint.x + point.x) / 2} ${prevPoint.y}, ${point.x} ${point.y}`;
      }
    }).join(' ');
    const areaPathData = `${pathData} L ${linePoints[linePoints.length - 1].x} 180 L ${linePoints[0].x} 180 Z`;

    return (
      <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" className="dark:stroke-gray-600" />
          <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" className="dark:stroke-gray-600" />
          <text x="30" y="185" className="text-xs" textAnchor="end" fill={textColor}>0</text>
          <text x="30" y="145" className="text-xs" textAnchor="end" fill={textColor}>50</text>
          <text x="30" y="105" className="text-xs" textAnchor="end" fill={textColor}>100</text>
          <text x="30" y="65" className="text-xs" textAnchor="end" fill={textColor}>150</text>
          <text x="30" y="25" className="text-xs" textAnchor="end" fill={textColor}>200</text>
          {linePoints.map((point, index) => (
            <text key={index} x={point.x} y="195" className="text-xs" textAnchor="middle" fill={textColor}>{point.label}</text>
          ))}
          <path
            d={areaPathData}
            fill="url(#lineGradient)"
          />
          <path
            className="animated-line"
            d={pathData}
            stroke="#A855F7"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            strokeDasharray={lineLength}
            strokeDashoffset={lineLength}
            style={{ transition: 'stroke-dashoffset 2s ease-out' }}
          />
          {linePoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r="5" fill="#FFFFFF" stroke="#A855F7" strokeWidth="2" />
          ))}
        </svg>
      </div>
    );
  };

  const renderDonutChart = () => (
    <div className="relative h-64 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="w-48 h-48 relative">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#A855F7"
            strokeWidth="20"
            strokeDasharray="125.6 251.2"
            strokeDashoffset="0"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="20"
            strokeDasharray="62.8 314"
            strokeDashoffset="-125.6"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#10B981"
            strokeWidth="20"
            strokeDasharray="62.8 314"
            strokeDashoffset="-188.4"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-4 text-xs dark:text-gray-400">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span>Booking Fees</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>Subscription Fees</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Service Fees</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBarChart = () => (
    <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <svg className="w-full h-64" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="barGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="barGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="barGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="barGradient6" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" className="dark:stroke-gray-600" />
        <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" className="dark:stroke-gray-600" />
        <text x="30" y="185" className="text-xs" textAnchor="end" fill={textColor}>0</text>
        <text x="30" y="145" className="text-xs" textAnchor="end" fill={textColor}>50</text>
        <text x="30" y="105" className="text-xs" textAnchor="end" fill={textColor}>100</text>
        <text x="30" y="65" className="text-xs" textAnchor="end" fill={textColor}>150</text>
        <text x="30" y="25" className="text-xs" textAnchor="end" fill={textColor}>200</text>
        {barPoints.map((point, index) => (
          <text key={index} x={point.x + 35 / 2} y="195" className="text-xs" textAnchor="middle" fill={textColor}>{point.label}</text>
        ))}
        {barPoints.map((point, index) => (
          <rect key={index} x={point.x} y={point.y} width="35" height={point.height} fill={`url(#barGradient${index + 1})`} rx="4" />
        ))}
      </svg>
    </div>
  );

  switch (type) {
    case 'line':
      return renderLineChart();
    case 'donut':
      return renderDonutChart();
    case 'bar':
      return renderBarChart();
    default:
      return <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner"></div>;
  }
};

const SuperAdminHomepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark';
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex-1 overflow-auto">
        <div className="relative p-8 min-h-screen">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="absolute top-8 right-8 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 dark:text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Bookings Growth (Last 6 Months)</h3>
              <Chart type="line" isDarkMode={isDarkMode} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
              <Chart type="donut" isDarkMode={isDarkMode} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Revenue Trends (Last 6 Months)</h3>
              <Chart type="bar" isDarkMode={isDarkMode} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default SuperAdminHomepage;
