import React from 'react';
import NoticiaHeader from '../noticia';

function Formulario(props) {
  return (
    <section className="newContainer">
      <NoticiaHeader
        title="Formulario sobre el nuevo sitio"
        subtitle="Comunicado:"
      />
      <div className="linksContainer">
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeaK9Efher4VFI08LVfuVcL9MZbs7g3oHVzT_JT1l2BiJ5nRw/viewform?usp=sf_link"
            className="link1"
            target="_blank"
            rel="noreferrer"
          >
            Encuesta a cerca la del nuevo website
          </a>
        </p>
      </div>
    </section>
  );
}

export default Formulario;
