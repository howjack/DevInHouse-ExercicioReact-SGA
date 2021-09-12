import React from "react";
import TextField from '@material-ui/core/TextField';

class TextAreaRestricao extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="descricaoRestricao">Descrição da restrição</label>
				<textarea
					name="restricaoAlimentar"
					id="descricaoRestricao"
					cols="30"
					rows="10"
					onChange={this.props.onChangeFoodDescription}
					value={this.props.stateTextArea}
				/> */}
				<TextField
					id="outlined-multiline-static"
					label="Descrição da restrição"
					multiline
					required
					minRows={4}
					variant="outlined"
					onChange={this.props.onChangeFoodDescription}
					value={this.props.stateTextArea}
				/>
			</>
		);
	}
}

export default TextAreaRestricao;
