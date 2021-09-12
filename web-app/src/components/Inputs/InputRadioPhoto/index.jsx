import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class InputRadioPhoto extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="autorizacaoFoto" id="check">
					<input type="checkbox" name="autorizacaoFoto" id="fotoSim" checked={this.props.statePhoto} onChange={this.props.onChangePhotoAuthorization}/>
					Pode tirar foto do aluno?
				</label> */}
				<FormControlLabel
					control={<Checkbox color="primary" />}
					checked={this.props.statePhoto}
					onChange={this.props.onChangePhotoAuthorization}
					label="Pode tirar foto do aluno?"
					labelPlacement="end"
				/>
			</>
		);
	}
}

export default InputRadioPhoto;
