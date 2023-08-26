import React from "react";
import "./Details.css"; // Importa el archivo de estilos CSS
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log("en el detalle de ", id);
  return (
    <div className="details">
      hola en details {id}
      {/* <h1>{name} detalles</h1>
      <img src={flag} alt="Flag{ + props.name} " /> */}
      {/* <ol className="Detalles">
        <li>
          <h3>ID: {id}</h3>
        </li>
        <li>
          <h3>Continente: {continent}</h3>
        </li>
        <li>
          <h3>Capital: {capital}</h3>
        </li>
        <li>
          <h3>Subregion: {subregion}</h3>
        </li>
        <li>
          <h3>Area km²: {area}</h3>
        </li>
        <li>
          <h3>Poblacion: {population}</h3>
        </li>
      </ol> */}
    </div>
  );
}

export default Details;
