import React from "react";
import RegistrationForms from "../../components/RegistrationForms";

class Cadastro extends React.Component {
	render() {
		return (
			<>
				<RegistrationForms studentEdit={this.props.studentEdit} />
			</>
		);
	}
}

export default Cadastro;
