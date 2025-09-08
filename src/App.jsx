import React, { useState } from 'react';
import { StaffSidebar } from './components/ui/staff-sidebar';
import { Dashboard } from './pages/staff-dashboard';
import { Bookings } from './pages/bookings';
import { Equipment } from './pages/equipment';
import { Settings } from './pages/settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookings':
        return <Bookings />;
      case 'equipment':
        return <Equipment />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <StaffSidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />
      <main className="flex-1 overflow-y-auto">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;