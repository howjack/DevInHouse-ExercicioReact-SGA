import React, { useState, useEffect, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation } from "react-router-dom";
import { EmployeeContext } from "../../Context/EmployeeProvider";

export default function Header() {
	const [tabs, setTabs] = useState(0);
	const [cargo, setCargo] = useState("Diretor");

	const employeeContext = useContext(EmployeeContext);
	const { pathname } = useLocation();

	useEffect(() => {
		const { employee } = employeeContext;
		setCargo(employee.role);
		console.log(employee.role);
	}, []);

	useEffect(() => {
		if (pathname === "/consulta") {
			setTabs(0);
		} else if (pathname === "/cadastro") {
			setTabs(1);
		} else if (pathname === "/employee" && cargo === "Diretor") {
			setTabs(2);
		}else if(pathname === "/employee" && cargo !== "Diretor") {
			setTabs(1);
		} else {
			setTabs(0);
		}
	});

	if (cargo === "Diretor") {
		return (
			<Paper className="header">
				<Tabs
					value={tabs}
					onChange={(e, value) => setTabs(value)}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Lista de alunos" to="/consulta" component={Link} />
					<Tab label="Cadastramento" to="/cadastro" component={Link} />
					<Tab label="Seu Perfil" to="/employee" component={Link} />
				</Tabs>
			</Paper>
		);
	} else {
		return (
			<Paper className="header">
				<Tabs
					value={tabs}
					onChange={(e, value) => setTabs(value)}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Lista de alunos" to="/consulta" component={Link} />
					<Tab label="Seu Perfil" to="/employee" component={Link} />
				</Tabs>
			</Paper>
		);
	}
}
