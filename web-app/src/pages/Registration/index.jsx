import React from 'react'
import Header from '../../components/Header'
import RegistrationForms from '../../components/RegistrationForms'

class Cadastro extends React.Component{
    render(){
        return (<>
            <Header title="Cadastramento"/>
            <RegistrationForms />
        </>)
    }
}

export default Cadastro;