import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { PeliculaAdmin } from "../../componentes/peliculas/PeliculaAdmin";
import { PeliculaCrear } from "../../componentes/peliculas/PeliculaCrear";
import { PeliculaListar } from "../../componentes/peliculas/PeliculaListar"

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/peladmin" element={<PeliculaAdmin />} />
      <Route path="/pelcrea" element={<PeliculaCrear />} />
      <Route path="/pellista" element={<PeliculaListar />} />

      <Route path="acer" element={<NoEncontrado />} />
    </Routes>
  );
};