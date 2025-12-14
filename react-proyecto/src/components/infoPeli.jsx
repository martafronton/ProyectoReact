import React from "react";
import poster from "../assets/portada.jpg"; 
import "../InfoPeli.css"

const InfoPeli = () => {
  return (
    <div className="info-container">
      <h1 className="info-title">🎥 Mi Lista de Películas</h1>
      <p className="info-description">
        Bienvenido a la aplicación de películas. Aquí podrás ver información,
        descubrir el reparto y añadir tus favoritas.
      </p>
      <img
        src={poster}
        alt="Poster genérico"
        className="info-poster"
      />
    </div>
  );
};

export default InfoPeli;
