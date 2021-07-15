import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
    this._handleNewList = this._handleNewList.bind(this);
  }

  componentDidMount() {
    this.props.ListaDeNotas.subscribe(this._handleNewList);
  }

  componentWillUnmount() {
    this.props.ListaDeNotas.unsubscribe(this._handleNewList);
  }

  _handleNewList(notas) {
    this.setState({ ...this.state, notas: notas });
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
      <ul className="lista-notas">
        {this.state.notas.map((ele, i) => {
          return (
            <li key={i} className="lista-notas_item">
              <CardNota
                ele={ele}
                deletarLista={this.props.deletarLista}
                index={i}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
