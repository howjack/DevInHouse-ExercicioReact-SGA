import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class SelectTurma extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			degrees: [],
		};
	}

	async componentDidMount() {
		try {
			const response = await fetch("/api/degrees");
			const json = await response.json();

			this.setState(() => ({
				degrees: json.degrees,
			}));
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		return (
			<>
				{/* <label htmlFor="turma">Turma</label>
				<select name="turma" id="turma" onChange={this.props.onChangeClass} value={this.props.stateClass} required>
					<option value=""></option>
					<option value="101" required>101</option>
					<option value="102" required>102</option>
					<option value="201" required>201</option>
					<option value="202" required>202</option>
					<option value="301" required>301</option>
					<option value="302" required>302</option>
				</select> */}
				<FormControl variant="outlined" className="select">
					<InputLabel htmlFor="outlined-native-simple">Turma</InputLabel>
					<Select
						native
						required
						onChange={this.props.onChangeClass}
						value={this.props.stateClass}
						label="Turma"
						inputProps={{
							name: "Turma",
							id: "outlined-native-simple",
						}}
					>
						<option aria-label="None" />
						{this.state.degrees.map((degree, index) => {
							return (
								<option key={index} value={degree} required>
									{degree}
								</option>
							);
						})}
					</Select>
				</FormControl>
			</>
		);
	}
}

export default SelectTurma;
