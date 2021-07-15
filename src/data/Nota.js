class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }

  categoria(categoria) {
    return this.categoria === categoria;
  }
}

export default Nota;
