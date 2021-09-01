import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
  render() {
    return (
      <article className="new">
        <div className={this.props.NroDeTitulo}>
          <Link className="linkNews" to={this.props.Redireccion}>
            <h1>{this.props.Titulo}</h1>
          </Link>
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
