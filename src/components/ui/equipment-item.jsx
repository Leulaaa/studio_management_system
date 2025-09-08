import React, { useState } from 'react';

export const EquipmentItem = ({ name, category, status, studio }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  // Configuration for each status
  const statusConfig = {
    available: { color: 'bg-green-100 text-green-800', text: 'Available' },
    'in-use': { color: 'bg-blue-100 text-blue-800', text: 'In Use' },
    maintenance: { color: 'bg-yellow-100 text-yellow-800', text: 'Maintenance' },
    ready: { color: 'bg-green-200 text-green-900', text: 'Ready' },
    borrowed: { color: 'bg-blue-200 text-blue-900', text: 'Borrowed' },
    repairing: { color: 'bg-yellow-200 text-yellow-900', text: 'Repairing' },
  };

  const handleStatusClick = () => {
    // Toggle status text
    if (currentStatus === 'available') setCurrentStatus('ready');
    else if (currentStatus === 'in-use') setCurrentStatus('borrowed');
    else if (currentStatus === 'maintenance') setCurrentStatus('repairing');
    else {
      // Reset to original status
      setCurrentStatus(status);
    }
  };

  const config = statusConfig[currentStatus];

  return (
    <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{category} • {studio}</p>
      </div>
      <div className="flex-shrink-0">
        <button
          onClick={handleStatusClick}
          className={`px-3 py-1 rounded-full text-xs font-medium ${config.color} hover:opacity-90 transition`}
        >
          {config.text}
        </button>
      </div>
    </div>
  );
};
