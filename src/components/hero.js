import React from "react";

/* import NavBar from './navBar' */

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="carrousel">
          <figure className="heroImageContainer">
            <img src="https://i.imgur.com/4x2WmgGh.jpg" alt="" />
            <img src="https://i.imgur.com/U9GbNFdh.jpg" alt="" />
            <img src="https://i.imgur.com/dFmsWr0h.jpg" alt="" />
            <img src="https://i.imgur.com/dGPfbCsh.jpg" alt="" />
            <img src="https://i.imgur.com/4x2WmgGh.jpg" alt="" />
          </figure>
        </div>
        {/* <NavBar/> */}
        <h1>
          BIENVENIDOS A LA ESCUELA DE
          <br />
          EDUCACION TECNICA N°3141
        </h1>
      </section>
    );
  }
}

export default Hero;