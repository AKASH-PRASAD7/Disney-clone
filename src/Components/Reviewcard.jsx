import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, blueGrey } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";

const Reviewcard = ({ review }) => {
  const limitString = (str) => {
    if (str.length <= 180) {
      return str;
    } else {
      return str.slice(0, 180) + "...";
    }
  };
  const formatDate = (dateString) => {
    var date = new Date(dateString);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Pad single digits with leading zeros
    var formattedDay = day < 10 ? "0" + day : day;
    var formattedMonth = month < 10 ? "0" + month : month;

    return formattedDay + "/" + formattedMonth + "/" + year;
  };
  return (
    <Card
      className="rounded-lg lg:w-96 lg:h-60 md:w-72 md:h-60 sm:w-60 sm:h-52 xs:w-48 xs:h-40 ml-6 "
      sx={{ bgcolor: blueGrey[900], color: blueGrey[50] }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {review.author && review.author[0]}
          </Avatar>
        }
        title={review.author && review.author}
        subheader={review.created_at && formatDate(review.created_at)}
      />
      <Typography component="legend"></Typography>
      {review.author_details.rating && (
        <Rating
          className="ml-5"
          name="read-only"
          value={review.author_details.rating}
          readOnly
          size="small"
        />
      )}
      <CardContent>
        <Typography variant="body2">
          {review.content && limitString(review.content)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reviewcard;
