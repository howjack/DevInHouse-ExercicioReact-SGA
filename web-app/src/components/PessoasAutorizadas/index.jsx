import React from "react";

class PAutorizadas extends React.Component {
	constructor(props) {
		super(props);

		this.state = { autorizadaValue: "", grauValue: "", existList: false };

		this.autorizados = [];
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
	async handleBtn(event) {
		event.preventDefault();
		if (this.state.autorizadaValue && this.state.grauValue) {
			this.autorizados.push({
				name: this.state.autorizadaValue,
				grau: this.state.grauValue,
			});
			this.setState({ autorizadaValue: "" });
			this.setState({ grauValue: "" });
			this.setState({ existList: true });

			await this.props.onChangeAuthorizedPersons(this.autorizados);
		} else {
			console.error("Algum campo em branco");
		}
	}
	async handleDeleteBtn(event, index) {
		event.preventDefault();
		this.autorizados.splice(index, 1);

		await this.props.onChangeAuthorizedPersons(this.autorizados);

		event.target.remove();

		if (this.autorizados.length === 0) {
			this.setState({ existList: false });
		}
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
					<option value="Pais">Pais</option>
					<option value="Tios">Tios</option>
					<option value="Avós">Avós</option>
					<option value="Padrinhos">Padrinhos</option>
				</select>
				<button onClick={this.handleBtn}>Add</button>
				<ul className={this.state.existList ? "listAutorizados" : ""}>
					{this.autorizados.map((item, index) => {
						return (
							<li
								key={index}
								onDoubleClick={(e) => this.handleDeleteBtn(e, index)}
							>
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
