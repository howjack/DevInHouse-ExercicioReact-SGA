import React from "react";

class InputRadioRestricao extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="restricaoAlimentar" id="check">
					<input
						type="checkbox"
						name="restricaoAlimentar"
						checked={this.props.stateShowText}
						onChange={this.props.radioTextArea}
					/>
					Tem restrição alimentar
				</label>
			</>
		);
	}
}

export default InputRadioRestricao;
