import React, { Component } from 'react';
import './estilo.css'

class ListaCategorias extends Component {
    
  constructor(){
    super();
    this.state = {categorias:[]}
    this.refNovaCategoria = this._novasCategorias.bind(this)
  }

  componentDidMount(){
      this.props.categorias.inscrever(this.refNovaCategoria)
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this.refNovaCategoria)
}

  _novasCategorias(categorias){
    // a cada setState() é ocorrido uma reenderização do elemento e seus filhos
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e){
    if(e.key==='Enter'){
      let valorCategoria = e.target.value
      this.props.addCateg(valorCategoria)
    }
  }

  render() { 
    return ( 
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">{categoria}</li>
              )
          })}
        </ul> 
        <input 
          type="text" 
          placeholder="add categoria" 
          onKeyUp={this._handleEventoInput.bind(this)}
          className="lista-categorias_input"
        />
      </section>
    );
  }
}
 
export default ListaCategorias;