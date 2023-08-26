import { Link } from "react-router-dom";

//import logo from "../../img/logo.png";

import style from "./NavBar.module.css";

const Navbar = () => {
  // const navigate = useNavigate();
  //const listRef = useRef(null);

  return (
    <nav className={style.navbar}>
      <div className={style.divNavBar}>
        <Link className={style.btn} to="/home">
          Home
        </Link>

        <Link className={style.btn} to="/create">
          Crear Actividad
        </Link>

        <Link className={style.btn} to="/about">
          About
        </Link>

        {/* <div className={style.containerMenu}>
          <a onClick={handleOnClick} href="#">
            <i className={`fa-solid fa-bars ${style.btnMenu}`}></i>
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
