import React from "react";
import Header from "../../components/Header";
import RegistrationForms from "../../components/RegistrationForms";

class Cadastro extends React.Component {
	render() {
		return (
			<>
				<Header title="Cadastramento" onTransition={this.props.onTransition} />
				<RegistrationForms studentEdit={this.props.studentEdit} />
			</>
		);
	}
}

export default Cadastro;
