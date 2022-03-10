import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

export default function Header(){

	const [tabs, setTabs] = useState(0);

		return (
			<Paper className="header">
				<Tabs
					value={tabs}
					onChange={(e, value) => setTabs(value)}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Inicio" to="/" component={Link} />
					<Tab label="Lista de alunos" to="/consulta" component={Link} />
					<Tab label="Cadastramento" to="/cadastro" component={Link} />
					<Tab label="Seu Perfil" to="/employee" component={Link} />
				</Tabs>
			</Paper>
		);
	}
