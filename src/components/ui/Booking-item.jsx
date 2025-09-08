import React, { useState } from 'react';

export const BookingItem = ({ 
  date, 
  clientName, 
  service, 
  time, 
  initialStatus = 'confirmed' 
}) => {
  const [status, setStatus] = useState(initialStatus);

  const statusClasses = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const cycleStatus = () => {
    if (status === 'confirmed') setStatus('pending');
    else if (status === 'pending') setStatus('cancelled');
    else setStatus('confirmed');
  };

  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-green-800 font-semibold text-sm">{date}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900">{clientName}</h4>
        <p className="text-sm text-gray-600">{service}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <div className="flex-shrink-0">
        <span
          onClick={cycleStatus}
          className={`cursor-pointer px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
};
