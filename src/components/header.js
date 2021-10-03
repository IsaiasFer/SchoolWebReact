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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="27.563"
            viewBox="0 0 31.5 27.563"
          >
            <path
              id="Icon_awesome-bars"
              data-name="Icon awesome-bars"
              d="M1.125,9.281h29.25A1.125,1.125,0,0,0,31.5,8.156V5.344a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,5.344V8.156A1.125,1.125,0,0,0,1.125,9.281Zm0,11.25h29.25A1.125,1.125,0,0,0,31.5,19.406V16.594a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,16.594v2.813A1.125,1.125,0,0,0,1.125,20.531Zm0,11.25h29.25A1.125,1.125,0,0,0,31.5,30.656V27.844a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,27.844v2.813A1.125,1.125,0,0,0,1.125,31.781Z"
              transform="translate(0 -4.219)"
              fill="#fff"
            />
          </svg>
        </button>
      </header>
    );
  }
}

export default Header;
