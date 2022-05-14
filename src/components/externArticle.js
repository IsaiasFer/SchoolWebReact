import React from 'react';

class ExternArticle extends React.Component {
  render() {
    return (
      <article className="new">
        <div className={this.props.NroDeTitulo}>
          <a className="linkNews" href={this.props.Redireccion}>
            <h3>{this.props.Titulo}</h3>
          </a>
        </div>

        <figure className="newImageContainer">
          <img src={this.props.ImageURL} alt="ARTICULO" className="newImagen" />
          <div className="layerNew">
            <h4>{this.props.SubtituloInterno}</h4>
            <span>{this.props.Descripcion}</span>
          </div>
        </figure>
      </article>
    );
  }
}

export default ExternArticle;
