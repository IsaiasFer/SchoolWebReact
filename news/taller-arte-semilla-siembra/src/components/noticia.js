import React from "react";
import NoticiaHeader from "./noticiaHeader";
import Photo from "./photo";

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader date="Lunes, 27 de Septiembre de 2021" title="Taller arte, semilla y siembra" subtitle="Reservá tu lugar!" />
        <p className="content">
        Hola !!! Taller de Arte , Semilla y Siembra para la niñez , comienza el 4 de octubre . Reserva tu lugar con pre-  inscripción  WhatsApp al 3875941636. El lugar de encuentro y juegos artísticos es en Necochea 395 , Te esperamos !!!
        </p>
        <Photo link="https://i.imgur.com/L5xEq7C.jpg" alt="Taller arte semilla y siembra" />
      </section>
    );
  }
}

export default Noticia;
