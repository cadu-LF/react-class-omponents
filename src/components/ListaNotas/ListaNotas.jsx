// extenssão jsx deixa claro que é um componente do react
import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './estilo.css'

//trabalhando com class components
class ListaNotas extends Component{

    constructor(){
        super();
        this.state = {notas:[]}
        this.refNovaNota = this._novasNotas.bind(this)
    }

    componentDidMount(){
        this.props.notas.inscrever(this.refNovaNota)
    }   

    componentWillUnmount(){
        this.props.notas.desinscrever(this.refNovaNota)
    }

    _novasNotas(notas){
        this.setState({...this.state, notas})
    }
    // para retornar o componente quando for chamado, é preciso o método render 
    // não necessita do contrutor pq já é feito por baixo dos panos o constructor usando os props

    render(){
        return(
            <ul className="lista-notas">
                {
                // é possível escrever código JS dentro de '{}'
                // não é possível usar o for, por isso é feito usando o map(), pois ele retorna um array
                // com as <li> para o <ul>
                this.state.notas.map((nota, index) => {
                    // para colocar uma variável dentro do html de retorno é preciso usar '{}'
                    // key é uma atributo JSX que facilita o JS e o React saberem quais elementos sofreram alterações e 
                    // quais devem ser redesenhados 
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota 
                                indice = {index}
                                titulo={nota.titulo} 
                                texto={nota.texto}
                                categoria={nota.categoria}
                                apagarNota={this.props.apagarNota}
                            />
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}

export default ListaNotas