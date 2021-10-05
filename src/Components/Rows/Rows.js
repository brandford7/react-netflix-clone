import React, { useState, useEffect } from "react";
import axios from "../../axios";
import './Rows.css'

export const base_url = "https://image.tmdb.org/t/p/original/" ;

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
 console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

 

  return (
   
    <div className="row">
      <h2>{title}</h2>

      <div className= "movie__rows">
        {movies?.map((movie) => {
         
          return (
            
              <img key={movie.id} className ={ `movie__row ${isLargeRow && "movie__rowlarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name} />
            
          );
        })}
      </div>
    </div>
  );
};

export default Row;
