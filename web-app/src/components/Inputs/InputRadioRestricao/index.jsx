import React from "react";

class InputRadioRestricao extends React.Component {

	render() {
		return (
			<>
				<label htmlFor="restricaoAlimentar">Tem restrição alimentar</label>
				<div className="radio">
					<input type="radio" name="restricaoAlimentar" value={true} onChange={this.props.radioTextArea} id="restricaoSim" />
					<label htmlFor="restricaoSim" className="label">
						Sim
					</label>

					<input type="radio" name="restricaoAlimentar" value={false} onChange={this.props.radioTextArea} id="restricaoNao" />
					<label htmlFor="restricaoNao" className="label">
						Não
					</label>
				</div>
			</>
		);
	}
}

export default InputRadioRestricao;