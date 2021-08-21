import React from "react";

class StudentListItem extends React.Component {

	render() {
		return (
			<li>
				<h2>{this.props.nome + " " + this.props.sobrenome}</h2>
				<div className="listInformation">
					<div>
						<h4>
							Data de Nascimento:
							{` ${this.props.nascimento.dia}/${this.props.nascimento.mes}/${this.props.nascimento.ano}`}
						</h4>
						<h4>Turma: {this.props.turma}</h4>
					</div>
					<div>
						<h4>Celular de Emergência: {this.props.telefone}</h4>
						<h4>Responsável: {this.props.avisar}</h4>
					</div>
				</div>
                <button>Editar</button>
				<button>Apagar</button>
			</li>
		);
	}
}

export default StudentListItem;
