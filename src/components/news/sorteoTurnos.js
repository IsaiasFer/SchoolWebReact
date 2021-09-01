import React from "react";
import NoticiaHeader from "../noticia";

function SorteoTurnos(props) {
  return (
    <section class="newContainer">
      <NoticiaHeader
        title="Comunicado a la comunidad educativa de la E.E.T. N° 3141 sorteo de turnos para ingresantes al periodo lectivo 2021"
        subtitle="Video:"
      />
      <div class="contentContainer">
        <iframe
        title="video2"
          class="youtubeVideo"
          src="https://www.youtube.com/embed/kB4PaSbfCeU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default SorteoTurnos;
