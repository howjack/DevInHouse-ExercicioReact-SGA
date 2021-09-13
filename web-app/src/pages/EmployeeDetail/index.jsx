import { Button, TextField } from "@material-ui/core";
import React from "react";
import { EmployeeContext } from "../../Context/EmployeeProvider";

class EmployeeDetail extends React.Component {
	static contextType = EmployeeContext;
	constructor(props) {
		super(props);

		this.state = {
			employeeData: null,
		};
		this.onPassWordChange = this.onPassWordChange.bind(this);
	}

	async onPassWordChange() {
		// eslint-disable-next-line no-restricted-globals
		let change = confirm("Você deseja mesmo mudar sua senha?");
		if (change) {
			let newPassWord = prompt(
				"Coloque sua nova senha",
				this.state.employeeData.password
			);

			if (newPassWord && newPassWord !== this.state.employeeData.password) {
				let patchEmployee = this.state.employeeData;
				patchEmployee.password = newPassWord;
				this.setState({ employeeData: patchEmployee });
				try {
					const response = await fetch(
						`/api/employees/${this.state.employeeData.id}`,
						{
							method: "PATCH",
							body: JSON.stringify({
								password: newPassWord,
							}),
						}
					);
					let json = await response.json();
					console.log(json);
				} catch (err) {
					console.error(err);
				}
			}
		}
	}

	componentDidMount() {
		const { employee } = this.context;
		this.setState({ employeeData: employee }, () =>
			console.log(this.state.employeeData)
		);
	}

	render() {
		let exist = false;
		if (this.state.employeeData !== null) {
			exist = true;
		}
		return (
			<>
				{exist && (
					<div className="detail-container">
						<h2>Dados do Funcionario</h2>
						<div className="personal-detail">
							<TextField
								id="outlined-read-only-input"
								label="Nome"
								defaultValue={this.state.employeeData.name}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Email"
								defaultValue={this.state.employeeData.email}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Cargo"
								defaultValue={this.state.employeeData.role}
								InputProps={{
									readOnly: true,
								}}
								variant="outlined"
							/>
							<TextField
								id="outlined-read-only-input"
								label="Turmas"
								defaultValue={this.state.employeeData.classes}
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
								onClick={this.onPassWordChange}
							>
								Trocar Senha
							</Button>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default EmployeeDetail;
