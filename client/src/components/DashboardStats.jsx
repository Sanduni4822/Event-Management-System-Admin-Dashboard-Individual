import React from 'react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="p-6 bg-white shadow-lg rounded-md">
        <h4 className="text-lg font-semibold text-[#4A4A4A]">Upcoming Events</h4>
        <p className="text-xl text-[#8A4EF3]">345</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-md">
        <h4 className="text-lg font-semibold text-[#4A4A4A]">Total Bookings</h4>
        <p className="text-xl text-[#8A4EF3]">1798</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-md">
        <h4 className="text-lg font-semibold text-[#4A4A4A]">Tickets Sold</h4>
        <p className="text-xl text-[#8A4EF3]">1250</p>
      </div>
    </div>
  );
};

export default DashboardStats;
