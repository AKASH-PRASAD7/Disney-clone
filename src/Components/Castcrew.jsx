import React, { useContext, useEffect } from "react";
import MovieContext from "../Context/Movies/MoviesContext";

const Castcrew = ({ id }) => {
  const data = useContext(MovieContext);
  const { movieCast, fetchMoviecast } = data;
  useEffect(() => {
    fetchMoviecast(id);
    // eslint-disable-next-line
  }, []);
  console.log(movieCast);
  return <div>Castcrew</div>;
};

export default Castcrew;
