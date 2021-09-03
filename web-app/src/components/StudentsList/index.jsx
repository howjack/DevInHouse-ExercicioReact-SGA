import React from "react";
import StudentListItem from "../StudentListItem";

class StudentList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [],
		};

		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(prop) {
		let index = prop.props.id;
		let list = this.state.students;
		list.splice([index], 1);
		this.setState(
			() => ({ students: list }),
			() => localStorage.setItem("Students", JSON.stringify(list))
		);
	}

	componentDidMount() {
		this.setState(() => ({
			students: JSON.parse(localStorage.getItem("Students")),
		}));
	}
	render() {
		console.log(this.state.students);

		return (
			<ul className="studentsList">
				{this.state.students.map((aluno, index) => {
					return (
						<StudentListItem
							nome={aluno.name}
							nascimento={aluno.birthDate}
							turma={aluno.class}
							telefone={aluno.respWarningPhone}
							avisar={aluno.respWarningDegree}
							onEdit={this.props.onEdit}
							onDelete={this.onDelete}
							id={index}
							key={index}
						/>
					);
				})}
			</ul>
		);
	}
}

export default StudentList;
