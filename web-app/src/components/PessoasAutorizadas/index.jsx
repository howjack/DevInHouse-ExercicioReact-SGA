import React, { useEffect, useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { APIContext } from "../../Context/ApiProvider";

export default function PAutorizadas({
	stateAuthPersons,
	onChangeAuthorizedPersons,
}) {
	const [autorizadaValue, setAutorizada] = useState("");
	const [grauValue, setGrauValue] = useState("");
	const [existList, setExistList] = useState(true);
	const [kindred, setKindred] = useState([]);
	const [autorizados, setAutorizados] = useState([]);

	const apiContext = useContext(APIContext);

	async function handleBtn(event) {
		event.preventDefault();
		if (autorizadaValue && grauValue) {
			autorizados.push({
				name: autorizadaValue,
				grau: grauValue,
			});
			setAutorizada("");
			setGrauValue("");
			setExistList(true);

			await onChangeAuthorizedPersons(autorizados);
		} else {
			console.error("Algum campo em branco");
		}
	}
	async function handleDeleteBtn(event, index) {
		event.preventDefault();
		autorizados.splice(index, 1);

		await onChangeAuthorizedPersons(autorizados);

		event.target.remove();

		if (autorizados.length === 0) {
			setExistList(false);
		}
	}

	useEffect(() => {
		if (stateAuthPersons !== null) {
			setAutorizados(stateAuthPersons);
		}
		const { api } = apiContext;
		async function fetchKindred() {
			try {
				const response = await api.get("/api/kindred");

				setKindred(response.kindred);
			} catch (err) {
				console.error(err);
			}
		}
		fetchKindred();
	}, []);

	return (
		<>
			<TextField
				id="outlined-basic"
				label="Pessoa Autorizada"
				variant="outlined"
				type="text"
				value={autorizadaValue}
				onChange={(e) => setAutorizada(e.target.value)}
			/>
			<FormControl variant="outlined">
				<InputLabel htmlFor="outlined-age-native-simple">Grau</InputLabel>
				<Select
					className="select"
					native
					value={grauValue}
					onChange={(e) => setGrauValue(e.target.value)}
					label="Grau"
					inputProps={{
						name: "Grau",
						id: "outlined-age-native-simple",
					}}
				>
					<option aria-label="None" value="" />
					{kindred.map((kin, index) => {
						return (
							<option key={index} value={kin}>
								{kin}
							</option>
						);
					})}
				</Select>
			</FormControl>
			<Button variant="contained" onClick={handleBtn}>
				Adicionar
			</Button>
			<ul className="listAutorizados">
				{autorizados.map((item, index) => {
					return (
						<li
							key={index}
							onDoubleClick={(e) => handleDeleteBtn(e, index)}
						>
							{item.name} - {item.grau}
						</li>
					);
				})}
			</ul>
		</>
	);
}
