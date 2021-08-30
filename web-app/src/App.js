import React from 'react'
import './App.css';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Registration';

class App extends React.Component {

  

  render() {

    let page = false;

    return (
      <>
        {page && <Consulta />}
        {!page && <Cadastro />}
      </>)
  }
}

export default App;
