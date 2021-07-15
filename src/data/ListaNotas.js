import React, { Component } from "react";
import Nota from "./Nota";

class ListaNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  subscribe(handler) {
    this._inscritos.push(handler);
  }

  notify() {
    this._inscritos.forEach((inscrito) => {
      inscrito(this.notas);
    });
  }

  unsubscribe(handler) {
    this._inscritos = this._inscritos.filter(f => f !== handler);
  }

  removeNota(index) {
    if (typeof this.notas[index] === "undefined") return;
    
    this.notas.splice(index, 1);
    this.notify();
  }

  adicionarNota(nota) {
    if (!nota instanceof Nota) return;
    this.notas.push(nota);
    this.notify();
  }

  removeNotasCategoria(categoria) {
    this.notas = this.notas.filter( n => !n.checaCategoria(categoria) );
    this.notify();
  }
}

export default ListaNotas;
