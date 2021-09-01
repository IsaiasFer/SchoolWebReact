import React from "react";
import NoticiaHeader from "../noticia";

function Dictamen(props) {
  return (
    <section class="newContainer">
      <NoticiaHeader
        title="Dictamen de disposicion interna N° 1/2020 E.E.T. N° 3141"
        subtitle="Comunicado"
      />
      <div class="imagesNew imagesNew-2">
        <figure class="imgContainer-2">
          <img src="https://imgur.com/S51pXiO.png" alt="article" />
        </figure>
        <figure class="imgContainer-2">
          <img src="https://imgur.com/4n3aFX7.png" alt="article" />
        </figure>
        <figure class="imgContainer-2">
          <img src="https://imgur.com/qQviTJF.png" alt="article" />
        </figure>
      </div>
    </section>
  );
}

export default Dictamen;
