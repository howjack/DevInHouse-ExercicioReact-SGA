import React, { useContext, useState, useEffect } from "react";
import PAutorizadas from "../PessoasAutorizadas";
import BtnSave from "../Inputs/BtnSave";
import { StudentContext } from "../../Context/StudentProvider";
import DateFnsUtils from "@date-io/date-fns";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	Select,
	TextField,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import PhoneInput from "react-phone-input-2";
import { APIContext } from "../../Context/ApiProvider";
import { useHistory } from "react-router-dom";

export default function RegistrationForms() {
	const studentContext = useContext(StudentContext);
	const apiContext = useContext(APIContext);
	const history = useHistory();

	const [kindred, setKindred] = useState([]);
	const [_class, setClass] = useState([]);
	const [student, setStudent] = useState({
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
	});

	function onChangeAuthorizedPersons(array) {
		setStudent({...student, authorizedPersons: array });
	}

	useEffect(() => {
		const { api } = apiContext;
		const { student: studentData } = studentContext;
		if (studentData !== null) {
			setStudent(studentData);
		}

		async function fetchKindred() {
			try {
				const response = await api.get("/api/kindred");

				setKindred(response.kindred);
				await console.log(response)
			} catch (err) {
				console.error(err);
			}
		}

		async function fetchClass() {
			try {
				const response = await api.get("/api/degrees");

				setClass(response.degrees);
				
			} catch (err) {
				console.error(err);
			}
		}
		fetchKindred();
		fetchClass();

		return () => {
			const { setStudent: addStudent } = studentContext;
			addStudent(null);
		};
	}, []);

	async function handleSubmit(event) {
		const { api } = apiContext;
		event.preventDefault();

		try {
			const response = await api.post("/api/students", student);
			console.log(response)
			history.push("/consulta")
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<TextField
				id="outlined-basic"
				label="Nome"
				onChange={(e) => setStudent({...student, name: e.target.value })}
				value={student.name}
				variant="outlined"
				required
			/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<DatePicker
					disableFuture
					openTo="year"
					format="dd/MM/yyyy"
					label="Data de Nascimento"
					views={["year", "month", "date"]}
					value={student.birthDate}
					onChange={(value) => setStudent({...student, birthDate: value })}
					variant="inline"
					inputVariant="outlined"
					required
				/>
			</MuiPickersUtilsProvider>
			<TextField
				id="standard-basic"
				label="Nome do Responsável"
				value={student.respName}
				onChange={(e) => setStudent({...student, respName: e.target.value })}
				variant="outlined"
				required
			/>
			<PhoneInput
				inputProps={{
					name: "phone",
					required: true,
				}}
				containerStyle={{ width: "auto" }}
				inputStyle={{ width: "210px", padding: "18.5px 14px 18.5px 45px" }}
				specialLabel={"Telefone do Responsável"}
				disableDropdown={true}
				country={"br"}
				placeholder=""
				onlyCountries={["br"]}
				localization={{ br: "Brasil" }}
				value={student.respPhone}
				onChange={(number) => setStudent({...student, respPhone: number })}
			/>
			<FormControl variant="outlined">
				<InputLabel htmlFor="outlined-native-simple">Avisar</InputLabel>
				<Select
					className="select"
					native
					required
					value={student.respWarningDegree}
					onChange={(e) => setStudent({...student, respWarningDegree: e.target.value })}
					label="Avisar"
					inputProps={{
						name: "Avisar",
						id: "outlined-native-simple",
					}}
				>
					<option aria-label="None" value="" />
					{kindred.map((kin, index) => {
						return (
							<option key={index} value={kin} required>
								{kin}
							</option>
						);
					})}
				</Select>
			</FormControl>
			<PhoneInput
				inputProps={{
					name: "phone",
					required: true,
				}}
				containerStyle={{ width: "auto" }}
				inputStyle={{ width: "210px", padding: "18.5px 14px 18.5px 45px" }}
				specialLabel={"Telefone de Emergência"}
				disableDropdown={true}
				country={"br"}
				placeholder=""
				onlyCountries={["br"]}
				localization={{ br: "Brasil" }}
				value={student.respWarningPhone}
				onChange={(number) => setStudent({...student, respWarningPhone: number })}
			/>
			<FormControlLabel
				checked={student.showTextArea}
				onChange={(e) => setStudent({...student, showTextArea: e.target.checked })}
				control={<Checkbox color="primary" />}
				label="Tem restrição alimentar"
				labelPlacement="end"
			/>

			{student.showTextArea && (
				<TextField
					id="outlined-multiline-static"
					label="Descrição da restrição"
					multiline
					required
					minRows={4}
					variant="outlined"
					onChange={(e) => setStudent({...student, foodDescription: e.target.value })}
					value={student.foodDescription}
				/>
			)}
			<FormControlLabel
				control={<Checkbox color="primary" />}
				checked={student.photoAuthorization}
				onChange={(e) => setStudent({...student, photoAuthorization: e.target.checked })}
				label="Pode tirar foto do aluno?"
				labelPlacement="end"
			/>

			<PAutorizadas
				onChangeAuthorizedPersons={onChangeAuthorizedPersons}
				stateAuthPersons={student.authorizedPersons}
			/>
			<FormControl variant="outlined" className="select">
				<InputLabel htmlFor="outlined-native-simple">Turma</InputLabel>
				<Select
					native
					required
					onChange={(e) => setStudent({...student, class: e.target.value})}
					value={student.class}
					label="Turma"
					inputProps={{
						name: "Turma",
						id: "outlined-native-simple",
					}}
				>
					<option aria-label="None" />
					{_class.map((degree, index) => {
						return (
							<option key={index} value={degree} required>
								{degree}
							</option>
						);
					})}
				</Select>
			</FormControl>

			<TextField
				id="outlined-multiline-static"
				label="Descrição da restrição"
				multiline
				minRows={5}
				variant="outlined"
				onChange={(e) => setStudent({...student, remarks: e.target.value })}
				value={student.remarks}
			/>

			<BtnSave />
		</form>
	);
}
