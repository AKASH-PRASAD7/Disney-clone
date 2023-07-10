import Reviewcard from "./Reviewcard";

const Reviews = ({ movie }) => {
  return (
    <div className="text-white md:block lg:block sm:hidden xs:hidden xxs:hidden">
      <h1 className="mt-4 ml-6 font-semibold mb-2 text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl">
        {movie.results && `Reviews`}
      </h1>
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
