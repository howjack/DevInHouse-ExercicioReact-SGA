import React from "react";

class PAutorizadas extends React.Component {
	render() {
		return (
			<>
                <label htmlFor="autorizada">Nome da pessoa Autorizada</label>
				<input type="text" id="autorizada" name="autorizada" />
                <label htmlFor="grauParentesco">Grau de parentesco</label>
				<select name="grauParentesco" id="grauParentesco">
					<option value="Pais">Pais</option>
					<option value="Tios">Tios</option>
					<option value="Avos">Avós</option>
					<option value="Padrinhos">Padrinhos</option>
				</select>
                <button>add</button>
                <ul>
                {/* terminei aqui */}
                </ul>
			</>
		);
	}
}

export default PAutorizadas;
