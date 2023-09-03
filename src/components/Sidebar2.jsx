import React, { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiFileText,
  FiLogOut,
} from "react-icons/fi"; // Import icons as needed

const Sidebar2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-screen w-16 bg-gray-800 text-white fixed top-0 left-0 transition-all duration-300 ${
        isExpanded ? "ml-0" : "-ml-16"
      }`}
    >
      <div className="flex flex-col items-center py-5">
        <button
          className="w-10 h-10 text-gray-400 focus:outline-none hover:text-white"
          onClick={toggleSidebar}
        >
          <FiHome />
        </button>
        <button
          className="w-10 h-10 text-gray-400 focus:outline-none hover:text-white"
          onClick={toggleSidebar}
        >
          <FiSettings />
        </button>
        <button
          className="w-10 h-10 text-gray-400 focus:outline-none hover:text-white"
          onClick={toggleSidebar}
        >
          <FiUsers />
        </button>
        <button
          className="w-10 h-10 text-gray-400 focus:outline-none hover:text-white"
          onClick={toggleSidebar}
        >
          <FiFileText />
        </button>
      </div>
      {/* Add more icons/buttons as needed */}
      <button
        className="w-10 h-10 text-gray-400 focus:outline-none hover:text-white mt-auto"
        onClick={toggleSidebar}
      >
        <FiLogOut />
      </button>
    </div>
  );
};

export default Sidebar2;
