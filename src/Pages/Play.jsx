import React, { useContext, useEffect } from "react";
import Playsection from "../Components/Playsection";
import Recommended from "../Components/Recommended";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieContext from "../Context/Movies/MoviesContext";
import Castcrew from "../Components/Castcrew";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

const Play = () => {
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
      <div className="flex">
        <Navbar />
        <div style={{ width: "90%" }}>
          {isMovie ? (
            <>
              <Playsection
                isMovie={isMovie}
                data={movieDetail && movieDetail}
              />
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
      </div>
      <Footer />
    </>
  );
};

export default Play;
