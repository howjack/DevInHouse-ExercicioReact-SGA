import React from "react";

class InputRadioPhoto extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="autorizacaoFoto">Pode tirar foto do aluno?</label>
				<div className="radio">
					<input type="radio" name="autorizacaoFoto" id="fotoSim" />
					<label htmlFor="fotoSim" className="label">
						Sim
					</label>
					<input type="radio" name="autorizacaoFoto" id="fotoNao" />
					<label htmlFor="fotoNao" className="label">
						Não
					</label>
				</div>
			</>
		);
	}
}

export default InputRadioPhoto;
