import React from "react";

class TextAreaRestricao extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="descricaoRestricao">Descrição da restrição</label>
				<textarea
					name="restricaoAlimentar"
					id="descricaoRestricao"
					cols="30"
					rows="10"
				/>
			</>
		);
	}
}

export default TextAreaRestricao;
