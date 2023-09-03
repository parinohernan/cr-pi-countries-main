import React from "react";
import style from "./About.module.css";
import AccordionItem from "./AcordionItem";

function About() {
  return (
    <div className="App">
      <div class={style.contenedor}>
        <h1>PROYECTO INDIVIDUAL COUNTRIES</h1>
      </div>
      <AccordionItem />
    </div>
  );
}

export default About;
