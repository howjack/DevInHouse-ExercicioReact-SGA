import { Button, Paper, TextField } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import React from "react";
import { EmployeeContext } from "../../Context/EmployeeProvider";

class Login extends React.Component {
    static contextType = EmployeeContext
	constructor(props) {
		super(props);

		this.state = {
			email: null,
			password: null,
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
	}
	onChangeEmail(event) {
		this.setState({ email: event.target.value });
	}
	onChangePassword(event) {
		this.setState({ password: event.target.value });
	}
	async onSubmit(e) {
		e.preventDefault();
        const {setEmployee} = this.context
		try {
			const response = await fetch(`/api/employees/${this.state.email}`, {
				method: "GET",
			});
			const json = await response.json();

			if (json.password !== this.state.password) {
				// eslint-disable-next-line no-throw-literal
				throw "Email ou Senha Errada";
			} else {
                setEmployee(json);
                this.props.setLogin(false);
			}
		} catch (err) {
			console.error(err);
		}
	}
	render() {
		return (
			<form onSubmit={this.onSubmit} className="login-container">
				<Paper elevation={3} className="login">
					<SchoolIcon style={{ fontSize: 200, margin: 10 }} color="primary" />
					<h1>Logue com sua Conta</h1>
					<TextField
						required
						id="outlined-required"
						label="Email"
						onChange={this.onChangeEmail}
						defaultValue={this.state.email}
						variant="outlined"
						type="email"
					/>
					<TextField
						required
						id="outlined-required"
						label="Senha"
						onChange={this.onChangePassword}
						defaultValue={this.state.password}
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
}

export default Login;
