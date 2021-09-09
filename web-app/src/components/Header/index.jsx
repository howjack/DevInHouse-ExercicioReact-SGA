import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
		this.props.onTransition(newValue);
	};
	async componentDidMount() {
	}

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
					<Tab label="Inicio" value={0} />
					<Tab label="Lista de alunos" value={1} />
					<Tab label="Cadastramento" value={2} />
				</Tabs>
			</Paper>
		);
	}
}

export default Header;
