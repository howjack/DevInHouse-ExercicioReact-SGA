import React from "react";

class InputRadioResponsavel extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="avisar">Em caso de emergência avisar</label>
				<select name="avisar" id="avisar">
					<option value="Pais">Pais</option>
					<option value="Tios">Tios</option>
					<option value="Avos">Avós</option>
					<option value="Padrinhos">Padrinhos</option>
				</select>
			</>
		);
	}
}

export default InputRadioResponsavel;
