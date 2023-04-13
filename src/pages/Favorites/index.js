import React, { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import "./favorites.css";

export default function Favorites() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeFlix");
    setFavorite(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    const filtroFilmes = favorite.filter(item => item.id !== id);

    setFavorite(filtroFilmes);
    localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes))
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
        {favorite.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}
      <ul>
        {favorite.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
