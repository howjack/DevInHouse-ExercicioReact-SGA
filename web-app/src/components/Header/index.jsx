import React from "react";
import ArrowImg from "../../Assets/arrow.png";
import AddImg from "../../Assets/plus.png";

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="transitionBtn" onClick={this.props.onTransition}>
					{this.props.title === "Lista de alunos" && <img src={AddImg} alt="asd" />}
                    {this.props.title === "Cadastramento" && <img src={ArrowImg} alt="asd" id="arrow"/>}
				</div>
				<h1>{this.props.title}</h1>
			</header>
		);
	}
}

export default Header;
