import React from "react";

class InputName extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" />
			</>
		);
	}
}

export default InputName;
