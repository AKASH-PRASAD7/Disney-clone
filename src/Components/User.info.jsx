import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Userinfo = () => {
  const Navigate = useNavigate();
  const [type, setType] = useState("password");
  const toggleType = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const data = useContext(MovieContext);

  const { userData, isuser } = data;
  console.log(userData);
  console.log(isuser);
  useEffect(() => {
    if (!isuser) {
      Navigate("/");
    }
    // eslint-disable-next-line
  }, [isuser]);
  return (
    <>
      <div className="w-full ">
        <div className="flex p-5 ">
          <img
            className="rounded-full lg:h-48 md:h-36 sm:h-32 xs:h-24 xxs:h-20 lg:mx-20 sm:mx-10 xs:mx-2 xxs:mx-2"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="user"
          />
          <div className=" w-full flex flex-col gap-4">
            <p className="lg:text-4xl md:text-3xl sm:text-xl xs:text-lg xxs:text-lg  font-bold">
              Account Details
            </p>
            <p className="lg:text-xl md:text-lg sm:text-base xs:text-sm xxs:text-xs font-semibold">
              Name : {userData.name}
            </p>
            <p className="lg:text-xl md:text-lg sm:text-base xs:text-sm xxs:text-xs font-semibold">
              Email : {userData.email}{" "}
            </p>
            <p className="flex lg:text-xl md:text-lg sm:text-base xs:text-sm xxs:text-xs  font-semibold">
              Password:{" "}
              <input
                className="bg-[#171717] lg:w-48 md:w-36 sm:w-32 xs:w-28 xxs:w-28 mx-2 px-2 rounded-md"
                type={type}
                value={userData.password}
              />{" "}
              <FaEye className="cursor-pointer m-2" onClick={toggleType} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userinfo;
