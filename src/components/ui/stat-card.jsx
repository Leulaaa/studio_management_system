import React from 'react';

export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  color,
  actionText,
  onAction
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {subtitle && <span className="text-gray-600 text-sm ml-2">{subtitle}</span>}
          </div>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>
      
      <button
        onClick={onAction}
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <span className="text-sm font-medium">{actionText}</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};