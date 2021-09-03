import React from "react";
import InputDate from "../Inputs/InputDate";
import InputName from "../Inputs/InputName";
import InputNameResponsavel from "../Inputs/InputNameResponsavel";
import InputPhone from "../Inputs/InputPhoneResponsavel";
import InputRadioPhoto from "../Inputs/InputRadioPhoto";
import SelectEmergency from "../Inputs/SelectEmergency";
import InputRadioRestricao from "../Inputs/InputRadioRestricao";
import TextAreaRestricao from "../Inputs/TextAreaRestricao";
import SelectTurma from "../Inputs/SelectTurma";
import TextAreaObsevacoes from "../Inputs/TextAreaObservacoes";
import PAutorizadas from "../PessoasAutorizadas";
import BtnSave from "../Inputs/BtnSave";

let arrayKid = {};

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
			foodDescription: "",
			photoAuthorization: "",
			authorizedPersons: "",
			class: "",
			remarks: "",
		};

		this.handleShowTextArea = this.handleShowTextArea.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
		this.onChangeRespName = this.onChangeRespName.bind(this);
		this.onChangeRespPhone = this.onChangeRespPhone.bind(this);
		this.onChangeRespWarningDegree = this.onChangeRespWarningDegree.bind(this);
		this.onChangeRespWarningPhone = this.onChangeRespWarningPhone.bind(this);
		this.onChangeFoodDescription = this.onChangeFoodDescription.bind(this);
		this.onChangePhotoAuthorization =
			this.onChangePhotoAuthorization.bind(this);
		this.onChangeAuthorizedPersons = this.onChangeAuthorizedPersons.bind(this);
		this.onChangeClass = this.onChangeClass.bind(this);
		this.onChangeRemarks = this.onChangeRemarks.bind(this);
	}

	onChangeName(event) {
		this.setState({ name: event.target.value });
	}
	onChangeBirthDate(event) {
		this.setState({ birthDate: event.target.value });
	}
	onChangeRespName(event) {
		this.setState({ respName: event.target.value });
	}
	onChangeRespPhone(number) {
		this.setState({ respPhone: number });
	}
	onChangeRespWarningDegree(event) {
		this.setState({ respWarningDegree: event.target.value });
	}
	onChangeRespWarningPhone(number) {
		this.setState({ respWarningPhone: number });
	}
	onChangeFoodDescription(event) {
		this.setState({ foodDescription: event.target.value });
	}
	onChangePhotoAuthorization(event) {
		this.setState({ photoAuthorization: event.target.checked });
	}
	onChangeAuthorizedPersons(array) {
		this.setState({ authorizedPersons: array });
	}
	onChangeClass(event) {
		this.setState({ class: event.target.value });
	}
	onChangeRemarks(event) {
		this.setState({ remarks: event.target.value });
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

	saveState(obj) {
		obj[this.state.name] = {
			name: this.state.name,
			birthDate: this.state.birthDate,
			respName: this.state.respName,
			respPhone: this.state.respPhone,
			respWarningDegree: this.state.respWarningDegree,
			respWarningPhone: this.state.respWarningPhone,
			foodDescription: this.state.foodDescription,
			photoAuthorization: this.state.photoAuthorization,
			authorizedPersons: this.state.authorizedPersons,
			class: this.state.class,
			remarks: this.state.remarks,
		};
		return { ...obj };
	}

	async handleSubmit(event) {
		event.preventDefault();
		console.log(event);

		arrayKid = await this.saveState(arrayKid);

		console.log(arrayKid);
		localStorage.setItem("Students", JSON.stringify(arrayKid));
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<InputName onChangeName={this.onChangeName} />
				<InputDate onChangeBirthDate={this.onChangeBirthDate} />
				<InputNameResponsavel onChangeRespName={this.onChangeRespName} />
				<InputPhone
					label="Telefone do Responsável"
					onChangeRespPhone={this.onChangeRespPhone}
				/>
				<SelectEmergency
					onChangeRespWarningDegree={this.onChangeRespWarningDegree}
				/>
				<InputPhone
					label="Telefone de Emergência"
					onChangeRespPhone={this.onChangeRespWarningPhone}
				/>
				<InputRadioRestricao radioTextArea={this.handleShowTextArea} />
				{this.state.showTextArea && (
					<TextAreaRestricao
						onChangeFoodDescription={this.onChangeFoodDescription}
					/>
				)}
				<InputRadioPhoto
					onChangePhotoAuthorization={this.onChangePhotoAuthorization}
				/>
				<PAutorizadas
					onChangeAuthorizedPersons={this.onChangeAuthorizedPersons}
				/>
				<SelectTurma onChangeClass={this.onChangeClass} />
				<TextAreaObsevacoes onChangeRemarks={this.onChangeRemarks} />
				<BtnSave />
			</form>
		);
	}
}

export default RegistrationForms;
