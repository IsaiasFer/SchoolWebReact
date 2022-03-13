import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Sabado, 12 de Marzo de 2022"
          title="Inscripciones para completar carrera 2022"
          subtitle="Información para la comunidad educativa"
        />
        <div className="textContainer">
          <p>
            Apartir del 14 hasta 23 de marzo se realizarán las inscripciones
            para quienes quiera terminar la carrera en la institución educativa
          </p>
          <li>Solo deben pedir la solicitud de inscripción por biblioteca</li>
          <h3>Información:</h3>
        </div>
        <Photo
          link="https://imgur.com/LpLlbIs.png"
          alt="Inscripciones carrera 2022"
        />
      </section>
    );
  }
}

export default Noticia;
