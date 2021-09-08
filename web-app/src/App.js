import React from 'react'
import './App.css';
import Header from './components/Header';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Registration';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 0, student: "" }

    this.studentEdit = "";
    this.handleChange = this.handleChange.bind(this)
    this.onEdit = this.onEdit.bind(this)
  }

  handleChange(value) {
    this.setState(() => ({ page: value }))
  }
  onEdit(event) {
    this.setState(() => ({ student: event.props.nome }),
      () => {
        this.setState(() => ({ page: 2 }))
      }
    )
  }

  render() {
    return (
      <>
        <Header onTransition={this.handleChange} />
        {this.state.page === 1 && <Consulta onEdit={this.onEdit} />}
        {this.state.page === 2 && <Cadastro studentEdit={this.state.student} />}
      </>)
  }
}

export default App;
