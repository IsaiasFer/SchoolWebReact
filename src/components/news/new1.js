import React from 'react';
import NoticiaHeader from '../noticia';

function new1(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="DICTAMEN T.E.L.Y F.E"
        subtitle="A la comunidad educativa"
      />
      <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src="https://imgur.com/gekZOKl.png" alt="article" />
        </figure>
        <figure className="imgContainer-2">
          <img src="https://imgur.com/9xnkJZI.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default new1;
