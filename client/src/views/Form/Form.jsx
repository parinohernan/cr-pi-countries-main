import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Form.module.css"; // Importa el archivo de estilos CSS
import DificultadInput from "../../components/form/DificultadInput/DificultadInput";
import CountrySelect from "../../components/form/CountriesSelect/CountriesSelect";
import { postActivity } from "../../redux/action";

const Form = () => {
  const dispatch = useDispatch();

  const [datosForm, setDatosForm] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("oform 12}", datosForm);

    dispatch(postActivity(datosForm));
    alert("Se ha creado la actividad");
    setDatosForm({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      paises: [],
    });
  };

  const [errors, setErrors] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paises: [],
  });

  const validate = (datos) => {
    //valida la dificultad de 1 a 5
    if (datos.dificultad > 5 || datos.dificultad < 1) {
      setErrors({ ...errors, dificultad: "fuera de rango" });
    } else {
      setErrors({ ...errors, dificultad: "" });
    }

    //console.log("datos:", datosForm, "errors:", errors);
  };

  const handleDificultadSelect = (level) => {
    validate({ ...datosForm, dificultad: level }); //al usar el selector personalisado pareciera que no es necesaria la validacion pero puede evitar alguna mala intencion
    setDatosForm({ ...datosForm, dificultad: level });
  };

  const handleCountrySelect = (countries) => {
    if (countries.length !== 0) {
      setErrors({ ...errors, paises: "" });
      setDatosForm({ ...datosForm, paises: countries });
    } else {
      setErrors({ ...errors, paises: "No selecciono ningun pais" });
    }
  };

  const changeNombreHandler = (event) => {
    const inputValue = event.target.value;
    const permitidoInput = inputValue.replace(/[^A-Za-z0-9,". ]/g, ""); // Expresión regular para filtrar los caracteres permitidos
    setDatosForm({ ...datosForm, nombre: permitidoInput });
  };

  const changeHandler = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    validate({ ...datosForm, [prop]: value });
    setDatosForm({ ...datosForm, [prop]: value });
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className={style.divForm}>
        <h2 className={style.subTitle}>Nueva actividad:</h2>
        <div className={style.divActividadConteiner}>
          <div className={style.divImput}>
            <div>
              <label>Nombre</label>
              <div>
                <input
                  onChange={changeNombreHandler}
                  value={datosForm.nombre}
                  type="text"
                  name="nombre"
                />
              </div>
            </div>
            <div>
              <DificultadInput onLevelSelect={handleDificultadSelect} />
            </div>
            <div>
              <label>Duracion :</label>
              <div>
                <input
                  onChange={changeHandler}
                  value={datosForm.duracion}
                  type="text"
                  name="duracion"
                />
              </div>
            </div>
            <div>
              <label>Temporada: </label>
              <div>
                <select
                  onChange={changeHandler}
                  value={datosForm.temporada}
                  name="temporada"
                >
                  <option value=""></option>
                  <option value="Verano">Verano</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Primavera">Primavera</option>
                </select>
              </div>
            </div>
          </div>

          <div className={style.divPaises}>
            <CountrySelect onSelectCountry={handleCountrySelect} />
          </div>
        </div>
        <div className={style.divBotones}>
          <button type="button">Limpiar datos</button>

          <button type="submit">Enviar</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
