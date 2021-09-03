import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import StudentList from "../../components/StudentsList";

class Consulta extends React.Component {

	render() {
		return (
			<>
				<Header title="Lista de alunos" onTransition={this.props.onTransition}/>
				<SearchBar />
				<StudentList onEdit={this.props.onEdit}/>
			</>
		);
	}
}

export default Consulta;
