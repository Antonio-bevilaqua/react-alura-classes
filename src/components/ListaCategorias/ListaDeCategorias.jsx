import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/icons/delete_black_24dp.svg";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categorias.subscribe(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.unsubscribe(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias: categorias });
  }

  onKeyUpHandler(event) {
    if (event.keyCode === 13) {
      this.props.adicionarCategoria(event.target.value);
      event.target.value = "";
      return;
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_items">
          {this.state.categorias.map((ele, index) => (
            <li key={index} index={index} className="lista-categorias_item">
              {ele}
              <DeleteSVG onClick={() => { this.props.removeNotasCategoria(this.state.categorias[index]); this.props.removerCategoria(index);} } />
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="form-control lista-categorias_busca"
          placeholder="Adicionar Categorias"
          id="categoria"
          onKeyUp={this.onKeyUpHandler.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaDeCategorias;
