import React from "react";

class InputPhoneEmergency extends React.Component {
	mascaraDeTelefone(number) {
		const textoAtual = number.target.value;

		let textoAjustado;
		const textoHifem = textoAtual.replace(/[^\d]+/g, "");
		console.log(textoHifem.length);
		if (textoHifem.length === 11) {
			const parte0 = textoHifem.slice(0, 2);
			const parte1 = textoHifem.slice(2, 7);
			const parte2 = textoHifem.slice(7, 11);
			textoAjustado = `(${parte0})${parte1}-${parte2}`;
		} else {
			textoAjustado = console.error("numero invalido");
		}

		number.target.value = textoAjustado;
		console.log(number.target.value);
	}

	render() {
		return (
			<>
				<label htmlFor="emergencia">Numero de Emergencia</label>
				<input
					type="tel"
					maxLength="11"
					onBlur={this.mascaraDeTelefone}
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					name="telefoneEmergencia"
					id="emergencia"
					required
				/>
			</>
		);
	}
}

export default InputPhoneEmergency;
