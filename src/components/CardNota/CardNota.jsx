import React, { Component } from "react";
import './estilo.css';
import {ReactComponent as DeleteSVG} from '../../assets/icons/delete_black_24dp.svg';

class CardNota extends Component {

  deleteHandler() {
    this.props.deletarLista(this.props.index);
  }

  render() {
    return (
      <section className="card-nota">
        <header>
          <span className="card-nota_badge">{this.props.ele.categoria}</span>
          <h3 className="card-nota_titulo">{this.props.ele.titulo} <DeleteSVG className="card-nota_icon" onClick={this.deleteHandler.bind(this)} /></h3>
        </header>
        <p className="card-nota_texto">{this.props.ele.texto}</p>
      </section>
    );
  }
}

export default CardNota;
