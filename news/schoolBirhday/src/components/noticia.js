import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Lunes, 2 de Mayo de 2021"
          title="Cumplimos 46 Años"
          subtitle="Se realizan distintas actividades en la escuela para celebrar un nuevo aniversario"
        />
        <p className="textContainer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolor nobis, quos saepe id veritatis, odit in mollitia itaque nulla explicabo est nemo pariatur ut, harum quasi quibusdam perspiciatis debitis.
        </p>
        <Photo
          link="https://i.imgur.com/L5xEq7C.jpg"
          alt="Taller arte semilla y siembra"
        />
      </section>
    );
  }
}

export default Noticia;
