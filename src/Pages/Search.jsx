import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Searchsection from "../Components/Searchsection";

const Search = () => {
  return (
    <>
      <div className="text-white">
        <div className="flex">
          <Navbar />
          <div style={{ width: "90%" }}>
            <Searchsection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
