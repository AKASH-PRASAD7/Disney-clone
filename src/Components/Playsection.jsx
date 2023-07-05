import React from "react";
import "../App.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Castcrew from "./Castcrew";
const Playsection = ({ data }) => {
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
        <div className="text-white">
          <div
            style={{ backgroundImage: `url('${url}${data.backdrop_path}')` }}
            className="movieposter  bg-cover bg-center h-screen"
          >
            <div className="backgorund  h-full image flex flex-row ">
              <div
                style={{ width: "32%" }}
                className=" w-1/3  h-full flex items-center justify-center"
              >
                <div className="card cardplay rounded-lg flex items-center justify-center">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={data && `${url}${data.poster_path}`}
                    alt="avatar"
                  />
                </div>
              </div>
              <div
                style={{ width: "68%" }}
                className="moviedetails  flex flex-col items-center justify-center text-4xl font-bold "
              >
                <div className="w-full">
                  <h1>
                    {data &&
                    data.original_title &&
                    extractYear(data.release_date)
                      ? `${data.original_title} (${extractYear(
                          data.release_date
                        )})`
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
                    {data &&
                    convertMinutes(data.runtime).hours &&
                    convertMinutes(data.runtime).minutes
                      ? `${convertMinutes(data.runtime).hours} ${
                          convertMinutes(data.runtime).minutes
                        }`
                      : `Loading..`}
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
          <div className="text-4xl font-semibold mt-3">
            Overview
            <p className="text-base font-normal pt-4">
              {data.overview && data.overview
                ? `${data.overview}`
                : `Loading..`}
            </p>
          </div>
          <Castcrew id={data.id} />
          <div>reviews</div>
        </div>
      )}
    </>
  );
};

export default Playsection;
