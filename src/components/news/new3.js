import React from 'react';
import NoticiaHeader from '../noticia';

function new3(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="CONVOCATORIA A CONCURSO"
        subtitle="A la comunidad educativa"
      />
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/vAct6K2.png" alt="Concurso" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/9181TDq.png" alt="Concurso" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/gpYmcCE.png" alt="Concurso" />
        </figure>
      </div>
    </section>
  );
}

export default new3;
