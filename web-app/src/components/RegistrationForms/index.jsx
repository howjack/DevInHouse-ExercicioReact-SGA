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

// let arrayKid = [];

class RegistrationForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTextArea: false,
			name: "",
			birthDate: new Date(2015, 11, 31),
			respName: "",
			respPhone: "",
			respWarningDegree: "",
			respWarningPhone: "",
			foodDescription: "",
			photoAuthorization: false,
			authorizedPersons: [],
			class: "",
			remarks: "",
		};

		this.handleShowTextArea = this.handleShowTextArea.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.loadState = this.loadState.bind(this);
		this.handleStudent = this.handleStudent.bind(this);
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
		// let dia = new Date(event).getDate();
		// let mes = new Date(event).getMonth();
		// let ano = new Date(event).getFullYear();
		this.setState({ birthDate: event });
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
			this.setState(() => ({ showTextArea: true }));
		} else {
			this.setState(() => ({ showTextArea: false }));
		}
	}

	saveState() {
		let obj = {
			showTextArea: this.state.showTextArea,
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
		return obj;
	}
	handleStudent(value) {
		if (value.name === this.props.studentEdit) {
			return value;
		}
	}

	componentDidMount() {
		// if (this.props.studentEdit) {
		// 	if (localStorage.getItem("Students") != null) {
		// 		arrayKid = JSON.parse(localStorage.getItem("Students"));
		// 		let student = arrayKid.filter(this.handleStudent);
		// 		this.loadState(student[0]);
		// 	}
		// }
	}
	componentWillUnmount() {
		this.emptyState();
	}
	emptyState() {
		this.setState(() => ({
			showTextArea: "",
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
		}));
	}

	loadState(kid) {
		this.setState(() => ({
			showTextArea: kid.showTextArea,
			name: kid.name,
			birthDate: kid.birthDate,
			respName: kid.respName,
			respPhone: kid.respPhone,
			respWarningDegree: kid.respWarningDegree,
			respWarningPhone: kid.respWarningPhone,
			foodDescription: kid.foodDescription,
			photoAuthorization: kid.photoAuthorization,
			authorizedPersons: kid.authorizedPersons,
			class: kid.class,
			remarks: kid.remarks,
		}));
	}

	async handleSubmit(event) {
		event.preventDefault();
		let student = this.saveState();

		try {
			const response = await fetch("/api/students", {
				method: "POST",
				body: JSON.stringify(student),
			});
			const json = await response.json();
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form">
				<InputName
					onChangeName={this.onChangeName}
					stateName={this.state.name}
				/>
				<InputDate
					onChangeBirthDate={this.onChangeBirthDate}
					stateDate={this.state.birthDate}
				/>
				<InputNameResponsavel
					onChangeRespName={this.onChangeRespName}
					stateNameResp={this.state.respName}
				/>
				<InputPhone
					label="Telefone do Resp"
					onChangeRespPhone={this.onChangeRespPhone}
					statePhone={this.state.respPhone}
				/>
				<SelectEmergency
					onChangeRespWarningDegree={this.onChangeRespWarningDegree}
					stateWarning={this.state.respWarningDegree}
				/>
				<InputPhone
					label="Telefone de Emergência"
					onChangeRespPhone={this.onChangeRespWarningPhone}
					statePhone={this.state.respWarningPhone}
				/>
				<InputRadioRestricao
					radioTextArea={this.handleShowTextArea}
					stateShowText={this.state.showTextArea}
				/>
				{this.state.showTextArea && (
					<TextAreaRestricao
						onChangeFoodDescription={this.onChangeFoodDescription}
						stateTextArea={this.state.foodDescription}
					/>
				)}
				<InputRadioPhoto
					onChangePhotoAuthorization={this.onChangePhotoAuthorization}
					statePhoto={this.state.photoAuthorization}
				/>
				<PAutorizadas
					onChangeAuthorizedPersons={this.onChangeAuthorizedPersons}
					stateAuthPersons={this.state.authorizedPersons}
				/>
				<SelectTurma
					onChangeClass={this.onChangeClass}
					stateClass={this.state.class}
				/>
				<TextAreaObsevacoes
					onChangeRemarks={this.onChangeRemarks}
					stateRemarks={this.state.remarks}
				/>
				<BtnSave />
			</form>
		);
	}
}

export default RegistrationForms;
