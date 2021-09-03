import React from "react";

class TextAreaObsevacoes extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="observacoes">Observações Adicionais</label>
				<textarea
					name="observacoes"
					id="observacoes"
					cols="30"
					rows="10"
					onChange={this.props.onChangeRemarks}
				></textarea>
			</>
		);
	}
}

export default TextAreaObsevacoes;
