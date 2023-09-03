import React from "react";
import { useState } from "react";
import { MdOutlineSubject } from "react-icons/md";
import NavObj from "./NavObj";

function SideNavBar() {
  const [open, setopen] = useState(false);
  return (
    <div
      className={`bg-dark-purple h-screen p-5 ${
        open ? "w-72" : "w-20"
      } relative transition-all duration-500`}
    >
      <MdOutlineSubject
        className="text-white  text-4xl rounded-full cursor-pointer mb-10"
        onClick={() => setopen(!open)}
      />
      <NavObj open={open}></NavObj>
    </div>
  );
}

export default SideNavBar;
