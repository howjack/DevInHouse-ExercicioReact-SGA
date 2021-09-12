import React from 'react'
import './App.css';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Consulta from './pages/Consulta'
import Cadastro from './pages/Registration'
import Detail from './pages/Detail';
class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact />
            <Route path="/consulta" component={Consulta} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/detalhe/:id" component={Detail} />
          </Switch>
        </BrowserRouter>
    );
  };
}

export default App;
