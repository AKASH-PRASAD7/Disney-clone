import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { blueGrey } from "@mui/material/colors";
import MovieContext from "../Context/Movies/MoviesContext";

const AlltvMovie = () => {
  const data1 = useContext(MovieContext);
  const {
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
  } = data1;

  const [alignment, setAlignment] = useState("Movies");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [genre, setGenre] = useState("Science Fiction");
  const handleGenre = (event, newAlignment) => {
    setGenre(newAlignment);
  };

  //   useEffect(() => {
  //     if (genre === "Science Fiction") {
  //         fetchScifi();
  //     } else if (genre === "Fantasy") {
  //         fetchFantasy();
  //     } else if (genre === "Action") {
  //         fetchAction();
  //     } else if (genre === "Adventure") {
  //         fetchAnimation();
  //     } else if (genre === "Animation") {
  //         fetchAdventure();
  //     }
  //   }, [genre]);
  return (
    <div>
      <div className="flex justify-center m-6">
        <ToggleButtonGroup
          color="info"
          value={genre}
          exclusive
          onChange={handleGenre}
          aria-label="Platform"
          sx={{ bgcolor: blueGrey[900] }}
        >
          <ToggleButton value="Science Fiction">Science Fiction</ToggleButton>
          <ToggleButton value="Fantasy">Fantasy</ToggleButton>
          <ToggleButton value="Action">Action</ToggleButton>
          <ToggleButton value="Adventure">Adventure</ToggleButton>
          <ToggleButton value="Animation">Animation</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="flex justify-center m-4">
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
      <div>
        ans
        {/* isMovie={true} */}
      </div>
    </div>
  );
};

export default AlltvMovie;
