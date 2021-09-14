import React from 'react';
import NoticiaHeader from '../noticia';

function new5(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="COMUNICA A LAS FAMILIAS SOBRE LA CONTINUIDAD PEDAGÓGICA"
        subtitle="A la comunidad educativa"
      />
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/D1OAqxU.png" alt="Concurso" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/V9CQk3C.png" alt="Concurso" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/QRQJK6W.png" alt="Concurso" />
        </figure>
      </div>
    </section>
  );
}

export default new5;
