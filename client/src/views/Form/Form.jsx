import React from "react";
import "./Form.css"; // Importa el archivo de estilos CSS

const Form = () => {
  return (
    <div>
      <form className="form">
        <h1>Crear una actividad</h1>
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Dificultad</label>
          <input type="text" />
        </div>
        <div>
          <label>Duracion</label>
          <input type="text" />
        </div>
        <div>
          <label>Temporada</label>
          <input type="text" />
        </div>
        {/* <div>
          <label>Temporada</label>

          <select onChange={handleOrder}>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </div> */}

        <div>
          <label>Paises</label>
          <input type="text" />
        </div>
        <br></br>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
