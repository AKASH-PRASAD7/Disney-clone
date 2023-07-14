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
import { FaHeart } from "react-icons/fa";
import MovieContext from "../Context/Movies/MoviesContext";
import HoverText from "./Hovertext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  boxShadow: 10,
  p: 1,
};

const Navbar = () => {
  const data = useContext(MovieContext);
  const { getUser, setUserData, userData, isuser, setIsuser } = data;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logOut = () => {
    localStorage.removeItem("user");
    setUserData({
      name: "",
      email: "",
      password: "",
      favourites: [],
    });
    setIsuser(false);
    handleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions with the form data here
    localStorage.setItem("user", JSON.stringify(userData));
    getUser.name && setIsuser(true);
    // Reset form fields
    handleClose();
  };

  //Need to fix login for first time
  useEffect(() => {
    getUser();

    if (userData.name) {
      setIsuser(true);
    }
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
          <Box className="w-96" sx={style}>
            <div
              style={{ backgroundColor: "#0f1014" }}
              className=" text-white rounded-lg  h-full pb-6  mb-4 flex justify-between"
            >
              <div className=" h-full m-auto w-5/6   p-4">
                {!isuser ? (
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
                  <div>
                    <div className="  w-full">
                      <img
                        className="rounded-full mx-20  h-32"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                        alt="user"
                      />
                      <p className=" text-xl font-semibold text-center">
                        {userData.name}
                      </p>
                    </div>
                    <button
                      className="bg-red-500 h-10 mx-8 text-xl w-4/5 mt-4  font-semibold rounded-lg hover:bg-red-600 "
                      type="submit"
                      onClick={logOut}
                    >
                      Log out
                    </button>
                  </div>
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
          <div className="flex lg:w-28 md:w-20  sm:w-20 xs:w-20 xxs:w-20  flex-col mt-2 cursor-pointer ">
            <Link to="/">
              <HoverText text="Disney">
                <img src={logo} alt="logo" />
              </HoverText>
            </Link>
            <HoverText text="logo" />
          </div>
          <div className="flex flex-col items-center mt-4 p-4 gap-8 text-2xl ">
            <div onClick={handleOpen} className="cursor-pointer">
              <HoverText text="account">
                <BiUserCircle className="text-2xl text-white" />
              </HoverText>
            </div>
            <Link to="/search">
              <div className="cursor-pointer">
                <HoverText text="Search">
                  <FaMagnifyingGlass className="text-2xl text-white" />
                </HoverText>
              </div>
            </Link>
            <Link to="/">
              <div className="cursor-pointer">
                <HoverText text="home">
                  <BiHome className="text-2xl text-white" />
                </HoverText>
              </div>
            </Link>
            <Link to="/discover">
              <div className="cursor-pointer ">
                <HoverText text="Discover">
                  <BiMovie className="text-2xl text-white" />
                </HoverText>
              </div>
            </Link>
            {isuser && (
              <Link to="/favourites">
                <div className="cursor-pointer ">
                  <HoverText text="favourites">
                    <FaHeart className="text-2xl text-white" />
                  </HoverText>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
