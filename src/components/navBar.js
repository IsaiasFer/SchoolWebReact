import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="list">
        <ul className="list-ul">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/institucional">Institucional</Link>
          </li>
          <li>
            <Link to="/academico">Academico</Link>
          </li>
          <li>
            <Link to="/fotos">Fotos</Link>
          </li>
          <li>
            <Link to="/ubicacion">Ubicación</Link>
          </li>
          <li>
            <a href="mailto:eetn3141@yahoo.com?subject=Me%20gustar%C3%ADa%20contactar%20con%20la%20escuela">
              Contacto
            </a>
          </li>
        </ul>
        <button className="plataformasButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="27"
            viewBox="0 0 31.5 27"
          >
            <path
              id="Icon_ionic-md-school"
              data-name="Icon ionic-md-school"
              d="M7.98,19.772v6L18,31.5l10.02-5.73v-6L18,25.5ZM18,4.5l-15.75,9L18,22.5l12.888-7.362V25.5H33.75v-12Z"
              transform="translate(-2.25 -4.5)"
              fill="#fff"
            />
          </svg>
          <span>PLATAFORMAS</span>
        </button>
      </nav>
    );
  }
}

export default NavBar;
