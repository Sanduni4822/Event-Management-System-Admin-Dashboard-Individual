import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaInbox, FaFileInvoice, FaUsers, FaChartBar, FaImages, FaStar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#F5F7FA] p-6 h-screen flex flex-col">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-[#8A4EF3] mb-12">Ventixe</div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-6">
          <SidebarItem name="Dashboard" icon={<FaTachometerAlt />} />
          <SidebarItem name="Bookings" icon={<FaCalendarAlt />} />
          <SidebarItem name="Invoices" icon={<FaFileInvoice />} />
          <SidebarItem name="Inbox" icon={<FaInbox />} />
          <SidebarItem name="Calendar" icon={<FaCalendarAlt />} />
          <SidebarItem name="Events" icon={<FaUsers />} />
          <SidebarItem name="Financials" icon={<FaChartBar />} />
          <SidebarItem name="Gallery" icon={<FaImages />} />
          <SidebarItem name="Feedback" icon={<FaStar />} />
        </ul>
      </nav>

      {/* Footer Section with Sign Out Button */}
      <div className="mt-auto">
        <div className="flex flex-col items-center">
          <button className="w-full bg-[#FF5F5F] text-white text-sm font-medium py-2 rounded-md hover:bg-[#FF4040] flex items-center justify-center">
            <FaSignOutAlt className="mr-2" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ name, icon }) => (
  <li className="flex items-center text-lg text-[#4A4A4A] hover:text-[#2C2C2C] cursor-pointer">
    <span className="mr-4 text-xl">{icon}</span>
    {name}
  </li>
);

export default Sidebar; 