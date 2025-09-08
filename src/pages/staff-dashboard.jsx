import React, { useState } from 'react';
import { Calendar, Clock, Camera, Plus, CheckCircle, User, DollarSign } from 'lucide-react';
import { StatCard } from '../components/ui/stat-card';
import { ActivityItem } from '../components/ui/activity-item';
import { BookingItem } from '../components/ui/Booking-item';
import { BookingModal } from '../components/ui/booking-modal';

export const Dashboard = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNewBooking = (bookingData) => {
    console.log('New booking created:', bookingData);
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">HELLO ABEBE KEBEDE</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">Dashboard</h1>
          </div>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-black text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>New Booking</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Bookings"
            value="28"
            icon={<Calendar className="w-6 h-6" />}
            color="blue"
            actionText="View all bookings"
            className="transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer"
          />
          <StatCard
            title="Today's booking"
            value="0"
            icon={<Clock className="w-6 h-6" />}
            color="green"
            actionText="View calendar"
            className="transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer"
          />
          <StatCard
            title="Equipment"
            value="15"
            subtitle="Available"
            icon={<Camera className="w-6 h-6" />}
            color="purple"
            actionText="Manage equipment"
            className="transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-2">
              <ActivityItem
                icon={<Calendar className="w-4 h-4" />}
                title="New booking: Emma Thompson"
                time="2 hours ago"
                color="blue"
              />
              <ActivityItem
                icon={<CheckCircle className="w-4 h-4" />}
                title="Invoice #501 marked as paid"
                time="5 hours ago"
                color="green"
              />
              <ActivityItem
                icon={<User className="w-4 h-4" />}
                title="New client registered: James Wilson"
                time="1 day ago"
                color="purple"
              />
              <ActivityItem
                icon={<DollarSign className="w-4 h-4" />}
                title="DJI Ronin-S marked as maintenance"
                time="2 days ago"
                color="yellow"
              />
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Bookings</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                <span>View all bookings</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="p-2">
              <BookingItem
                date="15"
                clientName="Emma Thompson"
                service="Wedding Photography"
                time="10:00 AM - 02:00 PM"
                status="confirmed"
              />
              <BookingItem
                date="16"
                clientName="James Wilson"
                service="Corporate Headshots"
                time="01:00 PM - 03:00 PM"
                status="confirmed"
              />
              <BookingItem
                date="17"
                clientName="Sophia Garcia"
                service="Family Portrait"
                time="09:00 AM - 11:00 AM"
                status="pending"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleNewBooking}
      />
    </div>
  );
};
