import React from "react";
import Navbar from "../Components/Navbar";
import Searchsection from "../Components/Searchsection";

const Search = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }}>
          <Searchsection />
        </div>
      </div>
    </div>
  );
};

export default Search;
