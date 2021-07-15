import React, { Component } from "react";

class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notify();
  }

  subscribe(handler) {
    this._inscritos.push(handler);
  }

  unsubscribe(handler) {
    this._inscritos = this._inscritos.filter(f => f !== handler);
  }

  notify() {
    this._inscritos.forEach((inscrito) => {
      inscrito(this.categorias);
    });
  }

  removeCategoria(index) {
    if (typeof this.categorias[index] !== "undefined") {
      this.categorias.splice(index, 1);
      this.notify();
    }
  }
}

export default Categorias;
