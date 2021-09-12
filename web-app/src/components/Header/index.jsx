import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event, newValue) => {
		this.setState({ value: newValue });
	};

	render() {
		return (
			<Paper className="header">
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Inicio" to="/" component={Link} />
					<Tab label="Lista de alunos" to="/consulta" component={Link} />
					<Tab label="Cadastramento" to="/cadastro" component={Link} />
				</Tabs>
			</Paper>
		);
	}
}

export default Header;
