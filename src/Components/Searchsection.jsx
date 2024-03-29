import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Carditem from "./Carditem";
import Searchbar from "./Searchbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { blueGrey } from "@mui/material/colors";
import Loader from "./Loader";

const Searchsection = () => {
  const [alignment, setAlignment] = useState("Movies");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const data = useContext(MovieContext);
  const {
    upcoming,
    fetchUpcoming,
    searchQuery,
    searchTv,
    searchMovies,
    movieSearch,
    tvSearch,
    loading,
  } = data;

  const searchInput = searchQuery;
  useEffect(() => {
    if (alignment === "Movies") {
      searchInput && searchMovies(searchInput);
    } else if (alignment === "Tv Series") {
      searchInput && searchTv(searchInput);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div>
      <Searchbar isMovie={alignment} />
      <div className="flex justify-center m-4 ">
        <ToggleButtonGroup
          color="success"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ bgcolor: blueGrey[900] }}
        >
          <ToggleButton value="Movies">Movies</ToggleButton>
          <ToggleButton value="Tv Series">Tv Series</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <p className="text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl">
        Search {alignment}
      </p>
      <div className="flex flex-wrap gap-4">
        {loading && <Loader />}
        {alignment === "Movies"
          ? !searchInput
            ? upcoming &&
              upcoming.map((element) => {
                return (
                  <Carditem
                    key={element.id}
                    data={element}
                    image={
                      element.poster_path
                        ? element.poster_path
                        : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                    }
                  />
                );
              })
            : movieSearch &&
              movieSearch.map((element) => {
                return (
                  <Carditem
                    key={element.id}
                    data={element}
                    isMovie={true}
                    image={
                      element.poster_path
                        ? element.poster_path
                        : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                    }
                  />
                );
              })
          : !searchInput
          ? upcoming &&
            upcoming.map((element) => {
              return (
                <Carditem
                  key={element.id}
                  data={element}
                  isMovie={true}
                  image={
                    element.poster_path
                      ? element.poster_path
                      : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                  }
                />
              );
            })
          : tvSearch &&
            tvSearch.map((element) => {
              return (
                <Carditem
                  key={element.id}
                  data={element}
                  isMovie={false}
                  image={
                    element.poster_path
                      ? element.poster_path
                      : `https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`
                  }
                />
              );
            })}
      </div>
    </div>
  );
};

export default Searchsection;
