import React, { useState } from "react";
import "../DragPeli.css";

const DragPeli = () => {
  const [peliculas, setPeliculas] = useState([
    "Origen",
    "Interestelar",
    "La sociedad de la nieve",
    "Tiburón",
    "El rey león"
  ]);
  const [favoritos, setFavoritos] = useState([]);

  const permitirDrop = (e) => e.preventDefault();

  const manejarDrop = (e) => {
    const titulo = e.dataTransfer.getData("text");
    if (!favoritos.includes(titulo)) {
      setFavoritos([...favoritos, titulo]);
      setPeliculas(peliculas.filter((p) => p !== titulo));
    }
  };

  const manejarDrag = (e, titulo) => {
    e.dataTransfer.setData("text", titulo);
  };

  const quitarFavorito = (titulo) => {
    setFavoritos(favoritos.filter((f) => f !== titulo));
    setPeliculas([...peliculas, titulo]);
  };

  return (
    <div className="drag-container">
      <div className="drag-list">
        <h3>🎬 Películas disponibles</h3>
        {peliculas.length === 0 ? (
          <p>No quedan películas disponibles</p>
        ) : (
          peliculas.map((peli) => (
            <div
              key={peli}
              draggable
              onDragStart={(e) => manejarDrag(e, peli)}
              className="drag-item"
            >
              {peli}
            </div>
          ))
        )}
      </div>

      <div
        className="drop-zone"
        onDrop={manejarDrop}
        onDragOver={permitirDrop}
      >
        <h3>⭐ Favoritos</h3>
        {favoritos.length === 0 ? (
          <p>Arrastra aquí tus películas favoritas</p>
        ) : (
          favoritos.map((f) => (
            <div key={f} className="drop-item">
              {f}
              <button 
                onClick={() => quitarFavorito(f)} 
                style={{ marginLeft: "0.5rem" }}
              >
                Quitar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DragPeli;

