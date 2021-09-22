import React from 'react';
import NoticiaHeader from '../noticia';

function Dictamen(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="Dictamen de disposicion interna N° 1/2020 E.E.T. N° 3141"
        subtitle="Comunicado"
      />
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/S51pXiO.png" alt="article" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/4n3aFX7.png" alt="article" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/qQviTJF.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default Dictamen;
