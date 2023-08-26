import React, { useState } from "react";
import style from "./BarraFiltros.module.css";
import { useDispatch } from "react-redux";
import {
  filterPaisByName,
  filterContinente,
  filterActividad,
} from "../../redux/action";

const BarraFiltros = () => {
  const continentes = [
    "Todos",
    "South America",
    "Europe",
    "Asia",
    "Oceania",
    "Antarctica",
    "Africa",
    "North America",
  ];

  const actividades = [
    "Todas",
    "Pesca",
    "Buseo",
    "Mundial Futbol",
    "Chess word cup",
  ];

  const [selectedContinente, setSelectedContinente] = useState("Todos");

  const [selectedActividad, setSelectedActividad] = useState("Todas");

  const dispatch = useDispatch();

  const handleFilterByName = (e) => {
    dispatch(filterPaisByName(e.target.value));
  };

  const handleContinenteChange = (event) => {
    const value = event.target.value;
    setSelectedContinente(value);
    dispatch(filterContinente(value));
  };

  const handleActividadChange = (event) => {
    const value = event.target.value;
    setSelectedContinente(value);
    dispatch(filterActividad(value));
  };

  return (
    <div className={style.divFitrosContainer}>
      <div className="divFiltroPais">
        <div>
          <label>Pais:</label>
        </div>
        <input type="text" onChange={handleFilterByName} />
      </div>

      <div className="divFiltroContinente">
        <div>
          <label>Continente:</label>
        </div>
        <select value={selectedContinente} onChange={handleContinenteChange}>
          {continentes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="divFiltroActividad">
        <div>
          <label>Actividad:</label>
        </div>
        <select value={selectedActividad} onChange={handleActividadChange}>
          {actividades.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div> //divFiltrosContainer
  );
};

export default BarraFiltros;

{
  /* <div>
    <label>Actividad:</label>
    <input type="text" onChange={handleFilterByName} />
  </div> */
}
