import React from "react";
import { FaBuffer, FaFoursquare, FaSearch, FaDelicious } from "react-icons/fa";

function NavObj({ open }) {
  const menuObj = [
    { title: "Tailwind", icon: "FaFoursquare", img_name: "Ticket_logo.png" },
    { title: "Search", icon: "FaSearch", img_name: "Search_Icon.png" },
    { title: "Search", icon: "FaSearch", img_name: "Search_Icon.png" },
    { title: "Search", icon: "FaSearch", img_name: "Search_Icon.png" },
    { title: "Search", icon: "FaSearch", img_name: "Search_Icon.png" },
  ];
  return (
    <>
      <ul>
        {menuObj.map((menu, index) => (
          <li key={index}>
            <div className="inline-flex">
              <img
                src={`src/assets/${menu.img_name}`}
                alt={menu.icon}
                className="h-10 w-10 mr-2 bg-amber-300 rounded cursor-pointer block float-left"
              />
              {/* <FaFoursquare className="mr-2 bg-amber-300 text-4xl rounded cursor-pointer block float-left" /> */}
              <h1
                className={`font-medium text-2xl text-white duration-300 ${
                  !open && "scale-0"
                }`}
              >
                {menu.title}
              </h1>
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="inline-flex">
        <FaSearch className="mr-2 bg-transparent text-white text-4xl rounded cursor-pointer block float-left" />
        <input
          type={"search"}
          placeholder="Search"
          className={`bg-transparent focus:outline-none text-white duration-300 ${
            !open && "scale-0"
          }`}
        ></input>
      </div> */}
    </>
  );
}

export default NavObj;
