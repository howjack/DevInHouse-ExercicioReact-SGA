import React from 'react'
import './App.css';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Cadastro';

class App extends React.Component {

  

  render() {

    let page = true;

    return (
      <>
        {page && <Consulta />}
        {!page && <Cadastro />}
      </>)
  }
}

export default App;
