import React from "react";

class StudentListItem extends React.Component {
	render() {
		return (
			<li>
				<h2>{this.props.nome}</h2>
				<div className="listInformation">
					<div>
						<h4>
							Data de Nascimento:
							{this.props.nascimento}
						</h4>
						<h4>Turma: {this.props.turma}</h4>
					</div>
					<div>
						<h4>Celular de Emergência: {this.props.telefone}</h4>
						<h4>Responsável: {this.props.avisar}</h4>
					</div>
				</div>
				<button onClick={() => this.props.onEdit(this)}>Editar</button>
				<button onClick={(e) => this.props.onDelete(this, e)}>Apagar</button>
			</li>
		);
	}
}

export default StudentListItem;
