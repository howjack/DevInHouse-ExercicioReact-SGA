import React from "react";

class SelectTurma extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="turma">Turma</label>
				<select name="turma" id="turma">
					<option value="101">101</option>
					<option value="102">102</option>
					<option value="201">201</option>
					<option value="202">202</option>
					<option value="301">301</option>
					<option value="302">302</option>
				</select>
			</>
		);
	}
}

export default SelectTurma;