import React from "react";

class InputRadioPhoto extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="autorizacaoFoto" id="check">
					<input type="checkbox" name="autorizacaoFoto" id="fotoSim" onChange={this.props.onChangePhotoAuthorization}/>
					Pode tirar foto do aluno?
				</label>
			</>
		);
	}
}

export default InputRadioPhoto;
