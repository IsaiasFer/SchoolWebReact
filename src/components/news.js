import React, { createRef } from 'react';
// import arrow from '../fonts/arrow.svg';

import Article from './article';

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
            <Article
              NroDeTitulo="titleNew titleNew1"
              Redireccion="/formulario"
              Titulo="Encuesta acerca de pagina web"
              ImageURL="https://economipedia.com/wp-content/uploads/encuesta.jpg"
              SubtituloInterno="FORMULARIO"
              Descripcion="Encuesta de satisfaccion de pagina web"
            />
            <Article
              NroDeTitulo="titleNew titleNew1"
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

            <Article
              NroDeTitulo="titleNew titleNew6"
              Redireccion="/teesperamos"
              Titulo="TE ESPERAMOS EN LA TECNICA Nº3141"
              ImageURL="https://i.imgur.com/wTcOQQJ.png"
              SubtituloInterno="VIDEO DE BIENVENIDA"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew7"
              Redireccion="news/formulario de inscripcion.html"
              Titulo="FORMULARIO DE INSCRIPCION DE EXAMENES"
              ImageURL="https://imgur.com/SOGH479.png"
              SubtituloInterno="Descargar formulario de Inscripción EXAMENES OCTUBRE-NOVIEMBRE 2020"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew8"
              Redireccion="news/comisiones evaluadoras.html"
              Titulo="COMISIONES EVALUADORAS"
              ImageURL="https://imgur.com/mqhxVyY.png"
              SubtituloInterno="DESCARGAR COMISIONES EVALUADORAS OCTUBRE-NOVIEMBRE 2020"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew9"
              Redireccion="news/protocolo mesas de examenes.html"
              Titulo="PROTOCOLO - MESAS EXAMENES"
              ImageURL="https://imgur.com/QFUU9mv.png"
              SubtituloInterno="Comunicado"
              Descripcion="Comunicado a la comunidad educativa de la E.E.T. Nº 3141 sorteo de turnos para ingresantes al periodo
                lectivo 2021"
            />
            <Article
              NroDeTitulo="titleNew titleNew10"
              Redireccion="news/comunicado a familias.html"
              Titulo="COMUNICADO FAMILAS DE LA 3141"
              ImageURL="https://imgur.com/DeTtl2U.png"
              SubtituloInterno="DICTAMEN DISPOSICIÓN INTERNA N° 1/2020 E.E.T. N° 3141"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew11"
              Redireccion="news/feliz dia students.html"
              Titulo="FELIZ DÍA DEL ESTUDIANTE"
              ImageURL="https://imgur.com/pwp8JD4.png"
              SubtituloInterno="Video para todos los estudiantes del establecimiento EETN3141"
              Descripcion=""
            />
            <Article
              NroDeTitulo="titleNew titleNew12"
              Redireccion="news/promo 2020.html"
              Titulo="QUERIDA PROMO 2020... SALUDOS!!"
              ImageURL="https://imgur.com/v5DZMXf.png"
              SubtituloInterno="PROMO 2020!!"
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
