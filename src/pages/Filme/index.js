import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Loading from "../../components/Loading";

import "./filme.css";

export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        await api
          .get(`/movie/${id}`, {
            params: {
              api_key: "01c1e9c3bc64272ab9e34515f52aedf5",
              language: "pt-BR",
              page: 1,
            },
          })
          .then((response) => setMovie(response.data));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        navigate("/", {
          replace: true,
        });
        return;
      }
    }

    getMovie();

    return () => {
      console.log("component desmontado");
    };
  }, [id, navigate]);

  return (
    <div className="filme-info">
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} /10</strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title} trailler`}
            target="_blank"
            rel="external noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
}
