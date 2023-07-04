import React from "react";
import logo from "../Images/Disney_Plus.svg.png";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div style={{ width: "10%" }} className="h-screen text-white">
      <nav>
        <div>
          <img src={logo} alt="logo" />
          <button
            sy
            class="bg-yellow-500 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full"
          >
            <span className="flex">
              {" "}
              Subscribe
              <FaAngleRight className="mt-1" />
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
