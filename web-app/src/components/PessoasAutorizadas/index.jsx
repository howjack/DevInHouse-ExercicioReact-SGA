import React from "react";

class PAutorizadas extends React.Component {
	constructor(props) {
		super(props);

		this.state = { autorizadaValue: "", grauValue: "" };

		this.autorizados = [];
		this.existList = false;
		this.handleChange = this.handleChange.bind(this);
		this.handleBtn = this.handleBtn.bind(this);
		this.handleOptions = this.handleOptions.bind(this);
		this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
	}

	handleChange(event) {
		this.setState({ autorizadaValue: event.target.value });
	}
	handleOptions(event) {
		this.setState({ grauValue: event.target.value });
	}
	handleBtn(event) {
		event.preventDefault();
		if (this.state.autorizadaValue && this.state.grauValue) {
			this.autorizados.push({
				name: this.state.autorizadaValue,
				grau: this.state.grauValue,
			});
			this.setState({ autorizadaValue: "" });
			this.setState({ grauValue: "" });
			this.existList = true;
			console.log(this.autorizados);
		} else {
			console.error("Algum campo em branco");
		}
	}
	handleDeleteBtn(event) {
		event.preventDefault();
		// this.autorizados.pop(event)
		console.log(event);

		event.target.remove();
	}

	render() {
		return (
			<>
				<label htmlFor="autorizada">Nome da pessoa Autorizada</label>
				<input
					type="text"
					value={this.state.autorizadaValue}
					onChange={this.handleChange}
					name="autorizada"
				/>
				<label htmlFor="grauParentesco">Grau de parentesco</label>
				<select
					name="grauParentesco"
					id="grauParentesco"
					value={this.state.grauValue}
					onChange={this.handleOptions}
				>
					<option value=""></option>
					<option value="Pai">Pais</option>
					<option value="Tio">Tios</option>
					<option value="Avo">Avós</option>
					<option value="Padrinho">Padrinhos</option>
				</select>
				<button onClick={this.handleBtn}>Add</button>
				<ul className={this.existList ? "listAutorizados" : ""}>
					{this.autorizados.map((item, index) => {
						return (
							// parei Aqui
							<li key={index} onDoubleClick={this.handleDeleteBtn}>
								{item.name} - {item.grau}
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}

export default PAutorizadas;
