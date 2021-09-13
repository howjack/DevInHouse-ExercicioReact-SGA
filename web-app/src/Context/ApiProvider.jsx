import React from "react";
import { get, post, patch } from "../API/api";

const APIContext = React.createContext({});

class APIProvider extends React.Component {
	render() {
		return (
			<APIContext.Provider value={{ api: { get, post, patch } }}>
				{this.props.children}
			</APIContext.Provider>
		);
	}
}

export { APIContext, APIProvider };
