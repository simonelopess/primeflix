import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Filmes from "../pages/Filme";
import Header from "../components/Header";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Filmes />} path="/filme/:id" />
      </Routes>
    </BrowserRouter>
  );
}
