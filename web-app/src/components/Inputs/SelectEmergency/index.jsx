import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class InputRadioResponsavel extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="avisar">Em caso de emergência avisar</label>
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
				</select> */}
				<FormControl variant="outlined">
					<InputLabel htmlFor="outlined-native-simple">Avisar</InputLabel>
					<Select
						className="select"
						native
						required
						value={this.props.stateWarning}
						onChange={this.props.onChangeRespWarningDegree}
						label="Avisar"
						inputProps={{
							name: "Avisar",
							id: "outlined-native-simple",
						}}
					>
						<option aria-label="None" value="" />
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
					</Select>
				</FormControl>
			</>
		);
	}
}

export default InputRadioResponsavel;
