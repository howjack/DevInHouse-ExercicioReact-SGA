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
		this.state = {
			showTextArea: false,
			name: "",
			birthDate: "",
			respName: "",
			respPhone: "",
			respWarningDegree: "",
			respWarningPhone: "",
			foodRestriction: "",
			foodDescription: "",
			authorizedPersons: "",
			class: "",
			remarks: "",
		};

		this.handleShowTextArea = this.handleShowTextArea.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
		this.onChangeRespName = this.onChangeRespName.bind(this);
		this.onChangeRespPhone = this.onChangeRespPhone.bind(this);
		this.onChangeRespWarningDegree = this.onChangeRespWarningDegree.bind(this);
	}

	onChangeName(event) {
		this.setState({ name: event.target.value }, () =>
			console.log(this.state.name)
		);
	}
	onChangeBirthDate(event) {
		this.setState({ birthDate: event.target.value }, () =>
			console.log(this.state.birthDate)
		);
	}
	onChangeRespName(event) {
		this.setState({ respName: event.target.value }, () =>
			console.log(this.state.respName)
		);
	}
	onChangeRespPhone(event) {
		this.setState({ respPhone: event.target.value }, () =>
			console.log(this.state.respPhone)
		);
	}
	onChangeRespWarningDegree(event) {
		this.setState({ respWarningDegree: event.target.value }, () =>
			console.log(this.state.respWarningDegree)
		);
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
				<InputName onChangeName={this.onChangeName} />
				<InputDate onChangeBirthDate={this.onChangeBirthDate} />
				<InputNameResponsavel onChangeRespName={this.onChangeRespName} />
				<InputPhoneResponsavel onChangeRespPhone={this.onChangeRespPhone} />
				<SelectEmergency
					onChangeRespWarningDegree={this.onChangeRespWarningDegree}
				/>
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
