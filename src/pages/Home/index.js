import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css'
import Loading from "../../components/Loading";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const response = await api.get("/movie/now_playing", {
          params: {
            api_key: "01c1e9c3bc64272ab9e34515f52aedf5",
            language: "pt-BR",
            page: 1,
          },
        });
        setLoading(false);
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="list-movies">
        {movies &&
          movies.map((movie) => (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </article>
          ))}
      </div>
      {loading && <Loading/>}
    </div>
  );
}
