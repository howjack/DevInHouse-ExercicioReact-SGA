import React from "react";
import IconButton from '@material-ui/core/IconButton';
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

	resetData(data){
		let date = new Date(data).getDate();
		let month = new Date(data).getMonth();
		let year = new Date(data).getFullYear();
		if(month < 10) month = `0${month+1}`;

		return `${date}/${month}/${year}`
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
								{this.state.students.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">{row.class}</TableCell>
										<TableCell align="center">{this.resetData(row.birthDate)}</TableCell>
										<TableCell align="center">{row.respWarningPhone}</TableCell>
										<TableCell align="center">{row.respWarningDegree}</TableCell>
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
