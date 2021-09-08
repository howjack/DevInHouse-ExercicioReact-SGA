import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class StudentList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [],
		};

		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(prop) {
		let index = prop.props.id;
		let list = this.state.students;
		list.splice([index], 1);
		this.setState(
			() => ({ students: list }),
			() => localStorage.setItem("Students", JSON.stringify(list))
		);
	}

	resetData(data) {
		let date = new Date(data).getDate();
		let month = new Date(data).getMonth();
		let year = new Date(data).getFullYear();
		if (month < 10) month = `0${month + 1}`;

		return `${date}/${month}/${year}`;
	}
	resetPhone(data) {
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

	componentDidMount() {
		this.setState(() => ({
			students: JSON.parse(localStorage.getItem("Students")),
		}));
	}
	render() {
		console.log(this.state.students);
		let show = false;
		if (localStorage.getItem("Students") !== null) {
			show = true;
		}
		return (
			<ul className="studentsList">
				{
					show && (
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
									<TableRow key={student.name}>
										<TableCell component="th" scope="row">
											{student.name}
										</TableCell>
										<TableCell align="center">{student.class}</TableCell>
										<TableCell align="center">
											{this.resetData(student.birthDate)}
										</TableCell>
										<TableCell align="center">
											{this.resetPhone(student.respWarningPhone)}
										</TableCell>
										<TableCell align="center">
											{student.respWarningDegree}
										</TableCell>
										<TableCell align="center">
											<IconButton
												aria-label="delete"
												color="primary"
												onClick={() => this.props.onEdit(this)}
											>
												<EditIcon />
											</IconButton>
											<IconButton
												aria-label="delete"
												color="secondary"
												onClick={(e) => this.props.onDelete(this, e)}
											>
												<DeleteIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)
					// 	);
					// })
				}
			</ul>
		);
	}
}

export default StudentList;
