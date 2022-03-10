import {
	Button,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	TextField,
} from "@material-ui/core";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { APIContext } from "../../Context/ApiProvider";

export default function Detail() {
	const apiContext = useContext(APIContext);
	const params = useParams();

	const [student, setStudent] = useState({});
	const [notes, setNotes] = useState();
	const [exist, setExist] = useState(false);

	useEffect(() => {
		async function fetchGet() {
			const { api } = apiContext;
			const id = params.id;
			try {
				const response = await api.get(`/api/students/${id}`);

				setStudent(response.student);
				setNotes(response.student.notes);
				setExist(true);
				console.log(response);
			} catch (err) {
				console.error(err);
			}
		}


		fetchGet();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function onNotes() {
		const { api } = apiContext;
		const id = params.id;
		try {
			const json = await api.patch(`/api/students/${id}`, {
				notes: notes,
			});


			console.log(json);
		} catch (err) {
			console.error(err);
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
	return (
		<>
			{exist && (
				<div className="detail-container">
					<h2>Dados Escolares</h2>
					<div className="personal-detail">
						<TextField
							id="outlined-read-only-input"
							label="Classe"
							defaultValue={student.class}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Numero de inscrição"
							defaultValue={student.id}
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
								onChange={(e) => setNotes(e.target.value)}
								defaultValue={notes}
								variant="outlined"
							/>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={onNotes}
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
							defaultValue={student.name}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Data de Aniversario"
							defaultValue={resetData(student.birthDate)}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
					</div>
					<h2>Dados dos Responsáveis</h2>
					<div className="personal-detail">
						<TextField
							id="outlined-read-only-input"
							label="Nome do Responsável"
							defaultValue={student.respName}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Telefone do Responsável"
							defaultValue={student.respPhone}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Parentesco com Aluno"
							defaultValue={student.respWarningDegree}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Telefone de Emergência"
							defaultValue={student.respWarningPhone}
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
							{student.authorizedPersons.map((resp) => (
								<ListItem key={resp.name} alignItems={"center"} button>
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
							defaultValue={student.foodDescription}
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
							defaultValue={student.remarks}
							variant="outlined"
						/>
					</div>
				</div>
			)}
		</>
	);
}
