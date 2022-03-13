import React, { createRef } from 'react';

import Article from './article';
import ExternArticle from './externArticle';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.containerNews = createRef();
    this.previousBtn = createRef();
    this.afterBtn = createRef();
  }
  render() {
    let containerNews = this.containerNews;
    let previousBtn = this.previousBtn;
    let afterBtn = this.afterBtn;

    let moveTo = 0;

    this.handleClickAfter = () => {
      let widthContainerNew = containerNews.current.clientWidth;
      let maxScroll =
        containerNews.current.scrollWidth - widthContainerNew - 210;
      if (moveTo < maxScroll) {
        moveTo += widthContainerNew;
        containerNews.current.scrollTo(moveTo, 0);
      }
      return moveTo;
    };

    this.handleClickPrevius = () => {
      let widthContainerNew = containerNews.current.clientWidth;

      if (moveTo > 0) {
        moveTo -= widthContainerNew;
        containerNews.current.scrollTo(moveTo, 0);
      }
      return moveTo;
    };
    return (
      <section className="sectionNews">
        <div className="containerNewsCoursel">
          <button
            ref={previousBtn}
            onClick={this.handleClickPrevius}
            className="carousel__anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            ref={afterBtn}
            onClick={this.handleClickAfter}
            className="carousel__siguiente"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="titleNews">
            <h1>ULTIMAS NOVEDADES</h1>
          </div>
          <div
            ref={containerNews}
            className="carouselList"
            style={{ scrollBehavior: 'smooth' }}
          >
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/terminar-carrera/"
              Titulo="Inscripciones para completar carrera 2022"
              ImageURL="https://imgur.com/LpLlbIs.png"
              SubtituloInterno="Este 14 de hasta el 23 comienzan las inscripciones para completar la carrera en la institucion"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/ganadores/"
              Titulo="Ganadores del concurso"
              ImageURL="https://imgur.com/QOlNv7D.jpeg"
              SubtituloInterno="El departamento de química eligió a los ganadores del concurso de diseño de la ExpQ"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/concurso/"
              Titulo="Concurso de diseño para ExpoQuim"
              ImageURL="https://i.imgur.com/Dekwf96m.png"
              SubtituloInterno="Convocatoria"
              Descripcion="Diseña, particpá y ganate premios buenisimos"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/formulario/"
              Titulo="Encuesta acerca de pagina web"
              ImageURL="https://economipedia.com/wp-content/uploads/encuesta.jpg"
              SubtituloInterno="FORMULARIO"
              Descripcion="Encuesta de satisfaccion de pagina web"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/taller-arte-semilla-siembra/"
              Titulo="Taller de arte, semilla y siembra!"
              ImageURL="https://i.imgur.com/L5xEq7C.jpg"
              SubtituloInterno="Taller"
              Descripcion="te invitamos a participar de este evento!"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/talleres-teatro-lectura/"
              Titulo="Maraton Nacional de Lectura y talleres"
              ImageURL="https://imgur.com/KBbnF6O.jpg"
              SubtituloInterno="Talleres llevados a cabo el 24/09/21"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/preinscripciones-2022/"
              Titulo="Preinscripciones ingresantes 2022"
              ImageURL="https://imgur.com/bL7SrPk.jpg"
              SubtituloInterno="A partir del 01/10/21 estaran abietas las inscripciones para ingresantes del 2022"
            />
            <ExternArticle
              NroDeTitulo="titleNew titleNew1"
              Redireccion="https://eetn3141.edu.ar/news/mesa-examenes/"
              Titulo="Mesa de exámenes"
              ImageURL="https://imgur.com/jbvQHth.png"
              SubtituloInterno="A partir del 12/10/21 estaran abietas las inscripciones para las mesas de exámenes para completar carrera-equivalencia-libres"
            />
            <Article
              NroDeTitulo="titleNew titleNew2"
              Redireccion="/DICTAMEN T.E.L.Y F. E"
              Titulo="DICTAMEN T.E.L.Y F.E"
              ImageURL="https://i.imgur.com/gekZOKl.png"
              SubtituloInterno="A LA COMUNIDAD EDUCATIVA"
            />
            <Article
              NroDeTitulo="titleNew titleNew2"
              Redireccion="/ASPIRANTES"
              Titulo="NOMINA ASPIRANTES A T.E.L.Y F. E"
              ImageURL="https://i.imgur.com/p9gt0Wq.png"
              SubtituloInterno="A LA COMUNIDAD EDUCATIVA"
            />
            <Article
              NroDeTitulo="titleNew titleNew3"
              Redireccion="/CONVOCATORIA"
              Titulo="CONVOCATORIA A CONCURSO"
              ImageURL="https://imgur.com/vAct6K2.png"
              SubtituloInterno="A LA COMUNIDAD EDUCATIVA"
              Descripcion="Convocatorias a concurso según disposición interna Nº8"
            />
            <Article
              NroDeTitulo="titleNew titleNew4"
              Redireccion="/MERITO"
              Titulo="ORDEN DE MÉRITO"
              ImageURL="https://imgur.com/EXXYczU.png"
              SubtituloInterno="ORDEN DE MÉRITO"
              Descripcion="Orden de mérito en espacio curricular de bromatología"
            />
            <Article
              NroDeTitulo="titleNew titleNew5"
              Redireccion="/CONTINIUDAD PEDAGÓGICA"
              Titulo="COMUNICADO A LAS FAMILIAS"
              ImageURL="https://imgur.com/V9CQk3C.png"
              SubtituloInterno="COMUNICA A LAS FAMILIAS SOBRE LA CONTINUIDAD PEDAGÓGICA"
            />
            <Article
              NroDeTitulo="titleNew titleNew6"
              Redireccion="/ASPIRANTES BROMATOLOGÍA"
              Titulo="NOMINA DE ASPIRANTES PARA BROMATOLOGÍA"
              ImageURL="https://imgur.com/OdYgV8t.png"
              SubtituloInterno="NOMINA DE ASPIRANTES PARA BROMATOLOGÍA CON 3ºro 3ºra CS"
            />
            <Article
              NroDeTitulo="titleNew titleNew7"
              Redireccion="/LIBERACION CATEDRA"
              Titulo="LIBERACIOND DE HORAS DE CÁTEDRA EN BROMATOLOGÍA"
              ImageURL="https://imgur.com/OdYgV8t.png"
              SubtituloInterno="LIBERACIOND DE HORAS DE CÁTEDRA EN BROMATOLOGÍA"
              Descripcion="La dirección de la EETN3141 comunica un llamado a convocatoria para cubrir las horas de cátedra en la asignatura de bromatología"
            />
            <Article
              NroDeTitulo="titleNew titleNew8"
              Redireccion="/MESAS 07/2021"
              Titulo="MESA DE EXÁMENES JULIO 2021"
              ImageURL="https://imgur.com/OdYgV8t.png"
              SubtituloInterno="CRONOGRAMA DE MESAS DE EXÁMENES JULIO 2021"
            />
            <Article
              NroDeTitulo="titleNew titleNew9"
              Redireccion="/MESAS 06/2021"
              Titulo="CRONOGRAMA DE MESAS PARA COMPLETAR CARRERA"
              ImageURL="https://imgur.com/OCI5g4Y.png"
              SubtituloInterno="MESAS PARA COMPLETAR CARRERA"
            />
            <Article
              NroDeTitulo="titleNew titleNew10"
              Redireccion="/COMUNICADO DE MESAS JULIO"
              Titulo="CRONOGRAMA DE MESAS PARA COMPLETAR CARRERA"
              ImageURL="https://imgur.com/xdXD5x8.png"
              SubtituloInterno="FECHAS DE MESAS EXAMENES DE JUNIO"
            />
            <Article
              NroDeTitulo="titleNew titleNew11"
              Redireccion="/CONCURSO GUEMES"
              Titulo="CONCURSO ARTISTICO GUEMES"
              ImageURL="https://imgur.com/mqJISK6.png"
              SubtituloInterno="CERTAMEN ARTISTICO DEL GRAL. GUEMES"
              Descripcion="Concurso artistico destinado a alumnos, familias y todo el personal de la institución"
            />
            <Article
              NroDeTitulo="titleNew titleNew2"
              Redireccion="/comisiones"
              Titulo="COMISIONES DE ALUMNOS"
              ImageURL="https://imgur.com/o6zYOH2.png"
              SubtituloInterno="Comisiones de alumnos"
              Descripcion="Ingresantes por division para asistir a clases presenciales en E.E.T Nº 3141"
            />
            <Article
              NroDeTitulo="titleNew titleNew3"
              Redireccion="/sorteo"
              Titulo="COMUNICADO DE SORTEO DE TURNOS"
              ImageURL="https://imgur.com/pNoqTrb.png"
              SubtituloInterno="Comunicado"
              Descripcion="Comunicado a la comunidad educativa de la E.E.T. Nº 3141
                Sorteo de turnos para ingresantes al periodo lectivo 2021"
            />

            <Article
              NroDeTitulo="titleNew titleNew4"
              Redireccion="/bioseguridad"
              Titulo="NORMAS DE BIOSEGURIDAD"
              ImageURL="https://imgur.com/l77rKor.png"
              SubtituloInterno="COMUNICADO A LA COMUNIDAD EDUCATIVA SOBRE LAS NORMAS A LLEVAR A CABO EN EL ESTABLECIMIENTO"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew5"
              Redireccion="dictamen"
              Titulo="DICTAMEN DISPOSICION INTERNA"
              ImageURL="https://imgur.com/f2WfyqR.png"
              SubtituloInterno="INTEGRANTES DE LA DISPOSICION INTERNA"
              Descripcion=""
            />
          </div>
          {/* <div role="tablist" className="carouselIndicate"></div> */}
        </div>
      </section>
    );
  }
}

export default News;
