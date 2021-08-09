import React from "react";

import Article from "./article";

class News extends React.Component {
  render() {
    return (
      <section className="sectionNews">
        <div className="containerNewsCoursel">
          <button aria-label="Anterior" className="carousel__anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button aria-label="Siguiente" className="carousel__siguiente">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="titleNews">
            <h1>ULTIMAS NOVEDADES</h1>
          </div>
          <div className="carouselList">
            <div className="newsContainer-1">
              <Article
                NroDeTitulo="titleNew titleNew1"
                Redireccion="news/comunicado.html"
                Titulo="COMUNICADO A LA COMUNIDAD EDUCATIVA"
                ImageURL="https://imgur.com/Ns9vKHl.png"
                SubtituloInterno="COMUNICADO"
                Descripcion="COMUNICADO A LA COMUNIDAD EDUCATIVA DE E.E.T. N° 3141"
              />
              <Article
                NroDeTitulo="titleNew titleNew2"
                Redireccion="news/comisiones de alumnos.html"
                Titulo="COMISIONES DE ALUMNOS"
                ImageURL="https://imgur.com/o6zYOH2.png"
                SubtituloInterno="Comisiones de alumnos"
                Descripcion="Ingresantes por division para asistir a clases presenciales en E.E.T Nº 3141"
              />
            </div>
            <div className="newsContainer 2">
              <Article
                NroDeTitulo="titleNew titleNew3"
                Redireccion="news/sorteo de turnos.html"
                Titulo="COMUNICADO DE SORTEO DE TURNOS"
                ImageURL="https://imgur.com/pNoqTrb.png"
                SubtituloInterno="Comunicado"
                Descripcion="Comunicado a la comunidad educativa de la E.E.T. Nº 3141
                Sorteo de turnos para ingresantes al periodo lectivo 2021"
              />

              <Article
                NroDeTitulo="titleNew titleNew4"
                Redireccion="news/normas de bioseguridad.html"
                Titulo="NORMAS DE BIOSEGURIDAD"
                ImageURL="https://imgur.com/l77rKor.png"
                SubtituloInterno="COMUNICADO A LA COMUNIDAD EDUCATIVA SOBRE LAS NORMAS A LLEVAR A CABO EN EL ESTABLECIMIENTO"
                Descripcion=""
              />
            </div>
            <div className="newsContainer 3">
              <Article
                NroDeTitulo="titleNew titleNew5"
                Redireccion="news/dictamen de disposicion interna.html"
                Titulo="DICTAMEN DISPOSICION INTERNA"
                ImageURL="https://imgur.com/f2WfyqR.png"
                SubtituloInterno="INTEGRANTES DE LA DISPOSICION INTERNA"
                Descripcion=""
              />

              <Article
                NroDeTitulo="titleNew titleNew6"
                Redireccion="news/te esperamos en la tecnica.html"
                Titulo="TE ESPERAMOS EN LA TECNICA Nº3141"
                ImageURL="https://i.imgur.com/wTcOQQJ.png"
                SubtituloInterno="VIDEO DE BIENVENIDA"
                Descripcion=""
              />
            </div>
            <div className="newsContainer 4">
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
            </div>
            <div className="newsContainer 5">
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
            </div>
            <div className="newsContainer 6">
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
          </div>
          <div role="tablist" className="carouselIndicate"></div>
        </div>
      </section>
    );
  }
}

export default News;
