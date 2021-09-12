import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
				<div>
					<Button
						variant="contained"
						color="primary"
						startIcon={<EditIcon />}
						onClick={() => this.props.onEdit(this)}
					>
						Edit
					</Button>
					<Button
						variant="contained"
						color="secondary"
						startIcon={<DeleteIcon />}
						onClick={(e) => this.props.onDelete(this, e)}
					>
						Delete
					</Button>
				</div>
			</li>
		);
	}
}

export default StudentListItem;
