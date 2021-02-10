import React, { useState, useEffect } from "react";
import axios from "./axios";
import ReactHover, { Hover, Trigger } from "react-hover";
import "./Row.css";

const optionsCursor = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
};

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <ReactHover options={optionsCursor}>
                <Trigger type="trigger">
                  <img
                    id={movie.id}
                    key={movie.id}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                </Trigger>
                <Hover type="hover">
                  <div key={movie.id} className="popUpDiv">
                    <div className="popUpDivInner">
                      <img
                        className="popUpDivImg"
                        src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt="popup"
                      />
                      <h4>
                        {movie?.title || movie?.orignal_name || movie?.name}
                      </h4>
                    </div>
                  </div>
                </Hover>
              </ReactHover>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
