import React from "react";
import TextField from "@material-ui/core/TextField";

class InputName extends React.Component {
	render() {
		return (
			<>
				<TextField
					id="outlined-basic"
					label="Nome"
					onChange={this.props.onChangeName}
					value={this.props.stateName}
					variant="outlined"
					required
				/>
				{/* <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome"  required/> */}
			</>
		);
	}
}

export default InputName;
