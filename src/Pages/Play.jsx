import React, { useContext, useEffect } from "react";
import Playsection from "../Components/Playsection";
import Recommended from "../Components/Recommended";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieContext from "../Context/Movies/MoviesContext";

const Play = () => {
  const data = useContext(MovieContext);
  const { fetchMovieById, movieDetail } = data;
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }}>
          <Playsection data={movieDetail && movieDetail} />
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default Play;
