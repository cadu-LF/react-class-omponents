export default class ArrayNotas{
  constructor(){
    this.notas = [];
    this._inscritos = []
  }

  inscrever(func){
    this._inscritos.push(func)
  }

  notificar(){
    this._inscritos.forEach(func => func(this.notas))    
  }
  

  addNota(titulo, texto, categoria){
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar()
  }

  apagarNota(index){
    this.notas.splice(index, 1);
    this.notificar()
  }
}

class Nota{
  constructor(titulo, texto, categoria){
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}