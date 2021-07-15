import React, { Component } from "react";
import Nota from "../../data/Nota.js";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this._titulo = "";
    this._texto = "";
    this._categoria = "";
    this.state = {
      categorias: [],
    };
    this._handlerNewCategorias = this._handlerNewCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.subscribe(this._handlerNewCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.unsubscribe(this._handlerNewCategorias);
  }

  _handlerNewCategorias(categorias) {
    if (this._categoria === "") this._categoria = categorias[0];
    this.setState({ ...this.state, categorias: categorias });
  }

  _hanldeMudancaTitulo(evento) {
    evento.stopPropagation();
    this._titulo = evento.target.value;
  }

  _hanldeMudancaTexto(evento) {
    evento.stopPropagation();
    this._texto = evento.target.value;
  }

  _hanldeMudancaCategoria(evento) {
    evento.stopPropagation();
    this._categoria = evento.target.value;
  }

  _handleSubmit(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.props.addLista(new Nota(this._titulo, this._texto, this._categoria));

    this._titulo = "";
    this._texto = "";
    this._categoria = "";
    document.querySelector("#formulario-cadastro_titulo").value = "";
    document.querySelector("#formulario-cadastro_texto").value = "";
    document.querySelector("#formulario-cadastro_categoria").value = "";
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._handleSubmit.bind(this)}
      >
        <select
          id="formulario-cadastro_categoria"
          onChange={this._hanldeMudancaCategoria.bind(this)}
          className="form-control"
          name="categoria"
        >
          {this.state.categorias.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          id="formulario-cadastro_titulo"
          type="text"
          className="form-control"
          name="titulo"
          placeholder="Titulo"
          onChange={this._hanldeMudancaTitulo.bind(this)}
        />
        <textarea
          id="formulario-cadastro_texto"
          name="nota"
          className="form-control"
          placeholder="Escreva sua nota..."
          rows="15"
          onChange={this._hanldeMudancaTexto.bind(this)}
        ></textarea>
        <button className="formulario-cadastro_button">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
