import React from "react";
import logo from "../Images/Disney_Plus.svg.png";
import { FaAngleRight } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ width: "10%" }}
      className="h-screen text-white sticky top-0 left-0"
    >
      <nav className=" mt-4 mx-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 cursor-pointer ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button className="bg-yellow-500 hover:bg-orange-500 text-white font-semibold py-2 px-2 rounded-full">
              <span className="flex">
                {" "}
                Subscribe
                <FaAngleRight className="mt-1" />
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center mt-4 p-4 gap-8 text-2xl ">
            <div className="cursor-pointer">
              <BiUserCircle />
            </div>
            <div className="cursor-pointer">
              <FaMagnifyingGlass />
            </div>
            <div className="cursor-pointer">
              <BiHome />
            </div>
            <div className="cursor-pointer">
              <BiMovie />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
