import React from "react";

class SelectTurma extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="turma">Turma</label>
				<select name="turma" id="turma" onChange={this.props.onChangeClass} required>
					<option value=""></option>
					<option value="101" required>101</option>
					<option value="102" required>102</option>
					<option value="201" required>201</option>
					<option value="202" required>202</option>
					<option value="301" required>301</option>
					<option value="302" required>302</option>
				</select>
			</>
		);
	}
}

export default SelectTurma;