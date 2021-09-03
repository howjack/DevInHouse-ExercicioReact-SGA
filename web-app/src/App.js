import React from 'react'
import './App.css';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Registration';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: true, student: "" }

    this.studentEdit = "";
    this.handleChange = this.handleChange.bind(this)
    this.onEdit = this.onEdit.bind(this)
  }

  handleChange() {
    this.setState(() => ({ page: !this.state.page }))
  }
  onEdit(event) {
    this.setState(() => ({ student: event.props.nome }),
      () => {
        this.setState(() => ({ page: !this.state.page }))
      }
    )
  }

  render() {
    return (
      <>
        {this.state.page && <Consulta onTransition={this.handleChange} onEdit={this.onEdit} />}
        {!this.state.page && <Cadastro onTransition={this.handleChange} studentEdit={this.state.student} />}
      </>)
  }
}

export default App;
