import React, { useState } from "react";
import style from "./BarraOrden.module.css";
import { useDispatch } from "react-redux";

import { orderByPopulation, orderByArea } from "../../redux/action";

const BarraOrden = () => {
  const [ordenTamaño, setOrdenTamaño] = useState("Aleatorio");

  const [ordenPoblacion, setOrdenPoblacion] = useState("Aleatorio");

  const dispatch = useDispatch();

  const handlePoblacionOnClick = (event) => {
    setOrdenTamaño("aleatorio");
    if (ordenPoblacion === "Descendente") {
      setOrdenPoblacion("Ascendente");
      dispatch(orderByPopulation("Ascendente"));
    } else {
      setOrdenPoblacion("Descendente");
      dispatch(orderByPopulation("Descendente"));
    }
    // console.log("popul", ordenPoblacion);
  };

  const handleTamañoOnClick = (event) => {
    setOrdenPoblacion("aleatorio");
    if (ordenTamaño === "Descendente") {
      setOrdenTamaño("Ascendente");
      dispatch(orderByArea("Ascendente"));
    } else {
      setOrdenTamaño("Descendente");
      dispatch(orderByArea("Descendente"));
    }
    // console.log("tamañ", ordenTamaño); //tiene una demora el estado no alcanza a reflejarse
  };

  return (
    <div className={style.divOrdenContainer}>
      <div>
        <h2>orden</h2>
      </div>

      <div className={style.divOrdenContinente}>
        <div>
          <label>Poblacion orden por {ordenPoblacion}:</label>
        </div>
        <button onClick={handlePoblacionOnClick}>↹</button>
      </div>

      <div className={style.divOrdenActividad}>
        <div>
          <label>Tamaño orden por {ordenPoblacion}:</label>
        </div>
        <button onClick={handleTamañoOnClick}>↹</button>
      </div>
    </div>
  );
};

export default BarraOrden;
