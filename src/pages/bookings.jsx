import React, { useState } from 'react';
import { Search, Edit, Trash2, X, Plus } from 'lucide-react';
import { BookingModal } from '../components/ui/booking-modal';

export const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  const [editingBooking, setEditingBooking] = useState(null);
  const [updatedBooking, setUpdatedBooking] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      clientName: 'Emma Thompson',
      clientInitial: 'E',
      location: '123 Wedding Venue, City',
      date: '11/15/2023',
      time: '10:00 AM - 02:00 PM',
      studio: 'Photography Studio',
      duration: '1200hr',
      status: 'confirmed',
      photographer: 'Alex Johnson',
    },
    {
      id: 2,
      clientName: 'James Wilson',
      clientInitial: 'J',
      location: 'Office Building, Downtown',
      date: '11/16/2023',
      time: '01:00 PM - 03:00 PM',
      studio: 'Photography Studio',
      duration: '600hr',
      status: 'confirmed',
      photographer: 'Sarah Miller',
    },
    {
      id: 3,
      clientName: 'Sophia Garcia',
      clientInitial: 'S',
      location: 'City Park',
      date: '11/17/2023',
      time: '09:00 AM - 11:00 AM',
      studio: 'Photography Studio',
      duration: '350hr',
      status: 'pending',
      photographer: 'Alex Johnson',
    },
    {
      id: 4,
      clientName: 'Michael Brown',
      clientInitial: 'M',
      location: 'Studio',
      date: '11/18/2023',
      time: '04:00 PM - 06:00 PM',
      studio: 'Photography Studio',
      duration: '600hr',
      status: 'confirmed',
      photographer: 'David Lee',
    },
  ]);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesDate = !dateFilter || booking.date.includes(dateFilter);
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setUpdatedBooking({ ...booking });
  };

  const handleSave = () => {
    setBookings((prev) =>
      prev.map((b) => (b.id === updatedBooking.id ? updatedBooking : b))
    );
    setEditingBooking(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
        <div className="flex-1 max-w-lg relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by client or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="ml-4 bg-black text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>New Booking</span>
        </button>
      </div>

      {/* Bookings Header */}
      <div className="bg-black text-white px-8 py-4">
        <h1 className="text-xl font-semibold">Bookings</h1>
      </div>

      {/* Bookings Table */}
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booked Studio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Photographer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-800">{booking.clientInitial}</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{booking.clientName}</div>
                          <div className="text-sm text-gray-500">{booking.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{booking.date}</div>
                      <div className="text-sm text-gray-500">{booking.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{booking.studio}</div>
                      <div className="text-sm text-gray-500">{booking.duration}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}
                        onClick={() =>
                          setBookings((prev) =>
                            prev.map((b) =>
                              b.id === booking.id
                                ? {
                                    ...b,
                                    status: b.status === 'confirmed' ? 'pending' : 'confirmed',
                                  }
                                : b
                            )
                          )
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.photographer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900 p-1"
                          onClick={() => handleEdit(booking)}
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 p-1"
                          onClick={() => handleDelete(booking.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setEditingBooking(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Booking</h2>

            <label className="text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              value={updatedBooking.clientName}
              onChange={(e) =>
                setUpdatedBooking({ ...updatedBooking, clientName: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <label className="text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={updatedBooking.location}
              onChange={(e) =>
                setUpdatedBooking({ ...updatedBooking, location: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={updatedBooking.date}
              onChange={(e) =>
                setUpdatedBooking({ ...updatedBooking, date: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <label className="text-sm font-medium text-gray-700">Time</label>
            <input
              type="text"
              value={updatedBooking.time}
              onChange={(e) =>
                setUpdatedBooking({ ...updatedBooking, time: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <label className="text-sm font-medium text-gray-700">Photographer</label>
            <input
              type="text"
              value={updatedBooking.photographer}
              onChange={(e) =>
                setUpdatedBooking({ ...updatedBooking, photographer: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <button
              onClick={handleSave}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={(data) => setBookings([...bookings, { ...data, id: bookings.length + 1 }])}
      />
    </div>
  );
};
