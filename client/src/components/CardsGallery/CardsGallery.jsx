import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styles from "./CardsGallery.module.css";

function CardGallery() {
  const cards = useSelector((state) => state.countries);

  const cardsPerPage = 10; //por enunciado se piden 10
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCards = cards.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Controles de paginación */}
      <div className={styles.controles}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      <div className={styles.container}>
        {/* Mostrar las tarjetas actuales */}

        {currentCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            population={card.population.toLocaleString()}
            area={card.area.toLocaleString()}
            continents={card.continents}
            flag={card.flag}
            data={card}
          />
        ))}
      </div>
    </>
  );
}

export default CardGallery;
