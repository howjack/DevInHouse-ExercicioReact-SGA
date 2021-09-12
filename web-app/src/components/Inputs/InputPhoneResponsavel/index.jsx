import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

class InputPhoneResponsavel extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="telefoneResponsavel">{this.props.label}</label>
				<input
					type="tel"
					maxLength="11"
					onChange={this.mascaraDeTelefone}
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					name="telefoneResponsavel"
					id="telefone"
					onKeyDown={this.backspaceNumber}
					value={this.props.statePhone}
					required
				/> */}
				{/* <TextField
					id="standard-required"
					required
					type="tel"
					maxLength="11"
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					label={this.props.label}
					onKeyDown={this.backspaceNumber}
					value={this.props.statePhone}
					onChange={this.mascaraDeTelefone}
				/> */}
				<PhoneInput
					inputProps={{
						name: "phone",
						required: true,
					}}
					containerStyle={{ width: "auto" }}
					inputStyle={{ width: "210px", padding: "18.5px 14px 18.5px 45px" }}
					specialLabel={this.props.label}
					disableDropdown={true}
					country={"br"}
					placeholder=""
					onlyCountries={["br"]}
					localization={{ br: "Brasil" }}
					value={this.props.statePhone}
					onChange={this.props.onChangeRespPhone}
				/>
			</>
		);
	}
}

export default InputPhoneResponsavel;
