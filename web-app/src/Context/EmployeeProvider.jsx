import React from "react";

const EmployeeContext = React.createContext({});

class EmployeeProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			employee: null,
			setEmployee: this.setEmployee,
		};
	}

	setEmployee = (employee) => {
		this.setState({ employee });
	};
	render() {
		return (
			<EmployeeContext.Provider value={this.state}>
				{this.props.children}
			</EmployeeContext.Provider>
		);
	}
}

export { EmployeeProvider, EmployeeContext };
