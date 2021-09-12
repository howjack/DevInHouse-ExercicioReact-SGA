import React from "react";
import TextField from "@material-ui/core/TextField";

class InputNameResponsavel extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="responsavel">Nome do Responsável</label>
				<input
					type="text"
					name="nomeResponsavel"
					id="responsavel"
					value={this.props.stateNameResp}
					onChange={this.props.onChangeRespName}
					required
				/> */}
				<TextField
					id="standard-basic"
					label="Nome do Responsável"
					value={this.props.stateNameResp}
					onChange={this.props.onChangeRespName}
					variant="outlined"
					required
				/>
			</>
		);
	}
}

export default InputNameResponsavel;
