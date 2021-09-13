import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

class PAutorizadas extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			autorizadaValue: "",
			grauValue: "",
			existList: true,
			kindred: [],
			autorizados: [],
		};

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
			this.state.autorizados.push({
				name: this.state.autorizadaValue,
				grau: this.state.grauValue,
			});
			this.setState({ autorizadaValue: "" });
			this.setState({ grauValue: "" });
			this.setState({ existList: true });

			await this.props.onChangeAuthorizedPersons(this.state.autorizados);
		} else {
			console.error("Algum campo em branco");
		}
	}
	async handleDeleteBtn(event, index) {
		event.preventDefault();
		this.state.autorizados.splice(index, 1);

		await this.props.onChangeAuthorizedPersons(this.state.autorizados);

		event.target.remove();

		if (this.state.autorizados.length === 0) {
			this.setState({ existList: false });
		}
	}

	async componentDidMount() {
		if (this.props.stateAuthPersons !== null) {
			this.setState(
				() => (
					{ autorizados: this.props.stateAuthPersons }
				)
			);
		}
		try {
			const response = await fetch("/api/kindred");
			const json = await response.json();

			this.setState(() => ({
				kindred: json.kindred,
			}));
		} catch (err) {
			console.error(err);
		}
	}
	forceUpdate() {}

	render() {
		return (
			<>
				<TextField
					id="outlined-basic"
					label="Pessoa Autorizada"
					variant="outlined"
					type="text"
					value={this.state.autorizadaValue}
					onChange={this.handleChange}
				/>
				{/* <label htmlFor="grauParentesco">Grau de parentesco</label>
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
				</select> */}
				<FormControl variant="outlined">
					<InputLabel htmlFor="outlined-age-native-simple">Grau</InputLabel>
					<Select
						className="select"
						native
						value={this.state.grauValue}
						onChange={this.handleOptions}
						label="Grau"
						inputProps={{
							name: "Grau",
							id: "outlined-age-native-simple",
						}}
					>
						<option aria-label="None" value="" />
						{this.state.kindred.map((kin, index) => {
							return (
								<option key={index} value={kin}>
									{kin}
								</option>
							);
						})}
					</Select>
				</FormControl>
				{/* <button onClick={this.handleBtn}>Add</button> */}
				<Button variant="contained" onClick={this.handleBtn}>
					Adicionar
				</Button>
				<ul className="listAutorizados">
					{this.state.autorizados.map((item, index) => {
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
