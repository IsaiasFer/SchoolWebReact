import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Domingo, 26 de Septiembre de 2021"
          title="Preinscripciones para ingresantes del ciclo lectivo 2022"
          subtitle="Información para la comunidad educativa"
        />
        <div className="textContainer">
          <p>
            A partir del 1 de octubre estarán abiertas las preinscripciones para
            ingresantes 2022 de forma presencial
          </p>
          <h3>
            La preinscripcion se tramitirá presentando la siguiente
            documentación:
          </h3>
          <li>Fotocopia de D.N.I del estudiante</li>
          <li>Fotocopia del tutor/a</li>
          <li>Seguro escolar. Aporte Voluntario</li>
          <p>
            La Escuela de Educación Técnica y Formación Profesional N 3141 Ex
            ENET 6 de Ciudad del Milagro pre inscribe para sus seis divisiones
            de Primer año Ciclo Básico TÉCNICOS QUÍMICOS, 7 laboratorios, 6
            Talleres Profesionales, Gabinete psicopedagógico, Inclusión
            Educativa CEI 9004, Aula Virtual, Referente de Salud Escolar,
            Gabinete informático, Taller de Producción Industrial, Apoyo
            Escolar, Biblioteca Escolar, Ofertas de talleres de oficios para la
            comunidad, un sólido equipo de Profesionales -docentes y Proyectos
            educativos específicos.
          </p>
          <h3>Información:</h3>
        </div>
        <Photo
          link="https://imgur.com/bL7SrPk.jpg"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/SXFsyMU.png"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/phIQUax.png"
          alt="Taller-teatro-lectura"
        />
      </section>
    );
  }
}

export default Noticia;
