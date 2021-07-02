import React, { Component } from 'react';
import Fomulario from './components/Formulario';
import ListaNotas from './components/ListaNotas';
import ListaCategorias from './components/ListaCategorias';
import "./assets/App.css";
import './assets/index.css';
import Categorias from './dados/Categorias'
import Notas from './dados/Notas'
// App é um componente JSX
// Um componente só pode retornar um elemento pai, nesse caso apenas <div></div>
class App extends Component{

    constructor(){
        super() 
        this.categorias = new Categorias()
        this.notas = new Notas()
    }

    // <Formulario/>, react tá dando um new Formulario() debaixo dos panos
    render(){
        return(
            <div className="conteudo">
                <Fomulario 
                    criarNota={this.notas.addNota.bind(this.notas)}
                    categorias={this.categorias}
                />
                <main className="main-content">
                    <ListaCategorias 
                        addCateg = {this.categorias.addCateg.bind(this.categorias)}
                        categorias={this.categorias}
                    />
                    <ListaNotas 
                        notas={this.notas}   
                        apagarNota={this.notas.apagarNota.bind(this.notas)}
                    />
                </main>
                
            </div>
        );
    }
    
}

export default App;