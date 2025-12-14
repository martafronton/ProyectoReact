import React, { useState } from "react";
import "../CartaPeli.css";

const CartaPeli = ({ titulo, año, imagen, sinopsis }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div className="carta-peli">
      <img src={imagen} alt={`Poster de ${titulo}`} className="carta-imagen" />
      <div className="carta-detalles">
        <h2 className="carta-titulo">{titulo}</h2>
        <p className="carta-año">📅 {año}</p>
        <button 
          className="carta-boton" 
          onClick={() => setMostrarInfo(!mostrarInfo)}
        >
          {mostrarInfo ? "Ocultar información" : "Ver más información"}
        </button>
        {mostrarInfo && (
          <p className="carta-sinopsis">{sinopsis}</p>
        )}
      </div>
    </div>
  );
};

export default CartaPeli;
