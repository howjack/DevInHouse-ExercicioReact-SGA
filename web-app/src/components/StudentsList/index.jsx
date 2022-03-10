import React, { useState, useEffect, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { StudentContext } from "../../Context/StudentProvider";
import { APIContext } from "../../Context/ApiProvider";

export default function StudentList() {
	const history = useHistory();
	const studentContext = useContext(StudentContext);
	const apiContext = useContext(APIContext);

	const [students, setStudents] = useState(null);
	const [show, setShow] = useState(false);

	function resetResp(name, kin) {
		if (name && kin) {
			return `${name} - ${kin}`;
		}
	}

	function resetData(data) {
		if (data) {
			let date = new Date(data).getDate();
			let month = new Date(data).getMonth();
			let year = new Date(data).getFullYear();
			if (month < 10) month = `0${month + 1}`;

			return `${date}/${month}/${year}`;
		}
	}
	function resetPhone(data) {
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

	useEffect(() => {
		async function fetchData() {
			const { api } = apiContext;
			try {
				const response = await api.get("/api/students");

				console.log(response);
				setStudents(response.students);

				setShow(true);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function onDetail(e, id) {
		if (e.target.matches("td") || e.target.matches("th")) {
			history.push(`/detalhe/${id}`);
		}
	}

	async function onDelete(id) {
		try {
			await fetch(`/api/students/${id}`, {
				method: "DELETE",
			});
			setStudents(() => {
				return students.filter((student) => student.id !== id);
			});
		} catch (err) {
			console.log(err);
		}
	}
	async function onEdit(student) {
		const { setStudent } = studentContext;
		await setStudent(student);
		history.push(`/cadastro`);
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
							<TableCell align="center">Telefone do Responsável</TableCell>
							<TableCell align="center">Responsável</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{students.map((student) => (
							<TableRow
								key={student.name}
								hover={true}
								to="/cadastro"
								onClick={(e) => onDetail(e, student.id)}
							>
								<TableCell component="th" scope="row">
									{student.name}
								</TableCell>
								<TableCell align="center">{student.class}</TableCell>
								<TableCell align="center">
									{resetData(student.birthDate)}
								</TableCell>
								<TableCell align="center">
									{resetPhone(student.respPhone)}
								</TableCell>
								<TableCell align="center">
									{resetResp(student.respName, student.respWarningDegree)}
								</TableCell>
								<TableCell align="center">
									<IconButton
										aria-label="edit"
										color="primary"
										onClick={() => onEdit(student)}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										aria-label="delete"
										color="secondary"
										onClick={() => onDelete(student.id)}
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
