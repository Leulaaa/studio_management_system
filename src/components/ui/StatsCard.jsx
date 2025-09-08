import React from 'react';

const StatsCard = ({ title, value, details = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-3">{value}</p>
      <div className="text-sm text-gray-600 space-y-1">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between">
            <span>{detail.label}</span>
            <span className="font-medium">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
