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
      className="rounded-lg"
      sx={{ maxWidth: 345, bgcolor: blueGrey[900], color: blueGrey[50] }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        title={review.author && review.author}
        subheader={review.created_at && formatDate(review.created_at)}
      />
      <Typography component="legend"></Typography>
      <Rating
        className="ml-5"
        name="read-only"
        value={review.author_details.rating && review.author_details.rating}
        readOnly
        size="small"
      />
      <CardContent>
        <Typography variant="body2">
          {review.content && limitString(review.content)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reviewcard;
