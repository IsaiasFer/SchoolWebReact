import React from 'react';
import NoticiaHeader from '../noticia';

function new1(props) {
  return (
    <section class="newContainer">
      <NoticiaHeader
        title="DICTAMEN T.E.L.Y F.E"
        subtitle="A la comunidad educativa"
      />
      <div class="imagesNew imagesNew-2">
        <figure class="imgContainer-2">
          <img src="https://imgur.com/gekZOKl.png" alt="article" />
        </figure>
        <figure class="imgContainer-2">
          <img src="https://imgur.com/9xnkJZI.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default new1;
