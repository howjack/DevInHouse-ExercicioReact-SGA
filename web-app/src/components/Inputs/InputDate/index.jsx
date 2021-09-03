import React from "react";

class InputDate extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="aniversario">Data de nascimento</label>
				<input
					type="date"
					name="aniversario"
					value={this.props.stateDate}
					min="2005-01-01"
					max="2016-12-31"
					id="aniversario"
					onChange={this.props.onChangeBirthDate}
					required
				/>
			</>
		);
	}
}

export default InputDate;
