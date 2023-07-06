import React, { useRef, useContext } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MovieContext from "../Context/Movies/MoviesContext";

const Searchbar = ({ isMovie }) => {
  const searchInput = useContext(MovieContext);
  const { setsearchQuery } = searchInput;
  const inputRef = useRef(null);

  const addPlusBetweenWords = (str) => {
    return str.split(" ").join("+");
  };

  const findMovies = (event) => {
    event.preventDefault();
    let inputValue = inputRef.current.value.toLowerCase();
    inputValue = addPlusBetweenWords(inputValue);
    setsearchQuery(inputValue);
    inputRef.current.value = "";
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
            ref={inputRef}
            placeholder={`Search ${isMovie}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
