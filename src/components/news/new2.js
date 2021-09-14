import React from 'react';
import NoticiaHeader from '../noticia';

function new2(props) {
  return (
    <section class="newContainer">
      <NoticiaHeader
        title="ASPIRANTES T.E.L.Y F.E"
        subtitle="A la comunidad educativa"
      />
      <div className="imagesNew imagesNew-2">
        <figure class="imgContainer-2">
          <img src="https://imgur.com/p9gt0Wq.png" alt="article" />
        </figure>
        <figure class="imgContainer-2">
          <img src="https://imgur.com/Rhdw0Gr.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default new2;