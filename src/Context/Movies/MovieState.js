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
  const [loading, setLoading] = useState(true);

  //tv
  const [TvDetail, setTvDetail] = useState({});
  const [tvCast, setTvCast] = useState({});
  const [tvReview, setTvReview] = useState({});
  const [tvSimilar, setTvSimilar] = useState([]);
  const [tvRecommended, setTvRecommended] = useState([]);

  //movielist
  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [fantasy, setFantasy] = useState([]);
  const [scifi, setScifi] = useState([]);

  //search input
  const [searchQuery, setsearchQuery] = useState();

  const fetchUpcoming = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setUpcoming([...data2.results]);
    setLoading(false);
  };
  const fetchtopRated = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    settopRated([...data2.results]);
    setLoading(false);
  };
  const fetchtopSeries = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    settopSeries([...data2.results]);
    setLoading(false);
  };
  const fetchtrendingSeries = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTrendingSeries([...data2.results]);
    setLoading(false);
  };
  const fetchMovieById = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setMovieDetail({ ...data2 });
    setLoading(false);
  };
  const fetchMoviecast = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setMovieCast({ ...data2 });
    setLoading(false);
  };
  const fetchReviews = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setReview({ ...data2 });
    setLoading(false);
  };
  const fetchSimilar = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setSimilar([...data2.results]);
    setLoading(false);
  };
  const fetchRecommended = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setRecommended([...data2.results]);
    setLoading(false);
  };

  const searchMovies = async (text) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setmovieSearch([...data2.results]);
    setLoading(false);
  };

  const searchTv = async (text) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${text}&api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvSearch([...data2.results]);
    setLoading(false);
  };

  //Tv
  const fetchTvById = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvDetail({ ...data2 });
    setLoading(false);
  };

  const fetchTvcast = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvCast({ ...data2 });
    setLoading(false);
  };
  const fetchTvReviews = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvReview({ ...data2 });
    setLoading(false);
  };
  const fetchTvSimilar = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvSimilar([...data2.results]);
    setLoading(false);
  };
  const fetchTvRecommended = async (id) => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`
    );
    const data2 = await data.json();
    setTvRecommended([...data2.results]);
    setLoading(false);
  };

  //movie list page
  const fetchAction = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    const data2 = await data.json();
    setAction([...data2.results]);
    setLoading(false);
  };
  const fetchAdventure = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`
    );
    const data2 = await data.json();
    setAdventure([...data2.results]);
    setLoading(false);
  };
  const fetchAnimation = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`
    );
    const data2 = await data.json();
    setAnimation([...data2.results]);
    setLoading(false);
  };
  const fetchFantasy = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`
    );
    const data2 = await data.json();
    setFantasy([...data2.results]);
    setLoading(false);
  };
  const fetchScifi = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`
    );
    const data2 = await data.json();
    setScifi([...data2.results]);
    setLoading(false);
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
        loading,
        fetchAction,
        fetchScifi,
        fetchFantasy,
        fetchAnimation,
        fetchAdventure,
        action,
        adventure,
        fantasy,
        scifi,
        animation,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
