class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }

  checaCategoria(categoria) {
    return this.categoria === categoria;
  }
}

export default Nota;
