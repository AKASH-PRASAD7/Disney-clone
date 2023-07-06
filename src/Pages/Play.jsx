import React, { useContext, useEffect } from "react";
import Playsection from "../Components/Playsection";
import Recommended from "../Components/Recommended";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieContext from "../Context/Movies/MoviesContext";

const Play = () => {
  const data = useContext(MovieContext);
  // const scrollUp=()=>{
  //   window.onbeforeunload = function () {
  //    window.scrollTo(0, 0);
  //  }

  const {
    fetchMovieById,
    movieDetail,
    fetchRecommended,
    recommended,
    similar,
    fetchSimilar,
  } = data;
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovieById(id);
    fetchRecommended(id);
    fetchSimilar(id);
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }}>
          <Playsection data={movieDetail && movieDetail} />
          <Recommended similar={similar} recommended={recommended} />
        </div>
      </div>
    </>
  );
};

export default Play;
