 import { NavLink, useParams  } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const SingleMovie = () => {
  const {id} = useParams();
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    let API_URL = `https://www.omdbapi.com/?i=${id}&apikey=70cffe72`
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>setMovieData(data))
      .catch((error) => console.error(error));
  }, [id]);

if (!movieData) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading... </div>; 
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movieData.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movieData.Title}</p>
          <p className="card-text">{movieData.Released}</p>
          <p className="card-text">{movieData.Genre}</p>
          <p className="card-text">{movieData.imdbRating} / 10</p>
          <p className="card-text">{movieData.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;


