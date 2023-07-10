import React from "react";
import "../App.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Playsection = ({ data, isMovie }) => {
  const extractYear = (dateString) => {
    var dateParts = dateString.split("-");
    var year = parseInt(dateParts[0], 10);
    return year;
  };
  const convertMinutes = (minutes) => {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return {
      hours: `${hours}h `,
      minutes: `${remainingMinutes}m`,
    };
  };
  const url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      {data && (
        <div className="text-white ">
          <div className="movieposter static  bg-cover bg-center h-screen lg:block md:block sm:hidden xs:hidden xxs:hidden">
            <img
              className="h-full w-full mix-blend-overlay"
              src={`${url}${data.backdrop_path}`}
              alt="bgimage"
            />
            <div className="backgorund absolute top-0  w-full  h-full image flex flex-row ">
              <div
                style={{ width: "32%" }}
                className=" w-1/3  h-full flex items-center justify-center"
              >
                <div className="card cardplay rounded-lg flex items-center justify-center lg:block md:hidden sm:hidden xs:hidden xxs:hidden">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={data.poster_path && `${url}${data.poster_path}`}
                    alt="avatar"
                  />
                </div>
              </div>
              <div
                style={{ width: "68%" }}
                className="moviedetails  flex flex-col items-center justify-center text-2xl font-bold "
              >
                <div className="w-full ">
                  <h1>
                    {isMovie
                      ? data &&
                        data.original_title &&
                        extractYear(data.release_date)
                        ? `${data.original_title} (${extractYear(
                            data.release_date
                          )})`
                        : "Loading..."
                      : data && data.name && extractYear(data.first_air_date)
                      ? `${data.name} (${extractYear(data.first_air_date)})`
                      : "Loading..."}
                  </h1>
                  <div className="moviedetails">
                    <Typography component="legend"></Typography>
                    <Rating
                      name="read-only"
                      value={(data.vote_average / 10) * 5}
                      readOnly
                      size="large"
                    />
                  </div>
                  <p className=" text-xl">
                    {data.genres &&
                      data.genres.map((each) => {
                        return `${each.name} `;
                      })}
                  </p>
                  <p className=" text-xl">
                    {isMovie
                      ? data &&
                        convertMinutes(data.runtime).hours &&
                        convertMinutes(data.runtime).minutes
                        ? `${convertMinutes(data.runtime).hours} ${
                            convertMinutes(data.runtime).minutes
                          }`
                        : `Loading..`
                      : ``}
                  </p>
                </div>
                <div className="w-full mt-4">
                  <button className="rounded-full w-48 h-12 text-xl bg-lime-700 hover:bg-lime-800">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-4xl font-semibold md:text-3xl  sm:text-2xl  xs:text-2xl  xxs:text-2xl">
            Overview
            <p className="text-base font-normal pt-4">
              {data.overview && data.overview
                ? `${data.overview}`
                : `Loading..`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Playsection;
