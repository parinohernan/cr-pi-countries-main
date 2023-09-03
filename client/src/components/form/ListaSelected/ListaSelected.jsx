//import React, { useState, useEffect } from "react";
//import "./ListaSelected.module.css"; {style.selectedCountries}

const ListaSelected = (props) => {
  const { selectedCountries, allCountries } = props;
  return (
    <div className="divSelecciona">
      <p>Paises seleccionados:</p>
      {/*  <button>clear</button>limpia los paises seleccionados */}
      <ul>
        {selectedCountries.map((selectedId) => (
          <li key={selectedId}>
            {allCountries.find((pais) => pais.id === selectedId)?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaSelected;
