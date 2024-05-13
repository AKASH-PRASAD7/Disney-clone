import React, { useContext, useEffect } from "react";
import MovieContext from "../Context/Movies/MoviesContext";
import Castcrew from "../Components/Castcrew";
import Reviews from "../Components/Reviews";
import Recommended from "../Components/Recommended";
import Playsection from "../Components/Playsection";
import { useParams, useNavigate } from "react-router-dom";

const Playmainsection = () => {
  const data = useContext(MovieContext);

  const {
    fetchMovieById,
    movieDetail,
    fetchRecommended,
    recommended,
    similar,
    fetchSimilar,
    isMovie,
    TvDetail,
    fetchTvById,
    fetchTvRecommended,
    fetchTvSimilar,
    tvRecommended,
    tvSimilar,
    fetchMoviecast,
    fetchTvcast,
    movieCast,
    tvCast,
    fetchReviews,
    review,
    fetchTvReviews,
    tvReview,
  } = data;
  const { id } = useParams();
  const navigate = useNavigate();
  const restrictedMoviedId = ["1279624", "1279633", "1279636"];
  useEffect(() => {
    if (restrictedMoviedId.includes(id)) {
      navigate("/");
    }
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMovie) {
      fetchMovieById(id);
      fetchRecommended(id);
      fetchSimilar(id);
      fetchMoviecast(id);
      fetchReviews(id);
    } else {
      fetchTvById(id);
      fetchTvRecommended(id);
      fetchTvSimilar(id);
      fetchTvcast(id);
      fetchTvReviews(id);
    }

    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      <div>
        {isMovie ? (
          <>
            <Playsection isMovie={isMovie} data={movieDetail && movieDetail} />
            {movieCast && <Castcrew movie={movieCast} />}
            {review && <Reviews movie={review} />}
            {similar && recommended && (
              <Recommended
                isMovie={true}
                similar={similar}
                recommended={recommended}
              />
            )}
          </>
        ) : (
          <>
            <Playsection isMovie={isMovie} data={TvDetail && TvDetail} />
            {tvCast && <Castcrew movie={tvCast} />}
            {review && <Reviews movie={tvReview} />}
            {similar && recommended && (
              <Recommended
                isMovie={false}
                similar={tvSimilar}
                recommended={tvRecommended}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Playmainsection;
