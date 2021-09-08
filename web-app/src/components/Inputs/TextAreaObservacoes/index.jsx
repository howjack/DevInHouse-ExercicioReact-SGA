import React from "react";
import TextField from "@material-ui/core/TextField";

class TextAreaObsevacoes extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="observacoes">Observações Adicionais</label>
				<textarea
					name="observacoes"
					id="observacoes"
					cols="30"
					rows="10"
					onChange={this.props.onChangeRemarks}
					value={this.props.stateRemarks}
				></textarea> */}
				<TextField
					id="outlined-multiline-static"
					label="Descrição da restrição"
					multiline
					required
					minRows={5}
					defaultValue="Default Value"
					variant="outlined"
					onChange={this.props.onChangeRemarks}
					value={this.props.stateRemarks}
				/>
			</>
		);
	}
}

export default TextAreaObsevacoes;
