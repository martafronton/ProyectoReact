import React from "react";
import InfoPeli from "./components/infoPeli";
import CartaPeli from "./components/cartaPeli";
import DragPeli from "./components/DragPeli";

import forrest from "./assets/ForrestGump.jpg";
import goonies from "./assets/Goonies.jpg";
import vida from "./assets/LaVidaBella.jpg";
import regreso from "./assets/Regreso.jpg";
import ventana from "./assets/Ventana.jpeg";

function App() {
  return (
    <div>
      {/* Encabezado con información general */}
      <InfoPeli />

      {/* Listado de cartas de películas */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <CartaPeli 
          titulo="Forrest Gump" 
          año="1994" 
          imagen={forrest} 
          sinopsis="La vida de Forrest Gump, un hombre con un corazón enorme, que presencia y participa en momentos clave de la historia de EE.UU."
        />
        <CartaPeli 
          titulo="Los Goonies" 
          año="1985" 
          imagen={goonies} 
          sinopsis="Un grupo de niños emprende una aventura para encontrar un tesoro pirata y salvar sus hogares."
        />
        <CartaPeli 
          titulo="La vida es bella" 
          año="1997" 
          imagen={vida} 
          sinopsis="Un padre usa su imaginación para proteger a su hijo del horror de un campo de concentración."
        />
        <CartaPeli 
          titulo="Regreso al futuro" 
          año="1985" 
          imagen={regreso} 
          sinopsis="Marty McFly viaja accidentalmente al pasado en un DeLorean y debe asegurar que sus padres se enamoren."
        />
        <CartaPeli 
          titulo="La ventana indiscreta" 
          año="1954" 
          imagen={ventana} 
          sinopsis="Un fotógrafo convaleciente cree haber presenciado un asesinato desde la ventana de su apartamento."
        />
      </div>

      {/* Componente de drag and drop */}
      <DragPeli />
    </div>
  );
}

export default App;
