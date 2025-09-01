import React, { useState, useEffect } from 'react';

const Chart = ({ type }) => {
  const [lineLength, setLineLength] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    const path = document.querySelector('.animated-line');
    if (path) {
      setLineLength(path.getTotalLength());
      setTimeout(() => setLineLength(0), 100);
    }
  }, [type]);

  const renderLineChart = () => {
    const points = [
      { x: 40, y: 160 },
      { x: 120, y: 120 },
      { x: 200, y: 85 },
      { x: 280, y: 55 },
      { x: 360, y: 35 },
    ];

    return (
      <div className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
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

          <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />

          <path
            d="M 40 160 Q 80 140 120 120 Q 160 100 200 85 Q 240 70 280 55 Q 320 45 360 35 L 360 180 L 40 180 Z"
            fill="url(#lineGradient)"
          />
          <path
            className="animated-line"
            d="M 40 160 Q 80 140 120 120 Q 160 100 200 85 Q 240 70 280 55 Q 320 45 360 35"
            stroke="#A855F7"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            strokeDasharray={lineLength}
            strokeDashoffset={lineLength}
            style={{ transition: 'stroke-dashoffset 2s ease-out' }}
          />

          {points.map((point, i) => (
            <circle
              key={i}
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
          ))}
        </svg>
      </div>
    );
  };

  const renderDonutChart = () => (
    <div className="relative h-64 flex items-center justify-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-48 h-48 relative group">
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
            className="group-hover:scale-110 transform transition-transform duration-300"
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
            className="group-hover:scale-110 transform transition-transform duration-300"
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
            className="group-hover:scale-110 transform transition-transform duration-300"
          />
        </svg>
      </div>
    </div>
  );

  const renderBarChart = () => {
    const bars = [
      { x: 50, y: 120, height: 60, gradient: 'url(#barGradient1)' },
      { x: 105, y: 110, height: 70, gradient: 'url(#barGradient2)' },
      { x: 160, y: 100, height: 80, gradient: 'url(#barGradient3)' },
      { x: 215, y: 80, height: 100, gradient: 'url(#barGradient4)' },
      { x: 270, y: 60, height: 120, gradient: 'url(#barGradient5)' },
      { x: 325, y: 40, height: 140, gradient: 'url(#barGradient6)' },
    ];

    return (
      <div className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <defs>
            {bars.map((bar, i) => (
              <linearGradient key={i} id={`barGradient${i + 1}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            ))}
          </defs>
          <line x1="40" y1="180" x2="360" y2="180" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="40" y1="30" x2="40" y2="180" stroke="#E5E7EB" strokeWidth="1" />

          {bars.map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={bar.y}
              width="35"
              height={bar.height}
              fill={bar.gradient}
              rx="4"
              className={`transition-transform duration-300 ${hoveredBar === i ? 'scale-y-110' : ''}`}
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
            />
          ))}
        </svg>
      </div>
    );
  };

  switch (type) {
    case 'line':
      return renderLineChart();
    case 'donut':
      return renderDonutChart();
    case 'bar':
      return renderBarChart();
    default:
      return <div className="h-64 bg-gray-100 rounded-lg shadow-inner"></div>;
  }
};

export default Chart;
