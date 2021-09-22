import React from 'react';
import NoticiaHeader from '../noticia';

function Bioseguridad(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader title="Normas de bioseguridad" subtitle="Comunicado" />
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/DiDOYqB.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default Bioseguridad;
