import React from "react";
import Header from "../../components/Header";
import StudentList from "../../components/StudentsList";

class Consulta extends React.Component {
	render() {
		return (
			<>
				<Header title="Lista de alunos" />
				<StudentList />
			</>
		);
	}
}

export default Consulta;
