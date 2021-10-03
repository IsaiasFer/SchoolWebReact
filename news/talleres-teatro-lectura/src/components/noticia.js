import React from 'react';
import NoticiaHeader from './noticiaHeader';
import Photo from './photo';

class Noticia extends React.Component {
  render() {
    return (
      <section className="newContainer">
        <NoticiaHeader
          date="Viernes, 24 de Septiembre de 2021"
          title="Taller de Eco ladrillos, Taller de Teatro, Maratón Nacional de Lectura, Promoción de la lectura"
          subtitle="Información del evento"
        />
        <div className="textContainer">
          <p>
            En el dia de hoy se realizaron múltiples talleres recreativos en el
            que participaron y se divirtieron multiples alumnos de diversos
            cursos de la técnica. Damos un agradecimiento al Equipo de los
            Departamentos de Lengua, Artística y Química por la organización.Un
            especial reconocimiento a los estudiantes de avanzada de la
            Universidad Nacional de Salta desde la Carrera en Ciencias de la
            Educación, a los Residentes del IES 6040 de Vaqueros y los
            Tallerista del Plan Provincial de Lectura.
          </p>
          <p>Algunas imagenes:</p>
        </div>
        <Photo
          link="https://imgur.com/KBbnF6O.jpg"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/R9NJOh8.jpg"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/FDauFSP.jpg"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/rYGMHqD.jpg"
          alt="Taller-teatro-lectura"
        />
        <Photo
          link="https://imgur.com/PgC6Cqk.jpg"
          alt="Taller-teatro-lectura"
        />
      </section>
    );
  }
}
export default Noticia;
