import React, { useContext, useEffect } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Reviewcard from "./Reviewcard";

const Reviews = ({ id }) => {
  const data = useContext(MovieContext);
  const { fetchReviews, review } = data;
  useEffect(() => {
    fetchReviews(id);
    // eslint-disable-next-line
  }, [id]);
  return (
    <div>
      <h1 className="text-4xl mt-4  mb-4 ml-6 font-semibold">Reviews</h1>
      <div className="flex gap-4">
        {review.results &&
          review.results.map((each, index) => {
            return index < 2 && <Reviewcard key={index} review={each} />;
          })}
      </div>
    </div>
  );
};

export default Reviews;
