import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

export default function BtnSave() {
		return (
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
