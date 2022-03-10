import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { APIContext } from "../../Context/ApiProvider";
import { EmployeeContext } from "../../Context/EmployeeProvider";

export default function EmployeeDetail() {
	const employeeContext = useContext(EmployeeContext);
	const apiContext = useContext(APIContext);

	const [employee, setEmployee] = useState({});
	const [exist, setExist] = useState(false);

	async function onPassWordChange() {
		const { api } = apiContext;
		// eslint-disable-next-line no-restricted-globals
		let change = confirm("Você deseja mesmo mudar sua senha?");
		if (change) {
			let newPassWord = prompt("Coloque sua nova senha", employee.password);

			if (newPassWord && newPassWord !== employee.password) {
				let patchEmployee = employee;
				patchEmployee.password = newPassWord;
				setEmployee(patchEmployee);
				try {
					const response = await api.patch(`/api/employees/${employee.id}`, {
						password: newPassWord,
					});
					console.log(response);
				} catch (err) {
					console.error(err);
				}
			}
		}
	}

	useEffect(() => {
		try {
			const { employee: employeeData } = employeeContext;
			setEmployee(employeeData);
			setExist(true);
		} catch (error) {
			console.error(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{exist && (
				<div className="detail-container">
					<h2>Dados do Funcionário</h2>
					<div className="personal-detail">
						<TextField
							id="outlined-read-only-input"
							label="Nome"
							defaultValue={employee.name}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Email"
							defaultValue={employee.email}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Cargo"
							defaultValue={employee.role}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<TextField
							id="outlined-read-only-input"
							label="Turmas"
							defaultValue={employee.classes}
							InputProps={{
								readOnly: true,
							}}
							variant="outlined"
						/>
						<Button
							type="submit"
							variant="contained"
							color="secondary"
							size="large"
							onClick={onPassWordChange}
						>
							Trocar Senha
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
