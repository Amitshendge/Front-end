import SideBar from "./components/SideBar";
import Sidebar2 from "./components/Sidebar2";
import TicketList from "./components/TicketList";
import { FaBuffer, FaFoursquare, FaSearch, FaDelicious } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [open, setopen] = useState(false);
  const menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuitems: [
        { title: "submenu 1" },
        { title: "submenu 2" },
        { title: "submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "inbox" },
    { title: "Profile", spacing: true },
    { title: "Settings" },
  ];
  return (
    <div className="flex ">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative transition-all duration-500`}
      >
        <FaBuffer
          className="text-dark-purple bg-white text-3xl rounded-full cursor-pointer"
          onClick={() => setopen(!open)}
        />
        <div className="inline-flex">
          <FaFoursquare className="mr-2 bg-amber-300 text-4xl rounded cursor-pointer block float-left" />
          <h1
            className={`font-medium text-2xl text-white duration-300 ${
              !open && "scale-0"
            }`}
          >
            Tailwind
          </h1>
        </div>
        <div className="inline-flex">
          <FaSearch className="mr-2 bg-transparent text-white text-4xl rounded cursor-pointer block float-left" />
          <input
            type={"search"}
            placeholder="Search"
            className={`bg-transparent focus:outline-none text-white duration-300 ${
              !open && "scale-0"
            }`}
          ></input>
        </div>
        <ul className="pt-2">
          {menus.map((menu, index) => (
            <>
              <li
                key={index}
                className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2"
              >
                <FaDelicious className="text-2xl block float-left" />
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "scale-0"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">HomePage</h1>
      </div>
    </div>
  );
}

export default App;
