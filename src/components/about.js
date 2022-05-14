import React from "react";

class About extends React.Component {
  render() {
    return (
        <section className="about">
        <figure className="aboutImageContainer">
          <img src="https://i.imgur.com/xKfKz3Eh.jpg" alt="" />
        </figure>
        <div className="abouTextContainer">
          <h4>¿QUIENES SOMOS?</h4>
          <p>
            Somos una escuela de Educación Técnica creada el 6 de abril de 1976, Nuestra orientación es la química, y somos grandes prescursores de jovenes en la comunidad
          </p>
        </div>
      </section>
    );
  }
}

export default About;
