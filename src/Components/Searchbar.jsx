import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = () => {
  const [filter, setFilter] = useState("");
  const findMovies = (event) => {
    console.log("dfA");
    //   const input = event.target.parentElement.parentElement.childNodes[1].value;
    //   console.log(input);
    //   // input.value("");
    //   // setFilter("");
  };
  return (
    <div className="m-4 flex justify-center text-blue-800 ">
      <div
        id="searchDiv"
        className="w-4/5 h-20 flex justify-center items-center "
      >
        <form className="form-inline w-full flex gap-4">
          <div onClick={findMovies} className="cursor-pointer">
            <FaMagnifyingGlass className="fill-blue-800 text-2xl mt-3 ml-2 " />
          </div>
          <input
            className="searchIcon rounded-xl outline-none form-control p-4 form-control-sm w-5/6 h-12  "
            type="text"
            id="myInput"
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
            placeholder="  Search Movies..."
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
