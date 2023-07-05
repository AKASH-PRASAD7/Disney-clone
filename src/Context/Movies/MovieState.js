import { useState } from "react";
import MovieContext from "./MoviesContext";
const MovieState = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [topSeries, settopSeries] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const fetchUpcoming = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setUpcoming([...data2.results]);
  };
  const fetchtopRated = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    settopRated([...data2.results]);
  };
  const fetchtopSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    settopSeries([...data2.results]);
  };
  const fetchtrendingSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTrendingSeries([...data2.results]);
  };
  const fetchMovieById = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setMovieDetail({ ...data2 });
  };
  return (
    <MovieContext.Provider
      value={{
        upcoming,
        fetchUpcoming,
        fetchtopRated,
        topRated,
        topSeries,
        fetchtopSeries,
        fetchtrendingSeries,
        trendingSeries,
        fetchMovieById,
        movieDetail,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
