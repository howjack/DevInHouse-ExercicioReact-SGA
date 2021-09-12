import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

class InputDate extends React.Component {
	render() {
		return (
			<>
				{/* <label htmlFor="aniversario">Data de nascimento</label>
				<input
					type="date"
					name="aniversario"
					value={this.props.stateDate}
					min="2005-01-01"
					max="2016-12-31"
					id="aniversario"
					onChange={this.props.onChangeBirthDate}
					required
				/> */}
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<DatePicker
						disableFuture
						openTo="year"
						format="dd/MM/yyyy"
						label="Data de Nascimento"
						views={["year", "month", "date"]}
						value={this.props.stateDate}
						onChange={this.props.onChangeBirthDate}
						variant="inline"
						inputVariant="outlined"
						required
					/>
				</MuiPickersUtilsProvider>
			</>
		);
	}
}

export default InputDate;
