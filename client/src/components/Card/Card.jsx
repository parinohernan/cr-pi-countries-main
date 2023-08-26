import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, continents, name } = props;
  //console.log("id ", props);
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/details/${id}`}>
        <div className={style.textCard}>
          <h1>{name}</h1>
          <h2>{continents}</h2>
        </div>
        <img
          className={style.flag}
          src={props.flag}
          alt="Flag{ + props.name} "
        />
      </Link>
      {/* <p>Este debe mostrar la card, y un linck para ir al detail del pais</p> */}
    </div>
  );
};

export default Card;
