import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/aaa.jpg";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body"data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={miLogo} alt="El Logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="pelcrea">
                  Peliculas
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/acer">
                  Acerca De
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
