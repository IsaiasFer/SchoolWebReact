import React, { createRef } from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    // this.news = createRef();
  }
  render() {
    // this.handleClick = () => {
    //   console.log(news.current);
    // };
    return (
      <article className="new" onClick={this.handleClick}>
        <div className={this.props.NroDeTitulo}>
          <a className="linkNews" href={this.props.Redireccion}>
            <h1>{this.props.Titulo}</h1>
          </a>
        </div>

        <figure className="newImageContainer">
          <img src={this.props.ImageURL} alt="ARTICULO" className="newImagen" />
          <div className="layerNew">
            <h2>{this.props.SubtituloInterno}</h2>
            <p>{this.props.Descripcion}</p>
          </div>
        </figure>
      </article>
    );
  }
}

export default Article;
