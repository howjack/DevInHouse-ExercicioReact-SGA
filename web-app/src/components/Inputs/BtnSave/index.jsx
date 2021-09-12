import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

class BtnSave extends React.Component {
	render() {
		return (
			// <button type="submit">
			// 	Salvar
			// </button>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				startIcon={<SaveIcon />}
			>
				Salvar
			</Button>
		);
	}
}

export default BtnSave;
