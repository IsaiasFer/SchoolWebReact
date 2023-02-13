import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Jueves, 2 de Febrero de 2023"
          title="Cronograma Año 2023"
          subtitle="Las distintas actividades de la escuela en el inicio de año"
        />
        <p className="textContainer">
          Este año 2023, en la E.E.T.N° 3141, las actividades comienzan desde el 7 de Febrero con los examenes previos. Enteráte las fechas y los requisitos aquí
        </p>
        <Photo
          link="https://i.imgur.com/PWSU7L5.jpg"
          alt="Cronograma 2023"
        />
      </section>
    );
  }
}

export default Noticia;
