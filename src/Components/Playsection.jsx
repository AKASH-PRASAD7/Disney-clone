import React from "react";
import "../App.css";

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
            className="movieposter bg-cover bg-center h-screen"
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
                className="moviedetails flex flex-col items-center justify-center text-4xl font-bold "
              >
                <div>
                  <h1>
                    {data &&
                      `${data.original_title} (${extractYear(
                        data.release_date
                      )})`}
                  </h1>
                  <p>{data && data.vote_average}</p>
                  <p>
                    {data &&
                      data.genres.map((each) => {
                        return `${each.name} `;
                      })}
                  </p>
                  <p>
                    {data &&
                      `${convertMinutes(data.runtime).hours}${
                        convertMinutes(data.runtime).minutes
                      }`}
                  </p>
                </div>
                <div>
                  <button className="rounded-full  text-2xl bg-cyan-400">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            about
            <p>{data.overview}</p>
          </div>
          <div>cast & crew</div>
          <div>reviews</div>
        </div>
      )}
    </>
  );
};

export default Playsection;
