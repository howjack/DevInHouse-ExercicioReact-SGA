import React from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import SearchBar from "../../components/SearchBar";
import StudentList from "../../components/StudentsList";

class Consulta extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			edit: false,
		};

		this.editBtn = this.editBtn.bind(this);
	}

	editBtn() {
		this.setState((state) => {
			return { edit: !state.edit };
		});
	}

	render() {
		return (
			<>
				<Header title="Lista de alunos" />
				<SearchBar />
				<StudentList editBtn={this.editBtn} />
				{this.state.edit && <Modal text="editado" />}
			</>
		);
	}
}

export default Consulta;
