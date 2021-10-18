import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Martes, 12 de Octubre de 2021"
          title="Concurso de diseño para ExpoQuim 2021"
          subtitle="Convocatoria abierta para el diseño del logo e imagen promocional de la ExpoQuim 2021"
        />
        <p className="textContainer">
          Se acerca el evento mas importante del año para la Escuela Técnica
          N°3141, se trata de la ExpoQuim, el evento donde se exponen los
          trabajos que los alumnos desarollaron durante todo el año. Este evento
          abierto se viene realizando desde 1985 con exposiciones de caracter
          cientifico , tecnologico, cultural y educativo.
        </p>
        <Photo
          link="https://imgur.com/veJouOd.png"
          alt="Concurso de logo y imagen promocional"
        />
        <p className="textContainer">
          Por primera vez en la historia se elegirá un logo para nuestra gran
          exposicion, por lo que abrimos una convocatoria pública para elegir el
          diseño que mejor represente a la ExpoQuim. El concurso se realiza para
          elegir un logo y una imagen promocional para el acontecimiento.
        </p>
        <p className="textContainer">
          Pueden participar todos aquellos alumnos de la E.E.T.N° 3141 que lo
          deseen. Los diseños deben estar realizados en algún programa
          informático de edición, sin importar cual. Los diseños deben ser
          presentados hasta el martes 19 de octubre, y estos pueden ser
          entregados en formato físico(papel) o por correo electrónico.
        </p>
        <p className="textContainer">Los premios son:</p>
        <ul>
          <li>Medalla al mérito</li>
          <li>Trofeo</li>
          <li>Diploma</li>
          <li>Kit informatico (incluye auriculares de ultima generación)</li>
        </ul>
        <p className="textContainer">
          Los diseños serán juzgados por 3 jurados y los ganadores serán
          anunciados el dia miercoles 20 de Octubre
        </p>
        <p className="textContainer">
          Los diseños deben ser presentados a los profesores de artistica de la
          escuela, y en caso de querer entregarlos por correo, deben ser
          enviados a{' '}
          <strong>
            <a href="mailto:eetn3141@gmail.com?subject=Quiero%20participar%20en%20el%20concurso%20escolar">
              eetn3141@gmail.com
            </a>
          </strong>{' '}
          indicando nombre, apellido, curso y division.
        </p>
      </section>
    );
  }
}

export default Noticia;
