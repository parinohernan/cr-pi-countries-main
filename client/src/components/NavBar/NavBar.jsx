import { Link } from "react-router-dom";
import { filterPaisByName } from "../../redux/action";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const handleFilterByName = (e) => {
    dispatch(filterPaisByName(e.target.value));
  };

  return (
    <nav>
      <div className={style.divNavBar}>
        {location.pathname !== "/home" && (
          <Link className={style.btn} to="/home">
            <h2>Home</h2>
          </Link>
        )}
        {location.pathname === "/home" && (
          <div className={style.divBusqueda}>
            <h2>Busqueda :</h2>
            <input type="text" onChange={handleFilterByName} />
          </div>
        )}
        <Link className={style.btn} to="/create">
          <h2>Crear Actividad</h2>
        </Link>

        <Link className={style.btn} to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
