import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withRouter } from "react-router-dom";

class StudentList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [],
		};

		this.onDelete = this.onDelete.bind(this);
		this.resetData = this.resetData.bind(this);
		this.resetPhone = this.resetPhone.bind(this);
	}

	resetResp(name, kin) {
		if (name && kin) {
			return `${name} - ${kin}`;
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
	resetPhone(data) {
		if (data) {
			let numeroAjustado;
			const textoHifem = data.replace(/[^\d]+/g, "");
			if (data.length === 13) {
				const parte0 = textoHifem.slice(2, 4);
				const parte1 = textoHifem.slice(4, 9);
				const parte2 = textoHifem.slice(9, 13);
				numeroAjustado = `(${parte0})${parte1}-${parte2}`;
			} else if (data.length === 12) {
				const parte0 = textoHifem.slice(2, 4);
				const parte1 = textoHifem.slice(4, 8);
				const parte2 = textoHifem.slice(8, 12);
				numeroAjustado = `(${parte0})${parte1}-${parte2}`;
			}
			return numeroAjustado;
		}
	}

	async componentDidMount() {
		// this.setState(() => ({
		// 	students: JSON.parse(localStorage.getItem("Students")),
		// }));
		try {
			const response = await fetch("/api/students", {
				method: "GET",
			});
			const json = await response.json();

			this.setState(() => ({
				students: json.students,
			}));
		} catch (err) {
			console.error(err);
		}
	}
	onDetail(e, id) {
		if (e.target.matches("td") || e.target.matches("th")) {
			this.props.history.push(`/detalhe/${id}`)
		}
	}

	async onDelete(id) {
		try {
			const response = await fetch(`/api/students/${id}`, {
				method: "DELETE",
			});
			this.setState(() => ({
				students: this.state.students.filter((student) => student.id !== id),
			}));
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	}
	onEdit() {}
	render() {
		let show = false;
		if (this.state.students !== null) {
			show = true;
		}
		return (
			<ul className="studentsList">
				{show && (
					<Table aria-label="simple table" className="listaAlunos">
						<TableHead>
							<TableRow>
								<TableCell>Nome Completo</TableCell>
								<TableCell align="center">Turma</TableCell>
								<TableCell align="center">Aniversario</TableCell>
								<TableCell align="center">Telefone do Responsavel</TableCell>
								<TableCell align="center">Responsavel</TableCell>
								<TableCell align="center">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.students.map((student) => (
								<TableRow
									key={student.name}
									hover={true}
									to="/cadastro"
									onClick={(e) => this.onDetail(e, student.id)}
								>
									<TableCell component="th" scope="row">
										{student.name}
									</TableCell>
									<TableCell align="center">{student.class}</TableCell>
									<TableCell align="center">
										{this.resetData(student.birthDate)}
									</TableCell>
									<TableCell align="center">
										{this.resetPhone(student.respPhone)}
									</TableCell>
									<TableCell align="center">
										{this.resetResp(
											student.respName,
											student.respWarningDegree
										)}
									</TableCell>
									<TableCell align="center">
										<IconButton
											aria-label="delete"
											color="primary"
											to="/cadastro"
											disabled
										>
											<EditIcon />
										</IconButton>
										<IconButton
											aria-label="delete"
											color="secondary"
											onClick={() => this.onDelete(student.id)}
										>
											<DeleteIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</ul>
		);
	}
}

export default withRouter(StudentList);
