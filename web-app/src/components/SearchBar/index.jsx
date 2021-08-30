import React from "react";
import icon from "./outline_search_black_24dp.png"

class SearchBar extends React.Component {
	render() {
		return (
			<div className="searchBar">
				<input
					type="search"
					className="search"
					name="search"
					placeholder="Procurar por nome"
				></input>
                <img src={icon} alt="" />
			</div>
		);
	}
}

export default SearchBar;
