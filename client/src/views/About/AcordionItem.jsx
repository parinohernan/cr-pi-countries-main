import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2>Este proyecto</h2>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>
            El proyecto <b> HENRY COUNTRIES</b>, es un trabajo individual del
            bootcamp FULLSTACK de{" "}
            <a href="https://www.soyhenry.com/">SOYHENRY</a>. Se trata de una
            pagina web que muestra los datos principales de los distintos paices
            del mundo. Para hacerlo utiliza su propio servidor api rest
            conectado a su propia base de datos. En primer lugar el SERVIDOR
            EXPRESS obtiene los datos de una appi json brindada por Henry, esos
            datos son fintrados y transformados, guardandolos en la base de
            datos <a href="https://www.postgresql.org/">POSTGRESSQL</a>{" "}
            adaptados al tipo y forma que necesita nuestro HENRY COUNTRIES. Este
            SERVIDOR EXPRESS recive las distintas peticiones desde el frontend y
            manipula las tablas de la BDD utilizando{" "}
            <a href="https://sequelize.org/">SEQUELIZE</a>. Las distintas
            peticiones fueron testeadas usando{" "}
            <a href="https://www.postman.com/">POSTMAN</a>. HENRY COUNTRIES es
            el nombre que le di a mi frontend. Se encuentra mayormente
            programado utilizando la libreria{" "}
            <a href="https://react.dev/">REACT JS</a>, todas las peticiones al
            backend las realiza desde{" "}
            <a href="https://redux.js.org/">REDUX JS</a>. El diseño simple y sus
            colores es en parte un homenaje a la plataforma de SOY HENRY.
          </p>
        </div>
      )}
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion2}
      >
        <h2>Tecnologias</h2>
      </div>
      {isOpen2 && (
        <div className="accordion-content">
          <p>
            Lorem <h1>mas</h1> ipsum dolor sit amet consectetur, adipisicing
            facere eum voluptas voluptates in optio. Sint dignissimos sapiente
            unde, soluta dolorem exercitationem fugit eaque.
          </p>
        </div>
      )}
      <div
        className={`accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion3}
      >
        <h2>Sobre mi</h2>
      </div>
      {isOpen3 && (
        <div className="accordion-content">
          <p>
            Lorem <h2>Hernan</h2> ipsum dolor sit amet consectetur, adipisicing
            elit. Aperiam, atque. Minus laudantium aperiam pariatur quasi,
            facere eum voluptas voluptates in optio. Sint dignissimos sapiente
            unde, soluta dolorem exercitationem fugit eaque.Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Aperiam, atque. Minus
            laudantium aperiam pariatur quasi, facere eum voluptas voluptates in
            optio. Sint dignissimos sapiente unde, soluta dolorem exercitationem
            fugit eaque. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Aperiam, atque. Minus laudantium aperiam pariatur quasi,
            facere eum voluptas voluptates in optio. Sint dignissimos sapiente
            unde, soluta dolorem exercitationem fugit eaque.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
