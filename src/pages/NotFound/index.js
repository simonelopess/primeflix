import React from "react";
import { Link } from "react-router-dom";

import "./not-found.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/">Veja todos os filmes!</Link>
    </div>
  );
}
