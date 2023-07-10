import React, { useState } from "react";
import logo from "../Images/Disney_Plus.svg.png";
import { FaAngleRight } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Print form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // You can perform additional actions with the form data here

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ width: "10%" }} className="h-screen z-10 text-white ">
      <div>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>hello</Box>
          <IoMdClose onClick={handleClose} />
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <label htmlFor="email">Password:</label>
            <input
              type="password"
              id="password"
              name="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <input type="submit" value="Submit" />
          </form> 
        </Modal> */}
      </div>
      <nav className=" mt-4 mx-3">
        <div className="flex flex-col gap-4">
          <div className="flex lg:w-20 md:w-16  sm:w-14 xs:w-12 xxs:w-10 flex-col lg:ml-2 mt-2 cursor-pointer ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-col items-center mt-4 p-4 gap-8 text-2xl ">
            <div onClick={handleOpen} className="cursor-pointer">
              <BiUserCircle />
            </div>
            <Link to="/search">
              <div className="cursor-pointer">
                <FaMagnifyingGlass />
              </div>
            </Link>
            <Link to="/">
              <div className="cursor-pointer">
                <BiHome />
              </div>
            </Link>
            <Link to="/discover">
              <div className="cursor-pointer ">
                <BiMovie />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
