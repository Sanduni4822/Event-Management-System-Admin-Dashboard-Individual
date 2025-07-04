import React from 'react';
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

const TopBar = ({ userName }) => {
  return (
    <div className="w-full bg-[#F5F7FA] shadow-md flex justify-between items-center px-6 py-4">
      {/* Left Side - Dashboard and User Greeting */}
      <div className="flex flex-col justify-center">
        <div className="text-2xl font-bold text-[#8A4EF3]">Dashboard</div>
        <div className="text-lg text-[#4A4A4A] mt-1">Hello {userName}, welcome back!</div>
      </div>

      {/* Right Side - Search Bar and User Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search anything"
            className="flex-grow outline-none border-none px-4 py-1 text-sm rounded-full pr-10" // Added padding-right for space for icon
          />
          <button className="absolute right-3 text-[#8A4EF3]">
            <FaSearch className="text-xl" />
          </button>
        </div>

        {/* Notifications, Settings, User Profile */}
        <button className="text-[#8A4EF3]">
          <FaBell className="text-xl" />
        </button>
        <button className="text-[#8A4EF3]">
          <FaCog className="text-xl" />
        </button>
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl text-[#4A4A4A]" />
          <div className="text-[#4A4A4A]">{userName}</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
