import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./CountriesSelect.module.css";
import ListaSelected from "../ListaSelected/ListaSelected";

const CountrySelect = ({ onSelectCountry }) => {
  const allCountries = useSelector((state) => state.allCountries);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountrySelect = (event) => {
    const selectedOptions = event.target.value;
    const selectedCountryIds = [...selectedCountries, selectedOptions];
    if (!selectedCountries.includes(selectedOptions)) {
      setSelectedCountries(selectedCountryIds);
    }
    console.log("countries", selectedCountryIds);
    onSelectCountry(selectedCountryIds); //estoy enviando lo mismo al estado local y al onselect- porque si al onselect le envio el estado me queda el ultimo pais sin enviar (por demoras)
  };

  return (
    <div>
      <p>Paises:</p>
      <div className={style.PaisesSelect}>
        <select className={style.select} multiple>
          {allCountries.map((pais) => (
            <option key={pais.id} value={pais.id} onClick={handleCountrySelect}>
              {pais.name}
            </option>
          ))}
        </select>
      </div>

      <ListaSelected
        selectedCountries={selectedCountries}
        allCountries={allCountries}
      />
    </div>
  );
};

export default CountrySelect;
