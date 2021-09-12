import {
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	TextField,
} from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			student: {},
		};

		this.resetData = this.resetData.bind(this);
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		try {
			const response = await fetch(`/api/students/${id}`, {
				method: "GET",
			});
			const json = await response.json();

			this.setState(
				() => ({
					student: json.student,
				}),
				() => console.log(this.state.student)
			);
		} catch (err) {
			console.error(err);
		}
	}

	resetData(data) {
		if (data) {
			let date = new Date(data).getDate();
			let month = new Date(data).getMonth();
			let year = new Date(data).getFullYear();
			if (month < 10) month = `0${month + 1}`;

			return `${date}/${month}/${year}`;
		}
	}

	render() {
		let exist = false;
		if (this.state.student.id !== undefined) {
			exist = true;
		}
		return (
			<>
				{exist && (
					<div className="detail-container">
						<h2>Dados Escolares</h2>
						<div className="personal-detail">
							<TextField
								id="outlined-read-only-input"
								label="Classe"
								defaultValue={this.state.student.class}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Numero de inscrição"
								defaultValue={this.state.student.id}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</div>
						<h2>Dados Pessoais</h2>
						<div className="personal-detail">
							<TextField
								id="outlined-read-only-input"
								label="Nome"
								defaultValue={this.state.student.name}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Data de Aniversario"
								defaultValue={this.resetData(this.state.student.birthDate)}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
						</div>
						<h2>Dados dos Responsaveis</h2>
						<div className="personal-detail">
							<TextField
								id="outlined-read-only-input"
								label="Nome do Responsavel"
								defaultValue={this.state.student.respName}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Telefone do Responsavel"
								defaultValue={this.state.student.respPhone}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Parentesco com Aluno"
								defaultValue={this.state.student.respWarningDegree}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Telefone de Emergencia"
								defaultValue={this.state.student.respWarningPhone}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>

							<List
								subheader={
									<ListSubheader>Pessoas autorizadas a Buscar</ListSubheader>
								}
							>
								{this.state.student.authorizedPersons.map((resp) => (
									<ListItem
										key={`key-${resp.name}`}
										alignItems={"center"}
										button
									>
										{/* <ListItemText primary={`${resp.name} - ${resp.grau}`} /> */}

										<ListItemText primary={`${resp.name} - ${resp.grau}`} />
									</ListItem>
								))}
							</List>
						</div>
						<h2>Dados Extras</h2>
						<div className="personal-detail">
							<TextField
								id="outlined-multiline-static"
								label="Restrição Alimentar"
								multiline
								rows={4}
								InputProps={{
									readOnly: true,
								}}
								defaultValue={this.state.student.foodDescription}
								variant="outlined"
							/>
							<TextField
								id="outlined-multiline-static"
								label="Observações Adicionais"
								multiline
								rows={4}
								InputProps={{
									readOnly: true,
								}}
								defaultValue={this.state.student.remarks}
								variant="outlined"
							/>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default withRouter(Detail);
