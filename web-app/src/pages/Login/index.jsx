import { Button, Paper, TextField } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import React, { useState, useContext } from "react";
import { EmployeeContext } from "../../Context/EmployeeProvider";

export default function Login({setLogin}) {
	const employeeContext = useContext(EmployeeContext);

	const [email, setEmail] = useState("phelipe@sga.com");
	const [password, setPassword] = useState("12345");

	async function onSubmit(e) {
		e.preventDefault();
		const { setEmployee } = employeeContext;
		try {
			const response = await fetch(`/api/employees/${email}`, {
				method: "GET",
			});
			const json = await response.json();

			if (json.password !== password) {
				// eslint-disable-next-line no-throw-literal
				throw "Email ou Senha Errada";
			} else {
				setEmployee(json);
				setLogin(false);
			}
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<form onSubmit={onSubmit} className="login-container">
			<Paper elevation={3} className="login">
				<SchoolIcon style={{ fontSize: 200, margin: 10 }} color="primary" />
				<h1>Logue com sua Conta</h1>
				<TextField
					required
					id="outlined-required"
					label="Email"
					onChange={(e) => setEmail(e.target.value)}
					defaultValue={email}
					variant="outlined"
					type="email"
				/>
				<TextField
					required
					id="outlined-required"
					label="Senha"
					onChange={(e) => setPassword(e.target.value)}
					defaultValue={password}
					variant="outlined"
					type="password"
				/>
				<Button
					variant="contained"
					type="submit"
					color="primary"
					size="large"
					style={{ paddingLeft: 40, paddingRight: 40 }}
				>
					Login
				</Button>
			</Paper>
		</form>
	);
}
