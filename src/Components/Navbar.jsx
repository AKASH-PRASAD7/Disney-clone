import React, { useContext, useEffect } from "react";
import logo from "../Images/Disney_Plus.svg.png";
import { BiUserCircle } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";
import MovieContext from "../Context/Movies/MoviesContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 350,
  boxShadow: 10,
  p: 1,
};

const Navbar = () => {
  const data = useContext(MovieContext);
  const { getUser, setUserData, userData } = data;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logOut = () => {
    localStorage.removeItem("user");
    setUserData({
      name: "",
      email: "",
      password: "",
    });
    handleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions with the form data here
    localStorage.setItem("user", JSON.stringify(userData));

    // Reset form fields
    setUserData({
      name: "",
      email: "",
      password: "",
    });
    handleClose();
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "10%" }} className="h-screen z-10 text-white ">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{ backgroundColor: "#0f1014" }}
              className=" text-white rounded-lg  h-full pb-6  mb-4 flex justify-between"
            >
              <div className=" h-full m-auto w-5/6   p-4">
                {!userData.name ? (
                  <form className="flex flex-col pb-4 " onSubmit={handleSubmit}>
                    <label htmlFor="Name">Full Name</label>
                    <input
                      className="outline text-black rounded-lg h-8 pl-2 pr-2 "
                      type="text"
                      value={userData.name}
                      minLength={5}
                      id="Name"
                      name="Name"
                      onChange={(event) =>
                        setUserData({ ...userData, name: event.target.value })
                      }
                      placeholder="John Doe"
                    />
                    <br />
                    <label htmlFor="Email">Enter Email</label>
                    <input
                      className="outline text-black rounded-lg h-8 pl-2 pr-2"
                      type="email"
                      required
                      name="Email"
                      id="Email"
                      onChange={(event) =>
                        setUserData({ ...userData, email: event.target.value })
                      }
                      value={userData.email}
                      placeholder="jhon@email.com"
                    />
                    <br />
                    <label htmlFor="Password">Enter Password</label>
                    <input
                      className="outline text-black  rounded-lg h-8 pl-2 pr-2"
                      type="password"
                      id="Password"
                      name="Password"
                      value={userData.password}
                      onChange={(event) =>
                        setUserData({
                          ...userData,
                          password: event.target.value,
                        })
                      }
                      placeholder="Minimum 8 characters"
                      required
                      minLength={8}
                    />
                    <br />
                    <button
                      className="bg-lime-600 h-10 text-xl font-semibold rounded-lg hover:bg-lime-700 "
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                ) : (
                  <button
                    className="bg-red-500 h-10 text-xl font-semibold rounded-lg hover:bg-red-600 "
                    type="submit"
                    onClick={logOut}
                  >
                    Log out
                  </button>
                )}
              </div>
              <button className="  h-10 text-3xl" onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>
          </Box>
        </Modal>
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
