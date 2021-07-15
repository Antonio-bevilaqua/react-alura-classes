import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import ListaDeCategorias from "./components/ListaCategorias/";
import ListaNotas from "./data/ListaNotas.js";
import Categorias from "./data/Categorias.js";

class App extends Component {
  constructor() {
    super();
    this.notas = new ListaNotas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="app">
        <FormularioCadastro
          addLista={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main className="app-main">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
            removerCategoria={this.categorias.removeCategoria.bind(this.categorias)}
            removeNotasCategoria={this.notas.removeNotasCategoria.bind(this.notas)}
          />
          <ListaDeNotas
            ListaDeNotas={this.notas}
            deletarLista={this.notas.removeNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
