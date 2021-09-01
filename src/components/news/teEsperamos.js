import React from "react";
import NoticiaHeader from "../noticia";

function TeEsperamos(props) {
  return (
    <section class="newContainer">
      <NoticiaHeader
        title="VIDEO DE BIENVENIDA A NUESTRA HERMOSA TÉCNICA Nº3141"
        subtitle="Video"
      />
      <div class="contentContainer">
        <iframe
        title="video"
          class="youtubeVideo"
          width="854"
          height="480"
          src="https://www.youtube.com/embed/kB4PaSbfCeU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default TeEsperamos;
