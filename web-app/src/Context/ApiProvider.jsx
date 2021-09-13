import React from "react";
import { get, post } from "../API/api";

const APIContext = React.createContext({});

class APIProvider extends React.Component {
	render() {
		return (
			<APIContext.Provider value={{ api: { get, post } }}>
				{this.props.children}
			</APIContext.Provider>
		);
	}
}

export {APIContext, APIProvider};
