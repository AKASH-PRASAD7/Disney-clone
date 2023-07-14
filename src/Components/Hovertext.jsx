import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MovieContext from "../Context/Movies/MoviesContext";

const HoverText = (props) => {
  const data = useContext(MovieContext);
  const { isuser } = data;
  const [text, setText] = useState(props.text);
  const handleClick = () => {
    isuser ? setText("Added Successfully") : setText("Login to add Favourites");
  };
  return (
    <Tooltip onClick={handleClick} title={text}>
      <IconButton>{props.children}</IconButton>
    </Tooltip>
  );
};

export default HoverText;
