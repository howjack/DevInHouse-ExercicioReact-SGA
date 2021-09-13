import {
	Button,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	TextField,
} from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import { APIContext } from "../../Context/ApiProvider";

class Detail extends React.Component {
	static contextType = APIContext;
	constructor(props) {
		super(props);
		this.state = {
			student: null,
			notes: null,
		};

		this.resetData = this.resetData.bind(this);
		this.onNotes = this.onNotes.bind(this);
		this.handleChangeNotes = this.handleChangeNotes.bind(this);
	}

	async componentDidMount() {
		const { api } = this.context;
		const id = this.props.match.params.id;
		try {
			const json = await api.get(`/api/students/${id}`);

			this.setState(
				() => ({
					student: json.student,
					notes: json.student.notes,
				}),
				() => console.log(this.state.student)
			);
		} catch (err) {
			console.error(err);
		}
	}
	async onNotes() {
		const { api } = this.context;
		const id = this.props.match.params.id;
		try {
			const json = await api.patch(`/api/students/${id}`, {
				notes: this.state.notes
			});

			console.log(json);
		} catch (err) {
			console.error(err);
		}
	}
	handleChangeNotes(event) {
		this.setState({notes: event.target.value})
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
		if (this.state.student !== null) {
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
							<div className="notes">
								<TextField
									id="outlined-multiline-static"
									label="Detalhes do Aluno"
									multiline
									minRows={5}
									onChange={this.handleChangeNotes}
									defaultValue={this.state.notes}
									variant="outlined"
								/>
								<Button
									variant="contained"
									color="primary"
									size="large"
									onClick={this.onNotes}
								>
									Salvar
								</Button>
							</div>
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
