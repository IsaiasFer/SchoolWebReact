import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Martes, 26 de Octubre de 2021"
          title="Concurso de diseño para ExpoQuim 2021"
          subtitle="Anunciamos a los ganadores del concurso para el primer logo de la Expoquim en la historia de nuestra técnica"
        />
        <div className="textContainer">
          <p>
            Despues de una reunión con el jurado del departamento de química se
            eligieron a los 2 diseños ganadores del concurso para la elección
            del primer logo para expoquim de nuestra tecnica.
          </p>
          <h3>Ganadores:</h3>
          <p>
            1er premio para afiches de difusión Laureana Ramon Aldana Subia -
            Zuleika Tipliski 1ro 2da CS
          </p>
          <Photo
            link="https://imgur.com/QOlNv7D.jpeg"
            alt="Concurso de logo y imagen promocional"
          />
          <p>2do premio logo para membresias Dana Quispe 1ro 2da CS</p>
          <Photo
            link="https://imgur.com/8nbjF7O.jpeg"
            alt="Concurso de logo y imagen promocional"
          />
          <p>
            Los premios a los correspondientes ganadores se harán entrega este
            viernes 29 de octubre.
          </p>
        </div>
      </section>
    );
  }
}

export default Noticia;
