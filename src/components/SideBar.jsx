import React from "react";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon iconSrc="src/assets/new_ticket.png" />
      <SideBarIcon iconSrc="src/assets/discord icon.png" />
    </div>
  );
}

const SideBarIcon = ({ iconSrc, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    <img src={iconSrc} alt={text} className="icon-image" />
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
