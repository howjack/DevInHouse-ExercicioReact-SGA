import React from "react";

const StudentContext = React.createContext({});

class StudentProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			student: null,
			setStudent: this.setStudent,
		};
	}

	setStudent = (student) => {
		this.setState({ student });
	};

	render() {
		return (
			<StudentContext.Provider value={this.state}>
				{this.props.children}
			</StudentContext.Provider>
		);
	}
}

export { StudentContext, StudentProvider };
