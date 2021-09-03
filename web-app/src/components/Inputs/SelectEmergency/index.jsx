import React from "react";

class InputRadioResponsavel extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="avisar">Em caso de emergência avisar</label>
				<select
					name="avisar"
					id="avisar"
					onChange={this.props.onChangeRespWarningDegree}
					value={this.props.stateWarning}
					required
				>
					<option value=""></option>
					<option value="Pai" required>
						Pai
					</option>
					<option value="Mãe" required>
						Mãe
					</option>
					<option value="Irmãos" required>
						Irmãos
					</option>
					<option value="Tios" required>
						Tios
					</option>
					<option value="Avos" required>
						Avós
					</option>
					<option value="Padrinhos" required>
						Padrinhos
					</option>
				</select>
			</>
		);
	}
}

export default InputRadioResponsavel;
