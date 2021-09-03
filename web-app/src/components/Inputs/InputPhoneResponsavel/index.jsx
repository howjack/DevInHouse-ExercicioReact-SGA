import React from "react";

class InputPhoneResponsavel extends React.Component {
	constructor(props) {
		super(props);

		this.mascaraDeTelefone = this.mascaraDeTelefone.bind(this);
	}

	mascaraDeTelefone(number) {
		const textoAtual = number.target.value;

		let textoAjustado;
		const textoHifem = textoAtual.replace(/[^\d]+/g, "");
		if (textoHifem.length === 11) {
			const parte0 = textoHifem.slice(0, 2);
			const parte1 = textoHifem.slice(2, 7);
			const parte2 = textoHifem.slice(7, 11);
			textoAjustado = `(${parte0})${parte1}-${parte2}`;

			number.target.value = textoAjustado;
		}
		this.props.onChangeRespPhone(textoAjustado);
	}
	backspaceNumber(event) {
		if (event.key === "Backspace") {
			event.target.value = "";
		}
	}

	render() {
		return (
			<>
				<label htmlFor="telefoneResponsavel">{this.props.label}</label>
				<input
					type="tel"
					maxLength="11"
					onChange={this.mascaraDeTelefone}
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					name="telefoneResponsavel"
					id="telefone"
					onKeyDown={this.backspaceNumber}
					value={this.props.statePhone}
					required
				/>
			</>
		);
	}
}

export default InputPhoneResponsavel;
