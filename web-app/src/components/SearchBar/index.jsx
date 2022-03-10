import React from "react";
import SearchInput from "material-ui-search-bar";
import { useState } from "react";

export default function SearchBar() {
	const [search, setSearch] = useState("");

	return (
		<div className="searchBar">
			<SearchInput
				value={search}
				placeholder="Pesquise o nome..."
				onChange={(newValue) => setSearch(newValue)}
			/>
		</div>
	);
}
