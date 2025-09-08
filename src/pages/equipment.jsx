import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { EquipmentItem } from '../components/ui/equipment-item';

export const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const equipment = [
    { name: 'Canon EOS R5', category: 'Camera', status: 'available', studio: 'Photography Studio' },
    { name: 'Sony A7 III', category: 'Camera', status: 'in-use', studio: 'Photography Studio' },
    { name: 'Canon 70-200mm f/2.8', category: 'Lens', status: 'available', studio: 'Photography Studio' },
    { name: 'Profoto B10 Plus', category: 'Lighting', status: 'in-use', studio: 'Photography Studio' },
    { name: 'DJI Ronin-S', category: 'Stabilizer', status: 'maintenance', studio: 'Music Production Studio' },
    { name: 'Godox AD600Pro', category: 'Lighting', status: 'available', studio: 'Photography Studio' },
    { name: 'Canon 24-70mm f/2.8', category: 'Lens', status: 'available', studio: 'Photography Studio' },
    { name: 'Sony FX3', category: 'Camera', status: 'maintenance', studio: 'Music Production Studio' },
  ];

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-black text-white px-8 py-4">
        <h1 className="text-xl font-semibold">Equipment</h1>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Available</h3>
            <p className="text-3xl font-bold text-gray-900">
              {equipment.filter(item => item.status === 'available').length}
            </p>
            <p className="text-sm text-gray-600">Ready to use</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">In Use</h3>
            <p className="text-3xl font-bold text-gray-900">
              {equipment.filter(item => item.status === 'in-use').length}
            </p>
            <p className="text-sm text-gray-600">Currently borrowed</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">Maintenance</h3>
            <p className="text-3xl font-bold text-gray-900">
              {equipment.filter(item => item.status === 'maintenance').length}
            </p>
            <p className="text-sm text-gray-600">Needs attention</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Equipment Inventory</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredEquipment.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No equipment found matching your search.</p>
              </div>
            ) : (
              filteredEquipment.map((item, index) => (
                <EquipmentItem
                  key={index}
                  name={item.name}
                  category={item.category}
                  status={item.status}
                  studio={item.studio}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};