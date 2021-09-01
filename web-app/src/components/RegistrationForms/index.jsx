import React from "react";
import InputDate from "../Inputs/InputDate";
import InputName from "../Inputs/InputName";
import InputNameResponsavel from "../Inputs/InputNameResponsavel";
import InputPhoneResponsavel from "../Inputs/InputPhoneResponsavel";
import InputRadioPhoto from "../Inputs/InputRadioPhoto";
import SelectEmergency from "../Inputs/SelectEmergency";
import InputRadioRestricao from "../Inputs/InputRadioRestricao";
import TextAreaRestricao from "../Inputs/TextAreaRestricao";
import InputPhoneEmergency from "../Inputs/InputsPhoneEmergency";
import SelectTurma from "../Inputs/SelectTurma";
import TextAreaObsevacoes from "../Inputs/TextAreaObservacoes";
import PAutorizadas from "../PessoasAutorizadas";
import BtnSave from "../Inputs/BtnSave";

class RegistrationForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showTextArea: false };

		this.handleShowTextArea = this.handleShowTextArea.bind(this);
	}

	handleShowTextArea(event) {
		if (event.target.checked) {
			this.setState(
				() => ({ showTextArea: true }),
				() => {
					console.log(this.state.showTextArea);
				}
			);
		} else {
			this.setState(
				() => ({ showTextArea: false }),
				() => {
					console.log(this.state.showTextArea);
				}
			);
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<InputName />
				<InputDate />
				<InputNameResponsavel />
				<InputPhoneResponsavel />
				<SelectEmergency />
				<InputPhoneEmergency />
				<InputRadioRestricao radioTextArea={this.handleShowTextArea} />
				{this.state.showTextArea && <TextAreaRestricao />}
				<InputRadioPhoto />
				<PAutorizadas />
				<SelectTurma />
				<TextAreaObsevacoes />
				<BtnSave />
			</form>
		);
	}
}

export default RegistrationForms;
