import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <figure className="logotypeContainer">
          <img
            src="https://i.imgur.com/7ymG1mA.png"
            alt="Logo del establecimiento"
          />
        </figure>
        <h1>ESCUELA DE EDUCACIÓN TÉCNICA N°3141</h1>
        <button className="burguer-button">
          <i className="fas fa-bars"></i>
        </button>
      </header>
    );
  }
}

export default Header;
