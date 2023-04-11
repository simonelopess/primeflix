import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Filmes from "../pages/Filme";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Filmes />} path="/filme/:id" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
