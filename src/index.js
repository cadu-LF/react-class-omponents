// criando primeiro componente
// importar React da nossa dependência
import React from 'react';
// para usar um componente em uma página html é preciso importar ReactDom 
import ReactDOM from 'react-dom';

import App from './App';
// usamos .render() para dizer qual função será passada e onde a mesma será mostrada
// App é um componente ou elemento JSX
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
