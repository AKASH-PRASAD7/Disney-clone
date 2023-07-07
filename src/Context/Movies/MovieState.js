import { useState } from "react";
import MovieContext from "./MoviesContext";
const MovieState = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [topSeries, settopSeries] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieCast, setMovieCast] = useState({});
  const [review, setReview] = useState({});
  const [similar, setSimilar] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [movieSearch, setmovieSearch] = useState([]);
  const [tvSearch, setTvSearch] = useState([]);
  const [isMovie, setIsMovie] = useState(true);

  //tv
  const [TvDetail, setTvDetail] = useState({});
  const [tvCast, setTvCast] = useState({});
  const [tvReview, setTvReview] = useState({});
  const [tvSimilar, setTvSimilar] = useState([]);
  const [tvRecommended, setTvRecommended] = useState([]);
  //search input
  const [searchQuery, setsearchQuery] = useState();

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
  const fetchMoviecast = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setMovieCast({ ...data2 });
  };
  const fetchReviews = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setReview({ ...data2 });
  };
  const fetchSimilar = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setSimilar([...data2.results]);
  };
  const fetchRecommended = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setRecommended([...data2.results]);
  };

  const searchMovies = async (text) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setmovieSearch([...data2.results]);
  };

  const searchTv = async (text) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${text}&api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvSearch([...data2.results]);
  };

  //Tv
  const fetchTvById = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvDetail({ ...data2 });
  };

  const fetchTvcast = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvCast({ ...data2 });
  };
  const fetchTvReviews = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvReview({ ...data2 });
  };
  const fetchTvSimilar = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvSimilar([...data2.results]);
  };
  const fetchTvRecommended = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvRecommended([...data2.results]);
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
        movieCast,
        fetchMoviecast,
        fetchReviews,
        review,
        fetchRecommended,
        recommended,
        similar,
        fetchSimilar,
        searchQuery,
        setsearchQuery,
        searchTv,
        searchMovies,
        movieSearch,
        tvSearch,
        isMovie,
        setIsMovie,
        TvDetail,
        fetchTvById,
        fetchTvReviews,
        fetchTvRecommended,
        fetchTvSimilar,
        fetchTvcast,
        tvCast,
        tvReview,
        tvRecommended,
        tvSimilar,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
