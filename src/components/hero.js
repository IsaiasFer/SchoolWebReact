import React from 'react';
/* import NavBar from './navBar' */
// import '../styles/landingStyles.scss';

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
        <h2>
          BIENVENIDOS A LA ESCUELA DE
          <br />
          EDUCACION TECNICA N°3141
        </h2>
      </section>
    );
  }
}

export default Hero;
