import React from "react";

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
        <i className="icon-menu burguer-button"></i>
      </header>
    );
  }
}

export default Header;
