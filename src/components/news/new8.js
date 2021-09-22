import React from 'react';
import NoticiaHeader from '../noticia';

function new8(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="CRONOGRAMA DE MESAS DE EXÁMENES JULIO 2021"
        subtitle="A la comunidad educativa"
      />
      <div className="linksContainer">
        <a
          href="https://drive.google.com/file/d/1QjIs67V61sH6UR10qZbqMLF8Gy5cqqk1/view?usp=sharing"
          className="linkNews"
          target="_blank"
          rel="noreferrer"
        >
          Descargar Cronograma
        </a>
      </div>
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/NqrTwGo.png" alt="Concurso" />
        </figure>
      </div>
    </section>
  );
}

export default new8;
