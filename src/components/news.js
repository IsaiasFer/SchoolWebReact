import React, { createRef } from 'react';

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
            aria-label='anterior pagina de noticias'
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            ref={afterBtn}
            onClick={this.handleClickAfter}
            className="carousel__siguiente"
            aria-label='siguiente página de noticias'
          >
            <i className="fas fa-chevron-left"></i>

          </button>
          <div className="titleNews">
            <h2>ULTIMAS NOVEDADES</h2>
          </div>
          <div
            ref={containerNews}
            className="carouselList"
            style={{ scrollBehavior: 'smooth' }}
          >
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/cronograma2023/"
              Titulo="Cronograma 2023"
              ImageURL="https://i.imgur.com/8t1qHUs.jpg"
              SubtituloInterno="Actividades antes de inicio de clases"
              Descripcion="Enterate que actividades van a haber en la escuela desde el 7 de Febrero"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/ganadores/"
              Titulo="Nuevo logo para la ExpoQuim"
              ImageURL="https://imgur.com/QOlNv7D.jpeg"
              SubtituloInterno="Estos son los ganadores por concurso"
              Descripcion="El departamento de química eligió a los ganadores del concurso de diseño de la ExpQ"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/concurso/"
              Titulo="Concurso de diseño para ExpoQuim"
              ImageURL="https://i.imgur.com/Dekwf96m.png"
              SubtituloInterno="Convocatoria"
              Descripcion="Diseña, particpá y ganate premios buenisimos"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/formulario/"
              Titulo="Encuesta acerca de pagina web"
              ImageURL="https://economipedia.com/wp-content/uploads/encuesta.jpg"
              SubtituloInterno="FORMULARIO"
              Descripcion="Encuesta de satisfaccion de pagina web"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/taller-arte-semilla-siembra/"
              Titulo="Taller de arte, semilla y siembra!"
              ImageURL="https://i.imgur.com/L5xEq7Cm.jpg"
              SubtituloInterno="Taller"
              Descripcion="te invitamos a participar de este evento!"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/talleres-teatro-lectura/"
              Titulo="Maraton Nacional de Lectura y talleres"
              ImageURL="https://i.imgur.com/KBbnF6Om.jpg"
              SubtituloInterno="Talleres llevados a cabo el 24/09/21"
            />
            <ExternArticle
              NroDeTitulo="titleNew"
              Redireccion="https://eetn3141.edu.ar/news/mesa-examenes/"
              Titulo="Mesa de exámenes"
              ImageURL="https://imgur.com/jbvQHth.png"
              SubtituloInterno="A partir del 12/10/21 estaran abietas las inscripciones para las mesas de exámenes para completar carrera-equivalencia-libres"
            />
          </div>
          {/* <div role="tablist" className="carouselIndicate"></div> */}
        </div>
      </section>
    );
  }
}

export default News;
