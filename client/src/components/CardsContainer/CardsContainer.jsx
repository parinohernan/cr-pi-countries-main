//import { useState } from "react";
import Card from "../Card/Card";
import styles from "./CardsContainers.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const paises = useSelector((state) => state.paises);

  return (
    <div key="oasjp" className={styles.container}>
      {paises.map((pais) => {
        return (
          <div>
            <Card
              key={pais.id}
              id={pais.id}
              name={pais.name}
              continents={pais.continents}
              flag={pais.flag}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
