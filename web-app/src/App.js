import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Consulta from './pages/Consulta'
import Cadastro from './pages/Registration'
import Detail from './pages/Detail';
import { APIProvider } from './Context/ApiProvider';
import { StudentProvider } from './Context/StudentProvider';
import Login from './pages/Login';
import EmployeeDetail from './pages/EmployeeDetail';

export default function App() {

  const [showLogin, setShowLogin] = useState(true);

  if (showLogin) {

    return (
      <Login setLogin={setShowLogin} />
    )
  } else {
    return (
      <BrowserRouter>
        <APIProvider>
          <StudentProvider>
            <Header />
            <Switch>
              <Route path="/" exact />
              <Route path="/consulta" component={Consulta} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/detalhe/:id" component={Detail} />
              <Route path="/employee" component={EmployeeDetail} />
            </Switch>
          </StudentProvider>
        </APIProvider>
      </BrowserRouter>
    );
  }
}