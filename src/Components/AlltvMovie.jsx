import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { blueGrey } from "@mui/material/colors";
import MovieContext from "../Context/Movies/MoviesContext";
import Movielist from "./Movielist";

const AlltvMovie = () => {
  const data1 = useContext(MovieContext);
  const {
    fetchAction,
    fetchScifi,
    fetchFantasy,
    fetchAnimation,
    fetchAdventure,
    fetchtvAction,
    fetchtvScifi,
    fetchtvFantasy,
    fetchtvAnimation,
    fetchtvAdventure,
    page,
    movieListData,
    total,
    setMovieListData,
    setPage,
  } = data1;

  const [movie, setmovie] = useState("Movies");

  const handleChange = (event, newmovie) => {
    setmovie(newmovie);
    setMovieListData([]);
    setPage(1);
  };

  const [genre, setGenre] = useState("Science Fiction");
  const handleGenre = (event, newmovie) => {
    setGenre(newmovie);
    setMovieListData([]);
    setPage(1);
  };

  //Movies

  useEffect(() => {
    if (movie === "Movies") {
      if (genre === "Science Fiction") {
        fetchScifi();
      } else if (genre === "Fantasy") {
        fetchFantasy();
      } else if (genre === "Action") {
        fetchAction();
      } else if (genre === "Adventure") {
        fetchAnimation();
      } else if (genre === "Animation") {
        fetchAdventure();
      }
    }
    // eslint-disable-next-line
  }, [genre, page, movie]);

  //Tv series

  useEffect(() => {
    if (movie === "Tv Series") {
      if (genre === "Science Fiction") {
        fetchtvScifi();
      } else if (genre === "Fantasy") {
        fetchtvFantasy();
      } else if (genre === "Action") {
        fetchtvAction();
      } else if (genre === "Adventure") {
        fetchtvAnimation();
      } else if (genre === "Animation") {
        fetchtvAdventure();
      }
    }
    //eslint-disable-next-line;
  }, [genre, page, movie]);
  // console.log(page);
  return (
    <>
      <div className="flex justify-center lg:w-4/5 md:w-4/5 h-auto sm:w-4/5 xs:4/5 xxs:w-20 m-auto mt-5 m-6">
        <ToggleButtonGroup
          color="info"
          value={genre}
          exclusive
          onChange={handleGenre}
          aria-label="Platform"
          sx={{ bgcolor: blueGrey[900] }}
        >
          <ToggleButton value="Science Fiction">Sc-Fi</ToggleButton>
          <ToggleButton value="Fantasy">Fantasy</ToggleButton>
          <ToggleButton value="Action">Action</ToggleButton>
          <ToggleButton value="Adventure">Adventure</ToggleButton>
          <ToggleButton value="Animation">Animation</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex justify-center m-4">
        <ToggleButtonGroup
          color="success"
          value={movie}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ bgcolor: blueGrey[900] }}
        >
          <ToggleButton value="Movies">Movies</ToggleButton>
          <ToggleButton value="Tv Series">Tv Series</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <p className="text-4xl  font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl ml-10">{`Top ${movie} In ${genre}`}</p>
      <>
        {movie === "Movies"
          ? movieListData && (
              <Movielist total={total} isMovie={true} data={movieListData} />
            )
          : movieListData && (
              <Movielist total={total} isMovie={false} data={movieListData} />
            )}
      </>
    </>
  );
};

export default AlltvMovie;
