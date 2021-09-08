import React from "react";
import SearchBar from "../../components/SearchBar";
import StudentList from "../../components/StudentsList";

class Consulta extends React.Component {

	render() {
		return (
			<>
				<SearchBar />
				<StudentList onEdit={this.props.onEdit}/>
			</>
		);
	}
}

export default Consulta;
