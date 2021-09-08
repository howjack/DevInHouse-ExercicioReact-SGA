import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class InputRadioRestricao extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="restricaoAlimentar" id="check">
					<input
						type="checkbox"
						name="restricaoAlimentar"
						checked={this.props.stateShowText}
						onChange={this.props.radioTextArea}
					/>
					Tem restrição alimentar
				</label> */}
				<FormControlLabel
					checked={this.props.stateShowText}
					onChange={this.props.radioTextArea}
					control={<Checkbox color="primary" />}
					label="Tem restrição alimentar"
					labelPlacement="end"
				/>
			</>
		);
	}
}

export default InputRadioRestricao;
