import Reviewcard from "./Reviewcard";

const Reviews = ({ movie }) => {
  return (
    <div className="text-white">
      <h1 className="text-4xl mt-4  mb-4 ml-6 font-semibold">Reviews</h1>
      <div className="flex gap-4">
        {movie.results &&
          movie.results.map((each, index) => {
            return index < 2 && <Reviewcard key={index} review={each} />;
          })}
      </div>
    </div>
  );
};

export default Reviews;
