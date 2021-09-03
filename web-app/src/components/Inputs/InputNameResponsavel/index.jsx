import React from "react";

class InputNameResponsavel extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="responsavel">Nome do Responsável</label>
				<input type="text" name="nomeResponsavel" id="responsavel" onChange={this.props.onChangeRespName} required/>
			</>
		);
	}
}

export default InputNameResponsavel;
