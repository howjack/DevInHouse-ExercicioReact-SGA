import React from "react";
import StudentListItem from "../StudentListItem";

class StudentList extends React.Component {
	render() {
		let alunos = [
			{
				nome: "Phelipe",
				sobrenome: "Alves Fagundes",
				nascimento: {
					dia: 26,
					mes: 6,
					ano: 1998,
				},
				numeroMatricula: 222,
				turma: "202",
				telefoneEmergencia: "47991xx-72xx",
				avisoEmergencia: "pai",
			},
            {
				nome: "Jones",
				sobrenome: "Para",
				nascimento: {
					dia: 21,
					mes: 12,
					ano: 1992,
				},
				numeroMatricula: 55,
				turma: "302",
				telefoneEmergencia: "47991xx-72xx",
				avisoEmergencia: "pai",
			},
		];

		return (
			<ul className="studentsList">
				{alunos.map((aluno, index) => {
                    if(aluno.nascimento.mes < 10) aluno.nascimento.mes = `0${aluno.nascimento.mes}`

					return (
						<StudentListItem
							nome={aluno.nome}
							sobrenome={aluno.sobrenome}
							nascimento={aluno.nascimento}
                            turma={aluno.turma}
                            telefone={aluno.telefoneEmergencia}
                            avisar={aluno.avisoEmergencia}
                            editBtn={this.props.editBtn}
                            key={index}
						/>
					);
				})}
			</ul>
		);
	}
}

export default StudentList;
