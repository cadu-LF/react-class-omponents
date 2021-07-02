import React, { Component } from 'react';
import './estilo.css'

class Fomulario extends Component{

    constructor(props){
        super(props)
        this.titulo = ""
        this.texto = ""
        this.categoria = "Sem Categoria"
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
        this.setState({...this.state, categorias})
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation()
        this.titulo = evento.target.value
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation()
        this.texto = evento.target.value
    }

    _handleMudancaCategoria(e){
        e.stopPropagation()
        this.categoria = e.target.value
    }

    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    render(){
        return(
        <form 
            className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}>
            <select 
                className="form-cadastro_input"
                onChange={this._handleMudancaCategoria.bind(this)}
            >
                <option>Sem Categoria</option>
                {this.state.categorias.map((c, index) => {
                    return <option key={index}>{c}</option>
                })}
            </select>
            <input 
                type='text'
                placeholder='Insira o Título' 
                className="form-cadastro_input"
                onChange={this._handleMudancaTitulo.bind(this)}
            />
            <textarea 
                rows={15}
                placeholder='Escreva sua nota...' 
                className="form-cadastro_input"
                onChange={this._handleMudancaTexto.bind(this)}
                />
            <button className="form-cadastro_submit form-cadastro_input">
                Criar Nota
            </button>
        </form>
            )
    }
}

export default Fomulario;