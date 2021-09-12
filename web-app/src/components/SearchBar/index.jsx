import React from "react";
import SearchInput from "material-ui-search-bar";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
		};
	}
	render() {
		return (
			<div className="searchBar">
				<SearchInput
					value={this.state.value}
					placeholder="Pesquise o nome..."
					onChange={(newValue) => this.setState({ value: newValue })}
				/>
			</div>
		);
	}
}

export default SearchBar;
