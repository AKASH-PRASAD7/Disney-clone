import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const HoverText = (props) => {
  return (
    <Tooltip title={props.text}>
      <IconButton>{props.children}</IconButton>
    </Tooltip>
  );
};

export default HoverText;
